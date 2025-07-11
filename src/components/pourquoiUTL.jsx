import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import im1 from '../assets/images/nathan-dumlao-ewGMqs2tmJI-unsplash.jpg';
import im2 from '../assets/images/drahomir-hugo-posteby-mach-n4y3eiQSIoc-unsplash.jpg';
import im3 from 'http://utlualaba.com/wp-content/uploads/2025/05/IMG_4507-2.jpg';

export default function PourquoiUTL() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const points = [
    {
      title: "Programme d'Enseignement au Standard International",
      text: "Nos programmes académiques répondent aux exigences du système LMD (Licence, Master, Doctorat) pour une formation intégrale.",
    },
    {
      title: "Un Cadre Approprié d'Apprentissage",
      text: "Profitez de nos laboratoires, bibliothèques, centres de recherche à la pointe de la technologie pour enrichir votre savoir.",
    },
    {
      title: "Partenariats Industriels",
      text: "Nos étudiants ont droit à un stage professionnel et bénéficient d’une priorité d’embauche après leurs études.",
    },
    {
      title: "Apprentissage Inclusif",
      text: "L’UTL est un lieu de diversité et garantit des chances équitables à tous les étudiants.",
    },
  ];

  return (
    <div className="bg-white mt-4 py-16 px-6 md:px-28 relative overflow-hidden">

      {/* Plusieurs cercles décoratifs */}
      <div className="absolute top-[-120px] right-[-120px] w-[220px] h-[220px] bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 z-0"></div>
      <div className="absolute bottom-[-140px] left-[-140px] w-[250px] h-[250px] bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 z-0"></div>
      
      <div className="absolute top-1/3 left-[-80px] w-[140px] h-[140px] bg-red-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 z-0"></div>
      <div className="absolute bottom-1/4 right-[-60px] w-[100px] h-[100px] bg-red-300 rounded-full mix-blend-multiply filter blur-2xl opacity-40 z-0"></div>
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[180px] h-[180px] bg-red-50 rounded-full mix-blend-multiply filter blur-xl opacity-30 z-0"></div>

      <div className="relative  max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" data-aos="fade-down">
          Pourquoi choisir UTL ?
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Texte */}
          <div data-aos="fade-right" className="space-y-8">
            {points.map((point, i) => (
              <div key={i} className="flex gap-4 items-start">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-red-600 text-3xl mt-1 flex-shrink-0"
                />
                <div>
                  <h3 className="font-semibold text-lg">{point.title}</h3>
                  <p className="text-gray-700">{point.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Images */}
          <div data-aos="fade-left" className="grid grid-cols-2 gap-4">
            <img
              src={im1}
              alt="étudiants"
              className="rounded-lg shadow-md object-cover h-40 w-full"
            />
            <img
              src={im2}
              alt="laboratoire"
              className="rounded-lg shadow-md object-cover h-40 w-full"
            />
            <img
              src={im3}
              alt="amphithéâtre"
              className="rounded-lg shadow-md object-cover h-40 w-full col-span-2"
            />
          </div>
        </div>

        {/* Bouton Postuler */}
        <div className="text-center mt-12" data-aos="zoom-in">
          <a
            href="/postuler"
            className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 text-white text-lg font-semibold rounded-full shadow-lg transition duration-300"
          >
            Postuler Maintenant
          </a>
        </div>
      </div>
    </div>
  );
}
