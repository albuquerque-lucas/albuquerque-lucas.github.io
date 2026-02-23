import type { Translated } from '../i18n/types'

export type HeroContent = {
  headline: Translated<string>
  subheadline: Translated<string>
  supportingLine?: Translated<string>
}

export const hero: HeroContent = {
  headline: {
    'pt-BR': 'Engenharia de software aplicada a sistemas reais.',
    'en-US': 'Software engineering applied to real-world systems.',
  },
  subheadline: {
    'pt-BR': 'Arquitetura limpa, fluxos bem definidos e solu\u00e7\u00f5es pensadas para evoluir.',
    'en-US': 'Clean architecture, well-defined flows, and solutions designed to evolve.',
  },
  supportingLine: {
    'pt-BR': 'Full-Stack Engineer \u00b7 Laravel \u00b7 React \u00b7 Python',
    'en-US': 'Full-Stack Engineer \u00b7 Laravel \u00b7 React \u00b7 Python',
  },
}
