import type { Translated } from '../i18n/types'

export type ExperienceArea = {
  title: Translated<string>
  items: Translated<string[]>
}

export type RelatedWork = {
  title: Translated<string>
  description: Translated<string>
}

export type Experience = {
  id: string
  company: string
  role: Translated<string>
  period: Translated<string>
  workMode: Translated<string>
  companyContext: Translated<string>
  highlights: Translated<string[]>
  areas: ExperienceArea[]
  relatedWork?: RelatedWork[]
  stack: string[]
}

export const experiences: Experience[] = [
  {
    id: 'bredi',
    company: 'Bredi',
    role: {
      'pt-BR': 'Desenvolvedor Full Stack PHP/Laravel',
      'en-US': 'Full Stack PHP/Laravel Developer',
    },
    period: {
      'pt-BR': 'abr/2026 — atual',
      'en-US': 'Apr 2026 — present',
    },
    workMode: {
      'pt-BR': 'Remoto · software house',
      'en-US': 'Remote · software house',
    },
    companyContext: {
      'pt-BR': 'Software house responsável por aplicações de diferentes segmentos. Atuo tanto em sistemas novos quanto em bases legadas que continuam em operação.',
      'en-US': 'Software house responsible for applications across different sectors. I work on both new systems and legacy codebases that remain in operation.',
    },
    highlights: {
      'pt-BR': [
        'Evolução e sustentação de aplicações novas e legadas em uma software house.',
        'APIs REST, regras de negócio e integrações com MySQL, incluindo pagamentos, Pix, webhooks, checkout, pedidos, frete e rotinas financeiras.',
        'Integração de backends Laravel com interfaces em React e Next.js, além de PDFs, filas, jobs e notificações.',
      ],
      'en-US': [
        'Development and maintenance of new and legacy applications at a software house.',
        'REST APIs, business rules, and MySQL integrations, including payments, Pix, webhooks, checkout, orders, shipping, and financial workflows.',
        'Integration of Laravel backends with React and Next.js interfaces, plus PDFs, queues, jobs, and notifications.',
      ],
    },
    areas: [
      {
        title: {
          'pt-BR': 'Backend e sistemas em produção',
          'en-US': 'Backend and production systems',
        },
        items: {
          'pt-BR': [
            'Desenvolvo APIs REST, regras de negócio e painéis administrativos com PHP, Laravel e MySQL.',
            'Mantenho aplicações PHP e Laravel legadas, corrigindo regras, validações, consultas, filas e e-mails sem interromper a operação.',
          ],
          'en-US': [
            'I build REST APIs, business rules, and admin panels with PHP, Laravel, and MySQL.',
            'I maintain legacy PHP and Laravel applications, fixing rules, validation, queries, queues, and email without disrupting operations.',
          ],
        },
      },
      {
        title: {
          'pt-BR': 'Integrações e fluxos',
          'en-US': 'Integrations and workflows',
        },
        items: {
          'pt-BR': [
            'Integro pagamentos e Pix, tratando webhooks, falhas de processamento, divergências de valores e conciliação de transações.',
            'Evoluo fluxos de checkout, pedidos, disponibilidade, frete e notificações, conectando backends Laravel a interfaces React, Next.js e TypeScript.',
          ],
          'en-US': [
            'I integrate payments and Pix, handling webhooks, processing failures, value discrepancies, and transaction reconciliation.',
            'I evolve checkout, order, availability, shipping, and notification workflows, connecting Laravel backends to React, Next.js, and TypeScript interfaces.',
          ],
        },
      },
      {
        title: {
          'pt-BR': 'Processamento e rotinas operacionais',
          'en-US': 'Processing and operational routines',
        },
        items: {
          'pt-BR': [
            'Trabalho com filas, jobs, importações, geração de PDFs e notificações.',
            'Automatizo rotinas financeiras e operacionais, incluindo documentos, remessas, retornos e relatórios.',
          ],
          'en-US': [
            'I work with queues, jobs, imports, PDF generation, and notifications.',
            'I automate financial and operational routines, including documents, remittances, returns, and reports.',
          ],
        },
      },
    ],
    stack: ['PHP', 'Laravel', 'MySQL', 'React', 'TypeScript', 'Next.js'],
  },
  {
    id: 'docteka',
    company: 'Docteka',
    role: {
      'pt-BR': 'Desenvolvedor Full Stack',
      'en-US': 'Full Stack Developer',
    },
    period: {
      'pt-BR': 'set/2024 — ago/2025',
      'en-US': 'Sep 2024 — Aug 2025',
    },
    workMode: {
      'pt-BR': 'Contrato PJ · remoto',
      'en-US': 'Independent contractor · remote',
    },
    companyContext: {
      'pt-BR': 'Empresa de tecnologia com plataformas de gestão documental, RH e assinatura digital utilizadas por múltiplos clientes.',
      'en-US': 'Technology company with document management, HR, and digital signature platforms used by multiple clients.',
    },
    highlights: {
      'pt-BR': [
        'Desenvolvimento e manutenção de plataformas multi-clientes de gestão documental, RH e assinatura digital.',
        'Trabalho com uploads, permissões, indexadores, classes documentais, importação de arquivos, geração de PDFs, filas, jobs e e-mails.',
        'Aplicações Laravel e React em ambientes com Docker e serviços AWS, incluindo S3 e SES.',
      ],
      'en-US': [
        'Development and maintenance of multi-client document management, HR, and digital signature platforms.',
        'Work involving uploads, permissions, indexers, document classes, file imports, PDF generation, queues, jobs, and email.',
        'Laravel and React applications in environments using Docker and AWS services, including S3 and SES.',
      ],
    },
    areas: [
      {
        title: {
          'pt-BR': 'Plataformas e regras de negócio',
          'en-US': 'Platforms and business rules',
        },
        items: {
          'pt-BR': [
            'Mantive e evoluí sistemas em produção com PHP, Laravel e MySQL, realizando correções e entregas incrementais em fluxos operacionais.',
            'Modelei APIs REST e regras de negócio para gestão documental, RH e assinatura digital.',
          ],
          'en-US': [
            'I maintained and evolved production systems with PHP, Laravel, and MySQL, delivering fixes and incremental improvements to operational workflows.',
            'I modeled REST APIs and business rules for document management, HR, and digital signatures.',
          ],
        },
      },
      {
        title: {
          'pt-BR': 'Documentos e controle de acesso',
          'en-US': 'Documents and access control',
        },
        items: {
          'pt-BR': [
            'Estruturei uploads, permissões, indexadores e classes documentais configuráveis para diferentes operações.',
            'Trabalhei com geração de PDFs, filas, jobs, e-mails e armazenamento de arquivos.',
          ],
          'en-US': [
            'I structured uploads, permissions, indexers, and configurable document classes for different operations.',
            'I worked with PDF generation, queues, jobs, email, and file storage.',
          ],
        },
      },
      {
        title: {
          'pt-BR': 'Frontend e infraestrutura',
          'en-US': 'Frontend and infrastructure',
        },
        items: {
          'pt-BR': [
            'Integrei fluxos de assinatura digital a um componente React para posicionamento sequencial de campos nos documentos.',
            'Atuei em ambientes com Docker, AWS S3 e AWS SES.',
          ],
          'en-US': [
            'I integrated digital signature workflows with a React component for sequential field positioning in documents.',
            'I worked in environments using Docker, AWS S3, and AWS SES.',
          ],
        },
      },
    ],
    relatedWork: [
      {
        title: {
          'pt-BR': 'Assinatura digital',
          'en-US': 'Digital signatures',
        },
        description: {
          'pt-BR': 'Participei da evolução da área autenticada para upload, acompanhamento de documentos e validações entre Laravel, Blade e o componente React de assinatura.',
          'en-US': 'I contributed to the authenticated area for uploads, document tracking, and validation across Laravel, Blade, and the React signature component.',
        },
      },
      {
        title: {
          'pt-BR': 'Importação estruturada',
          'en-US': 'Structured imports',
        },
        description: {
          'pt-BR': 'Implementei rotinas para leitura de CSV e XLSX, mapeamento de colunas, validação estrutural e persistência rastreável dos registros.',
          'en-US': 'I implemented routines for reading CSV and XLSX files, mapping columns, structural validation, and traceable record persistence.',
        },
      },
    ],
    stack: ['PHP', 'Laravel', 'MySQL', 'React', 'Docker', 'AWS'],
  },
]
