interface Tab {
  name: string
  isCode: boolean
  content: string | object
  lenguaje?: string
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
      name: 'Ingeniero de Sistemas',
      title: 'Desarrollador Frontend & Ingeniero de Sistemas',
      location: 'Colombia',
      email: 'contacto@ejemplo.com',
      summary:
        'Profesional apasionado por la tecnología con experiencia en desarrollo frontend, administración de sistemas y bases de datos. Especializado en crear soluciones eficientes y escalables.',
      education: {
        title: 'Ingeniería de Sistemas',
        institution: 'Universidad Nacional',
        year: 2020
      },
      certifications: [
        'AWS Cloud Practitioner',
        'Meta Frontend Developer',
        'Google IT Support'
      ],
      languages: ['Español (Nativo)', 'Inglés (B2)'],
      interests: [
        'Desarrollo Web',
        'Cloud Computing',
        'Inteligencia Artificial',
        'Open Source'
      ]
    }
  },
  projects: {
    name: 'projects.json',
    isCode: true,
    lenguaje: '',
    content: {
      projects: [
        {
          name: 'Proyecto 1',
          description: 'Descripción del proyecto 1',
          technologies: ['React', 'Node.js'],
          link: 'https://example.com'
        }
      ]
    }
  }
}
