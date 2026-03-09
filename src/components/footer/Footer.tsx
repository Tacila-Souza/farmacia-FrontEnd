import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-700 shadow-inner mt-12">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Nome + Copyright */}
        <div className="text-center md:text-left">
          <p className="font-bold text-lg text-gray-800">
            Farm Villa
          </p>
          <p className="text-sm text-gray-600">
            &copy; {year} Todos os direitos reservados
          </p>
        </div>

        {/* Redes sociais */}
        <div className="flex gap-4">
          <a 
            href="https://www.linkedin.com/in/tacila-souza" 
            target="_blank"
            className="text-gray-700 hover:text-[#0A66C2] transition-colors"
          >
            <LinkedinLogoIcon size={32} weight="bold" />
          </a>
          <a 
            href="https://www.instagram.com" 
            target="_blank"
            className="text-gray-700 hover:text-[#E1306C] transition-colors"
          >
            <InstagramLogoIcon size={32} weight="bold" />
          </a>
          <a 
            href="https://github.com/tacila-souza" 
            target="_blank"
            className="text-gray-700 hover:text-black transition-colors"
          >
            <GithubLogoIcon size={32} weight="bold" />
          </a>
        </div>

      </div>

      {/* Linha de separação */}
      <div className="border-t border-gray-200 mt-4"></div>
    </footer>
  );
}

export default Footer;