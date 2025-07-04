import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function RejoignezUTL() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative bg-white py-16 px-6 md:px-28 overflow-hidden">
      {/* Décoration cercle rouge flou */}
      <div className="absolute top-[-80px] left-[-80px] w-48 h-48 bg-red-300 rounded-full filter blur-3xl opacity-70 z-0"></div>

      <div className="relative  max-w-4xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
          data-aos="fade-down"
        >
          Rejoignez l'Université Technologique du Lualaba
        </h2>
        <p
          className="text-gray-700 text-lg md:text-xl mb-8"
          data-aos="fade-up"
        >
          La prise en compte des enjeux technologiques et environnementaux dans la formation de l’étudiant, c’est notre affaire. Votre avenir commence dès maintenant, et c’est avec nous.
        </p>
        <a
          href="/postuler"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full px-8 py-3 shadow-lg transition duration-300"
          data-aos="zoom-in"
        >
          Postulez Maintenant
        </a>
      </div>
    </section>
  );
}
