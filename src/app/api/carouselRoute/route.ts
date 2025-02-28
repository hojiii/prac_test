import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DB_PATH = path.join(process.cwd(), "public/db.json");

interface CarouselItem {
  id: number;
  button_text: string;
  content: string;
  event_destination: string | null;
  external_destination: string | null;
  item_destination: number | null;
  label: string;
  logo_img: string;
  mobile_img: string;
  web_img: string;
  theme_destination: string | null;
  is_adult: boolean;
}

interface DBData {
  carousel: CarouselItem[];
}

// 데이터 읽기 유틸리티 함수
async function readDB() {
  const data = await fs.readFile(DB_PATH, "utf-8");
  return JSON.parse(data);
}

// 데이터 쓰기 유틸리티 함수
async function writeDB(data: DBData) {
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
}

// GET - 전체 목록 조회
export async function GET() {
  const db = await readDB();
  return NextResponse.json(db.carousel);
}

// POST - 새로운 캐러셀 아이템 추가
export async function POST(req: Request) {
  const body = await req.json();
  const db = await readDB();

  const newItem = {
    id: Date.now(), // 또는 다른 ID 생성 방식 사용
    ...body,
  };

  db.carousel.push(newItem);
  await writeDB(db);

  return NextResponse.json(newItem);
}

// PUT - 캐러셀 아이템 수정
export async function PUT(req: Request) {
  const body = await req.json();
  const db = await readDB();

  const index = db.carousel.findIndex(
    (item: CarouselItem) => item.id === body.id
  );
  if (index === -1) {
    return NextResponse.json({ error: "Item not found" }, { status: 404 });
  }

  db.carousel[index] = { ...db.carousel[index], ...body };
  await writeDB(db);

  return NextResponse.json(db.carousel[index]);
}

// DELETE - 캐러셀 아이템 삭제
export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = Number(searchParams.get("id"));

  const db = await readDB();
  db.carousel = db.carousel.filter((item: CarouselItem) => item.id !== id);
  await writeDB(db);

  return NextResponse.json({ message: "Item deleted" });
}
