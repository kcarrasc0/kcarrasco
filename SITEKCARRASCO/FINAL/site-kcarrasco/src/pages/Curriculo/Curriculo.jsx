import React from 'react';
import styles from './Curriculo.module.css';
import fotoCapa from '../../assets/images/kcarrasco/KCARRASCO.jpg'; // Usando a mesma foto da home

const Curriculo = () => {
  return (
    <main className={styles.container}>
      <section className={styles.curriculoSection}>
        
        {/* Container Principal de Vidro */}
        <div className={styles.glassWrapper}>
          
          {/* ========================================== */}
          {/* BARRA LATERAL (SIDEBAR)                      */}
          {/* ========================================== */}
          <aside className={styles.sidebar}>
            <div className={styles.profileBox}>
              <div className={styles.imageContainer}>
                <img src={fotoCapa} alt="Erick Carrasco Oliveira" />
              </div>
              <h2>Erick Carrasco</h2>
              <h3>Desenvolvedor & Instrutor Pleno</h3>
            </div>

            <div className={styles.sidebarSection}>
              <h4>Contato</h4>
              <ul>
                <li><strong>Email:</strong> erick.carrasco.oliver@gmail.com</li>
                <li><strong>Cel:</strong> (81) 9 7306-6822</li>
                <li><strong>Recado:</strong> (81) 9 9378-9172</li>
                <li><strong>Local:</strong> Jaboatão dos Guararapes - PE</li>
              </ul>
            </div>

            <div className={styles.sidebarSection}>
              <h4>Links</h4>
              <ul>
                <li><a href="https://kcarrasco.vercel.app" target="_blank" rel="noopener noreferrer">Portfólio (Site)</a></li>
                <li><a href="https://www.linkedin.com/in/-kcarrasco/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com/kcarrasc0" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="http://lattes.cnpq.br/0429997546128392" target="_blank" rel="noopener noreferrer">Lattes</a></li>
              </ul>
            </div>

            <div className={styles.sidebarSection}>
              <h4>Tecnologias</h4>
              <div className={styles.tagsGrid}>
                <span>HTML/CSS</span>
                <span>JavaScript</span>
                <span>React.js</span>
                <span>Next.js/ts</span>
                <span>SQL / NoSQL</span>
                <span>Figma</span>
                <span>WordPress</span>
              </div>
            </div>

            <div className={styles.sidebarSection}>
              <h4>Habilidades</h4>
              <div className={styles.tagsGrid}>
                <span>I.A.</span>
                <span>Metodologias Ágeis</span>
                <span>Looker (Dashboards)</span>
                <span>Planilhas / Excel</span>
                <span>Gestão de Projetos</span>
              </div>
            </div>

            <div className={styles.sidebarSection}>
              <h4>Idiomas</h4>
              <ul>
                <li>Inglês (Intermediário)</li>
                <li>Espanhol (Básico)</li>
              </ul>
            </div>
          </aside>

          {/* ========================================== */}
          {/* CONTEÚDO PRINCIPAL (MAIN CONTENT)            */}
          {/* ========================================== */}
          <div className={styles.mainContent}>
            
            <div className={styles.headerTitle}>
              <h1>Erick Carrasco Oliveira</h1>
              <h2>Tecnologia | Educação | Inovação Pedagógica</h2>
            </div>

            <div className={styles.contentSection}>
              <h3 className={styles.sectionTitle}>Objetivo</h3>
              <p className={styles.objectiveText}>
                Busco oportunidades como desenvolvedor de sistemas, integrando também a área de gestão de tecnologia da informação. Possuo experiência consolidada na área de desenvolvimento e gestão desde 2021, atuando com excelência como professor, desenvolvedor e gestor de projetos voltados a T.I.
              </p>
            </div>

            <div className={styles.contentSection}>
              <h3 className={styles.sectionTitle}>Experiência Profissional</h3>
              
              <div className={styles.timeline}>
                
                {/* EXPERIÊNCIA 1 - NOVA */}
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <h4>Instrutor Pleno - Desenvolvimento de Sistemas Mediotec</h4>
                  <h5>Senac Pernambuco | Junho 2026 - Presente | Recife, PE</h5>
                  <p>Atuação como instrutor em meio período no programa Mediotec, ministrando aulas de desenvolvimento de sistemas e preparando jovens para o mercado de tecnologia.</p>
                </div>

                {/* EXPERIÊNCIA 2 - NOVA */}
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <h4>Instrutor Pleno - Desenvolvimento de Sistemas Técnico</h4>
                  <h5>Senac Pernambuco | Março 2026 - Presente | Recife, PE</h5>
                  <p>Docência técnica voltada ao desenvolvimento de software, orientando alunos nas melhores práticas de mercado e lógica de programação avançada.</p>
                </div>

                {/* EXPERIÊNCIA 3 - ATUALIZADA (SJDH) */}
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <h4>Desenvolvedor de Sistemas Web Junior</h4>
                  <h5>Secretaria de Justiça e Direitos Humanos (SJDH-PE) | Jan 2026 - Jul 2026</h5>
                  <p>Desenvolvimento e manutenção de sistemas governamentais, integração de banco de dados e garantia de acessibilidade digital para os cidadãos pernambucanos.</p>
                </div>

                {/* EXPERIÊNCIA 4 */}
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <h4>Estágio em Tecnologia da Informação</h4>
                  <h5>Secretaria de Justiça e Direitos Humanos (SJDH-PE) | ABR 2025 - DEZ 2025</h5>
                  <p>Desenvolvimento de Sistemas, monitoramento e tratamento de dados, logística aplicada através de ferramentas e metodologias ágeis, além de manutenção de redes e computadores.</p>
                </div>

                {/* EXPERIÊNCIA 5 */}
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <h4>Educador & Instrutor (Aulas e Oficinas)</h4>
                  <h5>Mediotec Senac | Pref. do Recife | CIEE | UNIFG | 2023 - 2025</h5>
                  <p>Ministrou aulas e oficinas temáticas voltadas para Tecnologia e Inovação, Gestão de Tempo, Meio Ambiente e Cultura Indígena.</p>
                </div>

                {/* EXPERIÊNCIA 6 */}
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <h4>Empreendedorismo & Projetos em Tecnologia</h4>
                  <h5>NOOK | Projetos Pessoais & Eventos Tech | 2021 - 2026</h5>
                  <p>Gestão empresarial, integração de Tecnologias Ancestrais e climáticas. Desenvolvimento de Apps Mobile/Web, avaliação de projetos integradores, palestras (Ex: XX Congresso Internacional de Inovação na Educação) e atuação em programas como Campus Mobile e Facepe.</p>
                </div>

              </div>
            </div>

           <div className={styles.contentSection}>
              <h3 className={styles.sectionTitle}>Formação Acadêmica</h3>
              
              <div className={styles.educationGrid}>
                {/* GRADUAÇÃO */}
                <div className={styles.educationCard}>
                  <h4>Análise e Desenvolvimento de Sistemas (Graduação)</h4>
                  <h5>Faculdade Senac Recife | Concluído em Dezembro de 2025</h5>
                  <p>Formação superior completa com foco em engenharia de software, desenvolvimento full-stack e gestão de projetos de T.I.</p>
                </div>

                {/* NOVA: MBA */}
                <div className={styles.educationCard}>
                  <h4>MBA - Gestão Empresarial</h4>
                  <h5>Faculdade Uninter EAD | 2026 - Cursando</h5>
                  <p>Especialização com foco em visão estratégica, liderança e práticas inovadoras aplicadas ao ambiente corporativo e startups.</p>
                </div>

                {/* NOVA: PÓS EM TI */}
                <div className={styles.educationCard}>
                  <h4>Pós-Graduação - Gestão de TI</h4>
                  <h5>Faculdade Uninter EAD | 2026 - Cursando</h5>
                  <p>Aprofundamento na gestão de ativos tecnológicos, governança de dados e alinhamento estratégico da T.I. com os objetivos de negócio.</p>
                </div>

                {/* TÉCNICO */}
                <div className={styles.educationCard}>
                  <h4>Ensino Médio Técnico (Mediotec)</h4>
                  <h5>Assistente de Suporte e Manutenção | Concluído em 2023</h5>
                  <ul>
                    <li>Desenvolvimento de aplicativos computacionais (HTML, CSS, JS).</li>
                    <li>Operação de redes de computadores e Excel.</li>
                    <li>Banco de Dados e Pensamento Computacional (SQL, NoSQL).</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>
    </main>
  );
};

export default Curriculo;