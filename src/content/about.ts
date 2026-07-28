import type { Translated } from '../i18n/types'

export type AboutContent = {
  hero: {
    headline: Translated<string>
    subheadline: Translated<string>
  }
  profile: {
    title: Translated<string>
    paragraphs: Translated<string[]>
  }
  technologies: {
    title: Translated<string>
    items: Translated<string[]>
  }
  education: {
    title: Translated<string>
    paragraphs: Translated<string[]>
  }
}

export const aboutContent: AboutContent = {
  hero: {
    headline: {
      'pt-BR': 'Desenvolvedor Full Stack | PHP/Laravel, React e TypeScript',
      'en-US': 'Full Stack Developer | PHP/Laravel, React, and TypeScript',
    },
    subheadline: {
      'pt-BR': 'Trabalho com sistemas web em produção, do backend Laravel às interfaces em React e TypeScript.',
      'en-US': 'I work on production web systems, from Laravel backends to React and TypeScript interfaces.',
    },
  },
  profile: {
    title: {
      'pt-BR': 'Perfil',
      'en-US': 'Profile',
    },
    paragraphs: {
      'pt-BR': [
        'Meu foco principal é o backend com PHP e Laravel: APIs REST, regras de negócio, integrações com MySQL, filas, jobs e processamento de arquivos.',
        'Também atuo no frontend com React, TypeScript e Next.js, conectando interfaces aos fluxos da aplicação e acompanhando as entregas em produção.',
      ],
      'en-US': [
        'My main focus is backend development with PHP and Laravel: REST APIs, business rules, MySQL integrations, queues, jobs, and file processing.',
        'I also work on the frontend with React, TypeScript, and Next.js, connecting interfaces to application workflows and supporting production delivery.',
      ],
    },
  },
  technologies: {
    title: {
      'pt-BR': 'Tecnologias',
      'en-US': 'Technologies',
    },
    items: {
      'pt-BR': [
        'Backend: PHP, Laravel, Node.js e APIs REST.',
        'Frontend: React, TypeScript, JavaScript e Next.js.',
        'Dados e processamento: MySQL, filas, jobs, webhooks e importação de arquivos.',
        'Infraestrutura e ferramentas: Docker, GitHub Actions, AWS e Git.',
        'Complementares: Python, FastAPI e WeasyPrint.',
      ],
      'en-US': [
        'Backend: PHP, Laravel, Node.js, and REST APIs.',
        'Frontend: React, TypeScript, JavaScript, and Next.js.',
        'Data and processing: MySQL, queues, jobs, webhooks, and file imports.',
        'Infrastructure and tools: Docker, GitHub Actions, AWS, and Git.',
        'Additional tools: Python, FastAPI, and WeasyPrint.',
      ],
    },
  },
  education: {
    title: {
      'pt-BR': 'Formação e certificação',
      'en-US': 'Education and certification',
    },
    paragraphs: {
      'pt-BR': [
        'Engenharia de Software na Estácio — ago/2025 a jun/2029, em andamento.',
        'Desenvolvimento Web Full Stack na Trybe — nov/2022 a jan/2024.',
        'Cambridge B2 First (FCE) — certificação de proficiência em inglês, nível B2.',
      ],
      'en-US': [
        'Software Engineering at Estácio — Aug 2025 to Jun 2029, in progress.',
        'Full Stack Web Development at Trybe — Nov 2022 to Jan 2024.',
        'Cambridge B2 First (FCE) — English proficiency certification, level B2.',
      ],
    },
  },
}
