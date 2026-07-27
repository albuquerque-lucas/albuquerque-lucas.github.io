import type { Translated } from '../i18n/types'

export type Project = {
  slug: string
  productName: Translated<string>
  clientName: Translated<string>
  title: Translated<string>
  subtitle?: Translated<string>
  year: Translated<string>
  excerpt: Translated<string>
  stack: string[]
  highlights: Translated<string[]>
  links?: { repo?: string; demo?: string }
  caseStudy: {
    problem: Translated<string>
    solution: Translated<string>
    architecture: {
      webLayer?: Translated<string[]>
      frontend?: Translated<string[]>
      backend?: Translated<string[]>
      frontendComponent?: Translated<string[]>
      worker?: Translated<string[]>
      infra?: Translated<string[]>
    }
    results: Translated<string[]>
  }
}

export const projects: Project[] = [
  {
    slug: 'mapiq-drone-inspection-reporting-platform',
    productName: { 'pt-BR': 'MapIQ', 'en-US': 'MapIQ' },
    clientName: {
      'pt-BR': 'Principal responsabilidade técnica',
      'en-US': 'Primary technical responsibility',
    },
    title: {
      'pt-BR': 'MapIQ — Plataforma multiempresa de relatórios técnicos',
      'en-US': 'MapIQ — Multi-company technical reporting platform',
    },
    subtitle: {
      'pt-BR': 'Principal responsável técnico, com colaboração pontual no frontend.',
      'en-US': 'Primary technical contributor, with occasional frontend collaboration.',
    },
    year: { 'pt-BR': 'Em produção', 'en-US': 'In production' },
    excerpt: {
      'pt-BR': 'Plataforma multiempresa para criação, revisão, aprovação e geração de relatórios técnicos com páginas de texto e mapas.',
      'en-US': 'Multi-company platform for creating, reviewing, approving, and generating technical reports with text and map pages.',
    },
    stack: ['Laravel', 'PHP', 'MySQL', 'React', 'TypeScript', 'FastAPI', 'WeasyPrint'],
    highlights: {
      'pt-BR': [
        'Integração entre SPA, API REST e worker dedicado à geração de PDFs',
        'Autenticação, controle de acesso e organização por empresas e filiais',
        'Editor de páginas, revisão, aprovação e notificações em tempo real',
      ],
      'en-US': [
        'Integration across the SPA, REST API, and dedicated PDF worker',
        'Authentication, access control, and organization by companies and branches',
        'Page editor, review, approval, and real-time notifications',
      ],
    },
    links: {
      demo: 'https://relatorios.mapiq.com.br/login',
    },
    caseStudy: {
      problem: {
        'pt-BR': 'A operação precisava reunir, em uma plataforma multiempresa, a montagem de relatórios técnicos com páginas de texto e mapas, além dos fluxos de revisão, aprovação e geração de PDF.',
        'en-US': 'The operation needed a multi-company platform that combined technical report authoring with text and map pages, along with review, approval, and PDF generation workflows.',
      },
      solution: {
        'pt-BR': 'Fui o principal responsável técnico pela integração entre a SPA em React e TypeScript, a API Laravel/MySQL e o worker FastAPI/WeasyPrint. O trabalho incluiu autenticação e controle de acesso, estrutura multiempresa, páginas editáveis, revisão, aprovação, notificações em tempo real e automação de deploy, com colaboração pontual no frontend.',
        'en-US': 'I was the primary technical contributor responsible for integrating the React and TypeScript SPA, the Laravel/MySQL API, and the FastAPI/WeasyPrint worker. The work covered authentication and access control, multi-company structure, editable pages, review, approval, real-time notifications, and deployment automation, with occasional frontend collaboration.',
      },
      architecture: {
        frontend: {
          'pt-BR': ['React e TypeScript', 'SPA integrada por API REST', 'Editor de páginas de texto e mapas'],
          'en-US': ['React and TypeScript', 'SPA connected through a REST API', 'Text and map page editor'],
        },
        backend: {
          'pt-BR': ['Laravel e MySQL', 'Autenticação JWT e controle de acesso', 'Empresas, filiais, relatórios e etapas de aprovação'],
          'en-US': ['Laravel and MySQL', 'JWT authentication and access control', 'Companies, branches, reports, and approval stages'],
        },
        worker: {
          'pt-BR': ['FastAPI', 'WeasyPrint', 'Geração de documentos PDF'],
          'en-US': ['FastAPI', 'WeasyPrint', 'PDF document generation'],
        },
        infra: {
          'pt-BR': ['GitHub Actions', 'Deploy automatizado por SSH'],
          'en-US': ['GitHub Actions', 'Automated deployment over SSH'],
        },
      },
      results: {
        'pt-BR': [
          'Fluxo integrado de criação, revisão, aprovação e geração de relatórios.',
          'Controle de acesso e organização por empresa e filial.',
          'Notificações em tempo real e deploy automatizado.',
        ],
        'en-US': [
          'Integrated report creation, review, approval, and generation workflow.',
          'Access control and organization by company and branch.',
          'Real-time notifications and automated deployment.',
        ],
      },
    },
  },
  {
    slug: 'gavio-arquitetura',
    productName: { 'pt-BR': 'Gávio Arquitetura', 'en-US': 'Gávio Arquitetura' },
    clientName: { 'pt-BR': 'Projeto sob demanda', 'en-US': 'On-demand project' },
    title: {
      'pt-BR': 'Gávio Arquitetura — Site institucional e painel administrativo',
      'en-US': 'Gávio Arquitetura — Institutional website and admin panel',
    },
    year: { 'pt-BR': 'Projeto público', 'en-US': 'Public project' },
    excerpt: {
      'pt-BR': 'Aplicação Laravel com site institucional para apresentação de projetos de arquitetura e painel administrativo para gestão do conteúdo.',
      'en-US': 'Laravel application with an institutional website for showcasing architecture projects and an admin panel for content management.',
    },
    stack: ['PHP', 'Laravel', 'Blade', 'MySQL', 'JavaScript'],
    highlights: {
      'pt-BR': [
        'Cadastro e organização de projetos e categorias',
        'Upload e gerenciamento de imagens do portfólio',
        'Conteúdo institucional administrável',
      ],
      'en-US': [
        'Project and category management',
        'Portfolio image upload and management',
        'Editable institutional content',
      ],
    },
    links: {
      repo: 'https://github.com/albuquerque-lucas/Gavio-Arquitetura-2.0',
    },
    caseStudy: {
      problem: {
        'pt-BR': 'O site precisava apresentar projetos de arquitetura de forma organizada e permitir que o conteúdo fosse atualizado por uma área administrativa.',
        'en-US': 'The website needed to present architecture projects in an organized way and allow content updates through an administrative area.',
      },
      solution: {
        'pt-BR': 'Desenvolvi uma aplicação Laravel com páginas institucionais, organização de projetos por categorias, gerenciamento de imagens e painel autenticado para manutenção do conteúdo.',
        'en-US': 'I built a Laravel application with institutional pages, project organization by category, image management, and an authenticated admin panel for content maintenance.',
      },
      architecture: {
        frontend: {
          'pt-BR': ['Blade', 'JavaScript', 'Layout responsivo'],
          'en-US': ['Blade', 'JavaScript', 'Responsive layout'],
        },
        backend: {
          'pt-BR': ['PHP e Laravel', 'Autenticação administrativa', 'Gestão de projetos, categorias e conteúdo'],
          'en-US': ['PHP and Laravel', 'Admin authentication', 'Project, category, and content management'],
        },
        infra: {
          'pt-BR': ['MySQL', 'Armazenamento de imagens'],
          'en-US': ['MySQL', 'Image storage'],
        },
      },
      results: {
        'pt-BR': [
          'Site institucional e painel administrativo reunidos na mesma aplicação.',
          'Fluxos de cadastro e atualização de projetos e imagens.',
        ],
        'en-US': [
          'Institutional website and admin panel in the same application.',
          'Project and image creation and update workflows.',
        ],
      },
    },
  },
  {
    slug: 'testello',
    productName: { 'pt-BR': 'Testello', 'en-US': 'Testello' },
    clientName: { 'pt-BR': 'Projeto pessoal', 'en-US': 'Personal project' },
    title: {
      'pt-BR': 'Testello — Processamento de arquivos e gestão de fretes',
      'en-US': 'Testello — File processing and shipping management',
    },
    year: { 'pt-BR': 'Projeto público', 'en-US': 'Public project' },
    excerpt: {
      'pt-BR': 'Backend Laravel para processamento de arquivos e organização de dados relacionados à gestão de fretes.',
      'en-US': 'Laravel backend for file processing and organizing data related to shipping management.',
    },
    stack: ['PHP', 'Laravel', 'MySQL', 'Docker'],
    highlights: {
      'pt-BR': [
        'API e regras de negócio em Laravel',
        'Recebimento e processamento estruturado de arquivos',
        'Persistência e consulta de dados de frete',
      ],
      'en-US': [
        'Laravel API and business rules',
        'Structured file upload and processing',
        'Shipping data persistence and queries',
      ],
    },
    links: {
      repo: 'https://github.com/albuquerque-lucas/testello',
    },
    caseStudy: {
      problem: {
        'pt-BR': 'O projeto precisava receber arquivos, validar os dados e organizar as informações processadas para consulta em um fluxo de gestão de fretes.',
        'en-US': 'The project needed to receive files, validate their data, and organize the processed information for use in a shipping management workflow.',
      },
      solution: {
        'pt-BR': 'Estruturei o backend em Laravel, separando o recebimento dos arquivos, as regras de validação e processamento e a persistência dos registros.',
        'en-US': 'I structured the Laravel backend by separating file intake, validation and processing rules, and record persistence.',
      },
      architecture: {
        backend: {
          'pt-BR': ['PHP e Laravel', 'API REST', 'Validação e processamento de arquivos'],
          'en-US': ['PHP and Laravel', 'REST API', 'File validation and processing'],
        },
        infra: {
          'pt-BR': ['MySQL', 'Docker'],
          'en-US': ['MySQL', 'Docker'],
        },
      },
      results: {
        'pt-BR': [
          'Fluxo definido para entrada, validação e processamento de arquivos.',
          'Dados organizados para consumo pela aplicação frontend.',
        ],
        'en-US': [
          'Defined workflow for file intake, validation, and processing.',
          'Data organized for consumption by the frontend application.',
        ],
      },
    },
  },
  {
    slug: 'testello-spa',
    productName: { 'pt-BR': 'Testello SPA', 'en-US': 'Testello SPA' },
    clientName: { 'pt-BR': 'Projeto pessoal', 'en-US': 'Personal project' },
    title: {
      'pt-BR': 'Testello SPA — Interface para gestão de fretes',
      'en-US': 'Testello SPA — Shipping management interface',
    },
    year: { 'pt-BR': 'Projeto público', 'en-US': 'Public project' },
    excerpt: {
      'pt-BR': 'Interface em React e TypeScript para envio de arquivos, consulta de dados processados e integração com a API do Testello.',
      'en-US': 'React and TypeScript interface for file uploads, processed data queries, and integration with the Testello API.',
    },
    stack: ['React', 'TypeScript', 'Vite'],
    highlights: {
      'pt-BR': [
        'Integração com a API Laravel',
        'Fluxo de envio e acompanhamento de arquivos',
        'Interface responsiva para consulta dos dados',
      ],
      'en-US': [
        'Integration with the Laravel API',
        'File upload and tracking workflow',
        'Responsive interface for data queries',
      ],
    },
    links: {
      repo: 'https://github.com/albuquerque-lucas/testello-spa',
      demo: 'https://testello-spa.vercel.app/',
    },
    caseStudy: {
      problem: {
        'pt-BR': 'Os recursos do backend precisavam de uma interface web para enviar arquivos e consultar as informações processadas.',
        'en-US': 'The backend capabilities needed a web interface for submitting files and viewing processed information.',
      },
      solution: {
        'pt-BR': 'Desenvolvi uma SPA em React e TypeScript conectada à API do Testello, organizando os fluxos de envio, retorno de validações e consulta dos dados.',
        'en-US': 'I developed a React and TypeScript SPA connected to the Testello API, organizing file upload, validation feedback, and data query flows.',
      },
      architecture: {
        frontend: {
          'pt-BR': ['React', 'TypeScript', 'Vite', 'Integração com API REST'],
          'en-US': ['React', 'TypeScript', 'Vite', 'REST API integration'],
        },
      },
      results: {
        'pt-BR': [
          'Interface dedicada aos fluxos do Testello.',
          'Integração entre envio de arquivos, validações e dados processados.',
        ],
        'en-US': [
          'Dedicated interface for Testello workflows.',
          'Integration across file submission, validation, and processed data.',
        ],
      },
    },
  },
  {
    slug: 'assinando-digital-signature-platform',
    productName: { 'pt-BR': 'Assinando', 'en-US': 'Assinando' },
    clientName: { 'pt-BR': 'Docteka', 'en-US': 'Docteka' },
    title: {
      'pt-BR': 'Assinando — Plataforma de assinatura digital',
      'en-US': 'Assinando — Digital signature platform',
    },
    year: { 'pt-BR': '2024–2025', 'en-US': '2024–2025' },
    excerpt: {
      'pt-BR': 'Participação na evolução de uma plataforma de assinatura digital, com área autenticada para upload, gestão e acompanhamento de documentos.',
      'en-US': 'Contribution to the evolution of a digital signature platform with an authenticated area for document upload, management, and tracking.',
    },
    stack: ['PHP', 'Laravel', 'Blade', 'React', 'MySQL'],
    highlights: {
      'pt-BR': [
        'Upload e acompanhamento de documentos',
        'Adaptação de regras de negócio para a camada web',
        'Validações integradas entre Laravel e React',
      ],
      'en-US': [
        'Document upload and tracking',
        'Business rule adaptation for the web layer',
        'Integrated validation across Laravel and React',
      ],
    },
    caseStudy: {
      problem: {
        'pt-BR': 'A nova versão web precisava reunir os fluxos autenticados de upload, solicitação de assinatura, acompanhamento de documentos e manutenção de dados do perfil.',
        'en-US': 'The new web version needed to bring together authenticated flows for uploads, signature requests, document tracking, and profile data maintenance.',
      },
      solution: {
        'pt-BR': 'Participei da implementação da área autenticada em Laravel e Blade, da adaptação de regras já existentes e de validações no componente React usado no fluxo de assinatura.',
        'en-US': 'I contributed to the authenticated Laravel and Blade area, adapted existing rules, and worked on validation in the React component used in the signature workflow.',
      },
      architecture: {
        frontend: {
          'pt-BR': ['Blade', 'Componente React', 'Validações de fluxo'],
          'en-US': ['Blade', 'React component', 'Workflow validation'],
        },
        backend: {
          'pt-BR': ['PHP e Laravel', 'Regras de negócio', 'Controle de documentos e status'],
          'en-US': ['PHP and Laravel', 'Business rules', 'Document and status management'],
        },
      },
      results: {
        'pt-BR': [
          'Área autenticada para upload e acompanhamento de documentos.',
          'Integração entre a aplicação Laravel e o componente React.',
        ],
        'en-US': [
          'Authenticated area for document upload and tracking.',
          'Integration between the Laravel application and the React component.',
        ],
      },
    },
  },
  {
    slug: 'docteka-structured-data-import-system',
    productName: {
      'pt-BR': 'Importação estruturada de dados',
      'en-US': 'Structured data import',
    },
    clientName: { 'pt-BR': 'Docteka', 'en-US': 'Docteka' },
    title: {
      'pt-BR': 'Docteka — Importação estruturada de dados',
      'en-US': 'Docteka — Structured data import',
    },
    year: { 'pt-BR': '2024–2025', 'en-US': '2024–2025' },
    excerpt: {
      'pt-BR': 'Rotinas Laravel para importação de arquivos CSV e XLSX, com mapeamento de colunas, validação e persistência estruturada.',
      'en-US': 'Laravel routines for importing CSV and XLSX files with column mapping, validation, and structured persistence.',
    },
    stack: ['PHP', 'Laravel', 'MySQL', 'Maatwebsite Excel'],
    highlights: {
      'pt-BR': [
        'Leitura e mapeamento de colunas de arquivos',
        'Validação antes da persistência',
        'Rastreabilidade das importações',
      ],
      'en-US': [
        'File column reading and mapping',
        'Validation before persistence',
        'Import traceability',
      ],
    },
    caseStudy: {
      problem: {
        'pt-BR': 'Arquivos de diferentes origens precisavam ser importados com validação, adaptação dos cabeçalhos e associação correta dos registros.',
        'en-US': 'Files from different sources needed to be imported with validation, header adaptation, and correct record association.',
      },
      solution: {
        'pt-BR': 'Trabalhei em rotinas Laravel para leitura de CSV e XLSX, mapeamento entre colunas e campos internos, validação estrutural e persistência dos registros com informações de rastreabilidade.',
        'en-US': 'I worked on Laravel routines for reading CSV and XLSX files, mapping columns to internal fields, structural validation, and persisting records with traceability information.',
      },
      architecture: {
        backend: {
          'pt-BR': ['PHP e Laravel', 'Maatwebsite Excel', 'Mapeamento e validação de colunas'],
          'en-US': ['PHP and Laravel', 'Maatwebsite Excel', 'Column mapping and validation'],
        },
        infra: {
          'pt-BR': ['MySQL', 'Identificadores e rastreamento de importação'],
          'en-US': ['MySQL', 'Import identifiers and tracking'],
        },
      },
      results: {
        'pt-BR': [
          'Fluxo consistente de leitura, validação e persistência.',
          'Rastreabilidade das execuções de importação.',
        ],
        'en-US': [
          'Consistent reading, validation, and persistence workflow.',
          'Traceability for import executions.',
        ],
      },
    },
  },
]
