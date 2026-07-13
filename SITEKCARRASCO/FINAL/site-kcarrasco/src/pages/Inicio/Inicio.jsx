import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Inicio.module.css';
import { Link } from 'react-router-dom';


// Seção 1 - Capa
import fotoCapa from '../../assets/images/kcarrasco/KCARRASCO.jpg';

// Seção 3 - Projetos
import projeto1 from '../../assets/images/projetos/nook.jpg';
import projeto2 from '../../assets/images/projetos/comunicacaoambiental.png';
import projeto3 from '../../assets/images/projetos/yara.png';

// Seção 5 - Depoimentos
import depoimento1 from '../../assets/images/depoimentos/depoimento1.png'
import depoimento2 from '../../assets/images/depoimentos/depoimento2.jpg'
import depoimento3 from '../../assets/images/depoimentos/depoimento3.jpg'

const Inicio = () => {
  // ================================================
  // 3. LÓGICA DO FORMULÁRIO (AGORA DENTRO DO COMPONENTE)
  // ================================================
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage('Enviando sua mensagem...');

    // !!! IMPORTANTE: SUBSTITUA COM SUAS CHAVES DO EMAILJS !!!
    emailjs.sendForm(
      'service_drc76l4', 
      'template_e0ho44s', 
      form.current, 
      'hV_cAquI4XGf9d2s2'
    )
      .then((result) => {
          // Bloco de SUCESSO
          console.log('E-MAIL ENVIADO COM SUCESSO:', result.text); // Para depuração
          setStatusMessage('Mensagem enviada com sucesso!');
          setIsSending(false);
          setTimeout(() => setStatusMessage(''), 5000);
          form.current.reset();
      })
      .catch((error) => {
          // Bloco de ERRO
          console.log('FALHA NO ENVIO DO E-MAIL:', error.text); // Para depuração
          setStatusMessage('Ocorreu um erro. Verifique suas chaves ou tente novamente.');
          setIsSending(false);
          setTimeout(() => setStatusMessage(''), 5000);
      });
  };

  return (
    <div className={styles.container}>
      {/* Seção 1 - Home-Capa do Site ATUALIZADA */}
      <section id="inicio" className={`${styles.section} ${styles.homeCapa}`}>
        <div className={styles.textContainer}>
          <h3>Salve! Eu sou</h3>
          <h1>Erick Carrasco</h1>
          <h2 className={styles.subtituloAncestral}>TECNOLOGIA | EMPREENDEDORISMO | INOVAÇÃO PEDAGÓGICA </h2>
          <p className={styles.descricao}>
            Conecto ancestralidade e tecnologia para transformar realidades. Neste espaço,
            compartilho minhas ideias, projetos e experiências que unem tradição e
            inovação com propósito.
          </p>
          <div className={styles.buttonGroup}>
            <button className={styles.ctaButton}><a href="/projetos-e-experiencias">Conheça meus projetos</a></button>
            <button className={styles.secondaryButton}><a href="#contato">Fale comigo</a></button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={fotoCapa} alt="Erick Carrasco" />
        </div>
      </section>

       {/*Seção 2 - Sobre mim*/}
       <section id="sobre" className={`${styles.section} ${styles.sobreMim}`}>
        <div className={styles.sectionHeader}>
          <h2>Sobre Mim</h2>
          <h3>Ancestralidade e Caminhada</h3>
          <p className={styles.subtituloSobre}>
            De onde venho, minha conexão com o território e minha visão de mundo.
          </p>
        </div>
        
        {/* Painel de Vidro Centralizado */}
        <div className={styles.sobreMimGlassPanel}>
          <div className={styles.sobreMimTextGrid}>
            <div className={styles.textColumn}>
              <p>
                Erick Carrasco Oliveira, mais conhecido como KCARRASCO, é um educador, estrategista, empreendedor e jovem indígena brasileiro que atua na interseção entre tecnologia, inovação pedagógica e formação de jovens protagonistas. Nascido na Zona Leste de São Paulo e criado na periferia de Guaianases, mudou-se para Pernambuco em busca de melhor qualidade de vida, onde viveu grande parte de sua trajetória nas periferias de Jaboatão dos Guararapes.
              </p>
              <p>
                Com formação em Análise e Desenvolvimento de Sistemas, KCARRASCO construiu sua carreira unindo prática técnica com visão educacional, desenvolvendo soluções que conectam tecnologia, mercado de trabalho e desenvolvimento humano.
              </p>
            </div>
            <div className={styles.textColumn}>
              <p>
                Também atua na criação de materiais didáticos sobre tecnologia, mercado de trabalho e habilidades sociais, com foco na formação de jovens críticos, estratégicos e conscientes do seu papel na sociedade.
              </p>
              <p>
                Seu trabalho se conecta com a valorização e defesa dos povos originários, atuando como incentivador da presença indígena na tecnologia e contribuindo para a desmistificação da ideia de que tecnologia e cultura indígena são opostas. Como jovem indígena inserido no ecossistema de inovação, reforça que <strong>tecnologia também é território, identidade e continuidade cultural</strong>.
              </p>
            </div>
          </div>
          <div className={styles.sobreMimAction}>
            <Link to="/sobre" className={styles.ctaButton}>Ver história completa</Link>
          </div>
        </div>
      </section>
      
      {/*Seção 3 - Projetos */}
     <section id="projetos" className={`${styles.section} ${styles.projetosSection}`}>
        {/* Usamos a mesma estrutura de cabeçalho da seção anterior */}
        <div className={styles.sectionHeader}>
          <h2>Destaques de Projetos</h2>
          <h3>Conheça mais meus projetos</h3>
        </div>

        <div className={styles.projetosGrid}>
          {/* Card de Projeto 1 */}
          <div className={styles.projetoCard}>
            <img src={projeto1} alt="" />
            <div className={styles.cardContent}>
              <h4>NOOK Corporation</h4>
              <p>Startup de soluções tecnológicas educacionais inclusivas, conectando inovação, impacto social e sustentabilidade.</p>
              <a href="https://nookcorporation.com/" target="_blank" rel="noopener noreferrer" className={styles.outlineButton}>Ver Projeto</a>
            </div>
          </div>

          {/* Card de Projeto 2 */}
          <div className={styles.projetoCard}>
            <img src={projeto2} alt="" />
            <div className={styles.cardContent}>
              <h4>Comunicação Ambiental</h4>
              <p>Projeto voltado à conscientização ecológica e práticas sustentáveis por meio de campanhas e tecnologias sociais.</p>
              <button className={styles.outlineButton}><a href="https://artenafavela.vercel.app/comunicacao">Ver Projeto</a></button>
            </div>
          </div>

          {/* Card de Projeto 3 */}
          <div className={styles.projetoCard}>
            <img src={projeto3} alt="" />
            <div className={styles.cardContent}>
              <h4>YARA</h4>
              <p>Plataforma que integra docentes e discentes, promovendo inclusão e suporte a alunos com neurodivergencia e individualidades</p>
              <a href="https://nookcorporation.com/" target="_blank" rel="noopener noreferrer" className={styles.outlineButton}>Ver Projeto</a>
            </div>
          </div>
        </div>
      </section>

      {/*Seção 4 - Impacto e Causa*/}
      <section id="impacto" className={`${styles.section} ${styles.impactoSection}`}>
        <div className={styles.sectionHeader}>
          <h2>Impacto e Causa</h2>
          <h3>Qual o propósito?</h3>
        </div>

        {/* Grid Dinâmico de Cards de Vidro */}
        <div className={styles.impactoGrid}>
          
          <div className={styles.impactCard}>
            <div className={styles.impactIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            </div>
            <h4>Ocupação de Espaços</h4>
            <p>Eu não escolhi esse caminho por acaso. Ele nasceu da necessidade de transformar, de mostrar que é possível ocupar espaços que historicamente nos foram negados.</p>
          </div>

          <div className={styles.impactCard}>
            <div className={styles.impactIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h4>Ancestralidade</h4>
            <p>Carrego em mim a força dos meus ancestrais e o compromisso com quem vem depois. Meu trabalho é sobre abrir portas e conectar saberes com a tecnologia.</p>
          </div>

          {/* Card de Destaque (Ocupa 2 colunas) */}
          <div className={`${styles.impactCard} ${styles.impactCardHighlight}`}>
            <h4>Por quem eu faço?</h4>
            <p>Faço o que faço pelos jovens que, como eu, já foram desacreditados. Pelos parentes indígenas que ainda lutam por visibilidade. Pelas comunidades que seguem resistindo nas periferias e nos territórios. Quero que cada projeto, cada código, cada fala minha seja um sopro de futuro – onde ser indígena, periférico e sonhador não seja exceção, mas potência.</p>
            <p className={styles.fraseImpacto}>Quero mudar o mundo ao meu redor. E vou!</p>
          </div>

        </div>
      </section>
      
      {/*Seção 5 - Depoimentos*/}
       <section id="depoimentos" className={`${styles.section} ${styles.depoimentosSection}`}>
        {/* Bloco de títulos centralizados */}
        <div className={styles.sectionHeader}>
          <h2>Depoimentos</h2>
          <h3>Parceiros e clientes</h3>
        </div>

        {/* Grid para os cards de depoimentos */}
        <div className={styles.depoimentosGrid}>
          {/* Card de Depoimento 1 */}
          <div className={styles.depoimentoCard}>
            <img src={depoimento1} alt="Depoimento de Lourdes Burity" className={styles.depoimentoAvatar} />
            <div className={styles.depoimentoContent}>
              <h4>Lourdes Burity</h4>
              <h5>Educadora</h5>
              <p>"Conheci Carrasco em 2021 e logo percebi seu comprometimento, maturidade e engajamento em causas sociais. Ao longo do ensino médio, ele se destacou ainda mais, conquistando seu espaço com dedicação. Hoje, é uma alegria tê-lo como parceiro de sala de aula, compartilhando conhecimento e inspirando jovens com suas reflexões."</p>
            </div>
          </div>

          {/* Card de Depoimento 2 */}
          <div className={styles.depoimentoCard}>
            <img src={depoimento2} alt="Depoimento de Lourdes Burity" className={styles.depoimentoAvatar} />
            <div className={styles.depoimentoContent}>
              <h4>Ruan Guedes</h4>
              <h5>COO - Desenvolvedor</h5>
              <p>"Trabalhar com o Carrasco é incrível. A honestidade e a pró-atividade dele sempre me chamaram atenção desde o início. Hoje, não o vejo apenas como um sócio, mas como um irmão pra vida."</p>
            </div>
          </div>

          {/* Card de Depoimento 3 */}
          <div className={styles.depoimentoCard}>
            <img src={depoimento3} alt="Depoimento de Lourdes Burity" className={styles.depoimentoAvatar} />
            <div className={styles.depoimentoContent}>
              <h4>Ivo Leonardo</h4>
              <h5>Coordenador de TI - SECTI</h5>
              <p>"Erick Carrasco é um profissional assíduo, pró-ativo com muito espírito de liderança. Tem muita criatividade  e facilidade de comunicação. Sempre em busca da resolução de problemas com excelência. Sem dúvidas, é um profissional enriquecedor, de extremo valor para qualquer equipe, grupo ou organização."</p>
            </div>
          </div>
        </div>
      </section>
      
     {/* Seção 6 - Contato */}
      <section id="contato" className={`${styles.section} ${styles.contatoSection}`}>
        <div className={styles.sectionHeader}>
          <h2>Contato</h2>
          <h3>Vamos construir juntos?</h3>
          <p className={styles.subtituloSobre}>Escolha a melhor opção para falarmos</p>
        </div>

        <div className={styles.contatoGrid}>
          
          {/* Card WhatsApp */}
          <a href="https://api.whatsapp.com/send?phone=81973066822" target="_blank" rel="noopener noreferrer" className={styles.contatoCard}>
            <div className={styles.contatoIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </div>
            <h4>WhatsApp</h4>
            <p>Vamos conversar rápido</p>
          </a>

          {/* Card Instagram */}
          <a href="https://www.instagram.com/_kcarrasco" target="_blank" rel="noopener noreferrer" className={styles.contatoCard}>
            <div className={styles.contatoIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
            <h4>Instagram</h4>
            <p>Acompanhe meu dia a dia</p>
          </a>

          {/* Card E-mail */}
          <a href="mailto:erick.carrasco.oliver@gmail.com" className={styles.contatoCard}>
            <div className={styles.contatoIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h4>E-mail</h4>
            <p>erick.carrasco.oliver@gmail.com</p>
          </a>

          {/* Card LinkedIn */}
          <a href="https://www.linkedin.com/in/-kcarrasco/" target="_blank" rel="noopener noreferrer" className={styles.contatoCard}>
            <div className={styles.contatoIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
            <h4>LinkedIn</h4>
            <p>Conexões profissionais</p>
          </a>

        </div>
      </section>
    </div>
  );
};

export default Inicio;