'use client';

import Head from 'next/head';
import { useEffect, useState } from 'react';
import { AboutMe } from "./components/Home/AboutMe";
import { Projects } from "./components/Home/Project"; // nome do arquivo corrigido!

interface Project {
  slug: string;
  name: string;
  image: {
    url: string;
    alt: string;
  };
}

interface AboutMe {
  title: {
    default: string;
    bold: string;
  };
  description: string;
  contact: {
    link: string;
    label: string;
  };
  techs: {
    tech: string;
    color: string;
    bgcolor: string;
  }[];
  pfp: {
    image: {
      url: string;
      alt: string;
    };
    experience: {
      default: string;
      bold: string;
    };
  };
}

const Home = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [aboutMe, setAboutMe] = useState<AboutMe | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("https://api.github.com/gists/beba15fc05e6f222cf135354f4e73654");
        const data = await res.json();

        const fileContent = data.files["home.json"].content;
        const parsedData = JSON.parse(fileContent) as { aboutMe: AboutMe; projects: Project[] };

        setProjects(parsedData.projects);
        setAboutMe(parsedData.aboutMe);
      } catch (error) {
        console.error("Erro ao carregar projetos:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <Head>
        <title>Sobre mim | Jean</title>
        <meta name="description" content="Desenvolvedor junior frontend que desenvolve interfaces gráficas" />
      </Head>

      <div className="py-12 px-6 md:pdx-32 space-y-10 md:space-y-28">
        {aboutMe && <AboutMe aboutMe={aboutMe} />}
        <Projects projects={projects} />
      </div>
    </>
  );
};

export default Home;
