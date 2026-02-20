import type { Translated } from '../i18n/types'

export type Project = {
  slug: string
  productName: Translated<string>
  clientName: Translated<string>
  title: Translated<string>
  subtitle?: Translated<string>
  year: number
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
    clientName: { 'pt-BR': 'Mapas Drone', 'en-US': 'Mapas Drone' },
    title: { 'pt-BR': 'MapIQ - Plataforma de Relatorios de Inspecao com Drones', 'en-US': 'MapIQ - Drone Inspection Reporting Platform' },
    year: 2026,
    excerpt: {
      'pt-BR': 'Plataforma full-stack para criacao e geracao automatizada de relatorios de inspecao com imagens e mapas, com pipeline dedicado de renderizacao em PDF.',
      'en-US': 'Full-stack platform for creating and automatically generating inspection reports with images and maps, backed by a dedicated PDF rendering pipeline.',
    },
    stack: ['React', 'TypeScript', 'Laravel', 'Python', 'Docker', 'WeasyPrint'],
    highlights: {
      'pt-BR': [
        'Editor modular de paginas (texto e mapas) com ordenacao drag-and-drop',
        'Pipeline de geracao de PDF com worker isolado e layout dinamico',
        'Persistencia estruturada de paginas e assets com versionamento logico',
        'Upload e organizacao de imagens com processamento controlado',
      ],
      'en-US': [
        'Modular page editor (text and maps) with drag-and-drop ordering',
        'PDF generation pipeline with isolated worker and dynamic layout',
        'Structured page and asset persistence with logical versioning',
        'Image upload and organization with controlled processing',
      ],
    },
    caseStudy: {
      problem: {
        'pt-BR': 'A Mapas Drone precisava transformar grandes volumes de imagens aereas e mapas em relatorios padronizados, mantendo consistencia visual e rastreabilidade.\n\nO processo manual levava entre 2 e 3 semanas para a conclusao de um relatorio completo, envolvendo organizacao manual de imagens, montagem de layout e revisoes sucessivas.',
        'en-US': 'Mapas Drone needed to transform large volumes of aerial images and maps into standardized inspection reports while maintaining visual consistency and traceability.\n\nThe manual process required 2 to 3 weeks to complete a full report, involving manual image organization, layout assembly, and multiple revision cycles.',
      },
      solution: {
        'pt-BR': 'Desenvolvi uma plataforma full-stack que permite construcao dinamica de paginas de relatorio (texto e mapas), upload organizado de imagens, ordenacao visual via SPA e geracao automatizada de PDF a partir de templates HTML/CSS.\n\nA arquitetura foi projetada como plataforma multi-tenant, com gerenciamento estruturado de empresas e branches, controle de permissoes por papel (RBAC) e rastreabilidade por entidade.\n\nO sistema separa claramente a camada de edicao da camada de renderizacao final, garantindo previsibilidade na geracao dos relatorios e consistencia visual.',
        'en-US': 'I developed a full-stack platform that enables dynamic report page construction (text and maps), structured image uploads, visual ordering through a SPA, and automated PDF generation from HTML/CSS templates.\n\nThe architecture was designed as a multi-tenant platform, with structured management of companies and branches, role-based access control (RBAC), and entity-level traceability.\n\nThe system clearly separates the editing layer from the final rendering layer, ensuring deterministic PDF generation and visual consistency.',
      },
      architecture: {
        frontend: {
          'pt-BR': ['React', 'TypeScript', 'Editor modular baseado em estados', 'Comunicacao via API REST'],
          'en-US': ['React', 'TypeScript', 'State-driven modular editor', 'Communication through REST API'],
        },
        backend: {
          'pt-BR': [
            'Laravel',
            'Modelagem estruturada de paginas, mapas e relatorios',
            'Multi-tenant (empresas e branches)',
            'Controle de permissoes baseado em papeis (RBAC)',
            'Notificacoes em tempo real via WebSockets',
          ],
          'en-US': [
            'Laravel',
            'Structured modeling of pages, maps and reports',
            'Multi-tenant (companies and branches)',
            'Role-based access control (RBAC)',
            'Real-time notifications via WebSockets',
          ],
        },
        worker: {
          'pt-BR': ['Python', 'WeasyPrint', 'Renderizacao deterministica de PDF'],
          'en-US': ['Python', 'WeasyPrint', 'Deterministic PDF rendering'],
        },
        infra: {
          'pt-BR': ['Docker', 'Storage organizado para imagens e assets'],
          'en-US': ['Docker', 'Organized storage for images and assets'],
        },
      },
      results: {
        'pt-BR': [
          'A implementacao reduziu o tempo medio de producao de relatorios de 2-3 semanas para aproximadamente 1 dia, padronizando layout, aumentando rastreabilidade e eliminando retrabalho manual.',
        ],
        'en-US': [
          'The implementation reduced average report production time from 2-3 weeks to approximately 1 day, standardizing layout, improving traceability, and eliminating manual rework.',
        ],
      },
    },
  },
  {
    slug: 'assinando-digital-signature-platform',
    productName: { 'pt-BR': 'Assinando', 'en-US': 'Assinando' },
    clientName: { 'pt-BR': 'Docteka', 'en-US': 'Docteka' },
    title: { 'pt-BR': 'Assinando - Plataforma de Assinatura Digital', 'en-US': 'Assinando - Digital Signature Platform' },
    year: 2026,
    excerpt: {
      'pt-BR': 'Nova versao web em Laravel da plataforma de assinatura digital, com foco na area autenticada de upload, gestao e acompanhamento de documentos, integrando Blade e componentes React.',
      'en-US': 'New Laravel web version of a digital signature platform, focused on the authenticated area for document upload, management and signature tracking, integrating Blade and React components.',
    },
    stack: ['Laravel', 'Blade', 'React'],
    highlights: {
      'pt-BR': [
        'Area autenticada para solicitacao e acompanhamento de assinaturas',
        'Upload e gerenciamento de documentos com controle de status',
        'Adaptacao de regras da API para camada web em Blade',
        'Validacoes no fluxo de assinatura (React + Laravel)',
        'Pagina de perfil com atualizacao segura de dados',
      ],
      'en-US': [
        'Authenticated dashboard for managing signature requests',
        'Document upload and status tracking',
        'Adaptation of API rules into web layer (Blade)',
        'Signature component validations (React + Laravel)',
        'Secure profile management',
      ],
    },
    caseStudy: {
      problem: {
        'pt-BR': 'A plataforma precisava evoluir para uma nova versao web em Laravel, consolidando funcionalidades existentes e estruturando a area autenticada para gerenciamento de documentos, solicitacoes de assinatura e acompanhamento de status.\n\nEra necessario modernizar a experiencia da aplicacao, adaptar regras da API para o formato web e garantir consistencia nas validacoes e fluxos de assinatura.',
        'en-US': 'The platform required a new Laravel-based web version to consolidate existing functionality and structure the authenticated area for managing documents, signature requests and status tracking.\n\nIt was necessary to modernize the application experience, adapt API business rules to a web context and ensure consistency in validation and signature flows.',
      },
      solution: {
        'pt-BR': 'Atuei nos estagios iniciais da nova versao web da plataforma, desenvolvendo a area autenticada em Laravel Blade para:\n\n- Upload de documentos para solicitacao de assinatura\n- Visualizacao de pendencias\n- Acompanhamento detalhado de status\n- Gestao de dados de perfil\n\nTambem adaptei regras de negocio ja consolidadas na API para a camada web e implementei validacoes no componente de assinatura desenvolvido em React, garantindo coerencia entre backend e frontend.',
        'en-US': 'I contributed to the early stages of the new web version, developing the authenticated area using Laravel Blade to support:\n\n- Document uploads for signature requests\n- Pending signatures visualization\n- Detailed status tracking\n- Profile management\n\nI also adapted existing API business rules to the web layer and implemented validations in the React-based signature component, ensuring consistency between backend and frontend behavior.',
      },
      architecture: {
        webLayer: {
          'pt-BR': [
            'Laravel',
            'Blade Templates',
            'Integracao com componente React para assinatura',
            'Validacoes de fluxo no frontend',
          ],
          'en-US': [
            'Laravel',
            'Blade Templates',
            'React signature component integration',
            'Frontend flow validations',
          ],
        },
        backend: {
          'pt-BR': [
            'Laravel',
            'Reaproveitamento e adaptacao de regras de negocio existentes',
            'Estruturacao de endpoints para uso em contexto web',
            'Controle de estado de assinaturas e solicitantes',
          ],
          'en-US': [
            'Laravel',
            'Reuse and adaptation of existing business rules',
            'Web-structured endpoints',
            'Signature state management and tracking',
          ],
        },
        frontendComponent: {
          'pt-BR': ['React', 'Validacoes integradas com backend'],
          'en-US': ['React', 'Integrated validation flow'],
        },
      },
      results: {
        'pt-BR': [
          'Consolidacao da experiencia autenticada',
          'Fluxo organizado de solicitacao e assinatura',
          'Integracao coerente entre Blade e React',
          'Plataforma estavel alinhada a arquitetura adotada',
        ],
        'en-US': [
          'Consolidated authenticated experience',
          'Structured signature workflow',
          'Consistent integration between Blade and React',
          'Stable platform aligned with architectural decisions',
        ],
      },
    },
  },
  {
    slug: 'docteka-structured-data-import-system',
    productName: {
      'pt-BR': 'Sistema de Importacao Estruturada de Dados',
      'en-US': 'Structured Data Import System',
    },
    clientName: { 'pt-BR': 'Docteka', 'en-US': 'Docteka' },
    title: {
      'pt-BR': 'Docteka - Sistema de Importacao Estruturada de Dados',
      'en-US': 'Docteka - Structured Data Import System',
    },
    year: 2026,
    excerpt: {
      'pt-BR':
        'Pipeline corporativo de importacao para ingestao de planilhas (.csv e .xlsx), com validacao estrutural, mapeamento dinamico e persistencia padronizada para multiplas contas empresariais.',
      'en-US':
        'Enterprise import pipeline for .csv/.xlsx ingestion with structural validation, dynamic mapping, and standardized persistence across multiple business accounts.',
    },
    stack: ['Laravel', 'PHP', 'MySQL', 'Maatwebsite Excel'],
    highlights: {
      'pt-BR': [
        'Mapeamento dinamico entre headers reais e campos internos',
        'Validacao estrutural obrigatoria antes da persistencia',
        'Rastreabilidade por UUID, account_id e tracking de importacao',
      ],
      'en-US': [
        'Dynamic mapping between real spreadsheet headers and internal fields',
        'Mandatory structural validation before persistence',
        'Traceability with UUID, account_id, and import tracking',
      ],
    },
    caseStudy: {
      problem: {
        'pt-BR':
          'Clientes corporativos precisavam importar grandes volumes de dados estruturados para tabelas internas mantendo consistencia, rastreabilidade e integridade.\n\nComo cada conta apresentava variacoes de layout e nomenclatura, abordagens rigidas elevavam o esforco operacional e dificultavam a escalabilidade do processo.',
        'en-US':
          'Enterprise clients needed to import large volumes of structured data into internal tables while preserving consistency, traceability, and data integrity.\n\nSince each account had layout and naming variations, rigid approaches increased operational effort and limited process scalability.',
      },
      solution: {
        'pt-BR':
          'Projetei uma solucao de importacao em Laravel com comandos Artisan customizados para leitura padronizada de arquivos .csv e .xlsx, utilizando a primeira linha como fonte real de headers e realizando mapeamento dinamico entre colunas e campos internos.\n\nA validacao estrutural passou a ser etapa obrigatoria antes da persistencia: colunas excedentes sao ignoradas, e apenas linhas com campos obrigatorios sao aceitas.\n\nA persistencia foi padronizada com UUID por registro e metadados por entidade (incluindo account_id), com tracking de execucao e mensagens de validacao para dar previsibilidade ao processo.',
        'en-US':
          'I designed a Laravel import solution based on custom Artisan commands to standardize .csv/.xlsx ingestion, using the first row as the actual header source and applying dynamic mapping between spreadsheet columns and internal fields.\n\nStructural validation became mandatory before persistence: extra columns are ignored, and only rows containing required fields are accepted.\n\nPersistence was standardized with UUID per record and entity metadata (including account_id), plus execution tracking and validation messages to ensure process predictability.',
      },
      architecture: {
        webLayer: {
          'pt-BR': ['Laravel', 'Comandos Artisan customizados', 'Leitura de .csv e .xlsx com Maatwebsite Excel'],
          'en-US': ['Laravel', 'Custom Artisan commands', '.csv/.xlsx ingestion with Maatwebsite Excel'],
        },
        backend: {
          'pt-BR': [
            'Normalizacao semantica de headers',
            'Mapeamento dinamico coluna-campo',
            'Validacao estrutural obrigatoria antes da persistencia',
            'Ignora colunas excedentes e aceita apenas linhas com campos obrigatorios',
          ],
          'en-US': [
            'Semantic header normalization',
            'Dynamic column-to-field mapping',
            'Mandatory structural validation before persistence',
            'Ignores extra columns and accepts only rows with required fields',
          ],
        },
        infra: {
          'pt-BR': ['MySQL', 'UUID por registro', 'Associacao por account_id e rastreabilidade por entidade'],
          'en-US': ['MySQL', 'UUID per record', 'account_id association and entity-level traceability'],
        },
        worker: {
          'pt-BR': ['Tracking de importacao (sucesso/erro)', 'Mensagens estruturadas de validacao'],
          'en-US': ['Import tracking (success/error)', 'Structured validation messages'],
        },
      },
      results: {
        'pt-BR': [
          'Padronizacao do processo de importacao para multiplas contas empresariais',
          'Maior previsibilidade operacional com feedback estruturado de validacao',
          'Reducao de manutencao manual e ganho de escalabilidade do fluxo',
          'Economia operacional recorrente mensal significativa',
        ],
        'en-US': [
          'Standardized import process across multiple business accounts',
          'Improved operational predictability with structured validation feedback',
          'Reduced manual maintenance and better workflow scalability',
          'Significant recurring monthly operational savings',
        ],
      },
    },
  },
  {
    slug: 'gavio-arquitetura',
    productName: { 'pt-BR': 'Gavio Arquitetura', 'en-US': 'Gavio Arquitetura' },
    clientName: { 'pt-BR': 'Gavio Arquitetura', 'en-US': 'Gavio Arquitetura' },
    title: { 'pt-BR': 'Gavio Arquitetura - Site Institucional e Painel Administrativo', 'en-US': 'Gavio Arquitetura - Institutional Website and Admin Panel' },
    year: 2026,
    excerpt: {
      'pt-BR': 'Plataforma web institucional para apresentacao de projetos de arquitetura com painel administrativo evolutivo, desenvolvida e modernizada ao longo de multiplas versoes.',
      'en-US': 'Institutional web platform for showcasing architecture projects with an evolving administrative panel, developed and modernized across multiple versions.',
    },
    stack: ['Laravel', 'Blade', 'JavaScript', 'SCSS', 'MySQL'],
    highlights: {
      'pt-BR': [
        'Painel administrativo para gerenciamento de projetos e categorias',
        'Fluxo de upload e organizacao de imagens do portfolio',
        'Paginas publicas institucionais com conteudo dinamico',
        'Estrutura de layout reutilizavel para area publica e administrativa',
      ],
      'en-US': [
        'Administrative panel for project and category management',
        'Portfolio image upload and organization workflow',
        'Dynamic institutional public pages',
        'Reusable layout structure for public and admin areas',
      ],
    },
    caseStudy: {
      problem: {
        'pt-BR': 'A equipe precisava publicar e atualizar projetos de arquitetura com agilidade, mantendo padrao visual, organizacao por categoria e autonomia para edicoes sem dependencia tecnica constante.\n\nAlem disso, era necessario evoluir tecnicamente a aplicacao ao longo do tempo, acompanhando mudancas de stack e modernizacao da area administrativa.',
        'en-US': 'The team needed to publish and update architecture projects efficiently, maintaining visual consistency, category organization, and editorial autonomy without constant technical dependency.\n\nAdditionally, the platform required technical evolution over time, adapting to stack improvements and administrative modernization.',
      },
      solution: {
        'pt-BR': 'A primeira versao foi desenvolvida em PHP puro (2020), atendendo a necessidade inicial de presenca institucional com gerenciamento basico de conteudo.\n\nEm 2021, a aplicacao foi reestruturada em Laravel, consolidando regras de negocio, organizando a arquitetura e estruturando melhor o painel administrativo.\n\nEm 2024, realizei uma atualizacao focada na modernizacao da area administrativa, refinando fluxos de edicao, organizacao de categorias e usabilidade.\n\nNo inicio de 2026, uma nova atualizacao foi implementada, com melhorias de layout, padronizacao visual e integracao de tecnologias mais modernas, tornando o gerenciamento de conteudo mais fluido e sustentavel a longo prazo.',
        'en-US': 'The first version was built in plain PHP (2020), addressing the initial need for an institutional presence with basic content management.\n\nIn 2021, the application was restructured using Laravel, consolidating business rules, organizing the architecture and improving the administrative panel structure.\n\nIn 2024, I implemented an update focused on modernizing the admin area, refining editing flows, category organization and usability.\n\nIn early 2026, a new update introduced layout improvements, visual standardization and integration of more modern technologies, making content management smoother and more sustainable long-term.',
      },
      architecture: {
        webLayer: {
          'pt-BR': ['Laravel', 'Blade Templates', 'Renderizacao server-side', 'Layout responsivo'],
          'en-US': ['Laravel', 'Blade Templates', 'Server-side rendering', 'Responsive layout'],
        },
        backend: {
          'pt-BR': ['Laravel', 'Regras de negocio para projetos e categorias', 'Autenticacao e controle de acesso administrativo'],
          'en-US': ['Laravel', 'Business rules for projects and categories', 'Administrative authentication and access control'],
        },
        frontendComponent: {
          'pt-BR': ['JavaScript', 'SCSS', 'Interacoes para listagem e operacoes de CRUD'],
          'en-US': ['JavaScript', 'SCSS', 'Interactions for listing and CRUD operations'],
        },
        infra: {
          'pt-BR': ['MySQL', 'Armazenamento de imagens e assets'],
          'en-US': ['MySQL', 'Image and asset storage'],
        },
      },
      results: {
        'pt-BR': [
          'Evolucao continua da plataforma ao longo de multiplas versoes',
          'Processo de atualizacao de portfolio mais rapido e padronizado',
          'Maior autonomia da equipe para manutencao de conteudo',
          'Base administrativa reutilizavel para evolucoes futuras',
          'Arquitetura sustentavel e adaptavel ao longo do tempo',
        ],
        'en-US': [
          'Continuous platform evolution across multiple versions',
          'Faster and standardized portfolio updates',
          'Greater editorial autonomy',
          'Reusable administrative base for future expansion',
          'Sustainable and adaptable architecture over time',
        ],
      },
    },
  },
]
