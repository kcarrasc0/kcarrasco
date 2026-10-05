import React, { useRef } from 'react';
import styles from './GlowCard.module.css';

const GlowCard = ({ children, className }) => {
  const cardRef = useRef(null);
  const lightRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current || !lightRef.current) return;
    
    // Pega as coordenadas exatas do card na tela
    const rect = cardRef.current.getBoundingClientRect();
    
    // Subtrai a posição do card da posição do mouse
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Subtrai 125px (metade do tamanho da nossa luz de 250px) para centralizar
    lightRef.current.style.transform = `translate(${x - 125}px, ${y - 125}px)`;
    lightRef.current.style.opacity = '1';
  };

  const handleMouseLeave = () => {
    if (lightRef.current) {
      lightRef.current.style.opacity = '0'; // Esconde a luz quando o mouse sai
    }
  };

  return (
    <div 
      className={`${styles.glowCardContainer} ${className || ''}`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* A nossa 'Lanterna' */}
      <div className={styles.glowLight} ref={lightRef}></div>
      
      {/* A superfície de Vidro Fosco e o Conteúdo */}
      <div className={styles.glowContent}>
        {children}
      </div>
    </div>
  );
};

export default GlowCard;