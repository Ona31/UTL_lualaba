// src/Pages/HomePage.jsx

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CardHome from '../components/CardHome';
import PourquoiUTL from '../components/pourquoiUTL';
import RejoignezUTL from '../components/regoin';
import Footer from '../components/footer';

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de chaque animation (en ms)
      once: true      // Animation uniquement lors de la première apparition
    });
  }, []);

  return (
    <>
 <section className="relative min-h-screen bg-[url('/src/assets/images/vadim-sherbakov-d6ebY-faOO0-unsplash.jpg')] bg-cover bg-center text-white">
  {/* Overlay noir semi-transparent */}
  <div className="absolute inset-0 bg-black/20"></div>

  {/* Contenu principal aligné à gauche sur desktop, centré en mobile */}
  <div className="relative z-10 flex flex-col items-center md:items-start justify-center min-h-screen px-6 md:px-28 text-center md:text-left space-y-6 pt-24 md:pt-0">

    <h1
      className="text-3xl md:text-6xl font-bold md:pr-60 md:pt-40"
      data-aos="fade-right"
    >
      Nous sommes un partenaire fiable pour bâtir l’avenir de notre jeunesse.
    </h1>

    <h2
      className="text-lg md:text-2xl font-semibold md:pr-60"
      data-aos="fade-left"
    >
      Une institution d’enseignement supérieur et universitaire à vocation technologique, située au cœur du Lualaba.
    </h2>

    <p
      className="text-base md:text-lg md:pr-30 max-w-lg"
      data-aos="fade-up"
    >
      Notre mission est de fournir une éducation de qualité et de soutenir le développement personnel de chaque étudiant.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full max-w-md">
      {/* Bouton blanc avec texte rouge */}
      <a
        href="/programmes"
        className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-gray-100 text-red-600 font-semibold rounded-full shadow-lg transition duration-300 text-center"
      >
        Voir nos programmes
      </a>

      {/* Bouton rouge classique */}
      <a
        href="/postuler"
        className="w-full sm:w-auto px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full shadow-lg transition duration-300 text-center"
      >
        Postuler maintenant
      </a>
    </div>

  </div>
</section>



    <section className="bg-white py-1 min-h-screen">
      <div className="container mx-auto px-6 md:px-28">
        <CardHome />
      </div>
      <PourquoiUTL />
      <RejoignezUTL />
      <Footer/>
    </section>
    </>
  );
}

