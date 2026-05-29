interface Experience {
  hash: string
  type: string
  title: string
  subtitle?: string
  category: string
  date: string
  description: string
  tag: string
  colorType: string
}

export const EXPERIENCE: Experience[] = [

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
];
