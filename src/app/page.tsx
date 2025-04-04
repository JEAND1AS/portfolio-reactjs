import { AboutMe } from "./components/Home/AboutMe";


const Home = () => {
  return (
    <>
  

      <head>
        <title>Sobre mim | Jean</title>
        <meta name="description" content="Desenvolvedor junior frontend que desenvolve interfaces gráficas"/>
      </head>

      <div className="py-12 px-6 md:pdx-32 space-y-10 md:space-y-28">
        <AboutMe />
      </div>

    </>

  );
}

export default Home;
