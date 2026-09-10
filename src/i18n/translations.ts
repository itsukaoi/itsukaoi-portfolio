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

        projects: {
            eyebrow: "02 — SELECTED WORK",
            title: "Selected projects",
            description:
                "A selection of applications and tools built around practical needs, business workflows, and real-world use cases.",

            viewProject: "View project",

            internalTool: "Internal tool",

            items: {
                ecommerce: {
                    title: "Ecommerce Platform",
                    description:
                        "An online store for a clothing business with product browsing, cart and checkout flows, order management, authentication, and an administration area for managing products and stock.",
                    imageAlt: "Ecommerce platform interface",
                },

                inventory: {
                    title: "Inventory Management System",
                    description:
                        "An internal management platform for inventory entries, in-person and online sales, product management, stock adjustments, and complete inventory movement tracking.",
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
                        "A responsive marketing website built around clear content hierarchy, consistent visual design, and mobile usability.",
                    imageAlt: "Responsive landing page interface",
                },
            },
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
                        "Una tienda online para un negocio de indumentaria con catálogo de productos, carrito y checkout, gestión de pedidos, autenticación y un panel de administración para productos y stock.",
                    imageAlt: "Interfaz de la plataforma ecommerce",
                    
                },

                inventory: {
                    title: "Sistema de Gestión de Inventario",
                    description:
                        "Una plataforma interna para gestionar ingresos de inventario, ventas presenciales y online, productos, ajustes de stock y el historial completo de movimientos.",
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
                        "Un sitio promocional responsive diseñado con una jerarquía clara de contenido, consistencia visual y buena experiencia móvil.",
                    imageAlt: "Interfaz de la landing page responsive",
                },
            },
        },
    },
} as const

export type Language = keyof typeof translations