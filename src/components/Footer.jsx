import { Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="flex items-center mb-60">
      <div className="flex items-center gap-4 cursor-pointer">
        <div>
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={200}
            height={200}
            className="cursor-pointer"
          />
        </div>
        <div>
          <h1 className="font-bold">INFOS PRATIQUES</h1>
          <h3 className="text-gray-800 text-opacity-75">A popos</h3>
          <h3 className="text-gray-800 text-opacity-75">
            Livraisons & Reprises
          </h3>
          <h3 className="text-gray-800 text-opacity-75">Mode d'emploi</h3>
          <h3 className="text-gray-800 text-opacity-75">F.A.Q</h3>
        </div>
        <div>
          <h1 className="font-bold"> LEGAL</h1>
          <h3 className="text-gray-800 text-opacity-75">Mentions legales</h3>
          <h3 className="text-gray-800 text-opacity-75">CGU</h3>
          <h3 className="text-gray-800 text-opacity-75">CGV</h3>
          <h3 className="text-gray-800 text-opacity-75">
            Politique de confidentialite
          </h3>
        </div>
        <div>
          <h1 className="font-bold">MON COMPTE</h1>
          <h3 className="text-gray-800 text-opacity-75">
            Acceder a mon compte
          </h3>
          <h3 className="text-gray-800 text-opacity-75">Ma liste d'envie</h3>
          <h3 className="text-gray-800 text-opacity-75">Creer un compte</h3>
          <h3 className="text-gray-800 text-opacity-75">Mon de passe oublie</h3>
        </div>
      </div>
      <div className="absolute right-5">
        <h1 className="font-bold">NOUS SUIVRE</h1>
        <div className="flex gap-3 cursor-pointer">
          <Instagram />
          <Twitter />
          <Linkedin />
        </div>
      </div>
    </div>
  );
}

export default Footer;
