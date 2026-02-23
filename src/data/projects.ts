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
    title: { 'pt-BR': 'MapIQ - Plataforma de Relatórios de Inspeção com Drones', 'en-US': 'MapIQ - Drone Inspection Reporting Platform' },
    year: 2026,
    excerpt: {
      'pt-BR': 'Plataforma full-stack para criação e geração automatizada de relatórios de inspeção com imagens e mapas, com pipeline dedicado de renderização em PDF.',
      'en-US': 'Full-stack platform for creating and automatically generating inspection reports with images and maps, backed by a dedicated PDF rendering pipeline.',
    },
    stack: ['React', 'TypeScript', 'Laravel', 'Python', 'Docker', 'WeasyPrint'],
    highlights: {
      'pt-BR': [
        'Editor modular de páginas (texto e mapas) com ordenação drag-and-drop',
        'Pipeline de geração de PDF com worker isolado e layout dinâmico',
        'Persistência estruturada de páginas e assets com versionamento logico',
        'Upload e organização de imagens com processamento controlado',
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
        'pt-BR': 'A Mapas Drone precisava transformar grandes volumes de imagens aéreas e mapas em relatórios padronizados, mantendo consistência visual e rastreabilidade.\n\nO processo manual poderia levar semanas para a conclusão de um relatório completo, envolvendo organização manual de imagens, montagem de layout e revisões sucessivas.',
        'en-US': 'Mapas Drone needed to transform large volumes of aerial images and maps into standardized inspection reports while maintaining visual consistency and traceability.\n\nThe manual process required 2 to 3 weeks to complete a full report, involving manual image organization, layout assembly, and multiple revision cycles.',
      },
      solution: {
        'pt-BR': 'Desenvolvi uma plataforma full-stack que permite construção dinâmica de páginas de relatório (texto e mapas), upload organizado de imagens, ordenação visual via SPA e geração automatizada de PDF a partir de templates HTML/CSS.\n\nA arquitetura foi projetada como plataforma multi-tenant, com gerenciamento estruturado de empresas e branches, controle de permissões por papel (RBAC) e rastreabilidade por entidade.\n\nO sistema separa claramente a camada de edição da camada de renderização final, garantindo previsibilidade na geração dos relatórios e consistência visual.',
        'en-US': 'I developed a full-stack platform that enables dynamic report page construction (text and maps), structured image uploads, visual ordering through a SPA, and automated PDF generation from HTML/CSS templates.\n\nThe architecture was designed as a multi-tenant platform, with structured management of companies and branches, role-based access control (RBAC), and entity-level traceability.\n\nThe system clearly separates the editing layer from the final rendering layer, ensuring deterministic PDF generation and visual consistency.',
      },
      architecture: {
        frontend: {
          'pt-BR': ['React', 'TypeScript', 'Editor modular baseado em estados', 'Comunicação via API REST'],
          'en-US': ['React', 'TypeScript', 'State-driven modular editor', 'Communication through REST API'],
        },
        backend: {
          'pt-BR': [
            'Laravel',
            'Modelagem estruturada de páginas, mapas e relatórios',
            'Multi-tenant (empresas e branches)',
            'Controle de permissões baseado em papéis (RBAC)',
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
          'pt-BR': ['Python', 'WeasyPrint', 'Renderização determinística de PDF'],
          'en-US': ['Python', 'WeasyPrint', 'Deterministic PDF rendering'],
        },
        infra: {
          'pt-BR': ['Docker', 'Storage organizado para imagens e assets'],
          'en-US': ['Docker', 'Organized storage for images and assets'],
        },
      },
      results: {
        'pt-BR': [
          'A implementação reduziu o tempo médio de produção de relatórios de 2-3 semanas para aproximadamente 1 dia, padronizando layout, aumentando rastreabilidade e eliminando retrabalho manual.',
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
      'pt-BR': 'Nova versão web em Laravel da plataforma de assinatura digital, com foco na área autenticada de upload, gestão e acompanhamento de documentos, integrando Blade e componentes React.',
      'en-US': 'New Laravel web version of a digital signature platform, focused on the authenticated area for document upload, management and signature tracking, integrating Blade and React components.',
    },
    stack: ['Laravel', 'Blade', 'React'],
    highlights: {
      'pt-BR': [
        'Área autenticada para solicitação e acompanhamento de assinaturas',
        'Upload e gerenciamento de documentos com controle de status',
        'Adaptacao de regras da API para camada web em Blade',
        'Validações no fluxo de assinatura (React + Laravel)',
        'Página de perfil com atualização segura de dados',
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
        'pt-BR': 'A plataforma precisava evoluir para uma nova versão web em Laravel, consolidando funcionalidades existentes e estruturando a área autenticada para gerenciamento de documentos, solicitações de assinatura e acompanhamento de status.\n\nEra necessário modernizar a experiência da aplicação, adaptar regras da API para o formato web e garantir consistência nas validações e fluxos de assinatura.',
        'en-US': 'The platform required a new Laravel-based web version to consolidate existing functionality and structure the authenticated area for managing documents, signature requests and status tracking.\n\nIt was necessary to modernize the application experience, adapt API business rules to a web context and ensure consistency in validation and signature flows.',
      },
      solution: {
        'pt-BR': 'Atuei nos estágios iniciais da nova versão web da plataforma, desenvolvendo a área autenticada em Laravel Blade para:\n\n- Upload de documentos para solicitação de assinatura\n- Visualização de pendências\n- Acompanhamento detalhado de status\n- Gestão de dados de perfil\n\nTambém adaptei regras de negócio já consolidadas na API para a camada web e implementei validações no componente de assinatura desenvolvido em React, garantindo coerência entre backend e frontend.',
        'en-US': 'I contributed to the early stages of the new web version, developing the authenticated area using Laravel Blade to support:\n\n- Document uploads for signature requests\n- Pending signatures visualization\n- Detailed status tracking\n- Profile management\n\nI also adapted existing API business rules to the web layer and implemented validations in the React-based signature component, ensuring consistency between backend and frontend behavior.',
      },
      architecture: {
        webLayer: {
          'pt-BR': [
            'Laravel',
            'Blade Templates',
            'Integração com componente React para assinatura',
            'Validações de fluxo no frontend',
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
            'Reaproveitamento e adaptacao de regras de negócio existentes',
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
          'pt-BR': ['React', 'Validações integradas com backend'],
          'en-US': ['React', 'Integrated validation flow'],
        },
      },
      results: {
        'pt-BR': [
          'Consolidação da experiência autenticada',
          'Fluxo organizado de solicitação e assinatura',
          'Integração coerente entre Blade e React',
          'Plataforma estável alinhada a arquitetura adotada',
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
      'pt-BR': 'Sistema de Importação Estruturada de Dados',
      'en-US': 'Structured Data Import System',
    },
    clientName: { 'pt-BR': 'Docteka', 'en-US': 'Docteka' },
    title: {
      'pt-BR': 'Docteka - Sistema de Importação Estruturada de Dados',
      'en-US': 'Docteka - Structured Data Import System',
    },
    year: 2026,
    excerpt: {
      'pt-BR':
        'Pipeline corporativo de importação para ingestão de planilhas (.csv e .xlsx), com validação estrutural, mapeamento dinâmico e persistência padronizada para múltiplas contas empresariais.',
      'en-US':
        'Enterprise import pipeline for .csv/.xlsx ingestion with structural validation, dynamic mapping, and standardized persistence across multiple business accounts.',
    },
    stack: ['Laravel', 'PHP', 'MySQL', 'Maatwebsite Excel'],
    highlights: {
      'pt-BR': [
        'Mapeamento dinâmico entre headers reais e campos internos',
        'Validacao estrutural obrigatória antes da persistência',
        'Rastreabilidade por UUID, account_id e tracking de importação',
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
          'Clientes corporativos precisavam importar grandes volumes de dados estruturados para tabelas internas mantendo consistência, rastreabilidade e integridade.\n\nComo cada conta apresentava variações de layout e nomenclatura, abordagens rígidas elevavam o esforço operacional e dificultavam a escalabilidade do processo.',
        'en-US':
          'Enterprise clients needed to import large volumes of structured data into internal tables while preserving consistency, traceability, and data integrity.\n\nSince each account had layout and naming variations, rigid approaches increased operational effort and limited process scalability.',
      },
      solution: {
        'pt-BR':
          'Projetei uma solução de importação em Laravel com comandos Artisan customizados para leitura padronizada de arquivos .csv e .xlsx, utilizando a primeira linha como fonte real de headers e realizando mapeamento dinâmico entre colunas e campos internos.\n\nA validação estrutural passou a ser etapa obrigatória antes da persistência: colunas excedentes sao ignoradas, e apenas linhas com campos obrigatorios sao aceitas.\n\nA persistência foi padronizada com UUID por registro e metadados por entidade (incluindo account_id), com tracking de execução e mensagens de validação para dar previsibilidade ao processo.',
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
            'Mapeamento dinâmico coluna-campo',
            'Validacao estrutural obrigatória antes da persistência',
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
          'pt-BR': ['MySQL', 'UUID por registro', 'Associação por account_id e rastreabilidade por entidade'],
          'en-US': ['MySQL', 'UUID per record', 'account_id association and entity-level traceability'],
        },
        worker: {
          'pt-BR': ['Tracking de importação (sucesso/erro)', 'Mensagens estruturadas de validação'],
          'en-US': ['Import tracking (success/error)', 'Structured validation messages'],
        },
      },
      results: {
        'pt-BR': [
          'Padronizacao do processo de importação para múltiplas contas empresariais',
          'Maior previsibilidade operacional com feedback estruturado de validação',
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
      'pt-BR': 'Plataforma web institucional para apresentação de projetos de arquitetura com painel administrativo evolutivo, desenvolvida e modernizada ao longo de múltiplas versões.',
      'en-US': 'Institutional web platform for showcasing architecture projects with an evolving administrative panel, developed and modernized across multiple versions.',
    },
    stack: ['Laravel', 'Blade', 'JavaScript', 'SCSS', 'MySQL'],
    highlights: {
      'pt-BR': [
        'Painel administrativo para gerenciamento de projetos e categorias',
        'Fluxo de upload e organização de imagens do portfólio',
        'Páginas publicas institucionais com conteúdo dinâmico',
        'Estrutura de layout reutilizável para area publica e administrativa',
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
        'pt-BR': 'A equipe precisava publicar e atualizar projetos de arquitetura com agilidade, mantendo padrão visual, organização por categoria e autonomia para edições sem dependência técnica constante.\n\nAlém disso, era necessário evoluir técnicamente a aplicação ao longo do tempo, acompanhando mudanças de stack e modernização da área administrativa.',
        'en-US': 'The team needed to publish and update architecture projects efficiently, maintaining visual consistency, category organization, and editorial autonomy without constant technical dependency.\n\nAdditionally, the platform required technical evolution over time, adapting to stack improvements and administrative modernization.',
      },
      solution: {
        'pt-BR': 'A primeira versão foi desenvolvida em PHP puro (2020), atendendo a necessidade inicial de presença institucional com gerenciamento básico de conteúdo.\n\nEm 2021, a aplicação foi reestruturada em Laravel, consolidando regras de negócio, organizando a arquitetura e estruturando melhor o painel administrativo.\n\nEm 2024, realizei uma atualização focada na modernização da área administrativa, refinando fluxos de edição, organização de categorias e usabilidade.\n\nNo início de 2026, uma nova atualização foi implementada, com melhorias de layout, padronização visual e integração de tecnologias mais modernas, tornando o gerenciamento de conteúdo mais fluido e sustentável a longo prazo.',
        'en-US': 'The first version was built in plain PHP (2020), addressing the initial need for an institutional presence with basic content management.\n\nIn 2021, the application was restructured using Laravel, consolidating business rules, organizing the architecture and improving the administrative panel structure.\n\nIn 2024, I implemented an update focused on modernizing the admin area, refining editing flows, category organization and usability.\n\nIn early 2026, a new update introduced layout improvements, visual standardization and integration of more modern technologies, making content management smoother and more sustainable long-term.',
      },
      architecture: {
        webLayer: {
          'pt-BR': ['Laravel', 'Blade Templates', 'Renderização server-side', 'Layout responsivo'],
          'en-US': ['Laravel', 'Blade Templates', 'Server-side rendering', 'Responsive layout'],
        },
        backend: {
          'pt-BR': ['Laravel', 'Regras de negócio para projetos e categorias', 'Autenticação e controle de acesso administrativo'],
          'en-US': ['Laravel', 'Business rules for projects and categories', 'Administrative authentication and access control'],
        },
        frontendComponent: {
          'pt-BR': ['JavaScript', 'SCSS', 'Interações para listagem e operações de CRUD'],
          'en-US': ['JavaScript', 'SCSS', 'Interactions for listing and CRUD operations'],
        },
        infra: {
          'pt-BR': ['MySQL', 'Armazenamento de imagens e assets'],
          'en-US': ['MySQL', 'Image and asset storage'],
        },
      },
      results: {
        'pt-BR': [
          'Evolucao continua da plataforma ao longo de múltiplas versões',
          'Processo de atualização de portfólio mais rapido e padronizado',
          'Maior autonomia da equipe para manutencao de conteúdo',
          'Base administrativa reutilizável para evolucoes futuras',
          'Arquitetura sustentável e adaptavel ao longo do tempo',
        ],
        'en-US': [
          'Continuous platform evolution across multiple versions',
          'Faster and standardized portfólio updates',
          'Greater editorial autonomy',
          'Reusable administrative base for future expansion',
          'Sustainable and adaptable architecture over time',
        ],
      },
    },
  },
]


