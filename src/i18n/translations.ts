export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About Me',
      certifications: 'Certifications',
      projects: 'Projects',
      contact: 'Contact',
    },

    // Home page
    home: {
      hero: {
        tagline: 'Data Scientist · Lille, France',
        title: "Hi, I'm <span class=\"text-accent highlight\">Kiran Tirumale</span>",
        subtitle: 'Data Scientist with a strong track record of designing and delivering end-to-end data solutions — from recommendation engines and NLP pipelines to predictive models and GenAI applications — that drive real business impact.',
        cta: 'View Projects',
        ctaSecondary: 'About Me',
      },
      featuredProjects: {
        tagline: 'Highlights',
        title: 'Key Projects',
        subtitle: 'Data & AI solutions that generated measurable business impact.',
      },
      thoughts: {
        label: 'My thoughts on Generative AI',
        date: 'February 2026',
        paragraphs: [
          'We once feared industrial robots would replace humans. Instead, they transformed work — automating manual tasks while creating entirely new industries.',
          'Generative AI is following a similar path. Smaller teams will achieve more. Repetitive tasks will disappear. But human reasoning, judgment, and creativity will only grow in importance.',
          'I see AI not as a replacement for developers, but as leverage — allowing us to focus less on technical friction and more on solving real business problems.',
        ],
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
        subtitle: 'Data Scientist passionate about turning business challenges into actionable, data-driven solutions.',
      },
      summary: {
        title: 'Professional Summary',
        content: '<p>I am a Data Scientist within the Data Department at Auchan Retail France, delivering cross-functional Data & AI projects across multiple business units. With a dual business and technical background, I build and deploy end-to-end data pipelines combining data science, data engineering, and project leadership to turn data into actionable insights and performance drivers.</p><p>I work closely with cross-functional stakeholders to translate business needs into practical, scalable data solutions — from initial concept through production deployment and adoption. My experience spans recommendation systems, NLP, predictive modeling, LLM-based applications, and data visualization across e-commerce, marketing, and retail operations.</p>',
      },
      experience: {
        tagline: 'Career Journey',
        title: 'Professional Experience',
        subtitle: 'Companies and roles across my international career.',
        items: [
          {
            title: 'Auchan Retail France',
            description: 'Data Scientist · Aug 2021 – Present · Lille, France\nDriving end-to-end Data & AI initiatives across e-commerce, retail operations, and business analytics.',
            icon: 'tabler:building-store',
          },
          {
            title: 'SLK Software Services',
            description: 'Consultant - Business Analyst · Nov 2016 – Sep 2020 · Bangalore, India\nLed analytics and delivery streams for BFSI and enterprise clients.',
            icon: 'tabler:users-group',
          },
          {
            title: 'Tata Consulting Engineers Ltd.',
            description: 'Consultant - Business Analyst · Sep 2014 – Nov 2016 · Bangalore, India\nDelivered consulting assignments across engineering and industrial business domains.',
            icon: 'tabler:briefcase',
          },
          {
            title: 'Quadrate Multilingual',
            description: 'Project Manager · Jan 2012 – Sep 2014 · Chennai, India\nManaged multilingual project execution, operations, and stakeholder coordination.',
            icon: 'tabler:message-language',
          },
          {
            title: 'Atos',
            description: 'Consultant - Business Analyst · Jun 2010 – Dec 2011 · Chennai, India\nContributed to transformation projects spanning automotive and enterprise contexts.',
            icon: 'tabler:world',
          },
        ],
      },
      education: {
        tagline: 'Academics',
        title: 'Educational Qualifications',
        subtitle: 'Degrees and academic background.',
        items: [
          {
            title: 'MSc. in Big Data Analytics for Business',
            description: 'IESEG School of Management · 09/2020 – 02/2022 · Lille, France',
            icon: 'tabler:school',
          },
          {
            title: '<strong>BSc. in Mathematics, Physics, Environmental Science</strong><br /><strong>B.A in French, English, German</strong>',
            description: 'Sri Aurobindo International Centre of Education · Dec 2006 – Nov 2009 · Pondicherry, India',
            icon: 'tabler:book',
          },
        ],
      },
      skills: {
        tagline: 'Expertise',
        title: 'Skills & Technologies',
        subtitle: 'Technical toolkit I use to deliver data-driven solutions.',
        items: [
          { title: 'Machine Learning', description: 'Scikit-learn, NLP, Recommendation Systems, Feature Engineering, Text Exploration, Optimization', icon: 'tabler:brain' },
          { title: 'Generative AI', description: 'LLM (Gemini, GPT), Embedding Models, HuggingFace, Transformers, Copilot, Claude Code', icon: 'tabler:sparkles' },
          { title: 'Google Cloud Platform', description: 'BigQuery, Vertex AI, Cloud Composer (Airflow), Cloud Functions, Cloud Storage, Cloud Build', icon: 'tabler:cloud' },
          { title: 'Data Pipeline & MLOps', description: 'Apache Airflow, Docker, Terraform, CI/CD, Model Deployment, REST APIs', icon: 'tabler:topology-ring-3' },
          { title: 'Languages & Analysis', description: 'Python (certified), R, SQL, PySpark, Shell Scripting, Pandas, Matplotlib, NumPy', icon: 'tabler:code' },
          { title: 'Reporting & Tools', description: 'Looker Studio, Power BI, Tableau, Streamlit, Git, Jira, Confluence, Notion', icon: 'tabler:chart-bar' },
        ],
      },
      stats: {
        items: [
          { title: 'Years of Experience', amount: '15+' },
          { title: 'Certifications', amount: '6' },
          { title: 'Languages Spoken', amount: '3' },
          { title: 'Business Domains', amount: '5+' },
        ],
      },
      interests: {
        title: 'Interests',
        subtitle: 'Hobbies',
        items: [
          { title: 'Home Automation', icon: 'tabler:smart-home' },
          { title: 'Travelling', icon: 'tabler:plane' },
          { title: 'Ideation & Problem Solving', icon: 'tabler:bulb' },
          { title: 'Nature Lover', icon: 'tabler:leaf' },
        ],
      },
    },

    // Certifications page
    certifications: {
      hero: {
        tagline: 'Credentials',
        title: 'Certifications',
        subtitle: 'Professional certifications earned throughout my career in Data Science and Cloud technologies.',
      },
      timeline: {
        title: 'Certification Timeline',
        items: [
          {
            title: 'Apache Airflow 3 Fundamentals',
            description: 'Astronomer Academy · 2025\nOrchestration of data pipelines and workflow automation with Apache Airflow.',
            icon: 'tabler:certificate',
            link: 'https://www.credly.com/badges/34bc228a-b4c4-4ee6-a107-bdf0c7040ce7/public_url',
            badge: '/images/badges/airflow.png',
          },
          {
            title: 'Generative AI Leader',
            description: 'Google Cloud · 2025\nLeadership and strategy for Generative AI adoption in enterprise contexts.',
            icon: 'tabler:certificate',
            link: 'https://www.credly.com/badges/ead6fb2f-25a0-463b-8de3-0a02f8a2c5af/public_url',
            badge: '/images/badges/gen-ai-leader.png',
          },
          {
            title: 'Professional Machine Learning Engineer',
            description: 'Google Cloud · 2024\nDesigning, building, and productionizing ML models on Google Cloud Platform.',
            icon: 'tabler:certificate',
            link: 'https://www.credly.com/badges/001ea8ca-30a6-44de-872e-2d35e67c70bb/public_url',
            badge: '/images/badges/ml-engineer.png',
          },
          {
            title: 'From Data to Insights with Google Cloud',
            description: 'Coursera (Google Cloud) · 2021\nData analysis, visualization, and insights using BigQuery and Google Cloud tools.',
            icon: 'tabler:certificate',
            link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/5GYHH9NQGKH3',
          },
          {
            title: 'Data Science for Everyone',
            description: 'DataCamp · 2021\nFoundational data science concepts and methodologies.',
            icon: 'tabler:certificate',
            link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/1e84809f57358bfdbeca24550c418f12b2ac6929',
          },
          {
            title: 'Certified Entry-Level Python Programmer',
            description: 'Python Institute (PCEP) · 2021\nCertified proficiency in Python programming fundamentals.',
            icon: 'tabler:certificate',
            link: 'https://www.credly.com/badges/ba1db914-ee9b-4adf-bc1c-bbe4e04539bc/public_url',
            badge: '/images/badges/python-pcep.png',
          },
        ],
      },
    },

    // Projects
    projects: {
      hero: {
        tagline: 'Projects',
        title: 'My Projects',
        subtitle: 'Throughout my career at Auchan Retail, I have designed and delivered end-to-end Data and AI solutions that directly address business challenges — from personalizing the e-commerce experience with intelligent recommendation systems, to optimizing physical store operations through predictive modeling, to leveraging Large Language Models for automating complex workflows. Each project follows a common thread: translating a real business need into a scalable, production-grade data solution that generates measurable impact.',
      },
      categories: {
        tagline: 'Explore',
        title: 'Project Categories',
        subtitle: 'Select a category to discover the projects in detail.',
        items: [
          {
            title: 'Recommendation Engines',
            description: '4 recommendation engines for Auchan.fr replacing a costly external solution, generating €1M+ in incremental revenue.',
            cta: 'Learn more',
          },
          {
            title: 'Optimization Techniques',
            description: 'Predictive models to optimize store surface allocation and maximize revenue per square meter.',
            cta: 'Learn more',
          },
          {
            title: 'Gen AI Applications',
            description: 'LLM-powered solutions: automated verbatim analysis, product label extraction, and conversational AI interfaces.',
            cta: 'Learn more',
          },
        ],
      },
      // Recommendation Engines page
      recoEngines: {
        hero: {
          tagline: 'E-Commerce · Recommendation Systems',
          title: 'Recommendation Engines',
          subtitle: 'Four recommendation engines built for Auchan.fr, fully replacing a costly external solution (Target2Sell / Mirakl) and generating €1M+ in incremental revenue.',
        },
        items: [
          {
            id: 'similarity-food',
            title: 'Similarity - Food Products',
            tagline: 'NLP · Product Attributes',
            icon: 'tabler:salad',
            content: '<p>Developed a <strong>content-based recommendation engine</strong> for food products on Auchan.fr. The engine leverages NLP techniques applied to product attributes (name, category, description, nutritional data) to compute similarity scores between items.</p><p>Product embeddings are generated using <strong>TF-IDF vectorization</strong> combined with cosine similarity. The model runs on a <strong>daily Airflow DAG</strong> that refreshes recommendations based on the latest product catalog. Achieved <strong>+25% add-to-cart rate</strong> compared to the previous external solution (Target2Sell).</p>',
            items: [
              { title: 'Python' },
              { title: 'NLP / TF-IDF' },
              { title: 'Cosine Similarity' },
              { title: 'BigQuery' },
              { title: 'Cloud Composer (Airflow)' },
              { title: 'Cloud Functions' },
            ],
          },
          {
            id: 'similarity-nonfood',
            title: 'Similarity - Non Food Products',
            tagline: 'Embeddings · Product Catalog',
            icon: 'tabler:device-laptop',
            content: '<p>Built a <strong>similarity engine for non-food products</strong> (electronics, home, textile, etc.) where product attributes are less structured and descriptions are sparser than food.</p><p>Used <strong>sentence-transformer embeddings</strong> to capture semantic meaning from product titles and descriptions, combined with categorical feature encoding. A <strong>FAISS-based approximate nearest neighbor</strong> search enables real-time retrieval of the top-N similar products. Deployed as a <strong>Cloud Function</strong> with BigQuery as the feature store.</p>',
            items: [
              { title: 'Sentence Transformers' },
              { title: 'FAISS' },
              { title: 'Embeddings' },
              { title: 'BigQuery' },
              { title: 'Cloud Functions' },
              { title: 'Python' },
            ],
          },
          {
            id: 'crosssell-nonfood',
            title: 'Cross Sell - Non Food Products',
            tagline: 'Association Rules · Sales History',
            icon: 'tabler:arrows-exchange',
            content: '<p>Designed a <strong>cross-sell recommendation engine</strong> for non-food products based on transactional sales history analysis. The engine identifies products frequently bought together to suggest complementary items at the product page level.</p><p>Implemented the <strong>Apriori algorithm</strong> on millions of transactions to extract high-confidence association rules (support, confidence, lift). Rules are filtered and ranked by business relevance and refreshed weekly via an <strong>Airflow pipeline</strong>. Contributed to a measurable increase in average basket value.</p>',
            items: [
              { title: 'Apriori Algorithm' },
              { title: 'Association Rules' },
              { title: 'PySpark' },
              { title: 'BigQuery' },
              { title: 'Cloud Composer (Airflow)' },
              { title: 'Python' },
            ],
          },
          {
            id: 'crosssell-marketplace',
            title: 'Cross Sell - Non Food Products - Marketplace',
            tagline: 'Cold Start · Embeddings & LLM',
            icon: 'tabler:building-store',
            content: '<p>Tackled the <strong>cold start problem</strong> for marketplace products that have zero sales history — making traditional collaborative filtering or association rules ineffective.</p><p>Developed a hybrid approach combining <strong>product embedding similarity</strong> (using sentence-transformers on product descriptions) with <strong>LLM-based category mapping</strong> to match new marketplace items to existing Auchan catalog products with known cross-sell affinities. This allowed <strong>day-one recommendations</strong> for new sellers onboarding onto the marketplace.</p>',
            items: [
              { title: 'Embeddings' },
              { title: 'LLM (Gemini)' },
              { title: 'Sentence Transformers' },
              { title: 'Cold Start Strategy' },
              { title: 'BigQuery' },
              { title: 'Cloud Functions' },
            ],
          },
        ],
      },
      // Optimization Techniques page
      optimization: {
        hero: {
          tagline: 'Hypermarkets · Predictive Modeling',
          title: 'Optimization Techniques',
          subtitle: 'Predictive models and optimization algorithms designed to maximize operational efficiency and revenue at Auchan Retail.',
        },
        items: [
          {
            id: 'surface-optimization',
            title: 'Store Surface Area Optimization',
            tagline: 'LightGBM · Optuna · Streamlit',
            icon: 'tabler:ruler-measure',
            content: '<p>Designed a <strong>LightGBM predictive model</strong> to optimize the allocation of store surface area (m²) across product categories in order to <strong>maximize revenue per square meter</strong>.</p><p>The model was trained on historical sales, surface allocation, footfall, and seasonality data across hundreds of hypermarkets. <strong>Hyperparameter tuning</strong> was performed with Optuna using Bayesian optimization. The solution was delivered through a <strong>dedicated Streamlit application</strong>, enabling store managers and regional directors to simulate surface reallocation scenarios and visualize projected revenue impact before implementation.</p>',
            items: [
              { title: 'LightGBM' },
              { title: 'Optuna' },
              { title: 'Feature Engineering' },
              { title: 'Streamlit' },
              { title: 'BigQuery' },
              { title: 'Python' },
            ],
          },
        ],
      },
      // Gen AI Applications page
      genai: {
        hero: {
          tagline: 'LLM · Generative AI',
          title: 'Gen AI Applications',
          subtitle: 'Generative AI and Large Language Model applications delivering practical business value across multiple domains.',
        },
        items: [
          {
            id: 'verbatim-analysis',
            title: 'Automated Verbatim Analysis (France & Portugal)',
            tagline: 'NLP · Sentence Transformers · LLM',
            icon: 'tabler:message-chatbot',
            content: '<p>Designed and deployed an <strong>end-to-end text analytics pipeline</strong> for automated customer feedback (verbatims) analysis serving both France and Portugal markets.</p><p>The pipeline combines binary classification using <strong>fine-tuned sentence transformers</strong>, multi-class classification across 5 predefined business categories, and sentiment analysis using LLM-based models. Results are exposed through a <strong>conversational LLM interface</strong> (powered by Gemini), enabling business teams to explore insights using natural language queries — e.g. "What are customers complaining about in Lille stores this month?"</p>',
            items: [
              { title: 'Sentence Transformers' },
              { title: 'Fine-tuning' },
              { title: 'LLM (Gemini)' },
              { title: 'NLP Classification' },
              { title: 'Sentiment Analysis' },
              { title: 'Conversational AI' },
            ],
          },
          {
            id: 'label-extraction',
            title: 'LLM-Powered Product Label Extraction',
            tagline: 'OCR · LLM · Automation',
            icon: 'tabler:tag',
            content: '<p>Developed an <strong>LLM-based solution</strong> to automatically extract structured information from fish product labels (via OCR from photos taken in-store), pre-fill associated regulatory forms, and recommend a <strong>top-10 list of matching internal product codes</strong> (CUG).</p><p>The pipeline uses <strong>Google Cloud Vision API</strong> for OCR, followed by Gemini for entity extraction and structured output generation. This reduced manual data entry time by over 80% for store teams and improved data accuracy for compliance.</p>',
            items: [
              { title: 'LLM (Gemini)' },
              { title: 'OCR (Cloud Vision)' },
              { title: 'Entity Extraction' },
              { title: 'Cloud Functions' },
              { title: 'Streamlit' },
              { title: 'Python' },
            ],
          },
          {
            id: 'crosssell-marketplace-genai',
            title: 'Cross Sell - Marketplace (Cold Start via LLM)',
            tagline: 'Embeddings · LLM · Cold Start',
            icon: 'tabler:sparkles',
            content: '<p>This project is also part of the <a href="/{lang}/projects/recommendation-engines#crosssell-marketplace" class="text-blue-600 dark:text-blue-400 underline hover:text-blue-800">Recommendation Engines</a> category. It uses <strong>LLM-based category mapping</strong> and embedding similarity to solve the cold start problem for marketplace products with no purchase history.</p><p>The GenAI component specifically leverages <strong>Gemini</strong> to understand product descriptions and semantically map them to the existing Auchan product taxonomy, enabling intelligent cross-sell recommendations from day one.</p>',
            items: [
              { title: 'LLM (Gemini)' },
              { title: 'Embeddings' },
              { title: 'Semantic Mapping' },
              { title: 'Cold Start Strategy' },
              { title: 'BigQuery' },
              { title: 'Cloud Functions' },
            ],
            crossRef: true,
          },
        ],
      },
    },

    // Blog (hidden but routes still exist)
    blog: {
      title: 'Blog',
      subtitle: 'Coming soon.',
    },

    // Contact page
    contact: {
      hero: {
        tagline: 'Get in Touch',
        title: 'Contact',
        subtitle: 'Feel free to reach out — I\'m always open to discussing data science, AI projects, or collaboration opportunities.',
      },
      location: {
        title: 'Location',
        value: 'Lille, France',
        icon: 'tabler:map-pin',
      },
      email: {
        title: 'University Email',
        value: 'kiran.tirumalelakshmanarao@ieseg.fr',
        icon: 'tabler:mail',
      },
      linkedin: {
        title: 'LinkedIn',
        value: 'linkedin.com/in/kiran-tl',
        href: 'https://www.linkedin.com/in/kiran-tl',
        icon: 'tabler:brand-linkedin',
      },
      cta: 'Connect on LinkedIn',
    },
  },

  fr: {
    // Navigation
    nav: {
      home: 'Accueil',
      about: 'À Propos de Moi',
      certifications: 'Certifications',
      projects: 'Projets',
      contact: 'Contact',
    },

    // Home page
    home: {
      hero: {
        tagline: 'Data Scientist · Lille, France',
        title: "Salut, je suis <span class=\"text-accent highlight\">Kiran Tirumale</span>",
        subtitle: 'Data Scientist avec une solide expérience dans la conception et la livraison de solutions data end-to-end — moteurs de recommandation, pipelines NLP, modèles prédictifs et applications GenAI — au service de l\'impact business.',
        cta: 'Voir les projets',
        ctaSecondary: 'À propos de moi',
      },
      featuredProjects: {
        tagline: 'Temps forts',
        title: 'Projets clés',
        subtitle: 'Solutions Data & IA ayant généré un impact business mesurable.',
      },
      thoughts: {
        label: 'Mes réflexions sur l\'IA Générative',
        date: 'Février 2026',
        paragraphs: [
          'Nous avons autrefois craint que les robots industriels remplacent les humains. En réalité, ils ont transformé le travail — en automatisant les tâches manuelles tout en créant de nouvelles industries et de nouveaux métiers.',
          'L\'IA générative suit une trajectoire similaire. Des équipes plus réduites pourront accomplir davantage. Les tâches répétitives disparaîtront. Mais le raisonnement, le jugement et la créativité humains ne feront que gagner en importance.',
          'Je ne vois pas l\'IA comme un remplacement des développeurs, mais comme un levier — nous permettant de réduire la friction technique pour nous concentrer davantage sur la résolution de véritables problématiques métier.',
        ],
      },
      latestPosts: {
        title: 'Derniers articles du blog',
        linkText: 'Voir tous les articles',
      },
    },

    // About page
    about: {
      hero: {
        tagline: 'À Propos de Moi',
        title: 'En savoir plus sur moi',
        subtitle: 'Data Scientist passionné par la transformation de problématiques business en solutions data concrètes et actionnables.',
      },
      summary: {
        title: 'Résumé professionnel',
        content: '<p>Je suis Data Scientist au sein de la Direction Data d\'Auchan Retail France, intervenant de manière transverse auprès des différentes directions et équipes sur des projets Data et IA. Fort d\'une double culture business et technique, je conçois et déploie des pipelines end-to-end en combinant data science, data engineering et pilotage de projets pour transformer les données en leviers de décision et de performance.</p><p>J\'interviens en étroite collaboration avec les équipes métier afin de traduire des problématiques business en solutions data concrètes et actionnables, de leur conception à leur mise en production et à leur adoption. Mon expérience couvre les systèmes de recommandation, le NLP, la modélisation prédictive, les applications basées sur les LLM et la data visualisation — dans les domaines du e-commerce, du marketing et des opérations retail.</p>',
      },
      experience: {
        tagline: 'Parcours',
        title: 'Expérience professionnelle',
        subtitle: 'Entreprises et rôles tout au long de ma carrière internationale.',
        items: [
          {
            title: 'Auchan Retail France',
            description: 'Data Scientist · Août 2021 – Présent · Lille, France\nPilotage de projets Data & IA de bout en bout sur le e-commerce, les opérations retail et l\'analyse business.',
            icon: 'tabler:building-store',
          },
          {
            title: 'SLK Software Services',
            description: 'Consultant - Business Analyst · Nov 2016 – Sep 2020 · Bangalore, Inde\nPilotage de streams analytiques et delivery pour des clients BFSI et grands comptes.',
            icon: 'tabler:users-group',
          },
          {
            title: 'Tata Consulting Engineers Ltd.',
            description: 'Consultant - Business Analyst · Sep 2014 – Nov 2016 · Bangalore, Inde\nRéalisation de missions de conseil sur des problématiques industrielles et d\'ingénierie.',
            icon: 'tabler:briefcase',
          },
          {
            title: 'Quadrate Multilingual',
            description: 'Chef de projet · Jan 2012 – Sep 2014 · Chennai, Inde\nGestion de projets multilingues, coordination opérationnelle et suivi des parties prenantes.',
            icon: 'tabler:message-language',
          },
          {
            title: 'Atos',
            description: 'Consultant - Business Analyst · Juin 2010 – Déc 2011 · Chennai, Inde\nContribution à des projets de transformation dans des contextes automobile et entreprise.',
            icon: 'tabler:world',
          },
        ],
      },
      education: {
        tagline: 'Parcours académique',
        title: 'Formation',
        subtitle: 'Diplômes et parcours académique.',
        items: [
          {
            title: 'MSc. in Big Data Analytics for Business',
            description: 'IESEG School of Management · 09/2020 – 02/2022 · Lille, France',
            icon: 'tabler:school',
          },
          {
            title: '<strong>BSc. in Mathematics, Physics, Environmental Science</strong><br /><strong>B.A in French, English, German</strong>',
            description: 'Sri Aurobindo International Centre of Education · Déc 2006 – Nov 2009 · Pondicherry, Inde',
            icon: 'tabler:book',
          },
        ],
      },
      skills: {
        tagline: 'Expertise',
        title: 'Compétences & Technologies',
        subtitle: 'Boîte à outils technique pour livrer des solutions data-driven.',
        items: [
          { title: 'Machine Learning', description: 'Scikit-learn, NLP, Moteurs de Recommandation, Feature Engineering, Exploration de Texte, Optimisation', icon: 'tabler:brain' },
          { title: 'IA Générative', description: 'LLM (Gemini, GPT), Modèles Embeddings, HuggingFace, Transformers, Copilot, Claude Code', icon: 'tabler:sparkles' },
          { title: 'Google Cloud Platform', description: 'BigQuery, Vertex AI, Cloud Composer (Airflow), Cloud Functions, Cloud Storage, Cloud Build', icon: 'tabler:cloud' },
          { title: 'Pipeline Data & MLOps', description: 'Apache Airflow, Docker, Terraform, CI/CD, Déploiement de modèles, APIs REST', icon: 'tabler:topology-ring-3' },
          { title: 'Langages & Analyse', description: 'Python (certifié), R, SQL, PySpark, Shell Scripting, Pandas, Matplotlib, NumPy', icon: 'tabler:code' },
          { title: 'Reporting & Outils', description: 'Looker Studio, Power BI, Tableau, Streamlit, Git, Jira, Confluence, Notion', icon: 'tabler:chart-bar' },
        ],
      },
      stats: {
        items: [
          { title: 'Années d\'expérience', amount: '15+' },
          { title: 'Certifications', amount: '6' },
          { title: 'Langues parlées', amount: '3' },
          { title: 'Domaines métier', amount: '5+' },
        ],
      },
      interests: {
        title: 'Intérêts',
        subtitle: 'Loisirs',
        items: [
          { title: 'Domotique', icon: 'tabler:smart-home' },
          { title: 'Voyages', icon: 'tabler:plane' },
          { title: 'Idéation & Résolution de problèmes', icon: 'tabler:bulb' },
          { title: 'Amoureux de la nature', icon: 'tabler:leaf' },
        ],
      },
    },

    // Certifications page
    certifications: {
      hero: {
        tagline: 'Accréditations',
        title: 'Certifications',
        subtitle: 'Certifications professionnelles obtenues au cours de ma carrière en Data Science et technologies Cloud.',
      },
      timeline: {
        title: 'Chronologie des certifications',
        items: [
          {
            title: 'Apache Airflow 3 Fundamentals',
            description: 'Astronomer Academy · 2025\nOrchestration de pipelines de données et automatisation des workflows avec Apache Airflow.',
            icon: 'tabler:certificate',
            link: 'https://www.credly.com/badges/34bc228a-b4c4-4ee6-a107-bdf0c7040ce7/public_url',
            badge: '/images/badges/airflow.png',
          },
          {
            title: 'Generative AI Leader',
            description: 'Google Cloud · 2025\nLeadership et stratégie pour l\'adoption de l\'IA générative en contexte entreprise.',
            icon: 'tabler:certificate',
            link: 'https://www.credly.com/badges/ead6fb2f-25a0-463b-8de3-0a02f8a2c5af/public_url',
            badge: '/images/badges/gen-ai-leader.png',
          },
          {
            title: 'Professional Machine Learning Engineer',
            description: 'Google Cloud · 2024\nConception, construction et mise en production de modèles ML sur Google Cloud Platform.',
            icon: 'tabler:certificate',
            link: 'https://www.credly.com/badges/001ea8ca-30a6-44de-872e-2d35e67c70bb/public_url',
            badge: '/images/badges/ml-engineer.png',
          },
          {
            title: 'From Data to Insights with Google Cloud',
            description: 'Coursera (Google Cloud) · 2021\nAnalyse de données, visualisation et insights avec BigQuery et les outils Google Cloud.',
            icon: 'tabler:certificate',
            link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/5GYHH9NQGKH3',
          },
          {
            title: 'Data Science for Everyone',
            description: 'DataCamp · 2021\nConcepts fondamentaux et méthodologies de la data science.',
            icon: 'tabler:certificate',
            link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/1e84809f57358bfdbeca24550c418f12b2ac6929',
          },
          {
            title: 'Certified Entry-Level Python Programmer',
            description: 'Python Institute (PCEP) · 2021\nMaîtrise certifiée des fondamentaux de la programmation Python.',
            icon: 'tabler:certificate',
            link: 'https://www.credly.com/badges/ba1db914-ee9b-4adf-bc1c-bbe4e04539bc/public_url',
            badge: '/images/badges/python-pcep.png',
          },
        ],
      },
    },

    // Projects
    projects: {
      hero: {
        tagline: 'Projets',
        title: 'Mes Projets',
        subtitle: 'Tout au long de ma carrière chez Auchan Retail, j\'ai conçu et déployé des solutions Data et IA de bout en bout répondant directement aux enjeux métier \u2014 de la personnalisation de l\'expérience e-commerce via des systèmes de recommandation intelligents, à l\'optimisation des opérations en magasin grâce à la modélisation prédictive, en passant par l\'exploitation de Large Language Models pour automatiser des processus complexes. Chaque projet suit un fil conducteur : transformer un besoin métier concret en une solution data scalable et industrialisée, générant un impact mesurable.',
      },
      categories: {
        tagline: 'Explorer',
        title: 'Catégories de projets',
        subtitle: 'Sélectionnez une catégorie pour découvrir les projets en détail.',
        items: [
          {
            title: 'Moteurs de Recommandation',
            description: '4 moteurs de recommandation pour Auchan.fr remplaçant une solution externe coûteuse, générant +1M€ de CA additionnel.',
            cta: 'En savoir plus',
          },
          {
            title: 'Techniques d\'Optimisation',
            description: 'Modèles prédictifs pour optimiser l\'allocation de surface magasin et maximiser le CA au mètre carré.',
            cta: 'En savoir plus',
          },
          {
            title: 'Applications Gen AI',
            description: 'Solutions LLM : analyse automatisée de verbatims, extraction d\'étiquettes, interfaces IA conversationnelles.',
            cta: 'En savoir plus',
          },
        ],
      },
      // Recommendation Engines page
      recoEngines: {
        hero: {
          tagline: 'E-Commerce · Systèmes de Recommandation',
          title: 'Moteurs de Recommandation',
          subtitle: 'Quatre moteurs de recommandation développés pour Auchan.fr, remplaçant une solution externe coûteuse (Target2Sell / Mirakl) et générant plus de 1 M€ de CA additionnel.',
        },
        items: [
          {
            id: 'similarity-food',
            title: 'Similarité - Alimentaire',
            tagline: 'NLP · Attributs Produit',
            icon: 'tabler:salad',
            content: '<p>Développement d\'un <strong>moteur de recommandation content-based</strong> pour les produits alimentaires sur Auchan.fr. Le moteur exploite des techniques NLP appliquées aux attributs produit (nom, catégorie, description, données nutritionnelles) pour calculer des scores de similarité entre articles.</p><p>Les embeddings produit sont générés par <strong>vectorisation TF-IDF</strong> combinée à la similarité cosinus. Le modèle tourne via un <strong>DAG Airflow quotidien</strong> qui rafraîchit les recommandations à partir du dernier catalogue. Résultat : <strong>+25% de taux d\'ajout au panier</strong> par rapport à la solution précédente (Target2Sell).</p>',
            items: [
              { title: 'Python' },
              { title: 'NLP / TF-IDF' },
              { title: 'Similarité Cosinus' },
              { title: 'BigQuery' },
              { title: 'Cloud Composer (Airflow)' },
              { title: 'Cloud Functions' },
            ],
          },
          {
            id: 'similarity-nonfood',
            title: 'Similarité - Non Alimentaire',
            tagline: 'Embeddings · Catalogue Produit',
            icon: 'tabler:device-laptop',
            content: '<p>Construction d\'un <strong>moteur de similarité pour les produits non alimentaires</strong> (électronique, maison, textile, etc.) où les attributs produit sont moins structurés et les descriptions plus pauvres que pour l\'alimentaire.</p><p>Utilisation d\'<strong>embeddings sentence-transformer</strong> pour capturer le sens sémantique des titres et descriptions, combinés à l\'encodage de features catégorielles. Une <strong>recherche FAISS approximate nearest neighbor</strong> permet la récupération en temps réel des top-N produits similaires. Déployé en <strong>Cloud Function</strong> avec BigQuery comme feature store.</p>',
            items: [
              { title: 'Sentence Transformers' },
              { title: 'FAISS' },
              { title: 'Embeddings' },
              { title: 'BigQuery' },
              { title: 'Cloud Functions' },
              { title: 'Python' },
            ],
          },
          {
            id: 'crosssell-nonfood',
            title: 'Cross Sell - Non Alimentaire',
            tagline: 'Règles d\'Association · Historique de Ventes',
            icon: 'tabler:arrows-exchange',
            content: '<p>Conception d\'un <strong>moteur de recommandation cross-sell</strong> pour les produits non alimentaires basé sur l\'analyse de l\'historique transactionnel. Le moteur identifie les produits fréquemment achetés ensemble pour suggérer des articles complémentaires au niveau de la page produit.</p><p>Implémentation de l\'<strong>algorithme Apriori</strong> sur des millions de transactions pour extraire des règles d\'association à haute confiance (support, confiance, lift). Les règles sont filtrées et classées par pertinence métier, rafraîchies chaque semaine via un <strong>pipeline Airflow</strong>. Contribution mesurable à l\'augmentation du panier moyen.</p>',
            items: [
              { title: 'Algorithme Apriori' },
              { title: 'Règles d\'Association' },
              { title: 'PySpark' },
              { title: 'BigQuery' },
              { title: 'Cloud Composer (Airflow)' },
              { title: 'Python' },
            ],
          },
          {
            id: 'crosssell-marketplace',
            title: 'Cross Sell - Non Alimentaire - Marketplace',
            tagline: 'Cold Start · Embeddings & LLM',
            icon: 'tabler:building-store',
            content: '<p>Résolution du <strong>problème de cold start</strong> pour les produits marketplace sans aucun historique de ventes — rendant le filtrage collaboratif ou les règles d\'association classiques inefficaces.</p><p>Développement d\'une approche hybride combinant la <strong>similarité par embeddings produit</strong> (via sentence-transformers sur les descriptions) avec un <strong>mapping de catégories par LLM</strong> pour associer les nouveaux articles marketplace aux produits existants du catalogue Auchan avec des affinités cross-sell connues. Cela a permis des <strong>recommandations dès le jour 1</strong> pour les nouveaux vendeurs intégrant la marketplace.</p>',
            items: [
              { title: 'Embeddings' },
              { title: 'LLM (Gemini)' },
              { title: 'Sentence Transformers' },
              { title: 'Stratégie Cold Start' },
              { title: 'BigQuery' },
              { title: 'Cloud Functions' },
            ],
          },
        ],
      },
      // Optimization Techniques page
      optimization: {
        hero: {
          tagline: 'Hypermarchés · Modélisation Prédictive',
          title: 'Techniques d\'Optimisation',
          subtitle: 'Modèles prédictifs et algorithmes d\'optimisation conçus pour maximiser l\'efficacité opérationnelle et le chiffre d\'affaires chez Auchan Retail.',
        },
        items: [
          {
            id: 'surface-optimization',
            title: 'Optimisation de la Surface Magasin',
            tagline: 'LightGBM · Optuna · Streamlit',
            icon: 'tabler:ruler-measure',
            content: '<p>Conception d\'un <strong>modèle prédictif LightGBM</strong> pour optimiser l\'allocation de la surface de vente (m²) par catégorie de produits afin de <strong>maximiser le chiffre d\'affaires au mètre carré</strong>.</p><p>Le modèle a été entraîné sur les données de ventes historiques, d\'allocation de surface, de fréquentation et de saisonnalité de centaines d\'hypermarchés. L\'<strong>optimisation des hyperparamètres</strong> a été réalisée avec Optuna en optimisation bayésienne. La solution est délivrée via une <strong>application Streamlit dédiée</strong>, permettant aux directeurs de magasins et régionaux de simuler des scénarios de réallocation et de visualiser l\'impact sur le CA avant mise en œuvre.</p>',
            items: [
              { title: 'LightGBM' },
              { title: 'Optuna' },
              { title: 'Feature Engineering' },
              { title: 'Streamlit' },
              { title: 'BigQuery' },
              { title: 'Python' },
            ],
          },
        ],
      },
      // Gen AI Applications page
      genai: {
        hero: {
          tagline: 'LLM · IA Générative',
          title: 'Applications Gen AI',
          subtitle: 'Applications d\'IA générative et de Large Language Models générant une valeur business concrète dans de multiples domaines.',
        },
        items: [
          {
            id: 'verbatim-analysis',
            title: 'Analyse automatisée de verbatims (France & Portugal)',
            tagline: 'NLP · Sentence Transformers · LLM',
            icon: 'tabler:message-chatbot',
            content: '<p>Conception et déploiement d\'une <strong>chaîne d\'analyse de texte end-to-end</strong> pour l\'analyse automatisée des retours clients (verbatims) couvrant les marchés France et Portugal.</p><p>Le pipeline combine la classification binaire via des <strong>sentence transformers avec fine-tuning</strong>, la classification multi-classes sur 5 catégories métier, et l\'analyse de sentiment via des modèles LLM. Les résultats sont exposés via une <strong>interface conversationnelle LLM</strong> (propulsée par Gemini), permettant aux équipes métier d\'explorer les insights en langage naturel — ex. « De quoi se plaignent les clients dans les magasins de Lille ce mois-ci ? »</p>',
            items: [
              { title: 'Sentence Transformers' },
              { title: 'Fine-tuning' },
              { title: 'LLM (Gemini)' },
              { title: 'Classification NLP' },
              { title: 'Analyse de Sentiment' },
              { title: 'IA Conversationnelle' },
            ],
          },
          {
            id: 'label-extraction',
            title: 'Extraction d\'étiquettes produit par LLM',
            tagline: 'OCR · LLM · Automatisation',            icon: 'tabler:tag',            content: '<p>Développement d\'une <strong>solution basée sur les LLM</strong> pour extraire automatiquement les informations structurées des étiquettes poisson (via OCR à partir de photos prises en magasin), pré-remplir les formulaires réglementaires associés et proposer un <strong>top-10 de codes internes produits correspondants</strong> (CUG).</p><p>Le pipeline utilise l\'<strong>API Google Cloud Vision</strong> pour l\'OCR, suivi de Gemini pour l\'extraction d\'entités et la génération de sorties structurées. Réduction de plus de 80% du temps de saisie manuelle pour les équipes magasin et amélioration de la qualité des données réglementaires.</p>',
            items: [
              { title: 'LLM (Gemini)' },
              { title: 'OCR (Cloud Vision)' },
              { title: 'Extraction d\'Entités' },
              { title: 'Cloud Functions' },
              { title: 'Streamlit' },
              { title: 'Python' },
            ],
          },
          {
            id: 'crosssell-marketplace-genai',
            title: 'Cross Sell - Marketplace (Cold Start via LLM)',
            tagline: 'Embeddings · LLM · Cold Start',
            icon: 'tabler:sparkles',
            content: '<p>Ce projet fait également partie de la catégorie <a href="/{lang}/projects/recommendation-engines#crosssell-marketplace" class="text-blue-600 dark:text-blue-400 underline hover:text-blue-800">Moteurs de Recommandation</a>. Il utilise le <strong>mapping de catégories par LLM</strong> et la similarité par embeddings pour résoudre le problème de cold start des produits marketplace sans historique d\'achat.</p><p>Le volet GenAI exploite spécifiquement <strong>Gemini</strong> pour comprendre les descriptions produit et les associer sémantiquement à la taxonomie produit Auchan existante, permettant des recommandations cross-sell intelligentes dès le premier jour.</p>',
            items: [
              { title: 'LLM (Gemini)' },
              { title: 'Embeddings' },
              { title: 'Mapping Sémantique' },
              { title: 'Stratégie Cold Start' },
              { title: 'BigQuery' },
              { title: 'Cloud Functions' },
            ],
            crossRef: true,
          },
        ],
      },
    },
    // Blog (hidden but routes still exist)
    blog: {
      title: 'Blog',
      subtitle: 'Bientôt disponible.',
    },
    // Contact page
    contact: {
      hero: {
        tagline: 'Me contacter',
        title: 'Contact',
        subtitle: 'N\'hésitez pas à me contacter — je suis toujours ouvert aux échanges autour de la data science, de l\'IA ou d\'opportunités de collaboration.',
      },
      location: {
        title: 'Localisation',
        value: 'Lille, France',
        icon: 'tabler:map-pin',
      },
      email: {
        title: 'Email universitaire',
        value: 'kiran.tirumalelakshmanarao@ieseg.fr',
        icon: 'tabler:mail',
      },
      linkedin: {
        title: 'LinkedIn',
        value: 'linkedin.com/in/kiran-tl',
        href: 'https://www.linkedin.com/in/kiran-tl',
        icon: 'tabler:brand-linkedin',
      },
      cta: 'Se connecter sur LinkedIn',
    },
  },
} as const;

export type Translations = (typeof translations)['en'] | (typeof translations)['fr'];

export function useTranslations(lang: 'en' | 'fr') {
  return translations[lang];
}
