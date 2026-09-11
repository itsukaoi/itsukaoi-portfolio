export const translations = {
    en: {
        meta: {
            title: "Luka Cáceres | Full Stack Developer",
            description:
                "Full Stack Developer building web applications and software for businesses, focused on practical solutions and clean user experiences.",
        },

        hero: {
            eyebrow: "01 — INTRO",
            role: "Full Stack Developer",
            description:
                "I build web applications and software for businesses, focused on solving real-world needs with practical solutions and clean user experiences.",
            projects: "View projects",
            contact: "Get in touch",
            technologiesLabel: "Main technologies",

        },

        projects: {
            eyebrow: "02 — SELECTED WORK",
            title: "Selected projects",
            description:
                "A selection of applications and tools built around practical needs, business workflows, and real-world use cases.",

            viewProject: "View site",

            internalTool: "Internal tool",

            items: {
                ecommerce: {
                    title: "Ecommerce Platform",
                    description:
                        "An online store for a clothing business with product browsing, cart and checkout flows, order management, authentication, and an administration area for managing products and stock. Developed for a real client.",
                    imageAlt: "Ecommerce platform interface",
                },

                inventory: {
                    title: "Inventory Management System",
                    description:
                        "An internal management platform for inventory entries, in-person and online sales, product management, stock adjustments, and complete inventory movement tracking. Developed for a real client.",
                    imageAlt: "Inventory management system interface",
                },

                converter: {
                    title: "File Converter",
                    description:
                        "A focused web utility for converting files through a simple and accessible interface.",
                    imageAlt: "File converter interface",
                },

                landing: {
                    title: "Responsive Landing Page",
                    description:
                        "A responsive marketing website built around clear content hierarchy, consistent visual design, and mobile usability. Built as a demo.",
                    imageAlt: "Responsive landing page interface",
                },
            },
        },

        about: {
            eyebrow: "03 — ABOUT",
            title: "About me",
            description:
                "I’m a Full Stack Developer focused on building practical software to resolve real-life problems",
            body:
                "I’ve been building software since 2022, working mainly with JavaScript and MERN stack, but I've also worked with PHP, Python and C#. I like to learn and build new things outside of web applications.",
            educationTitle: "Education",
            education: [
                {
                    title: "University Programmer - FACET UNT",
                    status: "Currently pursuing",
                },
                {
                    title: "Full Stack Development Course - Rolling Code",
                    status: "Completed",
                },
            ],
            technologies: {
                title: "Technologies",

                core: {
                    title: "Core stack",
                },

                additional: {
                    title: "Also worked with",
                },

                exploring: {
                    title: "Currently exploring",
                },
            },
        },

        contact: {
            eyebrow: "04 — CONTACT",
            title: "Let's work together.",
            description:
                "Have a project in mind or need help building a web application? Feel free to reach out and tell me about it.",
            emailLabel: "Email",
            socialLabel: "Elsewhere",
            availability: "Available for freelance projects",
            emailAction: "Send an email",
        },
    },

    es: {
        meta: {
            title: "Luka Cáceres | Desarrollador Full Stack",
            description:
                "Desarrollador Full Stack enfocado en crear aplicaciones web y software para negocios, con soluciones prácticas y experiencias de usuario claras.",
        },

        hero: {
            eyebrow: "01 — INTRO",
            role: "Desarrollador Full Stack",
            description:
                "Desarrollo aplicaciones web y software enfocados en resolver necesidades reales de forma práctica y clara para los usuarios.",
            projects: "Ver proyectos",
            contact: "Contactarme",
            technologiesLabel: "Tecnologías principales",
        },

        projects: {
            eyebrow: "02 — PROYECTOS",
            title: "Proyectos seleccionados",
            description:
                "Una selección de aplicaciones y herramientas desarrolladas para resolver necesidades prácticas, procesos de negocio y casos de uso reales.",

            viewProject: "Ver proyecto",

            internalTool: "Herramienta interna",

            items: {
                ecommerce: {
                    title: "Plataforma Ecommerce",
                    description:
                        "Una tienda online para un negocio de indumentaria con catálogo de productos, carrito y checkout, gestión de pedidos, autenticación y un panel de administración para productos y stock. Desarrollado para un cliente real.",
                    imageAlt: "Interfaz de la plataforma ecommerce",

                },

                inventory: {
                    title: "Sistema de Gestión de Inventario",
                    description:
                        "Una plataforma interna para gestionar ingresos de inventario, ventas presenciales y online, productos, ajustes de stock y el historial completo de movimientos. Desarrollado para un cliente real.",
                    imageAlt: "Interfaz del sistema de gestión de inventario",
                },

                converter: {
                    title: "Conversor de Archivos",
                    description:
                        "Una herramienta web enfocada en convertir archivos mediante una interfaz simple y accesible.",
                    imageAlt: "Interfaz del conversor de archivos",
                },

                landing: {
                    title: "Landing Page Responsive",
                    description:
                        "Un sitio promocional responsive diseñado con una jerarquía clara de contenido, consistencia visual y buena experiencia móvil. Desarrollado exclusivamente como demo.",
                    imageAlt: "Interfaz de la landing page responsive",
                },
            },
        },

        about: {
            eyebrow: "03 — SOBRE MÍ",
            title: "Sobre mí",
            description:
                "Soy un desarrollador Full Stack enfocado en crear software práctico para solucionar problemas de la vida real.",
            body:
                "Desarrollo software desde 2022, trabajando principalmente con JavaScript y el stack MERN, sin embargo, tengo conocimientos en otras tecnologías como PHP, Python o C#. Me gusta adquirir conocimiento nuevos y desarrollar cosas nuevas además de aplicaciones web.",
            educationTitle: "Formación",
            education: [
                {
                    title: "Programador Universitario - FACET UNT",
                    status: "En curso",
                },
                {
                    title: "Curso de Desarrollo Full Stack - Rolling Code",
                    status: "Completado",
                },
            ],
            technologies: {
                title: "Tecnologías",

                core: {
                    title: "Stack principal",
                },

                additional: {
                    title: "También he trabajado con",
                },

                exploring: {
                    title: "Actualmente aprendiendo",
                },
            },
        },

        contact: {
            eyebrow: "04 — CONTACTO",
            title: "Trabajemos juntos.",
            description:
                "¿Tenés un proyecto en mente o necesitás ayuda para desarrollar una aplicación web? Podés contactarme y contarme sobre tu idea.",
            emailLabel: "Email",
            socialLabel: "También en",
            availability: "Disponible para proyectos freelance",
            emailAction: "Enviar un email",
        },
    },
} as const

export type Language = keyof typeof translations