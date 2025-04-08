import Link from "next/link";
import Image from "next/image";
import { Roboto } from 'next/font/google'


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

   

export const AboutMe = () => {
    return(
        <main className="flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32 py-8 text-lg text-center xl:text-left xl:flex-nowrap xl:justify-between">
            <div className="text-white flex flex-col items-center xl:items-start gap-4 w-full xl:w-120">
                <h1 className="text-3xl sm:text-7xl xl:leading-[80px]">Prazer, sou&nbsp;
                <strong className="font-bold">Jean</strong>
                </h1>
                <div className="mb-12">
                    <h2 className={`${roboto.className} mb-12`}>Estagiário de desenvolvimento</h2>
                    <Link href="/contatos" className="p-3 bg-h-gray-500 w-fit text-xl rounded-lg transition-all hover:bg-opacity-80">Converse comigo!</Link>
                </div>
                <ul className="flex flex-wrap justify-center xl:grid xl:grid-cols-2 xl:w-fit gap-3 text-xl">
                    <li style={{ backgroundColor: '#2F74C0', color: '#FFFFF'}} className="w-fit p-2 rounded-md">Typescript</li>
                    <li style={{ backgroundColor: '#6BDDFA', color: '#00000'}} className="w-fit p-2 rounded-md">React</li>
                    <li style={{ backgroundColor: '#EFD81D', color: '#00000'}} className="w-fit p-2 rounded-md">Javascript</li>
                    <li style={{ backgroundColor: '#000000', color: '#FFFFF'}} className="w-fit p-2 rounded-md">Next.JS</li>
                    <li style={{ backgroundColor: '#FF0000', color: '#FFFFF'}} className="w-fit p-2 rounded-md">Nest.JS</li>
                    <li style={{ backgroundColor: '#808080', color: '#FFFFF'}} className="w-fit p-2 rounded-md">SQL server</li>
                </ul>
            </div>
            <div className="relative">
                <Image src="https://avatars.githubusercontent.com/u/83466660?v=4"  alt="Foto de perfil de Jean"
                width={300}
                height={500}
                quality={100}
                priority={true}
                placeholder="empty"
                unoptimized
                className="rounded-full shadow-[0_0_20px_5px_rgba(139,195,255,0.8)]"/>
                <p className="p-4 w-fit text-base leading-tight bg-h-blue-500 rounded-xl text-black absolute -bottom-[15px] -left-[20px]">
                    <strong className="text-3xl">6+</strong>
                    <br />
                    meses de experiência
                </p>
            </div>
        </main>
    )
}