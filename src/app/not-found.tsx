import Link from "next/link";

export default function NotFound() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p>Oops! A página que você procura não existe.</p>
        <Link href="/">Volte para a página inicial</Link>
      </div>
    );
  }