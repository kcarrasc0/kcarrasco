import React, { useState } from 'react';
import styles from './header.module.css';
import logoKcarrasco from '../../assets/images/logos/logokcarrasco.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.headerContainer}>
      
      <div className={styles.headerBar}>
        
        <div className={styles.logo}>
          <Link to="/" onClick={closeMenu}>
            <img src={logoKcarrasco} alt="Logo KCarrasco" />
          </Link>
        </div>

        <nav className={`${styles.nav} ${menuOpen ? styles.active : ''}`}>
          
          <Link to="/" onClick={closeMenu}>
            {/* Ícone de Início: Oca (Dome com porta) */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 21h20"/>
              <path d="M4 21C4 12 8 4 12 4s8 8 8 17"/>
              <path d="M9 21v-4a3 3 0 0 1 6 0v4"/>
            </svg>
            Início
          </Link>
          
          <Link to="/sobre" onClick={closeMenu}>
            {/* Ícone de Sobre: Arco e Flecha */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {/* Corda tensionada */}
              <path d="M21 6L6 21" />
              {/* Ponta da flecha */}
              <path d="M9 2H2v7" />
              {/* Madeira do arco */}
              <path d="M7 21c-4-4-4-10 0-14s10-4 14 0" />
              {/* Haste da flecha (Ajustada para encostar na ponta e cruzar o arco) */}
              <path d="M2 2l19 18" />
            </svg>
            Sobre
          </Link>
          
          <Link to="/projetos-e-experiencias" onClick={closeMenu}>
            {/* Ícone de Projetos: Troféu */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
              <path d="M4 22h16"/>
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
            </svg>
            Projetos
          </Link>
          
          <Link to="/servicos" onClick={closeMenu}>
            {/* Ícone de Serviços: Código </> */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
              <line x1="14" y1="4" x2="10" y2="20"></line>
            </svg>
            Serviços
          </Link>
          
          <Link to="/materiais-gratuitos" onClick={closeMenu}>
            {/* Ícone de Materiais: Livro */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
            Materiais
          </Link>

        </nav>

        <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;