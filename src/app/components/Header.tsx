import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <img src="/icon.svg" alt="Ícone da letra J" />
      </Link>
      <nav>
        <Link href="/">Sobre mim</Link>
        <Link href="/portfolio">Portfólio</Link>
        <Link href="/contatos">Entre em contato</Link>
      </nav>
    </header>
  );
}
