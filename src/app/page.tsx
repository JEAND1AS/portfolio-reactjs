import { AboutMe } from "./components/Home/AboutMe";
import { Projects } from "./components/Home/Project";


const Home = () => {
  const projects = [
    {
      slug: 'Criação de usuário',
      name: 'Projeto com React + monorepo + tRPC',
      image: {
        url: 'https://imgur.com/CJrYr0G.png',
        alt: 'Projeto feito com React + monorepo + tRPC',
      }
    },
    {
      slug: 'Site portfólio',
      name: 'Portfolio feito com HTML, CSS e Javascript',
      image: {
        url: 'https://imgur.com/FhCIf84.png',
        alt: 'Portfolio feito com HTML, CSS e Javascript',
      }
    },
  ];

  return (
    <>
  

      <head>
        <title>Sobre mim | Jean</title>
        <meta name="description" content="Desenvolvedor junior frontend que desenvolve interfaces gráficas"/>
      </head>

      <div className="py-12 px-6 md:pdx-32 space-y-10 md:space-y-28">
        <AboutMe />
        <Projects projects={projects}/>
      </div>

    </>

  );
}

export default Home;
