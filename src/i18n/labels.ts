import type { Translated } from './types'

export type Labels = {
  nav: {
    experience: string
    about: string
    github: string
    linkedin: string
    email: string
  }
  locale: { pt: string; en: string }
  sections: {
    experience: string
    professionalExperience: string
    experienceIntroduction: string
    projects: string
    items: string
    summary: string
    context: string
    participation: string
    features: string
    technologyStructure: string
    frontend: string
    backend: string
    worker: string
    infra: string
    relatedWork: string
  }
  buttons: {
    viewExperience: string
    backToProjects: string
    repository: string
    backendRepository: string
    frontendRepository: string
    demo: string
  }
  states: {
    projectNotFoundTitle: string
    projectNotFoundDescription: string
  }
  footer: { rightsReserved: string }
  a11y: { openProject: string }
}

export const labels: Translated<Labels> = {
  'pt-BR': {
    nav: {
      experience: 'Experiência',
      about: 'Sobre',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'E-mail',
    },
    locale: { pt: 'PT', en: 'EN' },
    sections: {
      experience: 'Experiência',
      professionalExperience: 'Experiência profissional',
      experienceIntroduction: 'Um resumo do contexto, das responsabilidades e das tecnologias que fizeram parte de cada atuação.',
      projects: 'Projetos',
      items: 'itens',
      summary: 'Em resumo',
      context: 'Contexto',
      participation: 'Minha participação',
      features: 'Principais funcionalidades',
      technologyStructure: 'Tecnologias e estrutura',
      frontend: 'Frontend',
      backend: 'Backend',
      worker: 'Worker de PDF',
      infra: 'Infraestrutura',
      relatedWork: 'Trabalhos representativos',
    },
    buttons: {
      viewExperience: 'Ver experiência',
      backToProjects: 'Voltar para projetos',
      repository: 'Repositório',
      backendRepository: 'Backend',
      frontendRepository: 'Frontend',
      demo: 'Aplicação',
    },
    states: {
      projectNotFoundTitle: 'Projeto não encontrado',
      projectNotFoundDescription: 'O projeto solicitado não existe.',
    },
    footer: { rightsReserved: 'Todos os direitos reservados.' },
    a11y: { openProject: 'Abrir projeto' },
  },
  'en-US': {
    nav: {
      experience: 'Experience',
      about: 'About',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email',
    },
    locale: { pt: 'PT', en: 'EN' },
    sections: {
      experience: 'Experience',
      professionalExperience: 'Professional experience',
      experienceIntroduction: 'A summary of the context, responsibilities, and technologies involved in each role.',
      projects: 'Projects',
      items: 'items',
      summary: 'At a glance',
      context: 'Context',
      participation: 'My contribution',
      features: 'Key features',
      technologyStructure: 'Technology and structure',
      frontend: 'Frontend',
      backend: 'Backend',
      worker: 'PDF worker',
      infra: 'Infrastructure',
      relatedWork: 'Representative work',
    },
    buttons: {
      viewExperience: 'View experience',
      backToProjects: 'Back to projects',
      repository: 'Repository',
      backendRepository: 'Backend',
      frontendRepository: 'Frontend',
      demo: 'Live app',
    },
    states: {
      projectNotFoundTitle: 'Project not found',
      projectNotFoundDescription: 'The requested project does not exist.',
    },
    footer: { rightsReserved: 'All rights reserved.' },
    a11y: { openProject: 'Open project' },
  },
}
