import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLocationDot,
  faUser,
  faChevronDown,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setShowAboutDropdown(false);
  };

  // SVG techno pattern en jaune/orangé (#fbbf24 = jaune Tailwind)
  const technoPatternSvg = encodeURIComponent(`
    <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="%23fbbf24" stroke-width="1">
      <rect width="40" height="40" />
      <path d="M0 20 L40 20" />
      <path d="M20 0 L20 40" />
      <circle cx="20" cy="20" r="3" />
    </svg>`);

  // Style fond dégradé + texture techno jaune/orangé (pour la barre haute)
  const technoBarStyle = {
    backgroundImage: `
      linear-gradient(135deg, #7f1d1d 0%, #111111 100%), 
      url("data:image/svg+xml,${technoPatternSvg}")`,
    backgroundRepeat: 'repeat',
    backgroundSize: 'auto 60px, 40px 40px',
    color: '#fbbf24', // jaune Tailwind
  };

  return (
    <header className="fixed w-full z-50 top-0 left-0 shadow-md">
      {/* Barre du haut : ici fond techno dégradé même en desktop */}
      <div
        className="flex justify-between items-center border-b border-gray-700 px-8 md:px-28 py-2 text-sm font-semibold"
        style={technoBarStyle}
      >
        <div className="flex items-center space-x-6">
          <a
            href="mailto:utl@gmail.com"
            className="flex items-center hover:text-yellow-300"
            style={{ color: 'inherit' }}
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            utl@gmail.com
          </a>
          <a href="/" className="flex items-center hover:text-yellow-300" style={{ color: 'inherit' }}>
            <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
            Congo Kinshasa, Lualaba, Kolwezi
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="/connexion"
            className="flex items-center hover:text-yellow-300"
            style={{ color: 'inherit' }}
          >
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Connexion
          </a>
          <span className="text-yellow-400">|</span>
          <a
            href="/contact"
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full shadow-md"
          >
            Nous Contacter
          </a>
        </div>
      </div>

      {/* Logo + menu principal : fond blanc classique */}
      <div className="flex items-center justify-between px-6 md:px-28 py-4 bg-white">
        {/* Logo + nom */}
        <div className="flex items-center">
          <img
            src="/src/assets/Logo_UTL/logo_UTL.webp"
            alt="Logo"
            className="h-12 w-12"
          />
          <h1 className="text-lg font-bold text-gray-700 ml-3">
            Université Technologique du Lualaba
          </h1>
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 font-bold text-sm text-gray-800">
            <li>
              <a href="/" className="hover:text-yellow-500">
                Accueil
              </a>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setShowAboutDropdown(true)}
              onMouseLeave={() => setShowAboutDropdown(false)}
            >
              <button className="flex items-center hover:text-yellow-500 focus:outline-none">
                A Propos
                <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-xs" />
              </button>
              {showAboutDropdown && (
                <ul className="absolute top-full left-0 mt-2 bg-white shadow-md rounded w-48 z-20 py-2">
                  <li>
                    <a href="/histoire" className="block px-4 py-2 hover:bg-gray-100">
                      Notre Histoire
                    </a>
                  </li>
                  <li>
                    <a href="/mission" className="block px-4 py-2 hover:bg-gray-100">
                      Notre Mission
                    </a>
                  </li>
                  <li>
                    <a href="/equipe" className="block px-4 py-2 hover:bg-gray-100">
                      Notre Équipe
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="/services" className="hover:text-yellow-500">
                Programmes
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-500">
                Recherches
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-yellow-500">
                Vie
              </a>
            </li>
            <li>
              <a href="/gallery" className="hover:text-yellow-500">
                Admission
              </a>
            </li>
            <li>
              <a href="/events" className="hover:text-yellow-500">
                Actualités
              </a>
            </li>
            <li>
              <a href="/testimonials" className="hover:text-yellow-500">
                Partenariats
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-500">
                Contact
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-yellow-500">
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        {/* Bouton hamburger mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Menu"
        >
          <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} size="lg" />
        </button>
      </div>

      {/* Menu mobile déroulant */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-md border-t border-gray-200 px-6 pb-6">
          <ul className="flex flex-col space-y-4 font-bold text-gray-800 text-base">
            <li>
              <a href="/" onClick={handleLinkClick} className="block hover:text-yellow-500">
                Accueil
              </a>
            </li>
            <li>
              <button
                onClick={() => setShowAboutDropdown(!showAboutDropdown)}
                className="flex items-center justify-between w-full hover:text-yellow-500 focus:outline-none font-bold"
              >
                A Propos
                <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
              </button>
              {showAboutDropdown && (
                <ul className="pl-4 mt-2 space-y-2 text-gray-700 font-normal">
                  <li>
                    <a
                      href="/histoire"
                      onClick={handleLinkClick}
                      className="block hover:text-yellow-600"
                    >
                      Notre Histoire
                    </a>
                  </li>
                  <li>
                    <a
                      href="/mission"
                      onClick={handleLinkClick}
                      className="block hover:text-yellow-600"
                    >
                      Notre Mission
                    </a>
                  </li>
                  <li>
                    <a
                      href="/equipe"
                      onClick={handleLinkClick}
                      className="block hover:text-yellow-600"
                    >
                      Notre Équipe
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a
                href="/services"
                onClick={handleLinkClick}
                className="block hover:text-yellow-500"
              >
                Programmes
              </a>
            </li>
            <li>
              <a
                href="/contact"
                onClick={handleLinkClick}
                className="block hover:text-yellow-500"
              >
                Recherches
              </a>
            </li>
            <li>
              <a
                href="/blog"
                onClick={handleLinkClick}
                className="block hover:text-yellow-500"
              >
                Vie
              </a>
            </li>
            <li>
              <a
                href="/gallery"
                onClick={handleLinkClick}
                className="block hover:text-yellow-500"
              >
                Admission
              </a>
            </li>
            <li>
              <a
                href="/events"
                onClick={handleLinkClick}
                className="block hover:text-yellow-500"
              >
                Actualités
              </a>
            </li>
            <li>
              <a
                href="/testimonials"
                onClick={handleLinkClick}
                className="block hover:text-yellow-500"
              >
                Partenariats
              </a>
            </li>
            <li>
              <a
                href="/contact"
                onClick={handleLinkClick}
                className="block hover:text-yellow-500"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/faq"
                onClick={handleLinkClick}
                className="block hover:text-yellow-500"
              >
                FAQ
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
