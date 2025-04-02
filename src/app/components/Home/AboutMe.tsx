import Link from "next/link"


export const AboutMe = () => {
    return(
        <main>
            <div>
                <h1>Prazer, sou &nbsp;</h1>
                <span>Jean</span>
                <div>
                    <h2>Desenvolvedor junior frontend que desenvolve interfaces gráficas</h2>
                    <Link href="/contatos">Converse comigo!</Link>
                </div>
                <ul>
                    <li style={{ backgroundColor: '#2F74C0', color: '#FFFFF'}}>Typescript</li>
                    <li style={{ backgroundColor: '#6BDDFA', color: '#00000'}}>React</li>
                    <li style={{ backgroundColor: '#EFD81D', color: '#00000'}}>Javascript</li>
                    <li style={{ backgroundColor: '#000000', color: '#FFFFF'}}>Next.JS</li>
                </ul>
            </div>
            <div>
                <img src="https://avatars.githubusercontent.com/u/83466660?v=4"  alt="Foto de perfil de Jean"/>
                <p>
                    <span>1+</span>
                    <br />
                    anos de experiência
                </p>
            </div>
        </main>
    )
}