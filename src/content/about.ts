import type { Translated } from '../i18n/types'

export type AboutContent = {
  hero: {
    headline: Translated<string>
    subheadline: Translated<string>
  }
  mindset: {
    title: Translated<string>
    paragraphs: Translated<string[]>
  }
  principles: {
    title: Translated<string>
    items: Translated<string[]>
  }
  trajectory: {
    title: Translated<string>
    paragraphs: Translated<string[]>
  }
  current: {
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
      'pt-BR': 'Trabalho com aplicações web em produção, APIs REST, regras de negócio, integrações com MySQL, filas, jobs e processamento assíncrono.',
      'en-US': 'I work with production web applications, REST APIs, business rules, MySQL integrations, queues, jobs, and asynchronous processing.',
    },
  },
  mindset: {
    title: {
      'pt-BR': 'Atuação',
      'en-US': 'Experience',
    },
    paragraphs: {
      'pt-BR': [
        'Atualmente trabalho na Bredi, uma software house onde atuo na evolução e sustentação de aplicações novas e legadas para diferentes segmentos. Minha rotina inclui APIs, integrações de pagamento e Pix, webhooks, checkout, pedidos, frete, rotinas financeiras, documentos PDF e notificações.',
        'Anteriormente, na Docteka, participei do desenvolvimento e manutenção de plataformas multi-clientes de gestão documental, RH e assinatura digital, trabalhando com uploads, permissões, importação de arquivos, geração de PDFs, filas, jobs e e-mails.',
      ],
      'en-US': [
        'I currently work at Bredi, a software house where I develop and maintain new and legacy applications across different sectors. My routine includes APIs, payment and Pix integrations, webhooks, checkout, orders, shipping, financial workflows, PDF documents, and notifications.',
        'Previously, at Docteka, I helped develop and maintain multi-client document management, HR, and digital signature platforms, working with uploads, permissions, file imports, PDF generation, queues, jobs, and email.',
      ],
    },
  },
  principles: {
    title: {
      'pt-BR': 'Tecnologias',
      'en-US': 'Technologies',
    },
    items: {
      'pt-BR': [
        'Backend: PHP, Laravel, Node.js e APIs REST.',
        'Frontend: React, TypeScript, JavaScript e Next.js.',
        'Dados e processamento: MySQL, filas, jobs, webhooks e processamento assíncrono.',
        'Infraestrutura e ferramentas: Docker, GitHub Actions, AWS e Git.',
        'Complementares: Python, FastAPI e WeasyPrint.',
      ],
      'en-US': [
        'Backend: PHP, Laravel, Node.js, and REST APIs.',
        'Frontend: React, TypeScript, JavaScript, and Next.js.',
        'Data and processing: MySQL, queues, jobs, webhooks, and asynchronous processing.',
        'Infrastructure and tools: Docker, GitHub Actions, AWS, and Git.',
        'Additional tools: Python, FastAPI, and WeasyPrint.',
      ],
    },
  },
  trajectory: {
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
  current: {
    title: {
      'pt-BR': 'Perfil',
      'en-US': 'Profile',
    },
    paragraphs: {
      'pt-BR': [
        'Meu foco principal é PHP e Laravel no backend. Também atuo com React e TypeScript no frontend, conectando interfaces a APIs e regras de negócio.',
        'Neste portfólio estão alguns projetos públicos e estudos de caso relacionados ao trabalho que venho desenvolvendo.',
      ],
      'en-US': [
        'My main focus is PHP and Laravel on the backend. I also work with React and TypeScript on the frontend, connecting interfaces to APIs and business rules.',
        'This portfolio contains selected public projects and case studies related to the work I have been doing.',
      ],
    },
  },
}



