import { AboutMe } from "./components/Home/AboutMe";
import { Projects } from "./components/Home/Project";


const Home = () => {
  const projects = [
    {
      slug: 'Github-Projeto1',
      name: 'Projeto 1',
      image: {
        url: 'https://github.com/JEAND1AS/Projeto-1',
        alt: 'escreva aqui uma descrição da imagem',
      }
    },

    {
      slug: 'Github-Projeto2',
      name: 'Projeto 2',
      image: {
        url: 'https://github.com/JEAND1AS/Projeto-1',
        alt: 'escreva aqui uma descrição da imagem',
      }
    },

    {
      slug: 'Github-Projeto3',
      name: 'Projeto 3',
      image: {
        url: 'https://github.com/JEAND1AS/Projeto-1',
        alt: 'escreva aqui uma descrição da imagem',
      }
    },
    {
      slug: 'Github-Projeto4',
      name: 'Projeto 4',
      image: {
        url: 'https://github.com/JEAND1AS/Projeto-1',
        alt: 'escreva aqui uma descrição da imagem',
      }
    }
  ]

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
