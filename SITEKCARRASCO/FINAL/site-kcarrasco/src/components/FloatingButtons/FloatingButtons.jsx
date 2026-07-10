import React, { useState, useEffect } from 'react';
import styles from './FloatingButtons.module.css';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isA11yOpen, setIsA11yOpen] = useState(false);

  // Estados de Acessibilidade
  const [isLightMode, setIsLightMode] = useState(false);
  const [isMonochrome, setIsMonochrome] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);
  const [isLargeCursor, setIsLargeCursor] = useState(false);

  // Monitora o scroll para mostrar/esconder o botão "Voltar ao topo"
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Função para voltar ao topo suavemente
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Funções de Acessibilidade (Injetam classes no <body>)
  const toggleLightMode = () => {
    setIsLightMode(!isLightMode);
    document.body.classList.toggle('light-mode-a11y');
  };

  const toggleMonochrome = () => {
    setIsMonochrome(!isMonochrome);
    document.body.classList.toggle('monochrome-a11y');
  };

  const toggleLargeText = () => {
    setIsLargeText(!isLargeText);
    document.body.classList.toggle('large-text-a11y');
  };

  const toggleLargeCursor = () => {
    setIsLargeCursor(!isLargeCursor);
    document.body.classList.toggle('large-cursor-a11y');
  };

  return (
    <div className={styles.floatingContainer}>
      
      {/* MENU DE ACESSIBILIDADE (Abre para cima) */}
      <div className={`${styles.a11yMenu} ${isA11yOpen ? styles.open : ''}`}>
        <h4>Acessibilidade</h4>
        
        <button onClick={toggleLightMode} className={isLightMode ? styles.activeOption : ''}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          Modo Claro
        </button>
        
        <button onClick={toggleMonochrome} className={isMonochrome ? styles.activeOption : ''}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a10 10 0 0 0 0 20z"></path></svg>
          Monocromático
        </button>
        
        <button onClick={toggleLargeText} className={isLargeText ? styles.activeOption : ''}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>
          Aumentar Texto
        </button>
        
        <button onClick={toggleLargeCursor} className={isLargeCursor ? styles.activeOption : ''}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path></svg>
          Cursor Grande
        </button>
      </div>

      {/* BOTÃO 1: ACESSIBILIDADE */}
      <button 
        className={styles.glassButton} 
        onClick={() => setIsA11yOpen(!isA11yOpen)}
        title="Opções de Acessibilidade"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="4" r="2"></circle>
          <line x1="12" y1="6" x2="12" y2="12"></line>
          <line x1="7" y1="8" x2="17" y2="8"></line>
          <line x1="12" y1="12" x2="8" y2="20"></line>
          <line x1="12" y1="12" x2="16" y2="20"></line>
        </svg>
      </button>

      {/* BOTÃO 2: VOLTAR AO TOPO (Aparece ao scrollar) */}
      <button 
        className={`${styles.glassButton} ${isVisible ? styles.showTopBtn : styles.hideTopBtn}`} 
        onClick={scrollToTop}
        title="Voltar ao topo"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
      </button>
      
    </div>
  );
};

export default FloatingButtons;