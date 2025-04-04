import Link from "next/link";

const Contatos = () => {
    return (

        <>

            <head>
                <title>
                    Contatos | Jean Dias
                </title>
            </head>

            <div className="mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32">
                <h1 className="text-5xl md:text-7xl font-bold text-center">Contatos</h1>
                <ul className="table mx-auto space-y-6 md:space-y-8">
                    <li className="md:text-xl">
                        <span className="font-bold">E-mail</span>
                        <div className="flex gap-1 md:gap-3 items-center">
                            <a aria-label="Email Jean" href="mailto:jeandias1.jd1@gmail.com" className="text-sm md:text-lg underline truncate">jeandias1.jd1@gmail.com</a>
                        </div>
                    </li>
                    <li className="md:text-xl">
                        <span className="font-bold">Linkedin</span>
                        <div>
                            <a href="https://www.linkedin.com/in/jean-dias-231366197/" className="text-sm md:text-lg underline truncate">https://www.linkedin.com/in/jean-dias-231366197/</a>
                        </div>
                    </li>
                    <li className="md:text-xl">
                        <span className="font-bold">GitHub</span>
                        <div>
                            <a href="https://github.com/JEAND1AS" className="text-sm md:text-lg underline truncate">https://github.com/JEAND1AS</a>
                        </div>
                    </li>
                </ul>
            </div>

        </>

    )
}

export default Contatos;