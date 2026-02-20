import type { Translated } from './types'

export type Labels = {
  nav: { github: string; linkedin: string; email: string }
  locale: { pt: string; en: string }
  sections: {
    projects: string
    items: string
    problem: string
    solution: string
    architecture: string
    results: string
    webLayer: string
    frontend: string
    backend: string
    frontendComponent: string
    worker: string
    infra: string
  }
  buttons: { backToProjects: string; repository: string; demo: string }
  states: { projectNotFoundTitle: string; projectNotFoundDescription: string }
  footer: { rightsReserved: string }
  a11y: { openProject: string }
}

export const labels: Translated<Labels> = {
  'pt-BR': {
    nav: { github: 'GitHub', linkedin: 'LinkedIn', email: 'E-mail' },
    locale: { pt: 'PT', en: 'EN' },
    sections: {
      projects: 'Projetos', items: 'itens', problem: 'Problema', solution: 'Solucao', architecture: 'Arquitetura', results: 'Resultados',
      webLayer: 'Web Layer', frontend: 'Frontend', backend: 'Backend', frontendComponent: 'Componente Frontend', worker: 'Worker', infra: 'Infra',
    },
    buttons: { backToProjects: 'Voltar para projetos', repository: 'Repositorio', demo: 'Demo' },
    states: { projectNotFoundTitle: 'Projeto nao encontrado', projectNotFoundDescription: 'O projeto solicitado nao existe.' },
    footer: { rightsReserved: 'Todos os direitos reservados.' },
    a11y: { openProject: 'Abrir projeto' },
  },
  'en-US': {
    nav: { github: 'GitHub', linkedin: 'LinkedIn', email: 'Email' },
    locale: { pt: 'PT', en: 'EN' },
    sections: {
      projects: 'Projects', items: 'items', problem: 'Problem', solution: 'Solution', architecture: 'Architecture', results: 'Results',
      webLayer: 'Web Layer', frontend: 'Frontend', backend: 'Backend', frontendComponent: 'Frontend Component', worker: 'Worker', infra: 'Infra',
    },
    buttons: { backToProjects: 'Back to projects', repository: 'Repository', demo: 'Demo' },
    states: { projectNotFoundTitle: 'Project not found', projectNotFoundDescription: 'The requested project does not exist.' },
    footer: { rightsReserved: 'All rights reserved.' },
    a11y: { openProject: 'Open project' },
  },
}
