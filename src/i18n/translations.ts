export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About Me',
      certifications: 'Certifications',
      projects: 'Projects',
      blog: 'Blog',
    },

    // Home page
    home: {
      hero: {
        tagline: 'Welcome',
        title: "Hi, I'm <span class=\"text-accent highlight\">Kiran</span>",
        subtitle: 'Software Engineer passionate about building modern, scalable applications and leveraging cloud technologies to deliver impactful solutions.',
        cta: 'View Projects',
        ctaSecondary: 'About Me',
      },
      featuredProjects: {
        tagline: 'Portfolio',
        title: 'Featured Projects',
        subtitle: 'A selection of projects I have worked on recently.',
      },
      latestPosts: {
        title: 'Latest from the Blog',
        linkText: 'View all posts',
      },
    },

    // About page
    about: {
      hero: {
        tagline: 'About Me',
        title: 'Get to know me',
        subtitle: 'A passionate software engineer with a focus on modern web development, cloud infrastructure, and DevOps.',
      },
      summary: {
        title: 'Professional Summary',
        content: '<p>I am a dedicated software engineer with experience in full-stack web development, cloud architecture, and DevOps practices. I enjoy tackling complex problems and delivering elegant, performant solutions.</p><p>My journey in tech has led me through diverse projects — from building responsive web applications to designing scalable cloud infrastructure. I am always eager to learn new technologies and share knowledge with the community.</p>',
      },
      skills: {
        tagline: 'Expertise',
        title: 'Skills & Technologies',
        subtitle: 'Technologies and tools I work with regularly.',
        items: [
          { title: 'Frontend', description: 'React, TypeScript, Astro, Tailwind CSS, Next.js', icon: 'tabler:browser' },
          { title: 'Backend', description: 'Node.js, Python, Java, REST APIs, GraphQL', icon: 'tabler:server' },
          { title: 'Cloud & DevOps', description: 'AWS, Azure, Docker, Kubernetes, Terraform, CI/CD', icon: 'tabler:cloud' },
          { title: 'Databases', description: 'PostgreSQL, MongoDB, Redis, DynamoDB', icon: 'tabler:database' },
          { title: 'Tools & Practices', description: 'Git, Agile, TDD, Microservices, Clean Architecture', icon: 'tabler:tool' },
          { title: 'Other', description: 'Linux, Networking, Security, System Design', icon: 'tabler:settings' },
        ],
      },
      stats: {
        items: [
          { title: 'Years of Experience', amount: '5+' },
          { title: 'Projects Completed', amount: '20+' },
          { title: 'Certifications', amount: '5+' },
          { title: 'Technologies', amount: '30+' },
        ],
      },
    },

    // Certifications page
    certifications: {
      hero: {
        tagline: 'Credentials',
        title: 'Certifications',
        subtitle: 'Professional certifications and credentials I have earned throughout my career.',
      },
      timeline: {
        title: 'Certification Timeline',
        items: [
          {
            title: 'AWS Solutions Architect – Associate',
            description: 'Amazon Web Services · Issued January 2025\nDesigning distributed systems and architectures on AWS.',
            icon: 'tabler:certificate',
          },
          {
            title: 'Azure Fundamentals (AZ-900)',
            description: 'Microsoft · Issued June 2024\nFoundational knowledge of cloud services and Azure.',
            icon: 'tabler:certificate',
          },
          {
            title: 'Certified Kubernetes Administrator (CKA)',
            description: 'Cloud Native Computing Foundation · Issued March 2024\nAdministering Kubernetes clusters in production environments.',
            icon: 'tabler:certificate',
          },
          {
            title: 'HashiCorp Terraform Associate',
            description: 'HashiCorp · Issued November 2023\nInfrastructure as Code with Terraform.',
            icon: 'tabler:certificate',
          },
          {
            title: 'Professional Scrum Master I (PSM I)',
            description: 'Scrum.org · Issued May 2023\nAgile project management and Scrum framework.',
            icon: 'tabler:certificate',
          },
        ],
      },
    },

    // Projects page
    projects: {
      hero: {
        tagline: 'Portfolio',
        title: 'Projects',
        subtitle: 'Detailed showcase of projects I have built and contributed to.',
      },
      items: [
        {
          tagline: 'Web Application',
          title: 'Cloud Dashboard Platform',
          content: '<p>A comprehensive cloud infrastructure monitoring dashboard that provides real-time visibility into multi-cloud environments. Built with a modern tech stack, the platform aggregates metrics from AWS, Azure, and GCP into a unified interface.</p><p>The project involved designing a scalable microservices architecture, implementing real-time WebSocket communication, and building an intuitive data visualization layer. Key challenges included handling high-frequency metric data streams and ensuring sub-second dashboard refresh rates.</p>',
          items: [
            { title: 'React & TypeScript' },
            { title: 'Node.js & Express' },
            { title: 'PostgreSQL & Redis' },
            { title: 'Docker & Kubernetes' },
            { title: 'WebSockets' },
            { title: 'AWS CloudWatch API' },
          ],
          callToAction: { text: 'View on GitHub', href: '#', icon: 'tabler:brand-github' },
        },
        {
          tagline: 'DevOps & Automation',
          title: 'CI/CD Pipeline Framework',
          content: '<p>Designed and implemented an enterprise-grade CI/CD pipeline framework that standardizes deployment workflows across multiple teams and services. The framework supports multi-environment deployments with automated testing, security scanning, and rollback capabilities.</p><p>This project reduced deployment time by 70% and eliminated manual release processes. It integrates with GitHub Actions, ArgoCD, and custom Kubernetes operators to provide a seamless developer experience from commit to production.</p>',
          items: [
            { title: 'GitHub Actions' },
            { title: 'Terraform' },
            { title: 'ArgoCD' },
            { title: 'Kubernetes' },
            { title: 'Helm Charts' },
            { title: 'Python scripting' },
          ],
          callToAction: { text: 'View on GitHub', href: '#', icon: 'tabler:brand-github' },
        },
        {
          tagline: 'Full-Stack Application',
          title: 'E-Commerce Marketplace',
          content: '<p>Built a modern e-commerce marketplace platform supporting multiple vendors with features including real-time inventory management, payment processing, and an AI-powered recommendation engine. The platform handles thousands of concurrent users with optimized database queries and caching strategies.</p><p>The project showcases end-to-end full-stack development from responsive UI design to scalable backend architecture, including search functionality, order management, and vendor analytics dashboards.</p>',
          items: [
            { title: 'Next.js' },
            { title: 'Tailwind CSS' },
            { title: 'Python & FastAPI' },
            { title: 'MongoDB' },
            { title: 'Stripe API' },
            { title: 'Elasticsearch' },
          ],
          callToAction: { text: 'View on GitHub', href: '#', icon: 'tabler:brand-github' },
        },
      ],
    },

    // Blog
    blog: {
      title: 'Blog',
      subtitle: 'Thoughts, tutorials, and insights on software engineering.',
      latestTitle: 'Latest from the Blog',
      viewAll: 'View all posts',
    },
  },

  fr: {
    // Navigation
    nav: {
      home: 'Accueil',
      about: 'À propos',
      certifications: 'Certifications',
      projects: 'Projets',
      blog: 'Blog',
    },

    // Home page
    home: {
      hero: {
        tagline: 'Bienvenue',
        title: "Salut, je suis <span class=\"text-accent highlight\">Kiran</span>",
        subtitle: 'Ingénieur logiciel passionné par la création d\'applications modernes et scalables, et par l\'exploitation des technologies cloud pour des solutions à fort impact.',
        cta: 'Voir les projets',
        ctaSecondary: 'À propos de moi',
      },
      featuredProjects: {
        tagline: 'Portfolio',
        title: 'Projets en vedette',
        subtitle: 'Une sélection de projets sur lesquels j\'ai travaillé récemment.',
      },
      latestPosts: {
        title: 'Derniers articles du blog',
        linkText: 'Voir tous les articles',
      },
    },

    // About page
    about: {
      hero: {
        tagline: 'À propos',
        title: 'Apprenez à me connaître',
        subtitle: 'Un ingénieur logiciel passionné, spécialisé dans le développement web moderne, l\'infrastructure cloud et le DevOps.',
      },
      summary: {
        title: 'Résumé professionnel',
        content: '<p>Je suis un ingénieur logiciel dédié avec une expérience en développement web full-stack, architecture cloud et pratiques DevOps. J\'aime résoudre des problèmes complexes et fournir des solutions élégantes et performantes.</p><p>Mon parcours dans le monde de la technologie m\'a conduit à travers des projets variés — de la création d\'applications web responsives à la conception d\'infrastructures cloud scalables. Je suis toujours impatient d\'apprendre de nouvelles technologies et de partager mes connaissances avec la communauté.</p>',
      },
      skills: {
        tagline: 'Expertise',
        title: 'Compétences & Technologies',
        subtitle: 'Technologies et outils avec lesquels je travaille régulièrement.',
        items: [
          { title: 'Frontend', description: 'React, TypeScript, Astro, Tailwind CSS, Next.js', icon: 'tabler:browser' },
          { title: 'Backend', description: 'Node.js, Python, Java, REST APIs, GraphQL', icon: 'tabler:server' },
          { title: 'Cloud & DevOps', description: 'AWS, Azure, Docker, Kubernetes, Terraform, CI/CD', icon: 'tabler:cloud' },
          { title: 'Bases de données', description: 'PostgreSQL, MongoDB, Redis, DynamoDB', icon: 'tabler:database' },
          { title: 'Outils & Pratiques', description: 'Git, Agile, TDD, Microservices, Architecture propre', icon: 'tabler:tool' },
          { title: 'Autres', description: 'Linux, Réseaux, Sécurité, Conception de systèmes', icon: 'tabler:settings' },
        ],
      },
      stats: {
        items: [
          { title: 'Années d\'expérience', amount: '5+' },
          { title: 'Projets réalisés', amount: '20+' },
          { title: 'Certifications', amount: '5+' },
          { title: 'Technologies', amount: '30+' },
        ],
      },
    },

    // Certifications page
    certifications: {
      hero: {
        tagline: 'Accréditations',
        title: 'Certifications',
        subtitle: 'Certifications et accréditations professionnelles obtenues au cours de ma carrière.',
      },
      timeline: {
        title: 'Chronologie des certifications',
        items: [
          {
            title: 'AWS Solutions Architect – Associate',
            description: 'Amazon Web Services · Délivrée en janvier 2025\nConception de systèmes distribués et architectures sur AWS.',
            icon: 'tabler:certificate',
          },
          {
            title: 'Azure Fundamentals (AZ-900)',
            description: 'Microsoft · Délivrée en juin 2024\nConnaissances fondamentales des services cloud et d\'Azure.',
            icon: 'tabler:certificate',
          },
          {
            title: 'Certified Kubernetes Administrator (CKA)',
            description: 'Cloud Native Computing Foundation · Délivrée en mars 2024\nAdministration de clusters Kubernetes en environnement de production.',
            icon: 'tabler:certificate',
          },
          {
            title: 'HashiCorp Terraform Associate',
            description: 'HashiCorp · Délivrée en novembre 2023\nInfrastructure as Code avec Terraform.',
            icon: 'tabler:certificate',
          },
          {
            title: 'Professional Scrum Master I (PSM I)',
            description: 'Scrum.org · Délivrée en mai 2023\nGestion de projet Agile et framework Scrum.',
            icon: 'tabler:certificate',
          },
        ],
      },
    },

    // Projects page
    projects: {
      hero: {
        tagline: 'Portfolio',
        title: 'Projets',
        subtitle: 'Présentation détaillée des projets que j\'ai construits et auxquels j\'ai contribué.',
      },
      items: [
        {
          tagline: 'Application Web',
          title: 'Plateforme de tableau de bord Cloud',
          content: '<p>Un tableau de bord complet de surveillance d\'infrastructure cloud offrant une visibilité en temps réel sur les environnements multi-cloud. Construit avec une stack technologique moderne, la plateforme agrège les métriques d\'AWS, Azure et GCP dans une interface unifiée.</p><p>Le projet impliquait la conception d\'une architecture microservices scalable, l\'implémentation de communication WebSocket en temps réel et la construction d\'une couche de visualisation de données intuitive. Les défis principaux comprenaient la gestion de flux de données métriques à haute fréquence et l\'assurance de taux de rafraîchissement du tableau de bord inférieurs à la seconde.</p>',
          items: [
            { title: 'React & TypeScript' },
            { title: 'Node.js & Express' },
            { title: 'PostgreSQL & Redis' },
            { title: 'Docker & Kubernetes' },
            { title: 'WebSockets' },
            { title: 'AWS CloudWatch API' },
          ],
          callToAction: { text: 'Voir sur GitHub', href: '#', icon: 'tabler:brand-github' },
        },
        {
          tagline: 'DevOps & Automatisation',
          title: 'Framework de pipeline CI/CD',
          content: '<p>Conception et implémentation d\'un framework de pipeline CI/CD de niveau entreprise standardisant les workflows de déploiement pour plusieurs équipes et services. Le framework prend en charge les déploiements multi-environnements avec tests automatisés, analyse de sécurité et capacités de rollback.</p><p>Ce projet a réduit le temps de déploiement de 70% et éliminé les processus de release manuels. Il s\'intègre avec GitHub Actions, ArgoCD et des opérateurs Kubernetes personnalisés pour fournir une expérience développeur fluide du commit à la production.</p>',
          items: [
            { title: 'GitHub Actions' },
            { title: 'Terraform' },
            { title: 'ArgoCD' },
            { title: 'Kubernetes' },
            { title: 'Helm Charts' },
            { title: 'Scripts Python' },
          ],
          callToAction: { text: 'Voir sur GitHub', href: '#', icon: 'tabler:brand-github' },
        },
        {
          tagline: 'Application Full-Stack',
          title: 'Marketplace E-Commerce',
          content: '<p>Construction d\'une plateforme marketplace e-commerce moderne supportant plusieurs vendeurs avec des fonctionnalités incluant la gestion d\'inventaire en temps réel, le traitement des paiements et un moteur de recommandation alimenté par l\'IA. La plateforme gère des milliers d\'utilisateurs simultanés avec des requêtes de base de données optimisées et des stratégies de cache.</p><p>Le projet illustre le développement full-stack de bout en bout, de la conception d\'UI responsive à l\'architecture backend scalable, incluant la fonctionnalité de recherche, la gestion des commandes et les tableaux de bord d\'analyse pour les vendeurs.</p>',
          items: [
            { title: 'Next.js' },
            { title: 'Tailwind CSS' },
            { title: 'Python & FastAPI' },
            { title: 'MongoDB' },
            { title: 'Stripe API' },
            { title: 'Elasticsearch' },
          ],
          callToAction: { text: 'Voir sur GitHub', href: '#', icon: 'tabler:brand-github' },
        },
      ],
    },

    // Blog
    blog: {
      title: 'Blog',
      subtitle: 'Réflexions, tutoriels et perspectives sur l\'ingénierie logicielle.',
      latestTitle: 'Derniers articles du blog',
      viewAll: 'Voir tous les articles',
    },
  },
} as const;

export type Translations = (typeof translations)['en'];

export function useTranslations(lang: 'en' | 'fr'): Translations {
  return translations[lang];
}
