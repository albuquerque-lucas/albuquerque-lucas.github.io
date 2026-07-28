import type { Translated } from '../i18n/types'

export type Project = {
  slug: string
  productName: Translated<string>
  contextLabel: Translated<string>
  role: Translated<string>
  year: Translated<string>
  excerpt: Translated<string>
  stack: string[]
  highlights: Translated<string[]>
  links?: {
    repository?: string
    backendRepository?: string
    frontendRepository?: string
    demo?: string
  }
  caseStudy: {
    context: Translated<string[]>
    participation: Translated<string[]>
    features: Translated<string[]>
    architecture: {
      frontend?: Translated<string[]>
      backend?: Translated<string[]>
      worker?: Translated<string[]>
      infra?: Translated<string[]>
    }
  }
}

export const projects: Project[] = [
  {
    slug: 'mapiq-drone-inspection-reporting-platform',
    productName: { 'pt-BR': 'MapIQ', 'en-US': 'MapIQ' },
    contextLabel: {
      'pt-BR': 'Projeto sob demanda',
      'en-US': 'On-demand project',
    },
    role: {
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
        'SPA, API REST e worker dedicado à geração de PDFs',
        'Autenticação e permissões por empresa, filial e participação',
        'Editor de páginas, revisão, aprovação e notificações em tempo real',
      ],
      'en-US': [
        'SPA, REST API, and a dedicated PDF generation worker',
        'Authentication and permissions by company, branch, and participation',
        'Page editor, review, approval, and real-time notifications',
      ],
    },
    links: {
      demo: 'https://relatorios.mapiq.com.br/login',
    },
    caseStudy: {
      context: {
        'pt-BR': [
          'O MapIQ reúne em uma plataforma multiempresa a criação de relatórios técnicos formados por páginas de texto e mapas. O fluxo inclui edição, revisão, aprovação, notificações e geração do documento final em PDF.',
          'Prestadora, clientes, filiais, responsáveis e participantes possuem níveis diferentes de acesso aos relatórios e às ações disponíveis.',
        ],
        'en-US': [
          'MapIQ brings together, in a multi-company platform, the creation of technical reports made up of text and map pages. The workflow covers editing, review, approval, notifications, and final PDF generation.',
          'Service providers, clients, branches, owners, and participants have different levels of access to reports and available actions.',
        ],
      },
      participation: {
        'pt-BR': [
          'Fui o principal responsável técnico pela arquitetura integrada: a API Laravel/MySQL, a SPA React/TypeScript e o worker FastAPI/WeasyPrint.',
          'Conduzi os fluxos centrais de relatórios, autorização, páginas, mapas, templates, aprovação, notificações e integração com o gerador de PDF. Houve colaboração pontual no frontend, principalmente fora desses módulos centrais.',
        ],
        'en-US': [
          'I was the primary technical contributor responsible for the integrated architecture: the Laravel/MySQL API, the React/TypeScript SPA, and the FastAPI/WeasyPrint worker.',
          'I drove the core reporting, authorization, pages, maps, templates, approval, notifications, and PDF integration workflows. There was occasional frontend collaboration, mainly outside these core modules.',
        ],
      },
      features: {
        'pt-BR': [
          'Autenticação JWT e autorização com papéis, permissões, Policies e filtros de acesso.',
          'Organização de prestadora, clientes, filiais, responsáveis e participantes.',
          'Páginas de texto e mapas com editor rico, templates, variáveis, imagens e ordenação.',
          'Histórico de status, revisão, aprovação e notificações persistidas e em tempo real.',
          'Composição e geração de PDFs pelo worker dedicado.',
          'Deploys independentes automatizados com GitHub Actions e SSH.',
        ],
        'en-US': [
          'JWT authentication and authorization with roles, permissions, Policies, and access filters.',
          'Organization of service providers, clients, branches, owners, and participants.',
          'Text and map pages with rich editing, templates, variables, images, and ordering.',
          'Status history, review, approval, and persistent real-time notifications.',
          'PDF composition and generation through the dedicated worker.',
          'Independent automated deployments with GitHub Actions and SSH.',
        ],
      },
      architecture: {
        frontend: {
          'pt-BR': ['React e TypeScript', 'React Query e Axios', 'Editor de texto, mapas e ordenação visual'],
          'en-US': ['React and TypeScript', 'React Query and Axios', 'Text, map, and visual ordering editors'],
        },
        backend: {
          'pt-BR': ['PHP, Laravel e MySQL', 'API REST, JWT e Policies', 'Domínio multiempresa e ciclo de aprovação'],
          'en-US': ['PHP, Laravel, and MySQL', 'REST API, JWT, and Policies', 'Multi-company domain and approval lifecycle'],
        },
        worker: {
          'pt-BR': ['Python e FastAPI', 'Jinja2 e WeasyPrint', 'HTML/CSS de impressão e geração de PDF'],
          'en-US': ['Python and FastAPI', 'Jinja2 and WeasyPrint', 'Print HTML/CSS and PDF generation'],
        },
        infra: {
          'pt-BR': ['GitHub Actions', 'Deploy automatizado por SSH'],
          'en-US': ['GitHub Actions', 'Automated deployment over SSH'],
        },
      },
    },
  },
  {
    slug: 'gavio-arquitetura',
    productName: { 'pt-BR': 'Gávio Arquitetura', 'en-US': 'Gávio Arquitetura' },
    contextLabel: {
      'pt-BR': 'Projeto sob demanda',
      'en-US': 'On-demand project',
    },
    role: {
      'pt-BR': 'Desenvolvimento da aplicação Laravel, do site público ao painel administrativo.',
      'en-US': 'Development of the Laravel application, from the public website to the admin panel.',
    },
    year: { 'pt-BR': 'Projeto público', 'en-US': 'Public project' },
    excerpt: {
      'pt-BR': 'Aplicação Laravel com site institucional para apresentação de projetos de arquitetura e painel administrativo para gestão do conteúdo.',
      'en-US': 'Laravel application with an institutional website for showcasing architecture projects and an admin panel for content management.',
    },
    stack: ['PHP', 'Laravel', 'Blade', 'MySQL', 'JavaScript'],
    highlights: {
      'pt-BR': [
        'Site institucional e painel administrativo na mesma aplicação',
        'Cadastro de projetos, categorias e conteúdo',
        'Upload e organização das imagens do portfólio',
      ],
      'en-US': [
        'Institutional website and admin panel in the same application',
        'Project, category, and content management',
        'Portfolio image upload and organization',
      ],
    },
    links: {
      repository: 'https://github.com/albuquerque-lucas/Gavio-Arquitetura-2.0',
    },
    caseStudy: {
      context: {
        'pt-BR': [
          'O projeto precisava apresentar trabalhos de arquitetura em um site institucional e permitir que o conteúdo fosse mantido sem alterações diretas no código.',
        ],
        'en-US': [
          'The project needed to showcase architecture work on an institutional website while allowing content updates without direct code changes.',
        ],
      },
      participation: {
        'pt-BR': [
          'Desenvolvi a aplicação em Laravel, incluindo as páginas públicas, a autenticação administrativa e os fluxos de cadastro e manutenção do portfólio.',
          'O escopo é deliberadamente simples: uma aplicação institucional com conteúdo dinâmico e uma área administrativa correspondente.',
        ],
        'en-US': [
          'I developed the Laravel application, including public pages, admin authentication, and portfolio creation and maintenance workflows.',
          'The scope is intentionally straightforward: an institutional application with dynamic content and its corresponding admin area.',
        ],
      },
      features: {
        'pt-BR': [
          'Cadastro e edição de projetos de arquitetura.',
          'Organização do portfólio por categorias.',
          'Upload e gerenciamento de imagens.',
          'Páginas institucionais com conteúdo administrável.',
          'Área administrativa autenticada.',
        ],
        'en-US': [
          'Architecture project creation and editing.',
          'Portfolio organization by category.',
          'Image upload and management.',
          'Institutional pages with editable content.',
          'Authenticated admin area.',
        ],
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
    },
  },
  {
    slug: 'testello',
    productName: { 'pt-BR': 'Testello', 'en-US': 'Testello' },
    contextLabel: {
      'pt-BR': 'Caso Full Stack',
      'en-US': 'Full Stack case study',
    },
    role: {
      'pt-BR': 'Backend Laravel e interface React/TypeScript desenvolvidos como partes da mesma solução.',
      'en-US': 'Laravel backend and React/TypeScript interface built as parts of the same solution.',
    },
    year: {
      'pt-BR': 'Backend e frontend públicos',
      'en-US': 'Public backend and frontend',
    },
    excerpt: {
      'pt-BR': 'Aplicação para importar tabelas de frete em CSV, com API Laravel e SPA React/TypeScript mantidas em repositórios separados.',
      'en-US': 'Application for importing CSV freight tables, with a Laravel API and React/TypeScript SPA maintained in separate repositories.',
    },
    stack: ['PHP', 'Laravel', 'MySQL', 'React', 'TypeScript', 'Docker'],
    highlights: {
      'pt-BR': [
        'Importação e validação de tabelas de frete em CSV',
        'Backend Laravel com dados de clientes, filiais e faixas de frete',
        'SPA React/TypeScript integrada à API REST',
      ],
      'en-US': [
        'CSV freight table import and validation',
        'Laravel backend with clients, branches, and freight ranges',
        'React/TypeScript SPA integrated with the REST API',
      ],
    },
    links: {
      backendRepository: 'https://github.com/albuquerque-lucas/testello',
      frontendRepository: 'https://github.com/albuquerque-lucas/testello-spa',
      demo: 'https://testello-spa.vercel.app/',
    },
    caseStudy: {
      context: {
        'pt-BR': [
          'O Testello organiza a importação de tabelas de frete recebidas em arquivos CSV. Os registros são associados a clientes e filiais para consulta na aplicação.',
          'Backend e frontend estão em repositórios públicos separados, mas pertencem ao mesmo produto e são apresentados aqui como um único caso Full Stack.',
        ],
        'en-US': [
          'Testello organizes freight table imports received as CSV files. Records are associated with clients and branches for use in the application.',
          'Backend and frontend live in separate public repositories, but belong to the same product and are presented here as a single Full Stack case study.',
        ],
      },
      participation: {
        'pt-BR': [
          'Estruturei o backend em Laravel, separando upload, validação, processamento e persistência dos registros.',
          'Desenvolvi a SPA em React e TypeScript para operar os recursos da API, acompanhar o envio dos arquivos e consultar os dados processados.',
        ],
        'en-US': [
          'I structured the Laravel backend by separating upload, validation, processing, and record persistence.',
          'I developed the React and TypeScript SPA to operate the API, track file submissions, and query processed data.',
        ],
      },
      features: {
        'pt-BR': [
          'Upload e validação de arquivos CSV.',
          'Importação de tabelas e faixas de frete.',
          'Cadastro e consulta de clientes e filiais.',
          'API REST para integração entre as aplicações.',
          'Interface responsiva para operação dos fluxos.',
        ],
        'en-US': [
          'CSV file upload and validation.',
          'Freight table and range imports.',
          'Client and branch creation and queries.',
          'REST API integration between applications.',
          'Responsive interface for operating the workflows.',
        ],
      },
      architecture: {
        frontend: {
          'pt-BR': ['React', 'TypeScript', 'Vite', 'Integração com API REST'],
          'en-US': ['React', 'TypeScript', 'Vite', 'REST API integration'],
        },
        backend: {
          'pt-BR': ['PHP e Laravel', 'Validação e processamento de CSV', 'Persistência com MySQL'],
          'en-US': ['PHP and Laravel', 'CSV validation and processing', 'MySQL persistence'],
        },
        infra: {
          'pt-BR': ['Docker e Laravel Sail', 'MySQL'],
          'en-US': ['Docker and Laravel Sail', 'MySQL'],
        },
      },
    },
  },
]
