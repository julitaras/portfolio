export type Lang = 'es' | 'en'

export const translations = {
  es: {
    nav: {
      projects: 'proyectos',
      stack: 'stack',
      contact: 'contacto',
    },
    hero: {
      greeting: 'hola, soy',
      name: 'Juli Taras',
      role: 'estudiante de informática',
      university: 'FIUBA · Buenos Aires',
      description:
        'Me gusta construir cosas que resuelvan problemas reales. Estudio Ingeniería en Informática y disfruto explorar lenguajes y paradigmas distintos.',
      cta: 'ver proyectos',
    },
    projects: {
      title: 'proyectos',
      subtitle: 'algunas cosas que construí',
      private: 'privado',
      viewCode: 'ver código',
      items: [
        {
          id: 'insutrack',
          name: 'InsuTrack',
          description:
            'App personal para gestionar insumos de diabetes. Seguimiento de stock, fechas de vencimiento y alertas.',
          descriptionEn: '',
          lang: 'TypeScript · React',
          private: true,
        },
        {
          id: 'fiuba-tracker',
          name: 'FIUBA Final Tracker',
          description:
            'Calculadora para hacer seguimiento de vencimientos de finales en FIUBA. Nunca más perderse una fecha.',
          lang: 'TypeScript',
          url: 'https://github.com/julitaras/FIUBA-final-tracker',
          private: false,
        },
        {
          id: 'turnar',
          name: 'TurnAR',
          description:
            'App mobile en Flutter para la materia Teoría de Lenguajes. Manejo de turnos con interfaz limpia.',
          lang: 'Dart · Flutter',
          url: 'https://github.com/julitaras/turnAR',
          private: false,
        },
        {
          id: 'meal-random',
          name: 'Meal Random',
          description:
            'No sé qué comer. Esta app tampoco, pero al menos te da una idea random. Proyecto experimental.',
          lang: 'JavaScript',
          url: 'https://github.com/julitaras/meal-random',
          private: false,
        },
        {
          id: 'taller-rust',
          name: 'Taller Individual',
          description:
            'Trabajo práctico individual en Rust para la materia Taller de Programación. Manejo de memoria sin GC.',
          lang: 'Rust',
          url: 'https://github.com/julitaras/taller_tp_individual',
          private: false,
        },
        {
          id: 'batalla-pokemones',
          name: 'Batalla Pokémones',
          description:
            'Sistema de batalla pokémon implementado en C. Estructuras de datos, listas y manejo de memoria manual.',
          lang: 'C',
          url: 'https://github.com/julitaras/batalla-pokemones',
          private: false,
        },
      ],
    },
    stack: {
      title: 'stack',
      subtitle: 'lenguajes y herramientas con los que trabajé',
    },
    contact: {
      title: 'contacto',
      subtitle: '¿hablamos?',
      description: 'Podés escribirme por mail o encontrarme en GitHub.',
      email: 'escribime',
      github: 'mi github',
    },
    footer: {
      made: 'hecho con',
      by: 'por Juli Taras',
    },
  },
  en: {
    nav: {
      projects: 'projects',
      stack: 'stack',
      contact: 'contact',
    },
    hero: {
      greeting: "hi, I'm",
      name: 'Juli Taras',
      role: 'computer science student',
      university: 'FIUBA · Buenos Aires',
      description:
        "I like building things that solve real problems. I study Computer Engineering and enjoy exploring different languages and paradigms.",
      cta: 'see projects',
    },
    projects: {
      title: 'projects',
      subtitle: 'some things I built',
      private: 'private',
      viewCode: 'view code',
      items: [
        {
          id: 'insutrack',
          name: 'InsuTrack',
          description:
            'Personal app for managing diabetes supplies. Stock tracking, expiration dates, and alerts.',
          lang: 'TypeScript · React',
          private: true,
        },
        {
          id: 'fiuba-tracker',
          name: 'FIUBA Final Tracker',
          description:
            'Calculator to track final exam deadlines at FIUBA. Never miss a date again.',
          lang: 'TypeScript',
          url: 'https://github.com/julitaras/FIUBA-final-tracker',
          private: false,
        },
        {
          id: 'turnar',
          name: 'TurnAR',
          description:
            'Mobile app in Flutter for the Language Theory course. Appointment management with a clean interface.',
          lang: 'Dart · Flutter',
          url: 'https://github.com/julitaras/turnAR',
          private: false,
        },
        {
          id: 'meal-random',
          name: 'Meal Random',
          description:
            "I don't know what to eat. This app doesn't either, but at least it gives you a random idea.",
          lang: 'JavaScript',
          url: 'https://github.com/julitaras/meal-random',
          private: false,
        },
        {
          id: 'taller-rust',
          name: 'Workshop Assignment',
          description:
            'Individual project in Rust for the Programming Workshop course. Memory management without GC.',
          lang: 'Rust',
          url: 'https://github.com/julitaras/taller_tp_individual',
          private: false,
        },
        {
          id: 'batalla-pokemones',
          name: 'Pokémon Battle',
          description:
            'Pokémon battle system implemented in C. Data structures, linked lists, and manual memory management.',
          lang: 'C',
          url: 'https://github.com/julitaras/batalla-pokemones',
          private: false,
        },
      ],
    },
    stack: {
      title: 'stack',
      subtitle: 'languages and tools I have worked with',
    },
    contact: {
      title: 'contact',
      subtitle: "let's talk",
      description: 'You can reach me by email or find me on GitHub.',
      email: 'send me an email',
      github: 'my github',
    },
    footer: {
      made: 'made with',
      by: 'by Juli Taras',
    },
  },
} as const
