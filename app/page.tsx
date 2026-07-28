const brands = [
  ["AVSA Grupo Inmobiliario", "avsa"],
  ["Bilz y Pap", "bilz-pap"],
  ["Cachantún", "cachantun"],
  ["Lay’s", "lays"],
  ["Lucchetti", "lucchetti"],
  ["Fantasilandia", "fantasilandia"],
  ["TOCTOC", "toctoc"],
  ["Kem", "kem"],
  ["JAECOO", "jaecoo"],
  ["Super Pollo", "super-pollo"],
  ["Trattoria", "trattoria"],
  ["Rexona", "rexona"],
  ["Sedal", "sedal"],
  ["Selecta", "selecta"],
  ["Pepsodent", "pepsodent"],
  ["Parque Arauco", "parque-arauco"],
  ["Le Sancy", "le-sancy"],
  ["OMODA", "omoda"],
  ["Unilever", "unilever"],
  ["AFP Habitat", "afp-habitat"],
  ["Hellmann’s", "hellmanns"],
  ["Dove", "dove"],
  ["Dove Men+Care", "dove-men-care"],
  ["Carozzi", "carozzi"],
  ["Banco de Chile", "banco-de-chile"],
  ["AXE", "axe"],
  ["Claro", "claro"],
  ["Pomarola", "pomarola"],
  ["DercoCenter", "dercocenter"],
  ["Scotiabank", "scotiabank"],
  ["SURA", "sura"],
  ["CMPC", "cmpc"],
  ["Gobierno de Chile", "gobierno-chile"],
  ["Sika", "sika"],
  ["Surlat", "surlat"],
  ["AFP Capital", "afp-capital"],
  ["Inferno", "inferno"],
  ["Té Club", "te-club"],
  ["Bupa", "bupa"],
  ["Cpech", "cpech"],
  ["Duoc UC", "duoc-uc"],
  ["INACAP", "inacap"],
  ["Nescafé", "nescafe"],
  ["Haval", "haval"],
] as const;

const companies = [
  ["Boston 261", "boston"],
  ["Wunderman Thompson", "wt"],
  ["Porta", "porta"],
  ["Raya", "raya"],
  ["La Familia", "la-familia"],
  ["BBDO", "bbdo"],
  ["Duoc UC", "duoc"],
  ["WM Banca Inversiones", "wm-banca-inversiones"],
] as const;

const skills = [
  {
    category: "Estrategia",
    title: "Estrategia digital",
    description:
      "Diseño ecosistemas que conectan contenido, medios, audiencias y objetivos comerciales.",
  },
  {
    category: "Estrategia",
    title: "Product Marketing",
    description:
      "Transformo productos y servicios complejos en propuestas de valor claras, relevantes y accionables.",
  },
  {
    category: "Creatividad",
    title: "Conceptualización creativa",
    description:
      "Convierto tensiones humanas y desafíos de negocio en ideas capaces de sostener campañas y contenidos.",
  },
  {
    category: "Comunicación",
    title: "Contenido multiplataforma",
    description:
      "Adapto mensajes, formatos y narrativas al rol que cumple cada plataforma dentro de la estrategia.",
  },
  {
    category: "Negocio",
    title: "Marketing management",
    description:
      "Ordeno equipos, prioridades, marcas y canales para convertir la estrategia en una operación medible.",
  },
  {
    category: "Resultados",
    title: "Performance y medición",
    description:
      "Leo datos y resultados para detectar oportunidades, optimizar campañas y orientar mejores decisiones.",
  },
  {
    category: "Innovación",
    title: "IA y automatización",
    description:
      "Integro inteligencia artificial y automatizaciones para acelerar procesos sin perder criterio estratégico.",
  },
  {
    category: "Liderazgo",
    title: "Docencia y formación",
    description:
      "Traduzco experiencia profesional en herramientas prácticas para equipos y nuevas generaciones de publicistas.",
  },
  {
    category: "Idiomas",
    title: "Traducción y adaptación EN–ES",
    description:
      "Adapto mensajes entre culturas cuidando intención, tono de marca y efectividad comunicacional.",
  },
] as const;

const platforms = [
  ["Meta Ads", "Planificación, activación y optimización de campañas orientadas a audiencia, contenido y conversión."],
  ["Google Ads", "Estrategias de búsqueda y medios para capturar demanda y apoyar objetivos comerciales."],
  ["LinkedIn Ads", "Comunicación B2B, posicionamiento profesional y generación de oportunidades de negocio."],
  ["Analytics", "Lectura de comportamiento, campañas y recorridos digitales para convertir datos en decisiones."],
  ["WordPress", "Desarrollo y gestión de sitios, landings y experiencias digitales orientadas a conversión."],
  ["Figma", "Diseño colaborativo de interfaces, sistemas visuales y prototipos para productos digitales."],
  ["Canva", "Producción ágil y escalable de contenidos, presentaciones y recursos de marca."],
  ["Make", "Automatización de flujos entre formularios, bases de datos, comunicaciones y equipos."],
  ["n8n", "Orquestación de procesos e integraciones más avanzadas entre herramientas y datos."],
  ["ChatGPT", "Investigación, ideación, contenido, análisis y construcción de asistentes aplicados al trabajo."],
  ["Claude", "Desarrollo de documentos extensos, sistemas de conocimiento y procesos estratégicos."],
  ["Codex", "Creación y mejora de sitios, herramientas y experiencias digitales mediante código asistido."],
] as const;

const profileMix = [
  [
    "Publicista",
    "11 años",
    "Creo ideas estratégicas sostenidas por una creatividad sólida, conectando cultura, contenido y negocio para construir campañas relevantes.",
  ],
  [
    "Estratega",
    "9 años",
    "Diseño estrategias 360 que articulan marcas, canales, equipos y datos para cumplir objetivos de corto plazo y construir valor a largo plazo.",
  ],
  [
    "Traductor EN–ES",
    "2 años",
    "Trabajo desde la traducción y la transcreación para trasladar mensajes entre culturas, lenguas y contextos, preservando su intención, tono y efecto.",
  ],
  [
    "Docente universitario de marketing y publicidad",
    "1 año",
    "Entrego herramientas actuales para que los estudiantes comprendan qué mueve la industria y desarrollen perfiles preparados para las agencias de hoy.",
  ],
] as const;

const projectPreviews = [
  {
    number: "01",
    type: "Estrategia · Ecosistema de marcas",
    title: "Grupo Inteligencia",
    description:
      "De productos financieros complejos a experiencias claras, confiables y accionables.",
    futureContent: "Estrategia · Arquitectura de marcas · Contenido · Automatización · Resultados",
  },
  {
    number: "02",
    type: "Creatividad · Campaña integrada",
    title: "Campaña de agencia",
    description:
      "Una idea emblemática de mi recorrido en agencias, desde el insight hasta su despliegue digital.",
    futureContent: "Desafío · Insight · Idea · Mi rol · Piezas · Créditos",
  },
  {
    number: "03",
    type: "Plataforma creativa · Negocio",
    title: "Duerme tranquilo",
    description:
      "Una tensión humana convertida en una plataforma capaz de unir comunicación y propuesta de valor.",
    futureContent: "Concepto · Sistema verbal · Adaptaciones · Aplicaciones · Impacto",
  },
  {
    number: "04",
    type: "Docencia · Formación aplicada",
    title: "Duoc UC",
    description:
      "La experiencia de la industria transformada en metodologías para formar nuevos publicistas.",
    futureContent: "Asignaturas · Metodología · Casos · Herramientas · Aprendizajes",
  },
  {
    number: "05",
    type: "Traducción · Adaptación cultural",
    title: "EN–ES",
    description:
      "Un microcaso para demostrar cómo una idea conserva su intención cuando cambia de idioma, cultura y contexto.",
    futureContent: "Original · Desafío de tono · Decisión · Adaptación final · Aprendizaje",
  },
] as const;

export default function Home() {
  return (
    <main className="home">
      <section className="hero" aria-labelledby="hero-title">
        <div className="portrait" aria-label="Memoji animado de Rodrigo">
          <video
            className="portrait__video"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/assets/rodrigo-memoji-poster.jpg"
          >
            <source src="/assets/rodrigo-memoji.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="identity">
          <h1 id="hero-title" className="identity__name">
            <span className="identity__first">
              <span>Rod</span>
              <strong>rigo</strong>
              <span> Patricio</span>
            </span>
            <strong className="identity__last">Bartierra Valdivia</strong>
          </h1>
          <p className="identity__roles">Publicista, traductor y docente universitario</p>
          <p className="identity__statement">
            Creo oportunidades donde la creatividad y la estrategia impulsan el negocio.
          </p>

          <nav className="social-bar" aria-label="Redes sociales y contacto">
            <a href="https://www.behance.net/arrobarigo" target="_blank" rel="noreferrer" aria-label="Ver Behance de Rodrigo">
              <FaBehance aria-hidden="true" /><span>Behance</span>
            </a>
            <a href="https://www.linkedin.com/in/arrobarigo/overlay/contact-info/" target="_blank" rel="noreferrer" aria-label="Ver LinkedIn de Rodrigo">
              <FaLinkedinIn aria-hidden="true" /><span>LinkedIn</span>
            </a>
            <a href="https://calendar.app.google/ptTXuKVzRUcqtEc1A" target="_blank" rel="noreferrer" aria-label="Agendar una reunión con Rodrigo">
              <SiGooglecalendar aria-hidden="true" /><span>Agendar</span>
            </a>
            <a href="https://wa.me/56935864277" target="_blank" rel="noreferrer" aria-label="Conversar con Rodrigo por WhatsApp">
              <FaWhatsapp aria-hidden="true" /><span>WhatsApp</span>
            </a>
          </nav>
        </div>

        <a className="scroll-cue" href="#perfil" aria-label="Explorar mi perfil y trabajo">
          <span>Explora mi trabajo</span>
        </a>
      </section>

      <section id="perfil" className="profile-mix" aria-labelledby="profile-mix-title">
        <div className="profile-mix__intro">
          <p>Un perfil, distintas perspectivas</p>
          <h2 id="profile-mix-title">No trabajo desde una sola disciplina.</h2>
          <span>
            Combino publicidad, estrategia, contenido, traducción, tecnología y
            docencia para convertir desafíos complejos en oportunidades de negocio.
          </span>
        </div>
        <div className="profile-mix__grid">
          {profileMix.map(([title, years, description]) => (
            <article className="profile-role" tabIndex={0} key={title}>
              <span className="profile-role__years">{years}</span>
              <strong>{title}</strong>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="proyectos" className="selected-work" aria-labelledby="selected-work-title">
        <div className="selected-work__heading">
          <p>Vista previa de la próxima etapa</p>
          <h2 id="selected-work-title">Proyectos seleccionados</h2>
          <span>
            Esta será la sección principal del portafolio. Cada espacio se convertirá
            en un caso completo cuando incorporemos sus materiales y resultados.
          </span>
        </div>

        <div className="projects-grid">
          {projectPreviews.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-card__visual" aria-hidden="true">
                <span>{project.number}</span>
                <i>Próximamente</i>
              </div>
              <div className="project-card__content">
                <p>{project.type}</p>
                <h3>{project.title}</h3>
                <span>{project.description}</span>
                <small>{project.futureContent}</small>
                <div className="project-card__action" aria-hidden="true">
                  Explorar caso
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="marcas" className="experience" aria-labelledby="brands-title">
        <div className="experience__heading">
          <h2 id="brands-title">Marcas con las que he trabajado</h2>
        </div>

        <div className="marquee">
          <div className="marquee__track marquee__track--brands">
            {[0, 1].map((copy) => (
              <div className="marquee__set" aria-hidden={copy === 1} key={copy}>
                {brands.map(([name, slug]) => (
                  <figure className="marquee__item brand" key={`${copy}-${slug}`}>
                    <img
                      src={`/brands/${slug}.png`}
                      alt={copy === 0 ? name : ""}
                      width="240"
                      height="96"
                    />
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="experience__heading experience__heading--companies">
          <h2>Experiencia laboral</h2>
        </div>

        <div className="marquee marquee--companies">
          <div className="marquee__track marquee__track--companies">
            {[0, 1].map((copy) => (
              <div className="marquee__set" aria-hidden={copy === 1} key={copy}>
                {companies.map(([name, slug]) => (
                  <figure className="marquee__item company" key={`${copy}-${slug}`}>
                    <img
                      src={`/companies/${slug}.png`}
                      alt={copy === 0 ? name : ""}
                      width="240"
                      height="96"
                    />
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="capabilities" aria-labelledby="skills-title">
        <div className="capabilities__intro">
          <p>Lo que conecta mi experiencia</p>
          <h2 id="skills-title">Skills &amp; plataformas</h2>
          <span>Pasa el cursor o toca cada elemento para conocer más.</span>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <button className="skill-card" type="button" key={skill.title}>
              <span className="skill-card__category">{skill.category}</span>
              <strong>{skill.title}</strong>
              <span className="skill-card__detail">{skill.description}</span>
              <span className="skill-card__cue" aria-hidden="true">+</span>
            </button>
          ))}
        </div>

        <div className="platforms" aria-labelledby="platforms-title">
          <h3 id="platforms-title">Plataformas y herramientas</h3>
          <div className="platforms__grid">
            {platforms.map(([name, description]) => (
              <button className="platform" type="button" key={name}>
                <strong>{name}</strong>
                <span>{description}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-cta" aria-labelledby="contact-title">
        <p>¿Tienes un desafío complejo?</p>
        <h2 id="contact-title">
          Conversemos sobre cómo transformarlo en una oportunidad.
        </h2>
        <div className="contact-cta__actions">
          <a className="contact-cta__calendar" href="https://calendar.app.google/ptTXuKVzRUcqtEc1A" target="_blank" rel="noreferrer">
            <SiGooglecalendar aria-hidden="true" />
            <span>Agendar una reunión</span>
          </a>
          <a className="contact-cta__whatsapp" href="https://wa.me/56935864277" target="_blank" rel="noreferrer">
            <FaWhatsapp aria-hidden="true" />
            <span>Hablar por WhatsApp</span>
          </a>
        </div>
      </section>

      <footer className="legal-footer">
        <div className="legal-footer__inner">
          <p className="legal-footer__copyright">© 2026 Rodrigo Bartierra</p>
          <p className="legal-footer__description">
            Este sitio reúne una selección de trabajos, experiencias y capacidades
            desarrolladas a lo largo de mi trayectoria profesional. Las marcas,
            logotipos y piezas pertenecen a sus respectivos titulares y se presentan
            únicamente con fines informativos y de portafolio, reconociendo la
            participación de equipos, agencias y clientes. Su exhibición no implica
            una relación comercial vigente, patrocinio ni representación.
          </p>
        </div>
      </footer>
    </main>
  );
}
import { FaBehance, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { SiGooglecalendar } from "react-icons/si";
