import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DB_PATH = path.join(process.cwd(), "public/db.json");

async function readDB() {
  const data = await fs.readFile(DB_PATH, "utf-8");
  return JSON.parse(data);
}

export async function GET() {
  const db = await readDB();
  return NextResponse.json(db.daily);
}
