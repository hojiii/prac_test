import * as S from "./Styled";
import { Logo } from "../logo/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLeftList() {
  const pathname = usePathname();

  const texts = [
    { name: "태그검색", src: "/finder" },
    { name: "요일별 신작", src: "/daily" },
    { name: "멤버십", src: "/membership" },
  ];

  const mapedTexts = texts.map((text, index) => (
    <li key={index}>
      <Link
        href={text.src}
        style={{ color: pathname === text.src ? "#816bff" : undefined }}
      >
        {text.name}
      </Link>
    </li>
  ));

  return (
    <S.NavList>
      <li>
        <h1>
          <Logo />
        </h1>
      </li>
      {mapedTexts}
    </S.NavList>
  );
}
