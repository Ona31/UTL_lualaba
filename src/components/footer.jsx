import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer
      className="
        py-12 px-6 md:px-20
        bg-gradient-to-r from-[#3a0000] via-[#7b0000] to-[#1a0000]
        text-gray-300
      "
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Liens Utiles */}
        <div>
          <h3 className="text-white font-semibold mb-4">Liens Utiles</h3>
          <ul className="space-y-2 text-sm">
            <li>Vie Étudiante</li>
            <li>Recherche & Innovation</li>
            <li>Contactez-nous</li>
            <li>Admissions</li>
            <li>Publication</li>
            <li>Ressources</li>
          </ul>
        </div>

        {/* Programmes & Actualités */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Programmes Académiques
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Actualités & Événements</li>
            <li>Partenariats</li>
            <li>À propos de l’UTL</li>
          </ul>
        </div>

        {/* Contact & Postulez */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              RN 39, Quartier Musompo Maison, Avenue Malula, Kolwezi
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} />
              +243 81 808 8871
            </li>
            <li>
              <a
                href="/postuler"
                className="text-red-600 hover:underline font-semibold"
              >
                Postulez
              </a>
            </li>
            <li>Questions Fréquemment Posées</li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} />
              <a
                href="mailto:contact@utlualaba.com"
                className="hover:underline"
              >
                contact@utlualaba.com
              </a>
            </li>

            {/* Réseaux sociaux */}
            <li className="flex gap-4 text-xl text-gray-400">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="hover:text-white"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-white"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="hover:text-white"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bas de page */}
      <div className="mt-12 text-center text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} Université Technologique du Lualaba. Tous droits
        réservés.
      </div>
    </footer>
  );
}
