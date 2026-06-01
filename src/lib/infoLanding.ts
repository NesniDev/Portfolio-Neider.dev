import { TECHNOLOGIES } from './Technologies-Projects'

interface Tab {
  name: string
  isCode: boolean
  content: string | object
  lenguaje?: string,
  experience?: string | object,
}

export const TABS: Record<string, Tab> = {
  welcome: {
    name: 'welcome',
    isCode: false,
    content: 'Bienvenido al portfolio de Neider'
  },
  profile: {
    name: 'perfil.json',
    isCode: true,
    lenguaje: 'json',
    content: {
      name: "Neider Stith Nieto Rodríguez",
      Career: "Ingeniero de Sistemas | Desarrollador Frontend | Especialista en marketing | Técnico en Sistemas",
      location: "Boyacá, Colombia",
      email: "nestnidev17@gmail.com",
      summary: "Ingeniero de sistemas con experiencia en desarrollo frontend, bases de datos, administración de sistemas y docencia en áreas de tecnología. Especializado en la enseñanza de programación, diseño de software educativo y desarrollo de soluciones web modernas enfocadas en la eficiencia y escalabilidad.",
      languages: [
        "Español (Nativo)",
        "Inglés (B1-B2 en desarrollo)"
      ],
      interests: [
        "Desarrollo Web Frontend y Backend",
        "Arquitectura de Software",
        "Automatización de procesos - n8n"
      ],
      availability: "Disponible para proyectos freelance o en contratación",
      resume: "/Hojadevida.pdf",
      setup: {
        os: "Windows / Linux / WSL",
        cpu: "Ryzen 7 8700F",
        ram: "32 GB",
        gpu: "NVIDIA GeForce RTX 3050",
        editor: "VS Code | windsurf",
        agents: "Opencode"
      },
      socials: {
        github: "https://github.com/NesniDev",
        linkedin: "https://linkedin.com/in/neidernieto ",
        portfolio: "https://neider.dev"
      },

    }
  },
  projects: {
    name: 'projects.json',
    isCode: true,
    lenguaje: '',
    content: [
      {
        url: '/img/solvepc.webp',
        title: 'SolvePc',
        technologies: [
          TECHNOLOGIES.HTML,
          TECHNOLOGIES.CSS,
          TECHNOLOGIES.JAVASCRIPT,
          TECHNOLOGIES.ASTRO,
          TECHNOLOGIES.REACT,
          TECHNOLOGIES.DOCKER,
          TECHNOLOGIES.POSTGRESQL,
          TECHNOLOGIES.EXPRESS
        ],
        text: 'SolvePc es una plataforma web que ofrece servicios de resolución de problemas de computadoras online.',
        gh: 'https://github.com/NesniDev/SolvePc',
        page: 'https://solve-pc.vercel.app/',
        badge: 'Completed',
        language: 'JavaScript',
        forks: 0
      },
      {
        url: '/img/infoByte.webp',
        title: 'InfoByte',
        technologies: [
          TECHNOLOGIES.HTML,
          TECHNOLOGIES.CSS,
          TECHNOLOGIES.TAILWIND,
          TECHNOLOGIES.ASTRO,
          TECHNOLOGIES.JAVASCRIPT
        ],
        text: 'El objetivo principal es desarrollar una plataforma digital moderna para IFE Colombia, mostrando sus servicios y fortaleciendo su presencia en línea con un diseño atractivo y funcional.',
        gh: 'https://github.com/NesniDev/TecnicoSistemas',
        page: 'https://tecnico-sistemas.vercel.app',
        badge: 'Completed',
        language: 'JavaScript',
        forks: 0
      },
      {
        url: '/img/futbol.webp',
        title: 'Canchas de fútbol',
        technologies: [
          TECHNOLOGIES.HTML,
          TECHNOLOGIES.CSS,
          TECHNOLOGIES.REACT,
          TECHNOLOGIES.TAILWIND,
          TECHNOLOGIES.NODEJS,
          TECHNOLOGIES.EXPRESS
        ],
        text: 'El objetivo principal es desarrollar una plataforma donde los usuarios de Chiquinquirá podrán ver las canchas disponibles, hacer su reserva y pagar por la misma de manera sencilla y rápida. ',
        gh: 'https://github.com/NesniDev/Field-Football',
        page: 'https://field-football.vercel.app',
        badge: 'In Progress',
        language: 'JavaScript',
        forks: 0
      },
      {
        url: '/img/inventario.avif',
        title: 'Inventario',
        technologies: [
          TECHNOLOGIES.HTML,
          TECHNOLOGIES.CSS,
          TECHNOLOGIES.TAILWIND,
          TECHNOLOGIES.REACT,
          TECHNOLOGIES.NODEJS,
          TECHNOLOGIES.POSTGRESQL,
          TECHNOLOGIES.DOCKER
        ],
        text: 'El objetivo principal es desarrollar una plataforma digital para el inventario de productos de manera local, con el fin de fortalecer su presencia en línea mediante la creación de un sitio web moderno y funcional.',
        gh: 'https://github.com/NesniDev/InventarioVL',
        page: 'https://inventariovl.netlify.app/',
        badge: 'Completed',
        language: 'JavaScript',
        forks: 0
      },
      {
        url: '/img/quiz.avif',
        title: 'Quiz',
        technologies: [
          TECHNOLOGIES.HTML,
          TECHNOLOGIES.CSS,
          TECHNOLOGIES.REACT,
          TECHNOLOGIES.NODEJS,
          TECHNOLOGIES.POSTGRESQL
        ],
        text: 'El objetivo principal es desarrollar una plataforma digital para realizar quizzes interactivos, con el fin de fortalecer su presencia en línea mediante la creación de un sitio web moderno y funcional.',
        gh: 'https://github.com/NesniDev/pagequiz',
        page: 'https://pagequiz.netlify.app/',
        badge: 'Completed'
      },
      {
        url: '/img/artex.avif',
        title: 'Página de ArtexAlex',
        technologies: [
          TECHNOLOGIES.HTML,
          TECHNOLOGIES.CSS,
          TECHNOLOGIES.ASTRO,
          TECHNOLOGIES.JAVASCRIPT,
          TECHNOLOGIES.TAILWIND
        ],
        text: 'El principal objetivo era crear una plataforma digital que reflejara la creatividad y habilidad artesanal del taller, para fortalecer su presencia en línea mediante la creación de un sitio web moderno y funcional.',
        gh: 'https://github.com/NesniDev/ArtexAlex',
        page: 'https://artexalex.pages.dev/',
        badge: 'Completed',
        language: 'JavaScript',
        forks: 0
      },
      {
        url: '/img/Lawyer.webp',
        title: 'Página de Abogada',
        technologies: [
          TECHNOLOGIES.HTML,
          TECHNOLOGIES.CSS,
          TECHNOLOGIES.TAILWIND,
          TECHNOLOGIES.ASTRO,
          TECHNOLOGIES.JAVASCRIPT
        ],
        text: 'El objetivo principal era proporcionar una plataforma digital que reflejara la profesionalidad y experiencia del bufete, para desarrollar su presencia en línea mediante la creación de una página web moderna y funcional.',
        gh: 'https://github.com/NesniDev/Page-Lawyer',
        page: 'https://page-lawyer-nesnidevs-projects.vercel.app',
        badge: 'Completed',
        language: 'JavaScript',
        forks: 0
      },
      {
        url: '/img/API.avif',
        title: 'Página de visualización de APIs',
        technologies: [
          TECHNOLOGIES.HTML,
          TECHNOLOGIES.CSS,
          TECHNOLOGIES.JAVASCRIPT,
          TECHNOLOGIES.ASTRO,
          TECHNOLOGIES.TAILWIND
        ],
        text: 'El objetivo principal era desarrollar una plataforma para la visualización de APIS, que he creado durante mi proceso de aprendizaje y que permitirá a los usuarios acceder a la información de manera fácil y sencilla.',
        gh: 'https://github.com/NesniDev/View-Projects-Api',
        page: 'https://view-projects-api.vercel.app/',
        badge: 'In Progress'
      },
      {
        url: '/img/chatbot.avif',
        title: 'Chatbot',
        technologies: [
          TECHNOLOGIES.JAVASCRIPT,
          TECHNOLOGIES.NODEJS,
          TECHNOLOGIES.EXPRESS
        ],
        text: 'El objetivo es tener un chatbot que permita interactuar con los usuarios, donde se pueda enviar y recibir mensajes en tiempo real.',
        gh: 'https://github.com/NesniDev/BOT-IFE',
        badge: 'In Progress',
        language: 'JavaScript',
        forks: 0
      },

      {
        url: '/img/chat.avif',
        title: 'Chat GPT - Local',
        technologies: [
          TECHNOLOGIES.ASTRO,
          TECHNOLOGIES.TAILWIND,
          TECHNOLOGIES.JAVASCRIPT
        ],
        text: 'El objetivo es tener un chat local que permita interactuar como ChatGPT, donde se pueda enviar y recibir mensajes en tiempo real.',
        gh: 'https://github.com/NesniDev/CHATGPT-LOCAL',
        page: 'https://ch4t-l0c41.netlify.app/',
        badge: 'Completed',
        language: 'Node JS',
        forks: 0
      },
      {
        url: '/img/bar.avif',
        title: 'Página de Bar',
        technologies: [
          TECHNOLOGIES.HTML,
          TECHNOLOGIES.CSS,
          TECHNOLOGIES.JAVASCRIPT
        ],
        text: 'El objetivo principal era desarrollar una plataforma digital para el ambiente acogedor del bar, con el fin de fortalecer su presencia en línea mediante la creación de un sitio web moderno y funcional.',
        gh: 'https://github.com/NesniDev/Page-Bar.dev',
        page: 'https://bar-ib.netlify.app/',
        badge: 'Completed',
        language: 'JavaScript',
        forks: 0
      },
      {
        url: '/img/ecommerce.png',
        title: 'Página de Ecommerce',
        technologies: [
          TECHNOLOGIES.REACT,
          TECHNOLOGIES.HTML,
          TECHNOLOGIES.CSS,
          TECHNOLOGIES.JAVASCRIPT,
          TECHNOLOGIES.TAILWIND
        ],
        text: 'Este ecommerce fue creado para la empresa de ropa femenina, con el fin de fortalecer su presencia en línea mediante la creación de un sitio web moderno y funcional.',
        gh: 'https://github.com/NesniDev/Ecommerce',
        page: 'https://ecommerce-products-api.netlify.app',
        badge: 'Completed',
        language: 'JavaScript',
        forks: 0
      }
    ]
  },
  skills: {
    name: 'projects.json',
    isCode: true,
    lenguaje: '',
    content: [
      // Frontend
      {
        logo: '/Technologies/Frontend/Html.svg',
        name: 'HTML',
        category: 'Frontend',
        status: 'Installed',
        description: 'Standard markup language for creating web pages',
        company: 'WHATWG',
        downloads: 'N/A',
        stars: 'N/A'
      },
      {
        logo: '/Technologies/Frontend/Css.svg',
        name: 'CSS',
        category: 'Frontend',
        status: 'Installed',
        description: 'Style sheet language used for describing web presentation',
        company: 'W3C',
        downloads: 'N/A',
        stars: 'N/A'
      },
      {
        logo: '/Technologies/Frontend/Javascript.svg',
        name: 'Javascript',
        category: 'Frontend',
        status: 'Installed',
        description: 'Programming language for interactive web applications',
        company: 'ECMA International',
        downloads: 'N/A',
        stars: 'N/A'
      },
      {
        logo: '/Technologies/Frontend/Typescript.svg',
        name: 'Typescript',
        category: 'Frontend',
        status: 'Installed',
        description: 'Typed superset of JavaScript for scalable applications',
        company: 'Microsoft',
        downloads: '70M+',
        stars: '100k+'
      },
      {
        logo: '/Technologies/Frontend/React.svg',
        name: 'React',
        category: 'Frontend',
        status: 'Installed',
        description: 'A JavaScript library for building user interfaces',
        company: 'Meta',
        downloads: '45M+',
        stars: '230k+'
      },
      {
        logo: '/Technologies/Frontend/NextJs.svg',
        name: 'NextJs',
        category: 'Frontend',
        status: 'Installed',
        description: 'React framework for full-stack web applications',
        company: 'Vercel',
        downloads: '20M+',
        stars: '130k+'
      },
      {
        logo: '/Technologies/Frontend/Astro.svg',
        name: 'Astro',
        category: 'Frontend',
        status: 'Installed',
        description: 'Modern static site builder for content-driven websites',
        company: 'Astro',
        downloads: '5M+',
        stars: '50k+'
      },
      {
        logo: '/Technologies/Frontend/Tailwind.svg',
        name: 'Tailwind',
        category: 'Frontend',
        status: 'Installed',
        description: 'Utility-first CSS framework for rapid UI development',
        company: 'Tailwind Labs',
        downloads: '30M+',
        stars: '85k+'
      },
      {
        logo: '/Technologies/Frontend/Bootstrap.svg',
        name: 'Bootstrap',
        category: 'Frontend',
        status: 'Installed',
        description: 'Popular CSS framework for responsive web design',
        company: 'OpenJS Foundation',
        downloads: '20M+',
        stars: '170k+'
      },
      {
        logo: '/Technologies/Frontend/Sass.svg',
        name: 'SASS',
        category: 'Frontend',
        status: 'Installed',
        description: 'CSS preprocessor with variables and advanced features',
        company: 'Sass Team',
        downloads: '15M+',
        stars: '15k+'
      },
      {
        logo: '/Technologies/Frontend/MarkDown.svg',
        name: 'Markdown',
        category: 'Frontend',
        status: 'Installed',
        description: 'Lightweight markup language for formatted text',
        company: 'Community',
        downloads: 'N/A',
        stars: 'N/A'
      },
      {
        logo: '/Technologies/Frontend/ViteJs.svg',
        name: 'Vite',
        category: 'Frontend',
        status: 'Installed',
        description: 'Fast frontend tooling and build system',
        company: 'Evan You',
        downloads: '25M+',
        stars: '70k+'
      },
      {
        logo: '/Technologies/Frontend/Vitest.svg',
        name: 'Vitest',
        category: 'Frontend',
        status: 'Installed',
        description: 'Blazing fast unit test framework powered by Vite',
        company: 'Vitest Team',
        downloads: '8M+',
        stars: '15k+'
      },
      {
        logo: '/Technologies/Frontend/Wordpress.svg',
        name: 'WordPress',
        category: 'Frontend',
        status: 'Installed',
        description: 'Open-source content management system',
        company: 'Automattic',
        downloads: '100M+',
        stars: '18k+'
      },
      {
        logo: '/Technologies/Frontend/Shadcn.svg',
        name: 'Shadcn',
        category: 'Frontend',
        status: 'Installed',
        description: 'Reusable UI components built on Radix UI and Tailwind',
        company: 'shadcn',
        downloads: '5M+',
        stars: '90k+'
      },

      // Backend
      {
        logo: '/Technologies/Backend/NodeJs.svg',
        name: 'NodeJs',
        category: 'Backend',
        status: 'Installed',
        description: 'JavaScript runtime built on Chrome V8 engine',
        company: 'OpenJS Foundation',
        downloads: '50M+',
        stars: '110k+'
      },
      {
        logo: '/Technologies/Backend/Python.svg',
        name: 'Python',
        category: 'Backend',
        status: 'Installed',
        description: 'High-level programming language for general-purpose development',
        company: 'Python Software Foundation',
        downloads: '60M+',
        stars: '65k+'
      },
      {
        logo: '/Technologies/Backend/Nestjs.svg',
        name: 'NestJs',
        category: 'Backend',
        status: 'Installed',
        description: 'Progressive Node.js framework for scalable applications',
        company: 'NestJS Team',
        downloads: '12M+',
        stars: '70k+'
      },
      {
        logo: '/Technologies/Backend/Sql.svg',
        name: 'SQLite',
        category: 'Backend',
        status: 'Installed',
        description: 'Lightweight embedded SQL database engine',
        company: 'SQLite Consortium',
        downloads: 'N/A',
        stars: 'N/A'
      },
      {
        logo: '/Technologies/Backend/MongoDB.svg',
        name: 'MongoDB',
        category: 'Backend',
        status: 'Installed',
        description: 'NoSQL document-oriented database',
        company: 'MongoDB Inc.',
        downloads: '25M+',
        stars: '30k+'
      },
      {
        logo: '/Technologies/Backend/Express.svg',
        name: 'Express',
        category: 'Backend',
        status: 'Installed',
        description: 'Minimal and flexible Node.js web framework',
        company: 'OpenJS Foundation',
        downloads: '30M+',
        stars: '68k+'
      },
      {
        logo: '/Technologies/Backend/Postgresql.svg',
        name: 'PostgreSQL',
        category: 'Backend',
        status: 'Installed',
        description: 'Advanced open-source relational database system',
        company: 'PostgreSQL Global Development Group',
        downloads: '15M+',
        stars: '15k+'
      },
      {
        logo: '/Technologies/Backend/Php.svg',
        name: 'PHP',
        category: 'Backend',
        status: 'Installed',
        description: 'General-purpose scripting language for web development',
        company: 'PHP Group',
        downloads: '40M+',
        stars: '38k+'
      },
      {
        logo: '/Technologies/Backend/Java.svg',
        name: 'Java',
        category: 'Backend',
        status: 'Installed',
        description: 'Object-oriented programming language and platform',
        company: 'Oracle',
        downloads: '50M+',
        stars: 'N/A'
      },

      // Otros
      {
        logo: '/Technologies/Otros/Git.svg',
        name: 'Git',
        category: 'Others',
        status: 'Installed',
        description: 'Distributed version control system',
        company: 'Git Project',
        downloads: '100M+',
        stars: '50k+'
      },
      {
        logo: '/Technologies/Otros/GitHub.svg',
        name: 'GitHub',
        category: 'Others',
        status: 'Installed',
        description: 'Platform for hosting and collaborating on code',
        company: 'Microsoft',
        downloads: 'N/A',
        stars: 'N/A'
      },
      {
        logo: '/Technologies/Otros/Docker.svg',
        name: 'Docker',
        category: 'Others',
        status: 'Installed',
        description: 'Platform for containerized application deployment',
        company: 'Docker Inc.',
        downloads: '20M+',
        stars: '70k+'
      },
      {
        logo: '/Technologies/Otros/n8n.svg',
        name: 'n8n',
        category: 'Others',
        status: 'Installed',
        description: 'Workflow automation tool for developers',
        company: 'n8n GmbH',
        downloads: '3M+',
        stars: '60k+'
      },
      {
        logo: '/Technologies/Otros/Excel.svg',
        name: 'Excel',
        category: 'Others',
        status: 'Installed',
        description: 'Spreadsheet software for data analysis',
        company: 'Microsoft',
        downloads: 'N/A',
        stars: 'N/A'
      },
      {
        logo: '/Technologies/Otros/Linux.svg',
        name: 'Linux',
        category: 'Others',
        status: 'Installed',
        description: 'Open-source operating system kernel',
        company: 'Linux Foundation',
        downloads: 'N/A',
        stars: '180k+'
      },
      {
        logo: '/Technologies/Otros/Notion.svg',
        name: 'Notion',
        category: 'Others',
        status: 'Installed',
        description: 'All-in-one workspace for notes and productivity',
        company: 'Notion Labs',
        downloads: '10M+',
        stars: 'N/A'
      },
      {
        logo: '/Technologies/Otros/Bun.svg',
        name: 'Bun',
        category: 'Others',
        status: 'Installed',
        description: 'Fast JavaScript runtime and toolkit',
        company: 'Oven',
        downloads: '4M+',
        stars: '75k+'
      },
      {
        logo: '/Technologies/Otros/Vercel.svg',
        name: 'Vercel',
        category: 'Others',
        status: 'Installed',
        description: 'Cloud platform for frontend deployment',
        company: 'Vercel',
        downloads: 'N/A',
        stars: 'N/A'
      }
    ]
  },
  experience: {

    name: 'projects.json',
    isCode: false,
    lenguaje: '',
    content: [
      {
        hash: 'a1b2c3d',
        type: 'feat',
        title: 'Docente de Técnico en Sistemas',
        subtitle: 'IFE COLOMBIA',
        category: 'Job',
        date: 'Febrero 2023 - Actualmente',
        description: 'Diseñé y desarrollé planes de estudio innovadores para el técnico en sistemas, manteniendo el material didáctico actualizado a las nuevas tendencias. Impartí clases teórico y prácticas sobre temas clave como diseño web, fundamentos de programación (java, python, js), sistemas operativos, Microsoft Office y bases de datos, utilizando métodos pedagógicos efectivos para garantizar una comprensión profunda por parte de los estudiantes.',
        tag: 'main',
        colorType: 'green',
      },
      {
        hash: 'e4f5g6h',
        type: 'feat',
        title: 'Freelancer',
        subtitle: 'Diseño de páginas web',
        category: 'Job',
        date: 'Actualmente',
        description: 'Diseñé y desarrollé sitios web personalizados para una variedad de clientes, utilizando tecnologías como HTML, CSS, JS, ASTRO y REACT cumpliendo con las expectativas del cliente y los plazos de entrega.',
        tag: 'main',
        colorType: 'green',

      },
      {
        hash: 'q4r5s6t',
        type: 'chore',
        title: 'Ingeniero de Sistemas',
        description: "Obtuve mi título de Ingeniero de Sistemas en la Universidad de San Gil de Colombia, adquiriendo conocimientos sólidos en gestión de proyectos, desarrollo de software, bases de datos, redes y seguridad informática.",
        category: 'education',
        date: '2022',
        tag: 'education',
        colorType: 'blue',
      },
      {
        hash: 'm1n2o3p',
        type: 'chore',
        title: 'Especialista en mercadeo estratégico',
        description: "Obtuve mi título de especialista en mercadeo estratégico en la Universidad de San Gil de Colombia, adquiriendo conocimientos sólidos en mercadeo, estrategia de ventas, marketing digital y gestión de proyectos.",
        category: 'education',
        date: '2023',
        tag: 'education',
        colorType: 'blue',
      },
      {
        hash: 'i7j8k9l',
        type: 'cert',
        title: 'MINTIC ',
        description: 'Curso de Desarrollador de Software con JavaScript, donde amplie mis habilidades en programación, desarrollo web y buenas prácticas de codificación.',
        category: 'certifications',
        date: '2024',
        tag: 'certifications',
        colorType: 'yellow',
      },
    ]
  }

}
