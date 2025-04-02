import Link from "next/link";

const NotFound = () => {
  return (

    <>

      <head>
        <title>
          Página 404 | Jean
        </title>
      </head>


      <div>
        <h1>404</h1>

        <div>
          <p>Oops, não conseguimos encontrar essa página!</p>
          <span>Clique no botão abaixo para ser redirecionado à Página Inicial</span>
        </div>

        <Link href="/">
          Voltar para a Página Inicial
        </Link>

      </div>
    </>

  );
}

export default NotFound;