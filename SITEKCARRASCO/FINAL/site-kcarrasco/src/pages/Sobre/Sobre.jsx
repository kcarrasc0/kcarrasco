import React from 'react';
import styles from './Sobre.module.css'; // Usando o novo arquivo de CSS

// Seção 1 - Capa
import fotoSobre from '../../assets/images/kcarrasco/foto-sobre.jpg'; 
// Seção 2 Causa e Skills
import iconReact from '../../assets/images/icons/iconreact.png';
import iconNext from '../../assets/images/icons/iconnext.png';
import iconTs from '../../assets/images/icons/iconts.svg';
import iconSupabase from '../../assets/images/icons/iconsupabase.png';
import iconPython from '../../assets/images/icons/iconpython.jpg';
import iconSql from '../../assets/images/icons/iconsql.png';
import iconJs from '../../assets/images/icons/iconjs.png';
import iconHtml from '../../assets/images/icons/iconhtml.png';
import iconCss from '../../assets/images/icons/iconcss.png';
import iconCanva from '../../assets/images/icons/iconcanva.png';
import iconSheets from '../../assets/images/icons/iconsheets.png';
import iconTrello from '../../assets/images/icons/icontrello.png';
import iconDocs from '../../assets/images/icons/icondoc.png';
import iconFigma from '../../assets/images/icons/iconfigma.png';
import iconForms from '../../assets/images/icons/iconforms.png';
import iconLooker from '../../assets/images/icons/iconlooker.png';
import iconWordpress from '../../assets/images/icons/iconwordpress.png';
// Seção 3 Cursos
import Uninter from '../../assets/images/logos/uninter.png';
import Senac from '../../assets/images/logos/senac.png';
import Mediotec from '../../assets/images/logos/mediotec.png';


const Sobre = () => {
  return (
    <main className={styles.container}>
      {/* Seção 1 - Capa da Página Sobre */}
      <section className={styles.heroSection}>
        <div className={styles.textContainer}>
          <h2>Sobre</h2>
          {/* O texto é o mesmo das outras páginas, conforme o design */}
          <p>
            Erick Carrasco Oliveira, mais conhecido como KCARRASCO, é um educador, estrategista, empreendedor e jovem indígena brasileiro que atua na interseção entre tecnologia, inovação pedagógica e formação de jovens protagonistas. Nascido na Zona Leste de São Paulo e criado na periferia de Guaianases, mudou-se para Pernambuco em busca de melhor qualidade de vida, onde viveu grande parte de sua trajetória nas periferias de Jaboatão dos Guararapes.
          </p>
          <p>
            Com formação em Análise e Desenvolvimento de Sistemas, KCARRASCO construiu sua carreira unindo prática técnica com visão educacional, desenvolvendo soluções que conectam tecnologia, mercado de trabalho e desenvolvimento humano. Também atua na criação de materiais didáticos sobre tecnologia, mercado de trabalho e habilidades sociais, com foco na formação de jovens críticos, estratégicos e conscientes do seu papel na sociedade.
          </p>
          <p>
            Seu trabalho também se conecta com a valorização e defesa dos povos originários, atuando como incentivador da presença indígena na tecnologia e contribuindo para a desmistificação da ideia de que tecnologia e cultura indígena são opostas. Como jovem indígena inserido no ecossistema de inovação, reforça que tecnologia também é território, identidade e continuidade cultural.
          </p>
          <p className={styles.fraseImpacto}>
            Seu diferencial está na capacidade de integrar educação, tecnologia, cultura e estratégia, transformando conhecimento em ferramenta prática de autonomia, ascensão e impacto social
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src={fotoSobre} alt="Erick Carrasco olhando para um cocar" />
        </div>
      </section>
      
      {/* Seção 2 - Skills */}
    <section className={styles.skillsSection}>
        {/* Coluna da Esquerda: Causa e Propósito */}
        <div className={styles.causaContainer}>
          <h2>Qual a minha Causa?</h2>
          <h3>Qual o propósito?</h3>
          <p>Sinceramente nunca pensei que seguiria esse caminho profissional.</p>
          <p>
            Nessa vida tive 3 sonhos, quando criança queria ser um super-herói, já na adolescência queria seguir como atleta de MMA, e agora tenho uma sonho de mudar a vida de outras pessoas, assim como mudaram a minha. Cada educador que passou pela minha vida me ajudou de formas inimagináveis, a instituição que devo tudo o Mediotec não formou apenas um profissional, mas um cidadão, hoje sou:
          </p>
          <ul>
            <li>Palestrante</li>
            <li>Professor</li>
            <li>Empreendedor</li>
            <li>Desenvolvedor</li>
          </ul>
        </div>

        {/* Coluna da Direita: Skills */}
        <div className={styles.skillsContainer}>
          <div className={styles.hardSkills}>
            <h4>Hard Skills</h4>
            <div className={styles.iconGrid}>
              <img src={iconReact} alt="React" />
              <img src={iconJs} alt="JavaScript" />
              <img src={iconNext} alt="Next" />
              <img src={iconTs} alt="TypeScript" />
              <img src={iconHtml} alt="HTML5" />
              <img src={iconCss} alt="CSS3" />
              <img src={iconPython} alt="Python" />
              <img src={iconWordpress} alt="Wordpress" />
              <img src={iconSupabase} alt="Supabase" />
              <img src={iconSql} alt="Sql" />
              <img src={iconFigma} alt="Figma" />
              <img src={iconCanva} alt="Canva" />
              <img src={iconTrello} alt="Trello" />
              <img src={iconSheets} alt="Sheets" />
              <img src={iconDocs} alt="Docs" />
              <img src={iconLooker} alt="Looker" />
              <img src={iconForms} alt="Google Forms" />
            </div>
          </div>

          <div className={styles.softSkills}>
            <h4>Soft Skills</h4>
            <div className={styles.tagGrid}>
              <span>Liderança</span>
              <span>Comunicação</span>
              <span>Versatilidade</span>
              <span>Colaboração</span>
              <span>Criatividade</span>
              <span>Prestativo</span>
              <span>Empreendedorismo</span>
              <span>Pensamento Crítico</span>
              <span>Gestão</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 - CURSOS */}
      <section className={styles.coursesSection}>
  {/* O segredo está nesta div padronizada */}
  <div className={styles.sectionHeader}>
    <h2>Cursos</h2>
    <h3>Minha Formação e Especializações</h3>
  </div>

  <div className={styles.coursesGrid}>
    {/* Card 1 - Cursando */}
    <div className={styles.courseCard}>
      <div className={styles.courseLogoContainer}>
      <img src={Uninter} alt='Uninter'/> 
      </div>
      <div className={styles.courseContent}>
        <h4>MBA - Gestão Empresarial</h4>
        <p>Faculdade Uninter EAD</p>
        <span className={styles.cursando}>2026 - Cursando</span>
      </div>
    </div>

    {/* Card 2 - Cursando */}
    <div className={styles.courseCard}>
      <div className={styles.courseLogoContainer}>
      <img src={Uninter} alt='Uninter'/> 
      </div>
      <div className={styles.courseContent}>
        <h4>Pós-Graduação - Gestão de TI</h4>
        <p>Faculdade Uninter EAD</p>
        <span className={styles.cursando}>2026 - Cursando</span>
      </div>
    </div>

    {/* Card 3 - Concluído */}
    <div className={styles.courseCard}>
      <div className={styles.courseLogoContainer}>
      <img src={Senac} alt='Senac'/> 
      </div>
      <div className={styles.courseContent}>
        <h4>Análise e Desenvolvimento de Sistemas</h4>
        <p>Faculdade Senac Pernambuco</p>
        <span className={styles.concluido}>2024 - 2025 Concluído</span>
      </div>
    </div>

    {/* Card 4 - Concluído */}
    <div className={styles.courseCard}>
      <div className={styles.courseLogoContainer}>
      <img src={Mediotec} alt='Mediotec'/> 
      </div>
      <div className={styles.courseContent}>
        <h4>Desenvolvimento de Aplicativos Computacionais - Nível Médio</h4>
        <p>Mediotec Senac Pernambuco</p>
        <span className={styles.concluido}>2023 Concluído</span>
      </div>
    </div>

    {/* Card 5 - Concluído */}
    <div className={styles.courseCard}>
      <div className={styles.courseLogoContainer}>
      <img src={Mediotec} alt='Mediotec'/>
      </div> 
      <div className={styles.courseContent}>
        <h4>Operação de Redes de Computadores e Excel - Nível médio</h4>
        <p>Mediotec Senac Pernambuco</p>
        <span className={styles.concluido}>2022 Concluído</span>
      </div>
    </div>

    {/* Card 6 - Concluído */}
    <div className={styles.courseCard}>
      <div className={styles.courseLogoContainer}>
      <img src={Mediotec} alt='Mediotec'/> 
      </div>
      <div className={styles.courseContent}>
        <h4>Banco de Dados e Pensamento Computacional</h4>
        <p>Mediotec Senac Pernambuco</p>
        <span className={styles.concluido}>2022 Concluído</span>
      </div>
    </div>

    {/* Card 5 - Concluído */}
    <div className={styles.courseCard}>
      <div className={styles.courseLogoContainer}>
      <img src={Mediotec} alt='Mediotec'/>
      </div> 
      <div className={styles.courseContent}>
        <h4>Assistente de Suporte e Manutenção de Computadores - Nível médio</h4>
        <p>Mediotec Senac Pernambuco</p>
        <span className={styles.concluido}>2021 Concluído</span>
      </div>
    </div>

    
  </div>
  
</section>


      
    </main>
  );
};

export default Sobre;