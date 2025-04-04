import { Roboto } from "next/font/google";
import Link from "next/link";


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

const NotFound = () => {
  return (

    <>

      <head>
        <title>
          Página 404 | Jean
        </title>
      </head>


      <div>
        <div className="flex flex-col items-center text-center mt-12 md:mt-24 gap-8 px-6 md:px-32">
          <h1 className="text-5xl sm:text-7xl font-bold">404</h1>
          <p className="flex flex-col gap-8 md:gap-4">
            <span>Oops, não conseguimos encontrar essa página!</span>
            <span>
              Clique no botão abaixo para ser redirecionado à Página Inicial
            </span>
          </p>
          <Link href="/" className={`${roboto.className} p-4 bg-h-blue-500 rounded-xl text-black mt-5 md:mt-12 w-fit hover:bg-opacity-80 transition-all`}>
            Voltar para a Página Inicial
          </Link>
        </div>




      </div>
    </>

  );
}

export default NotFound;