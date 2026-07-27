import type { Translated } from '../i18n/types'

export type HeroContent = {
  headline: Translated<string>
  subheadline: Translated<string>
  supportingLine?: Translated<string>
}

export const hero: HeroContent = {
  headline: {
    'pt-BR': 'Desenvolvedor Full Stack com foco em PHP e Laravel.',
    'en-US': 'Full Stack Developer focused on PHP and Laravel.',
  },
  subheadline: {
    'pt-BR': 'Atuo também com React e TypeScript no frontend, desenvolvendo sistemas web em produção, APIs REST, integrações e processamento assíncrono.',
    'en-US': 'I also work with React and TypeScript on the frontend, building production web systems, REST APIs, integrations, and asynchronous processing.',
  },
  supportingLine: {
    'pt-BR': 'PHP · Laravel · React · TypeScript · MySQL',
    'en-US': 'PHP · Laravel · React · TypeScript · MySQL',
  },
}
