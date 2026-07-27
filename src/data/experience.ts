import type { Translated } from '../i18n/types'

export type Experience = {
  company: string
  role: Translated<string>
  period: Translated<string>
  details: Translated<string[]>
  stack: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Bredi',
    role: {
      'pt-BR': 'Desenvolvedor Full Stack PHP/Laravel',
      'en-US': 'Full Stack PHP/Laravel Developer',
    },
    period: {
      'pt-BR': 'abr/2026 — atual · remoto',
      'en-US': 'Apr 2026 — present · remote',
    },
    details: {
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
    stack: ['PHP', 'Laravel', 'MySQL', 'React', 'TypeScript', 'Next.js'],
  },
  {
    company: 'Docteka',
    role: {
      'pt-BR': 'Desenvolvedor Full Stack',
      'en-US': 'Full Stack Developer',
    },
    period: {
      'pt-BR': 'set/2024 — ago/2025 · contrato PJ · remoto',
      'en-US': 'Sep 2024 — Aug 2025 · contractor · remote',
    },
    details: {
      'pt-BR': [
        'Desenvolvimento e manutenção de plataformas multi-clientes de gestão documental, RH e assinatura digital.',
        'Trabalho com uploads, permissões, indexadores, classes documentais, importação de arquivos, geração de PDFs, filas, jobs e e-mails.',
        'Aplicações Laravel e React em ambientes com Docker e serviços AWS, incluindo S3 e SES.',
      ],
      'en-US': [
        'Development and maintenance of multi-client document management, HR, and digital signature platforms.',
        'Work involving uploads, permissions, indexers, document classes, file imports, PDF generation, queues, jobs, and email.',
        'Laravel and React applications running with Docker and AWS services, including S3 and SES.',
      ],
    },
    stack: ['PHP', 'Laravel', 'MySQL', 'React', 'Docker', 'AWS'],
  },
]
