import type { Translated } from '../i18n/types'

export type Project = {
  slug: string
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
        'pt-BR': 'Desenvolvi uma plataforma full-stack que permite construcao dinamica de paginas de relatorio (texto e mapas), upload organizado de imagens, ordenacao visual via SPA e geracao automatizada de PDF a partir de templates HTML/CSS. O sistema separa claramente a camada de edicao da camada de renderizacao final.',
        'en-US': 'I developed a full-stack platform that enables dynamic report page composition (text and maps), organized image upload, visual ordering through a SPA, and automated PDF generation from HTML/CSS templates. The system clearly separates editing from final rendering.',
      },
      architecture: {
        frontend: {
          'pt-BR': ['React', 'TypeScript', 'Editor modular baseado em estados', 'Comunicacao via API REST'],
          'en-US': ['React', 'TypeScript', 'State-driven modular editor', 'Communication through REST API'],
        },
        backend: {
          'pt-BR': ['Laravel', 'Modelagem estruturada de paginas, mapas e relatorios', 'Controle de permissoes e organizacao por entidade'],
          'en-US': ['Laravel', 'Structured modeling for pages, maps, and reports', 'Permissions control and organization by entity'],
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
          'Reducao do tempo medio de producao de relatorios de 2-3 semanas para 1 dia',
          'Padronizacao visual e estrutural dos documentos',
          'Eliminacao de retrabalho manual',
          'Fluxo previsivel e organizado de geracao',
        ],
        'en-US': [
          'Reduced average report production time from 2-3 weeks to 1 day',
          'Standardized visual and structural document layout',
          'Eliminated repetitive manual work',
          'Predictable and structured report generation workflow',
        ],
      },
    },
  },
  {
    slug: 'assinando-digital-signature-platform',
    title: { 'pt-BR': 'Assinando - Plataforma de Assinatura Digital', 'en-US': 'Assinando - Digital Signature Platform' },
    year: 2026,
    excerpt: {
      'pt-BR': 'Area autenticada de plataforma de assinatura digital com upload, solicitacao e acompanhamento de status de documentos, integrando Laravel Blade e componente React.',
      'en-US': 'Authenticated digital signature workflow with document upload, status tracking, and hybrid Laravel Blade + React integration.',
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
        'pt-BR': 'Usuarios precisavam de uma area autenticada para gerenciar documentos enviados para assinatura, acompanhar o status das solicitacoes e realizar assinaturas pendentes de forma organizada e segura.',
        'en-US': 'Users needed an authenticated environment to manage documents submitted for signature, track request status, and complete pending signatures in a structured and secure way.',
      },
      solution: {
        'pt-BR': 'Atuei no desenvolvimento da area autenticada da aplicacao web em Laravel Blade, permitindo upload de documentos para solicitacao de assinatura, visualizacao de pendencias e acompanhamento de status. Tambem adaptei regras existentes da API para a camada web e implementei validacoes no componente de assinatura em React.',
        'en-US': 'Developed the authenticated web layer using Laravel Blade, enabling document uploads, signature requests, and status tracking. Adapted existing API rules to the web layer and implemented validations within the React-based signature component integrated with Laravel.',
      },
      architecture: {
        webLayer: {
          'pt-BR': ['Laravel', 'Blade Templates', 'Renderizacao server-side'],
          'en-US': ['Laravel', 'Blade Templates', 'Server-side rendering'],
        },
        backend: {
          'pt-BR': ['Laravel', 'Regras de negocio consolidadas', 'Controle de estados de assinatura'],
          'en-US': ['Laravel', 'Centralized business rules', 'Signature state management'],
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
]
