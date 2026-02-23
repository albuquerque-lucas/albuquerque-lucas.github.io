import type { Translated } from '../i18n/types'

export type AboutContent = {
  hero: {
    headline: Translated<string>
    subheadline: Translated<string>
  }
  mindset: {
    title: Translated<string>
    paragraphs: Translated<string[]>
  }
  principles: {
    title: Translated<string>
    items: Translated<string[]>
  }
  trajectory: {
    title: Translated<string>
    paragraphs: Translated<string[]>
  }
  current: {
    title: Translated<string>
    paragraphs: Translated<string[]>
  }
}

export const aboutContent: AboutContent = {
  hero: {
    headline: {
      'pt-BR': 'Engenharia de software orientada a arquitetura, previsibilidade e evolução contínua.',
      'en-US': 'Software engineering centered on architecture, predictability, and continuous evolution.',
    },
    subheadline: {
      'pt-BR': 'Projeto sistemas com separação clara de responsabilidades e decisões técnicas sustentáveis no longo prazo.',
      'en-US': 'I build systems with clear separation of responsibilities and technical decisions that hold over time.',
    },
  },
  mindset: {
    title: {
      'pt-BR': 'Como eu penso software',
      'en-US': 'How I think about software',
    },
    paragraphs: {
      'pt-BR': [
        'Software robusto nasce de arquitetura clara. Eu priorizo delimitação explícita de contexto, contratos consistentes entre camadas e responsabilidades bem separadas para reduzir acoplamento e evitar comportamento imprevisível.',
        'Estruturo sistemas para evolução incremental, não para correções recorrentes. Isso significa modelagem orientada a negócio, persistência rastreável e fluxos deterministas que permitem escalar sem perder legibilidade nem controle operacional.',
      ],
      'en-US': [
        'Robust software starts with clear architecture. I prioritize explicit boundaries, consistent contracts between layers, and strong separation of responsibilities to reduce coupling and avoid unpredictable behavior.',
        'I structure systems for incremental evolution, not recurring fixes. That means domain-oriented modeling, traceable persistence, and deterministic flows that scale without sacrificing readability or operational control.',
      ],
    },
  },
  principles: {
    title: {
      'pt-BR': 'Princípios de engenharia',
      'en-US': 'Engineering principles',
    },
    items: {
      'pt-BR': [
        'Arquitetura orientada a previsibilidade.',
        'Separação clara de responsabilidades.',
        'Multi-tenant considerado desde a modelagem.',
        'Persistência estruturada e rastreável.',
        'Automação acima de processo manual.',
        'Integrações sólidas e determinísticas.',
      ],
      'en-US': [
        'Architecture driven by predictability.',
        'Clear separation of responsibilities.',
        'Multi-tenant concerns addressed at modeling time.',
        'Structured, traceable persistence.',
        'Automation over manual process.',
        'Solid, deterministic integrations.',
      ],
    },
  },
  trajectory: {
    title: {
      'pt-BR': 'Trajetória',
      'en-US': 'Trajectory',
    },
    paragraphs: {
      'pt-BR': [
        'Minha base inicial em Administração consolidou visão de processos, organização e tomada de decisão orientada a resultado.',
        'Na sequência, fiz formação intensiva full-stack e avancei para sistemas corporativos reais, atuando em arquitetura de produto, integrações e fluxo de dados em produção. Hoje sigo em Engenharia de Software, aprofundando fundamentos e elevando consistência técnica em cada entrega.',
      ],
      'en-US': [
        'My initial background in Business Administration built a strong foundation in process design, organization, and result-oriented decision-making.',
        'Then I completed intensive full-stack training and moved into real corporate systems, working on product architecture, integrations, and production data flows. I am currently pursuing Software Engineering, deepening core foundations and raising technical consistency in every delivery.',
      ],
    },
  },
  current: {
    title: {
      'pt-BR': 'Atualmente',
      'en-US': 'Currently',
    },
    paragraphs: {
      'pt-BR': [
        'Estou aprofundando arquitetura de software, sistemas distribuídos, escalabilidade e qualidade de código.',
        'Meu foco é evolução contínua como engenheiro: projetar com mais precisão, operar com mais confiabilidade e sustentar produtos que crescem sem comprometer a base técnica.',
      ],
      'en-US': [
        'I am deepening my practice in software architecture, distributed systems, scalability, and code quality.',
        'My focus is continuous engineering growth: design with more precision, operate with higher reliability, and sustain products that scale without weakening the technical foundation.',
      ],
    },
  },
}



