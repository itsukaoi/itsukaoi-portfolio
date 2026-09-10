export const translations = {
    en: {
        meta: {
            title: "Luka Cáceres | Full Stack Developer",
            description:
                "Portfolio of Luka Cáceres, Full Stack Developer focused on web applications and software.",
        },

        hero: {
            eyebrow: "01 — INTRO",
            role: "Full Stack Developer",
            description:
                "I build web applications and software focused on solving real-world needs.",
            projects: "View projects",
            contact: "Get in touch",
            technologiesLabel: "Main technologies",

        },
    },

    es: {
        meta: {
            title: "Luka Cáceres | Desarrollador Full Stack",
            description:
                "Portfolio de Luka Cáceres, desarrollador Full Stack enfocado en aplicaciones web y software.",
        },

        hero: {
            eyebrow: "01 — INTRO",
            role: "Desarrollador Full Stack",
            description:
                "Desarrollo aplicaciones web y software enfocados en resolver necesidades reales.",
            projects: "Ver proyectos",
            contact: "Contactarme",
            technologiesLabel: "Tecnologías principales",
        },
    },
} as const

export type Language = keyof typeof translations