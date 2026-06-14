import { useState } from "react";
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Download,
  Eye,
  FileText,
  Film,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  PlayCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";

const projects = [
  {
    title: "Sistema de Chamados",
    type: "Service Desk Full Stack",
    description:
      "Aplicação para abertura, acompanhamento e fechamento de chamados, com contas de cliente, técnico e administrador, comentários, anexos e painel operacional.",
    stack: ["React", "TypeScript", "Firebase", "Firestore"],
    link: "https://github.com/llucass1998/sistema-chamados",
    image: "./projects/sistema-chamados-screen.png",
    video: "./videos/sistema-chamados.mp4",
    highlights: [
      "Fluxo separado para cliente, técnico e administrador.",
      "Acompanhamento de status, comentários e anexos.",
    ],
  },
  {
    title: "Street Foods",
    type: "Delivery de lanchonete",
    description:
      "Sistema de pedidos com carrinho, cadastro de clientes, painel administrativo, controle de produtos, pagamento, status do pedido e experiência mobile.",
    stack: ["React", "Node.js", "Express", "Prisma", "PostgreSQL"],
    link: "https://github.com/llucass1998/ecomerce-lanches",
    image: "./projects/street-foods-screen.png",
    video: "./videos/street-foods.mp4",
    highlights: [
      "Cardápio, carrinho, checkout e acompanhamento do pedido.",
      "Painel administrativo para produtos, pedidos e dados da loja.",
    ],
  },
  {
    title: "TDB Barbearia",
    type: "Fila online e painel admin",
    description:
      "Projeto para barbearia com atendimento por ordem de chegada, controle de fila, chamada do próximo cliente, painel administrativo e resumo financeiro.",
    stack: ["React", "Node.js", "SQLite", "CSS"],
    link: "https://github.com/llucass1998/barbearia-tdb",
    image: "./projects/tdb-barbearia-screen.png",
    video: "./videos/tdb-barbearia.mp4",
    highlights: [
      "Fila online pensada para o fluxo real da barbearia.",
      "Painel com controle de atendimento e faturamento.",
    ],
  },
  {
    title: "Sistema de Gestão Logística",
    type: "Operação e transporte",
    description:
      "Sistema para organizar dados de operação logística, com foco em cadastro, consulta, estrutura de backend e interface para controle interno.",
    stack: ["TypeScript", "Node.js", "API REST", "React"],
    link: "https://github.com/llucass1998/sistema-gestao-logistica",
    image: "./projects/logistica-screen.png",
    video: "./videos/projeto-next.mp4",
    highlights: [
      "Organização de dados operacionais e cadastros.",
      "Base full stack para evoluir regras internas de logística.",
    ],
  },
];

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "Firebase",
  "PostgreSQL",
  "Prisma",
  "Git/GitHub",
  "APIs REST",
  "CSS responsivo",
];

const valueCards = [
  {
    title: "Interface com propósito",
    text: "Crio telas pensando no usuário final: clareza, fluxo simples, responsividade e ações fáceis de encontrar.",
  },
  {
    title: "Regra de negócio",
    text: "Transformo necessidades reais em funcionalidades como carrinho, fila, painel, status, autenticação e histórico.",
  },
  {
    title: "Projeto completo",
    text: "Busco entregar frontend, backend, banco de dados, README, deploy e apresentação visual para o projeto contar uma história.",
  },
];

const timeline = [
  {
    icon: Wrench,
    title: "Base em TI e suporte",
    text: "Comecei atuando com infraestrutura, suporte técnico e manutenção, criando uma visão prática sobre usuários, problemas reais e rotina operacional.",
  },
  {
    icon: GraduationCap,
    title: "Formação em tecnologia",
    text: "Sou formado em Análise e Desenvolvimento de Sistemas e estou iniciando minha segunda graduação em Engenharia de Software, aprofundando minha base em arquitetura, APIs, banco de dados e frontend.",
  },
  {
    icon: Rocket,
    title: "Projetos com foco real",
    text: "Tenho construído sistemas para negócios locais e operações internas, sempre buscando transformar necessidade de cliente em produto funcional.",
  },
];

const certificates = [
  {
    title: "Curso Técnico",
    issuer: "Senac Brasil",
    description:
      "Formação técnica com base em programação web, suporte de TI, redes, banco de dados e fundamentos de sistemas.",
    image: "./certificados/diploma-senac-preview.png",
    file: "./certificados/certificado-tecnico.pdf",
  },
  {
    title: "JavaScript e TypeScript",
    issuer: "Udemy",
    description:
      "Curso focado em JavaScript, TypeScript, Node.js, APIs, banco de dados, React e fundamentos de desenvolvimento full stack.",
    image: "./certificados/certificado-udemy-preview.png",
    file: "./certificados/certificado-udemy.pdf",
  },
];

const videoDemos = [
  {
    title: "Sistema de Chamados",
    description:
      "Fluxo do service desk com login, abertura de chamados, acompanhamento e painel operacional.",
    src: "./videos/sistema-chamados.mp4",
    poster: "./projects/sistema-chamados-screen.png",
  },
  {
    title: "Street Foods",
    description:
      "Fluxo visual do sistema de delivery, com navegação pelo cardápio e experiência do cliente.",
    src: "./videos/street-foods.mp4",
    poster: "./projects/street-foods-screen.png",
  },
  {
    title: "TDB Barbearia",
    description:
      "Demonstração do sistema de fila online e painel administrativo para barbearia.",
    src: "./videos/tdb-barbearia.mp4",
    poster: "./projects/tdb-barbearia-screen.png",
  },
  {
    title: "Sistema de Gestão Logística",
    description:
      "Demonstração do projeto Next.js com telas de acesso e estrutura para operação logística.",
    src: "./videos/projeto-next.mp4",
    poster: "./projects/logistica-screen.png",
  },
];

function App() {
  const [activeVideo, setActiveVideo] =
    useState<(typeof videoDemos)[number] | null>(null);

  const openProjectVideo = (title: string) => {
    const demo = videoDemos.find((video) => video.title === title);
    if (demo) {
      setActiveVideo(demo);
    }
  };

  return (
    <main>
      <header className="site-header">
        <a className="site-logo" href="#top" aria-label="Voltar ao início">
          <span>LS</span>
          Lucas Souza
        </a>

        <nav aria-label="Navegação principal">
          <a href="#top">Início</a>
          <a href="#trajetoria">Trajetória</a>
          <a href="#projetos">Projetos</a>
          <a
            className="mobile-social"
            href="https://www.linkedin.com/in/lucas-souza-52422b160/"
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            className="mobile-social"
            href="https://github.com/llucass1998"
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir GitHub"
          >
            <Github size={24} />
          </a>
        </nav>

        <div className="nav-socials" aria-label="Redes profissionais">
          <a
            href="https://www.linkedin.com/in/lucas-souza-52422b160/"
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/llucass1998"
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir GitHub"
          >
            <Github size={26} />
          </a>
        </div>

        <a className="nav-contact" href="#contato">
          Contato
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Desenvolvedor Full Stack Júnior</p>
          <h1>
            <span>Construo</span> <span>sistemas web</span>{" "}
            <span>com cara de</span> <span>produto real.</span>
          </h1>
          <p className="hero-text">
            <span>Sou Lucas Souza, do Rio de Janeiro.</span>
            <span>Venho de uma trajetória em TI,</span>
            <span>suporte e infraestrutura.</span>
            <span>Hoje estou focado em React, TypeScript,</span>
            <span>Node.js e banco de dados.</span>
          </p>

          <div className="hero-proof" aria-label="Destaques profissionais">
            <span>
              <Sparkles size={16} /> Portfolio online
            </span>
            <span>
              <ShieldCheck size={16} /> Projetos com código aberto
            </span>
            <span>
              <PlayCircle size={16} /> Demos em vídeo
            </span>
          </div>

          <div className="hero-meta" aria-label="Informações rápidas">
            <span>
              <MapPin size={16} /> Rio de Janeiro, RJ
            </span>
            <span>
              <Code2 size={16} /> React, TypeScript e Node.js
            </span>
          </div>

          <div className="hero-stats" aria-label="Resumo do portfolio">
            <span>
              <strong>4+</strong>
              Projetos completos
            </span>
            <span>
              <strong>2</strong>
              Certificados
            </span>
            <span>
              <strong>Full Stack</strong>
              Em evolução
            </span>
          </div>
        </div>

        <div className="profile-card" aria-label="Foto e resumo de Lucas Souza">
          <div className="profile-strip">
            <span>Open to work</span>
            <span>Junior</span>
          </div>
          <div className="photo-frame">
            <img src="./lucas-photo.png" alt="Foto de Lucas Souza" />
          </div>
          <div className="profile-info">
            <strong>Lucas Souza</strong>
            <span>Full Stack Júnior</span>
          </div>
        </div>
      </section>

      <section className="section resume-section" id="curriculo">
        <div>
          <p className="eyebrow">Currículo</p>
          <h2>Um resumo direto da minha trajetória profissional.</h2>
          <p>
            Preparei um currículo em PDF com minha experiência em TI, transição
            para desenvolvimento, tecnologias principais e projetos publicados.
          </p>
        </div>

        <a
          className="resume-download"
          href="./curriculo-lucas-souza.pdf"
          download
        >
          <FileText size={22} />
          Baixar currículo
          <Download size={18} />
        </a>
      </section>

      <section className="section" id="trajetoria">
        <div className="section-heading">
          <p className="eyebrow">Minha caminhada</p>
          <h2>Da infraestrutura ao desenvolvimento de produtos.</h2>
        </div>

        <div className="timeline">
          {timeline.map((item) => {
            const Icon = item.icon;

            return (
              <article className="timeline-card" key={item.title}>
                <Icon size={24} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">Competências</p>
          <h2>Tecnologias que venho usando nos meus projetos.</h2>
          <p>
            Meu foco atual é criar aplicações completas: interface responsiva,
            backend organizado, autenticação, banco de dados, regras de negócio
            e deploy.
          </p>
        </div>

        <div className="skills-grid" aria-label="Lista de competências">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="section value-section">
        <div className="section-heading">
          <p className="eyebrow">Como eu penso produto</p>
          <h2>Não é só tela bonita: eu tento resolver o fluxo inteiro.</h2>
        </div>

        <div className="value-grid">
          {valueCards.map((card, index) => (
            <article className="value-card" key={card.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projetos">
        <div className="section-heading">
          <p className="eyebrow">Evolução</p>
          <h2>Projetos e formações que mostram minha evolução.</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image-wrap">
                <img
                  className="project-image"
                  src={project.image}
                  alt={`Preview visual do projeto ${project.title}`}
                />
              </div>
              <div className="project-content">
                <div className="project-topline">
                  <span>
                    <BriefcaseBusiness size={18} /> {project.type}
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Abrir ${project.title} no GitHub`}
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="project-impact">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>
                      <CheckCircle2 size={16} />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="stack-list">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <Github size={17} /> Código
                  </a>
                  <button
                    className="video-trigger"
                    type="button"
                    onClick={() => openProjectVideo(project.title)}
                  >
                    <Film size={17} /> Vídeo
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section videos-section">
        <div className="section-heading">
          <p className="eyebrow">Demonstrações</p>
          <h2>Projetos funcionando em vídeo.</h2>
          <p>
            Gravei alguns fluxos dos sistemas para mostrar navegação, telas e
            comportamento real dos projetos no navegador.
          </p>
        </div>

        <div className="videos-grid">
          {videoDemos.map((demo) => (
            <article className="video-card" key={demo.title}>
              <button
                className="video-preview"
                type="button"
                onClick={() => setActiveVideo(demo)}
                aria-label={`Assistir vídeo do projeto ${demo.title}`}
              >
                <img src={demo.poster} alt={`Preview do vídeo ${demo.title}`} />
                <span>
                  <PlayCircle size={46} />
                </span>
              </button>
              <div>
                <span>
                  <Film size={18} /> Vídeo demo
                </span>
                <h3>{demo.title}</h3>
                <p>{demo.description}</p>
                <button type="button" onClick={() => setActiveVideo(demo)}>
                  Assistir demo <ArrowUpRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section certificates-section">
        <div className="section-heading">
          <p className="eyebrow">Certificados</p>
          <h2>Formações que reforçam minha base técnica.</h2>
        </div>

        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <article className="certificate-card" key={certificate.title}>
              <img
                src={certificate.image}
                alt={`Certificado ${certificate.title}`}
              />
              <div>
                <span>
                  <Award size={18} /> {certificate.issuer}
                </span>
                <h3>{certificate.title}</h3>
                <p>{certificate.description}</p>
                <small>Arquivo oficial anexado.</small>
                <div className="certificate-actions">
                  <a href={certificate.file} target="_blank" rel="noreferrer">
                    <Eye size={16} /> Ver PDF
                  </a>
                  <a href={certificate.file} download>
                    <Download size={16} /> Baixar
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contato">
        <div>
          <p className="eyebrow">Contato</p>
          <h2>Vamos conversar sobre oportunidades e projetos.</h2>
          <p>
            Estou buscando evoluir como desenvolvedor júnior, participar de
            projetos reais e construir soluções que resolvam problemas de
            verdade.
          </p>
        </div>

        <div className="contact-actions">
          <a href="mailto:llucas.ab@gmail.com?subject=Contato%20pelo%20portfolio%20-%20Lucas%20Souza&body=Ola%20Lucas%2C%20vi%20seu%20portfolio%20e%20gostaria%20de%20conversar.">
            <Mail size={18} /> E-mail
          </a>
          <a
            href="https://wa.me/5521982507512"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} /> WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-souza-52422b160/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href="https://github.com/llucass1998"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} /> GitHub
          </a>
        </div>
      </section>

      <footer>
        <span>
          <ShieldCheck size={16} /> Portfólio criado para apresentar projetos,
          trajetória e stack de desenvolvimento.
        </span>
      </footer>

      {activeVideo ? (
        <div
          className="video-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Vídeo do projeto ${activeVideo.title}`}
        >
          <button
            className="modal-backdrop"
            type="button"
            aria-label="Fechar vídeo"
            onClick={() => setActiveVideo(null)}
          />
          <div className="modal-panel">
            <div className="modal-header">
              <div>
                <span>Demonstração</span>
                <h3>{activeVideo.title}</h3>
              </div>
              <button
                className="modal-close"
                type="button"
                onClick={() => setActiveVideo(null)}
                aria-label="Fechar modal"
              >
                <X size={22} />
              </button>
            </div>
            <video controls autoPlay playsInline poster={activeVideo.poster}>
              <source src={activeVideo.src} type="video/mp4" />
              Seu navegador não suporta vídeo HTML5.
            </video>
            <p>{activeVideo.description}</p>
          </div>
        </div>
      ) : null}
    </main>
  );
}

export default App;
