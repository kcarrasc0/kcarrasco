import React, { useState } from 'react';
import styles from './MateriaisGratuitos.module.css';

// IMAGENS DA CAPA E DOS CARDS
import fotoCapaMateriais from '../../assets/images/kcarrasco/foto-experiencia.jpg'; 
import CapaOQueEtecnologia from '../../assets/images/materiais/CapaOQueEtecnologia.png';
import CapaBackFrontFullStack from '../../assets/images/materiais/CapaBackFrontFullStack.png';
import CapaLinguagensProgramacao from '../../assets/images/materiais/CapaLinguagensProgramacao.png';

// LOGO DA CAIXA DOS DEVS
import logoCaixaDevs from '../../assets/images/logos/caixa.png';

const MateriaisGratuitos = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const materiais = [
    {
      id: 1,
      capa: CapaOQueEtecnologia,
      tag: 'Tecnologia',
      titulo: 'O que é Tecnologia?',
      autor: 'Erick Carrasco',
      link: '/materiais/PDFOQUEETECNOLOGIA.pdf'
    },
    {
      id: 2,
      capa: CapaBackFrontFullStack,
      tag: 'Desenvolvimento',
      titulo: 'O que é Backend, Frontend e FullStack?',
      autor: 'Erick Carrasco',
      link: '/materiais/PDFBACKENDFRONTEND.pdf'
    },
    {
      id: 3,
      capa: CapaLinguagensProgramacao,
      tag: 'Mercado',
      titulo: 'Linguagens de Programação mais pedidas no Mercado',
      autor: 'Erick Carrasco',
      link: '/materiais/PDFLINGUAGENSPROGRAMACAO.pdf'
    }
  ];

  return (
    <main className={styles.container}>
      {/* SEÇÃO 1 - CAPA PADRÃO */}
      <section className={styles.heroSection}>
        <div className={styles.textContainer}>
          <h2>Materiais Didáticos</h2>
          <p className={styles.intro}>
            Conteúdo gratuito para fortalecer sua caminhada na tecnologia e empreendedorismo.
          </p>
          <p>
            Acredito que o conhecimento deve ser compartilhado. Aqui você encontra guias, e-books, apostilas e a Caixa dos Devs que desenvolvi ao longo da minha trajetória.
          </p>
          <p>
            Ao longo desse ecossistema, você será acompanhado pelo <strong>KCarrasquinho</strong>, nosso guardião em pixel art que representa a fusão do nosso passado com o futuro tecnológico — uma inteligência que hackeia o sistema sem esquecer de onde veio.
          </p>
          <p className={styles.fraseImpacto}>
            Baixe, estude e transforme sua realidade!
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src={fotoCapaMateriais} alt="Materiais Didáticos KCarrasco" />
        </div>
      </section>

      {/* SEÇÃO 2 - DESTAQUE: CAIXA DOS DEVS */}
      <section className={styles.caixaDevsSection}>
        <div className={styles.sectionHeader}>
          <h2>Ecossistema Principal</h2>
          <h3>Caixa dos Devs</h3>
        </div>

        <div className={`${styles.caixaDevsContent} ${styles.glassPanel}`}>
          <div className={styles.caixaDevsImagensComposicao}>
            <img src={logoCaixaDevs} alt="Logo Caixa dos Devs" className={styles.logoCaixa} />
          </div>

          <div className={styles.caixaDevsTextContainer}>
            <p>
              A <strong>Caixa dos Devs</strong> é o nosso hub centralizado focado na formação de novos profissionais de tecnologia. Criada com o propósito de democratizar o ensino técnico e aprimorar habilidades práticas, a plataforma reúne desafios reais, códigos-base e documentações exclusivas.
            </p>
            <p>
              Prepare-se para encontrar um ambiente de aprendizado imersivo onde o KCarrasquinho destrava novos módulos, distribui conquistas e ajuda você a decifrar a lógica de programação de um jeito direto, periférico e focado no mercado.
            </p>
            <a 
              href="https://caixa-dos-devs.kcarrasco.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.outlineButton}
            >
              Acessar Plataforma →
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 - BIBLIOTECA INSPIRADA NO MEC LIVROS */}
      <section className={styles.bibliotecaSection}>
        <div className={styles.sectionHeader}>
          <h2>Biblioteca Digital</h2>
          <h3>Livros e Materiais de Estudo</h3>
        </div>

        {/* O Card Gigante de Vidro que engloba a categoria */}
        <div className={`${styles.categoryContainer} ${styles.glassPanel}`}>
          <div className={styles.categoryHeader}>
            <div className={styles.headerTexts}>
              <h4>Acervo Técnico</h4>
              <p>Guias e apostilas essenciais para a sua formação técnica.</p>
            </div>
            <button 
              className={styles.outlineButton} 
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Ver menos' : 'Ver mais >'}
            </button>
          </div>

          <div className={`${styles.booksWrapper} ${isExpanded ? styles.gridView : styles.rowView}`}>
            {materiais.map((livro) => (
              <a key={livro.id} href={livro.link} download className={styles.bookCard}>
                <div className={styles.bookCoverContainer}>
                  <img src={livro.capa} alt={livro.titulo} className={styles.bookCover} />
                </div>
                <div className={styles.bookInfo}>
                  <span className={styles.bookTag}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 19V5C4 3.89543 4.89543 3 6 3H19.4C19.7314 3 20 3.26863 20 3.6V16.7143C20 17.9768 18.9768 19 17.7143 19H4ZM4 19C4 20.1046 4.89543 21 6 21H18M9 7H15M9 11H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {livro.tag}
                  </span>
                  <h4 className={styles.bookTitle}>{livro.titulo}</h4>
                  <p className={styles.bookAuthor}>{livro.autor}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default MateriaisGratuitos;