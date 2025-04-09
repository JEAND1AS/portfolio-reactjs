import { Project } from "@/types/Home"
import Image from "next/image";
import Link from "next/link";

interface ProjectsProps {
    projects: Project[];
}

export const Projects = ({ projects }: ProjectsProps) => {
    return (
        <article className="space-y-16 flex flex-col items-center xl:items-start text-center xl:text-left">
            <h2 className="text-4xl md:text-4xl">Projetos Recentes</h2>
            <ul className="flex flex-wrap gap-16 justify-center xl:justify-start">
                {projects.map(({ slug, name, image }, index) => (
                    <li className="text-md relative" key={slug + index}>
                        <div className="relative overflow-hidden max-h-40 hover:max-h-[320px] transition-all duration-500 ease-in-out">
                            <Image
                                src={image.url}
                                alt={image.alt}
                                width={300}
                                height={320}
                                className="object-cover w-full rounded-xl"
                            />

                        </div>
                        <div className="absolute bottom-[25px] right-[-15px] bg-h-blue-500 text-white rounded-xl w-14 h-14 text-center flex justify-center items-center text-md">
                            {index + 1}
                        </div>
                        <span className="block mt-2 font-mono font-semibold">{name}</span>
                    </li>
                ))}
            </ul>
        </article>
    );
};
