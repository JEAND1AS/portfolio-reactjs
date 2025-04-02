import Link from "next/link";

const Contatos = () => {
    return (

        <>

            <head>
                <title>
                    Contatos | Jean Dias
                </title>
            </head>

            <div>
                <h1>Contatos</h1>
                <ul>
                    <li>
                        <span>E-mail</span>
                        <div>
                            <a aria-label="Email Jean" href="mailto:jeandias1.jd1@gmail.com">jeandias1.jd1@gmail.com</a>
                        </div>
                    </li>
                    <li>
                        <span>Linkedin</span>
                        <div>
                            <a href="https://www.linkedin.com/in/jean-dias-231366197/">https://www.linkedin.com/in/jean-dias-231366197/</a>
                        </div>
                    </li>
                    <li>
                        <span>Gitub</span>
                        <div>
                            <a href="https://github.com/JEAND1AS">https://github.com/JEAND1AS</a>
                        </div>
                    </li>
                </ul>
            </div>

        </>

    )
}

export default Contatos;