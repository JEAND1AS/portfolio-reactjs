import { CopyButton } from "../components/CopyButton";

interface Contact {
  name: string;
  Link: string;
  isMail?: boolean;
}

const Contatos = async () => { /* Nessa linha a gente está consumindo a API do gists para jogar as informações na tela */
  const res = await fetch("https://api.github.com/gists/2cb11f4291962e8b77432e851f16d11a", {
    cache: "no-cache", // evita cache
  });

  const data = await res.json();
  const fileContent = data.files["contact.json"].content;
  const parsed = JSON.parse(fileContent);
  const contacts: Contact[] = parsed.contacts;

  return (
    <div className="mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32">
      <h1 className="text-5xl md:text-7xl font-bold text-center">Contatos</h1>
      <ul className="table mx-auto space-y-6 md:space-y-8">
        {contacts.map(({ name, Link, isMail }, index) => (
          <li className="md:text-xl" key={index}>
            <span className="font-bold">{name}</span>
            <div className="flex gap-1 md:gap-3 items-center">
              <a
                aria-label={`${name} Jean`}
                href={isMail ? `mailto:${Link}` : Link}
                className="text-sm md:text-lg underline truncate"
              >
                {Link}
              </a>
              <CopyButton textToCopy={Link} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contatos;
