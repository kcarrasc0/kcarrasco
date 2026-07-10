import React from 'react';
import styles from './ProjetosExperiencia.module.css';
import { Link } from 'react-router-dom';

// Seção 1 - Capa
import fotoExperiencia from '../../assets/images/kcarrasco/foto-experiencia.jpg';

// Seção 2 - Projetos
import nook from '../../assets/images/projetos/nook.jpg';
import sitenook from '../../assets/images/projetos/site-nook.png';
import sitenookschool from '../../assets/images/projetos/site-nookschool.png';
import comunicacaoambiental from '../../assets/images/projetos/comunicacaoambiental.png';
import sistemapuskos from '../../assets/images/projetos/sistemapuskos.png';
import catalogopuskos from '../../assets/images/projetos/catalogopuskos.png';
import materiaisdidatico from '../../assets/images/projetos/materiaisdidatico.png';
import sjdhgov from '../../assets/images/projetos/sjdhgov.png';
import memorialgov from '../../assets/images/projetos/memorialgov.jpeg';
import intermunicipalgov from '../../assets/images/projetos/intermunicipalgov.png';
import nookschool from '../../assets/images/projetos/nookschool.png';
import ecovision from '../../assets/images/projetos/ecovision.png';
import dlyflow from '../../assets/images/projetos/dlyflow.png';
import beacon from '../../assets/images/projetos/beacon.png';
import coletivo from '../../assets/images/projetos/coletivo.jpg';
import siteartefavela from '../../assets/images/projetos/site-artenafavela.png';

// Seção 3 - Experiência
import logoMediotecc from '../../assets/images/logos/mediotec.png';
import logoSenac from '../../assets/images/logos/senac.png';
import logoNook from '../../assets/images/logos/nook.png';
import logoSecJustica from '../../assets/images/logos/sec-justica.png';
import logoCiee from '../../assets/images/logos/ciee.png';
import logoJovensClima from '../../assets/images/logos/jovens-clima.png';
import logoIdeias from '../../assets/images/logos/ideias.png';
import logoUnifg from '../../assets/images/logos/unifg.png';
import logoConectaRecife from '../../assets/images/logos/conecta-recife.png';
import logoCampusParty from '../../assets/images/logos/campus-party.png';
import logoCapitalEmpreendedor from '../../assets/images/logos/capital-empreendedor.png';
import logoCongressoInternacional from '../../assets/images/logos/congresso-internacional.png';
import logoRecnPlay from '../../assets/images/logos/recnplay.png';
import logoCampusMobile from '../../assets/images/logos/campus-mobile.png';
import logoArteFavela from '../../assets/images/logos/arte-favela.png';

const ProjetosExperiencia = () => {
  return (
    <main className={styles.container}>
      {/* Seção 1 - Capa */}
      <section className={styles.heroSection}>
        <div className={styles.textContainer}>
          <h2>Projetos e Experiências</h2>
          <p className={styles.intro}>
            KCarrasco possui experiência em diversos eventos, em serviços prestados e projetos criados
          </p>
          <p>
            Eu não escolhi esse caminho por acaso. Ele nasceu da necessidade de transformar, de mostrar que é possível ocupar espaços que historicamente nos foram negados.
          </p>
          <p>
            Carrego em mim a força dos meus ancestrais e o compromisso com quem vem depois. Meu trabalho é sobre abrir portas, conectar saberes e mostrar que a tecnologia, quando aliada à ancestralidade, pode ser uma ferramenta potente de resistência e reconstrução.
          </p>
          <p>
            Faço o que faço pelos jovens que, como eu, já foram desacreditados. Pelos parentes indígenas que ainda lutam por visibilidade. Pelas comunidades que seguem resistindo nas periferias e nos territórios. Quero que cada projeto, cada código, cada fala minha seja um sopro de futuro – onde ser indígena, periférico e sonhador não seja exceção, mas potência.
          </p>
          <p className={styles.fraseImpacto}>
            Quero mudar o mundo ao meu redor. E vou!
          </p>

          <div className={styles.buttonGroup}>
            {/* Onde estava o botão do Canva, substitua por: */}
            <Link to="/curriculo" className={styles.outlineButton}>Currículo Interativo</Link>
            <a href="http://lattes.cnpq.br/0429997546128392" target="_blank" rel="noopener noreferrer" className={styles.outlineButton}>
              Lattes
            </a>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <img src={fotoExperiencia} alt="Erick Carrasco em evento" />
        </div>
      </section>

      {/* Seção 2 - Projetos */}
      <section className={styles.projetosSection}>
        <div className={styles.sectionHeader}>
          <h2>Projetos</h2>
          <h3>Conheça mais meus projetos</h3>
        </div>

        {/* --- CATEGORIA 1: PROJETOS EM DESTAQUE --- */}
        <h4 className={styles.categoryTitle}>Projetos em Destaque</h4>
        <div className={styles.projetosGrid}>
          <div className={styles.projetoCard}>
            <img src={nook} alt="NOOK" />
            <div className={styles.cardContent}>
              <h4>NOOK</h4>
              <p>Startup de soluções tecnológicas educacionais inclusivas.</p>
              <a href="https://www.nookcorporation.com/" target="_blank" rel="noopener noreferrer" className={styles.outlineButton}>SABER MAIS</a>
            </div>
          </div>
          <div className={styles.projetoCard}>
            <img src={nookschool} alt="NOOK School" />
            <div className={styles.cardContent}>
              <h4>NOOK School</h4>
              <p>Plataforma educacional com cursos de tecnologia acessíveis.</p>
              <a href="#" className={styles.outlineButton}>SABER MAIS</a>
            </div>
          </div>
          <div className={styles.projetoCard}>
            <img src={comunicacaoambiental} alt="Comunicação Ambiental" />
            <div className={styles.cardContent}>
              <h4>Comunicação Ambiental</h4>
              <p>Conscientização ecológica por meio de tecnologias sociais.</p>
              <a href="https://artenafavela.vercel.app/comunicacao" target="_blank" rel="noopener noreferrer" className={styles.outlineButton}>SABER MAIS</a>
            </div>
          </div>
          <div className={styles.projetoCard}>
            <img src={materiaisdidatico} alt="Coletivo Arte na Favela" />
            <div className={styles.cardContent}>
              <h4>Materiais Didáticos Gratuitos</h4>
              <p>Acesse conteúdos educativos exclusivos desenvolvidos pela nossa equipe.</p>
              <a href="https://artenafavela.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.outlineButton}>SABER MAIS</a>
            </div>
          </div>
        </div>

        {/* --- CATEGORIA 2: PROJETOS SOCIAIS --- */}
        <h4 className={styles.categoryTitle}>Projetos Sociais - Fazendo a Diferença</h4>
        <div className={styles.projetosGrid}>
          <div className={styles.projetoCard}>
            <img src={comunicacaoambiental} alt="Comunicação Ambiental" />
            <div className={styles.cardContent}>
              <h4>Comunicação Ambiental</h4>
              <p>Foco em práticas sustentáveis e educação ambiental.</p>
              <a href="https://artenafavela.vercel.app/comunicacao" target="_blank" rel="noopener noreferrer" className={styles.outlineButton}>SABER MAIS</a>
            </div>
          </div>
          <div className={styles.projetoCard}>
            <img src={nookschool} alt="NOOK School" />
            <div className={styles.cardContent}>
              <h4>NOOK School</h4>
              <p>Inclusão digital para jovens de comunidades periféricas.</p>
              <a href="#" className={styles.outlineButton}>SABER MAIS</a>
            </div>
          </div>
          <div className={styles.projetoCard}>
            <img src={materiaisdidatico} alt="Materiais Didáticos Gratuitos" />
            <div className={styles.cardContent}>
              <h4>Materiais Didáticos Gratuitos</h4>
              <p>Acesse conteúdos educativos exclusivos desenvolvidos pela nossa equipe.</p>
              <Link to="/materiais-gratuitos" className={styles.outlineButton}>SABER MAIS</Link>
            </div>
          </div>
          <div className={styles.projetoCard}>
            <img src={coletivo} alt="Coletivo Arte na Favela" />
            <div className={styles.cardContent}>
              <h4>Coletivo Arte na favela</h4>
              <p>Acesse conteúdos educativos exclusivos desenvolvidos pela nossa equipe.</p>
              <a href="https://artenafavela.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.outlineButton}>SABER MAIS</a>
            </div>
          </div>
        </div>

        {/* --- CATEGORIA 3: PROJETOS PESSOAIS --- */}
        <h4 className={styles.categoryTitle}>Projetos Pessoais - Sistemas desenvolvidos por mim</h4>
        <div className={styles.projetosGrid}>
          <div className={styles.projetoCard}>
            <img src={sitenook} alt="Site NOOK Corporation" />
            <div className={styles.cardContent}>
              <h4>Site NOOK Corporation</h4>
              <p>Desenvolvimento do portal institucional oficial da NOOK.</p>
              <a href="https://www.nookcorporation.com/" target="_blank" rel="noopener noreferrer" className={styles.outlineButton}>SABER MAIS</a>
            </div>
          </div>
          <div className={styles.projetoCard}>
            <img src={ecovision} alt="EcoVision" />
            <div className={styles.cardContent}>
              <h4>EcoVision - COP30</h4>
              <p>Sistema de monitoramento ambiental para conferências climáticas.</p>
              <a href="https://ecovision2.streamlit.app/" target="_blank" rel="noopener noreferrer" className={styles.outlineButton}>SABER MAIS</a>
            </div>
          </div>
          <div className={styles.projetoCard}>
            <img src={sitenookschool} alt="Site NOOK School" />
            <div className={styles.cardContent}>
              <h4>Site NOOK School</h4>
              <p>Interface moderna para a nossa plataforma de cursos.</p>
              <a href="#" className={styles.outlineButton}>SABER MAIS</a>
            </div>
          </div>
          <div className={styles.projetoCard}>
            <img src={catalogopuskos} alt="Catálogo Puskós" />
            <div className={styles.cardContent}>
              <h4>Catálogo Puskós FC</h4>
              <p>Sistema de gerenciamento de itens e atletas do clube.</p>
              <a href="#" className={styles.outlineButton}>SABER MAIS</a>
            </div>
          </div>
          <div className={styles.projetoCard}>
            <img src={sistemapuskos} alt="Monitoramento Financeiro" />
            <div className={styles.cardContent}>
              <h4>Monitoramento Financeiro Puskós</h4>
              <p>Dashboard administrativo para controle de contas e caixa.</p>
              <a href="#" className={styles.outlineButton}>SABER MAIS</a>
            </div>
          </div>
          <div className={styles.projetoCard}>
            <img src={siteartefavela} alt="Site coletivo arte na favela" />
            <div className={styles.cardContent}>
              <h4>Site Coletivo Arte na Favela</h4>
              <p>Dashboard administrativo para controle de contas e caixa.</p>
              <a href="https://artenafavela.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.outlineButton}>SABER MAIS</a>
            </div>
          </div>
          <div className={styles.projetoCard}>
            <img src={dlyflow} alt="DlyFlow" />
            <div className={styles.cardContent}>
              <h4>DlyFlow</h4>
              <p>Aplicação para otimização de fluxo de trabalho diário.</p>
              <a href="#" className={styles.outlineButton}>SABER MAIS</a>
            </div>
          </div>
          <div className={styles.projetoCard}>
            <img src={intermunicipalgov} alt="PE Livre Acesso" />
            <div className={styles.cardContent}>
              <h4>PE Livre Acesso Intermunicipal</h4>
              <p>Sistema focado em acessibilidade no transporte de Pernambuco.</p>
              <a href="https://peintermunicipal.sjdh.pe.gov.br/" target="_blank" rel="noopener noreferrer" className={styles.outlineButton}>SABER MAIS</a>
            </div>
          </div>
          <div className={styles.projetoCard}>
            <img src={sjdhgov} alt="Site SJDH" />
            <div className={styles.cardContent}>
              <h4>Site SJDH-PE</h4>
              <p>Desenvolvimento para a Secretaria de Justiça e Direitos Humanos.</p>
              <a href="https://sjdh.pe.gov.br/" target="_blank" rel="noopener noreferrer" className={styles.outlineButton}>SABER MAIS</a>
            </div>
          </div>
          <div className={styles.projetoCard}>
            <img src={memorialgov} alt="Memorial da Democracia" />
            <div className={styles.cardContent}>
              <h4>Site Memorial da Democracia</h4>
              <p>Plataforma histórica digital interativa.</p>
              <a href="https://memorialdademocracia.sjdh.pe.gov.br/" target="_blank" rel="noopener noreferrer" className={styles.outlineButton}>SABER MAIS</a>
            </div>
          </div>
          <div className={styles.projetoCard}>
            <img src={beacon} alt="Beacon Navigator" />
            <div className={styles.cardContent}>
              <h4>Beacon Navigator</h4>
              <p>Sistema de navegação inteligente e acessível.</p>
              <a href="https://faculdadesenacpe.edu.br/projeto-de-estudantes-da-faculdade-senac-chega-a-semifinal-do-campus-mobile-2025" target="_blank" rel="noopener noreferrer" className={styles.outlineButton}>SABER MAIS</a>
            </div>
          </div>
        </div>
      </section>

     {/* Seção 3 - Experiência */}
      <section className={styles.experienciaSection}>
        <div className={styles.sectionHeader}>
          <h2>Experiência</h2>
          <h3>Veja por onde eu passei</h3>
        </div>
        
        <div className={styles.logosContainer}>
          <img src={logoMediotecc} alt="Mediotecc Senac" />
          <img src={logoSenac} alt="Senac" />
          <img src={logoNook} alt="Nook" />
          <img src={logoSecJustica} alt="Secretaria de Justiça" />
          <img src={logoCiee} alt="CIEE" />
          <img src={logoJovensClima} alt="Jovens pelo Clima" />
          <img src={logoIdeias} alt="i.de.ia.S" />
          <img src={logoUnifg} alt="UNIFG" />
          <img src={logoConectaRecife} alt="Conecta Recife" />
          <img src={logoCampusParty} alt="Campus Party" />
          <img src={logoArteFavela} alt="Coletivo Arte na Favela" />
          <img src={logoCapitalEmpreendedor} alt="Capital Empreendedor" />
          <img src={logoCongressoInternacional} alt="XX Congresso Internacional" />
          <img src={logoRecnPlay} alt="Rec'n'Play" />
          <img src={logoCampusMobile} alt="Campus Mobile" />
        </div>
      </section>
    </main>
  );
};

export default ProjetosExperiencia;