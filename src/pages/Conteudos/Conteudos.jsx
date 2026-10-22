import React, { useState } from 'react';
import styles from './conteudos.module.css';

// IMAGENS
// Capa principal (pode reutilizar uma foto sua de destaque ou adicionar uma nova)
import fotoCapaConteudos from '../../assets/images/kcarrasco/foto-palestra.jpg'; 

// IMPORTAÇÃO DAS CAPAS DOS PITCHS (Substitua pelos nomes reais dos seus arquivos)
// import CapaPitch1 from '../../assets/images/pitchs/capa-pitch-1.png';
// import CapaPitch2 from '../../assets/images/pitchs/capa-pitch-2.png';

const Conteudos = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Array do Banco de Pitchs simulando o seu conteúdo
  const bancoDePitchs = [
    {
      id: 1,
      capa: 'https://via.placeholder.com/400x580/1a1a24/8a2be2?text=Capa+Pitch+1', // Substitua por: CapaPitch1
      tag: 'EdTech',
      titulo: 'Pitch Deck - Startup Educacional',
      autor: 'Desenrolando Pitch #01',
      link: '/pitchs/pitch-educacional.pdf'
    },
    {
      id: 2,
      capa: 'https://via.placeholder.com/400x580/1a1a24/8a2be2?text=Capa+Pitch+2', // Substitua por: CapaPitch2
      tag: 'HealthTech',
      titulo: 'Apresentação de Impacto na Saúde',
      autor: 'Desenrolando Pitch #02',
      link: '/pitchs/pitch-saude.pdf'
    },
    {
      id: 3,
      capa: 'https://via.placeholder.com/400x580/1a1a24/8a2be2?text=Capa+Pitch+3',
      tag: 'FinTech',
      titulo: 'Modelo de Negócios para Fintech',
      autor: 'Desenrolando Pitch #03',
      link: '/pitchs/pitch-fintech.pdf'
    },
    {
      id: 4,
      capa: 'https://via.placeholder.com/400x580/1a1a24/8a2be2?text=Capa+Pitch+4',
      tag: 'Social',
      titulo: 'Pitch de Negócios de Impacto Social',
      autor: 'Desenrolando Pitch #04',
      link: '/pitchs/pitch-social.pdf'
    }
  ];

  return (
    <main className={styles.container}>
      {/* SEÇÃO 1 - CAPA (HERO) */}
      <section className={styles.heroSection}>
        <div className={styles.textContainer}>
          <h2>Criação de Conteúdo</h2>
          <p className={styles.intro}>
            Muito além do código. Tecnologia, empreendedorismo e inovação explicados na prática.
          </p>
          <p>
            O conhecimento só gera transformação quando é compartilhado. Por isso, atuo como criador de conteúdo digital, traduzindo conceitos complexos de tecnologia e gestão de negócios para uma linguagem acessível, periférica e direta.
          </p>
          <p>
            Acompanhe análises, tutoriais e o nosso quadro oficial de empreendedorismo onde dissecamos o ecossistema de startups.
          </p>
          <div className={styles.buttonGroup}>
            <a href="https://www.youtube.com/@SeuCanal" target="_blank" rel="noopener noreferrer" className={styles.outlineButton}>
              Acessar Canal do YouTube
            </a>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={fotoCapaConteudos} alt="KCarrasco palestrando e criando conteúdo" />
        </div>
      </section>

      {/* SEÇÃO 2 - O QUADRO: DESENROLANDO PITCH */}
      <section className={styles.quadroSection}>
        <div className={styles.sectionHeader}>
          <h2>Quadro Oficial</h2>
          <h3>Desenrolando Pitch</h3>
        </div>

        <div className={`${styles.quadroContent} ${styles.glassPanel}`}>
          <div className={styles.quadroTextContainer}>
            <p>
              O <strong>Desenrolando Pitch</strong> é o nosso quadro oficial onde a teoria encontra a prática do empreendedorismo. Nele, explico passo a passo como construir um pitch matador para atrair investidores e clientes.
            </p>
            <p>
              Construímos apresentações do zero junto com o telespectador, avaliamos pitches reais de diversas áreas de atuação e mostramos o que realmente funciona (e o que deve ser evitado) na hora de vender a sua ideia.
            </p>
            <ul className={styles.quadroLista}>
              <li>Análise crítica de Startups</li>
              <li>Construção de narrativas (Storytelling)</li>
              <li>Estruturação de modelo de negócios</li>
            </ul>
          </div>
          {/* Pode ser uma arte do quadro, logo ou uma thumbnail de vídeo */}
          <div className={styles.quadroImagensComposicao}>
             <div className={styles.mockVideoContainer}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
             </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 - BANCO DE PITCHS (GALERIA) */}
      <section className={styles.bancoSection}>
        <div className={styles.sectionHeader}>
          <h2>Acervo</h2>
          <h3>Banco de Pitchs</h3>
        </div>

        <div className={`${styles.categoryContainer} ${styles.glassPanel}`}>
          <div className={styles.categoryHeader}>
            <div className={styles.headerTexts}>
              <h4>Galeria de Apresentações</h4>
              <p>Baixe os arquivos em PDF dos pitches avaliados e construídos no canal.</p>
            </div>
            <button 
              className={styles.outlineButton} 
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Ver menos' : 'Ver mais >'}
            </button>
          </div>

          <div className={`${styles.pitchWrapper} ${isExpanded ? styles.gridView : styles.rowView}`}>
            {bancoDePitchs.map((pitch) => (
              <a key={pitch.id} href={pitch.link} download className={styles.pitchCard}>
                <div className={styles.pitchCoverContainer}>
                  <img src={pitch.capa} alt={pitch.titulo} className={styles.pitchCover} />
                </div>
                <div className={styles.pitchInfo}>
                  <span className={styles.pitchTag}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    {pitch.tag}
                  </span>
                  <h4 className={styles.pitchTitle}>{pitch.titulo}</h4>
                  <p className={styles.pitchAuthor}>{pitch.autor}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 - CALL TO ACTION (ENVIE O SEU) */}
      <section className={styles.ctaSection}>
        <div className={`${styles.ctaPanel} ${styles.glassPanel}`}>
          <h3>Quer que o seu pitch seja avaliado no canal?</h3>
          <p>
            Envie a sua apresentação para nós! Os melhores (e os mais desafiadores) serão selecionados para o quadro <strong>Desenrolando Pitch</strong> e farão parte do nosso banco oficial.
          </p>
          <a href="mailto:erick.carrasco.oliver@gmail.com?subject=Avaliação%20de%20Pitch" className={styles.primaryButton}>
            Enviar meu Pitch
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </a>
        </div>
      </section>

    </main>
  );
};

export default Conteudos;