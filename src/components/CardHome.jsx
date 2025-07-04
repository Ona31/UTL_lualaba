import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faUser,
  faCalendar,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CardHome() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const cards = [
    {
      icon: faBook,
      title: "Programmes Innovants",
      text: "Découvrez nos programmes d’enseignement qui répondent aux besoins réels du marché de l’emploi.",
      link: "/programmes",
      animation: "fade-up",
    },
    {
      icon: faUser,
      title: "Recherche de Classe Mondiale",
      text: "Participez à des projets de recherche qui transforment les industries et la société.",
      link: "/recherche",
      animation: "fade-down",
    },
    {
      icon: faCalendar,
      title: "Opportunités de Partenariat",
      text: "Collaborez avec nos partenaires du secteur industriel et académique pour une expérience sans égal.",
      link: "/partenariats",
      animation: "fade-up",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 p-6 bg-white rounded-xl shadow-lg">
      {cards.map((card, index) => (
        <div
          key={index}
          data-aos={card.animation}
          className="flex flex-col justify-between h-full p-5 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
          <div>
            <div className="text-red-600 text-3xl mb-4">
              <FontAwesomeIcon icon={card.icon} />
            </div>
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-sm text-gray-700">{card.text}</p>
          </div>

          {/* Bouton Voir plus avec <a> */}
          <a
            href={card.link}
            className="mt-4 inline-flex items-center text-red-600 font-medium hover:underline"
          >
            Voir plus
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </a>
        </div>
      ))}
    </div>
  );
}
