import type { Translated } from '../i18n/types'

export const hero = {
  kickerLines: {
    'pt-BR': ['Full-Stack Engineer', 'Laravel • React • Python'],
    'en-US': ['Full-Stack Engineer', 'Laravel • React • Python'],
  } satisfies Translated<string[]>,
  headlineLines: {
    'pt-BR': ['Transformo problemas operacionais', 'em sistemas previsiveis.'],
    'en-US': ['I turn operational problems', 'into predictable systems.'],
  } satisfies Translated<string[]>,
  subheadlineLines: {
    'pt-BR': ['Engenharia de software aplicada a produtos web reais.', 'Arquitetura limpa, fluxos bem definidos e solucoes pensadas para crescer.'],
    'en-US': ['Software engineering applied to real web products.', 'Clean architecture, clear workflows, and solutions designed to scale.'],
  } satisfies Translated<string[]>,
}
