import Link from "next/link";
import Image from "next/image";
import { Roboto } from 'next/font/google'
import { AboutMe as TAboutMe } from '@/types/Home';


const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
});

interface AboutMeProps{
    aboutMe: TAboutMe;
}


export const AboutMe = ({aboutMe}: AboutMeProps) => {


    const { title, description, contact, pfp, techs} = aboutMe;

    return (
        <main className="flex flex-col-reverse xl:flex-row items-center justify-between gap-10 xl:gap-32 py-12 px-6 xl:px-32 max-w-7xl mx-auto text-lg text-center xl:text-left">
            <div className="text-white flex flex-col items-center xl:items-start gap-4 w-full xl:w-120">
                <h1 className="text-3xl sm:text-7xl xl:leading-[80px]">{title.default}&nbsp;
                    <strong className="font-bold">{title.bold}</strong>
                </h1>
                <div className="mb-12">
                    <h2 className={`${roboto.className} mb-12`}>{description}</h2>
                    <Link href={contact.link} className="p-3 bg-h-gray-500 w-fit text-xl rounded-lg transition-all hover:bg-opacity-80">{contact.label}</Link>
                </div>
                <ul className="flex flex-wrap justify-center xl:grid xl:grid-cols-2 xl:w-fit gap-3 text-xl">
                    {techs.map(({tech, bgcolor, color}, index) => (
                        <li
                        key={tech + index}
                        style={{ backgroundColor: bgcolor, color: color }}
                        className="w-fit p-2 rounded-md">
                            {tech}
                            </li>)
                    )}
                </ul>
            </div>
            <div className="relative">
                <Image src={pfp.image.url} alt={pfp.image.alt}
                    width={300}
                    height={500}
                    quality={100}
                    priority={true}
                    placeholder="empty"
                    unoptimized
                    className="rounded-full shadow-[0_0_20px_5px_rgba(139,195,255,0.8)]" />
                <p className="p-4 w-fit text-base leading-tight bg-h-blue-500 rounded-xl text-black absolute -bottom-[15px] -left-[20px]">
                    <strong className="text-3xl">{pfp.experience.bold}</strong>
                    <br />
                    {pfp.experience.default}
                </p>
            </div>
        </main>
    )
}