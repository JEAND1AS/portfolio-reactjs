import Link from "next/link";
import Image from 'next/image';
import { Roboto } from 'next/font/google'


const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
  display: 'swap'
})


export default function Header() {
  return (
    <header className={roboto.className}>
      <Link href="/">
        <Image src="/icon.svg" alt="Ícone da letra J"
        width={55}
        height={55} />
      </Link>
      <nav>
        <Link href="/">Sobre mim</Link>
        <Link href="/portfolio">Portfólio</Link>
        <Link href="/contatos">Entre em contato</Link>
      </nav>
    </header>
  );
}
