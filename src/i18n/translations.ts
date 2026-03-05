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
            content: `<div class="not-prose mb-4">
  <h3 class="text-xl font-bold text-blue-700 dark:text-blue-400">Replacing a Black-Box Recommender</h3>
  <p class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Designing the &ldquo;Similarity – Food&rdquo; Engine at Auchan</p>
</div>

<p>As part of Auchan&rsquo;s strategic effort to <strong>internalize advanced analytics capabilities</strong>, I led the design and end-to-end implementation of a product substitution engine for food e-commerce.</p>
<p>The objective was simple but strategically critical: when a product is <strong>out of stock</strong> on the e-commerce platform, propose the most relevant substitutes in order to preserve revenue and maintain a seamless customer experience.</p>
<p>It was to replace a costly external black-box solution <span class="text-gray-500 dark:text-gray-400">(Target2Sell / Mirakl)</span> with an internally controlled, explainable, and scalable system &mdash; powered entirely by Auchan&rsquo;s own product data.</p>

<div class="not-prose my-6 border-l-4 border-amber-500 dark:border-amber-400 pl-4 py-2">
  <p class="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">The Outcome</p>
  <p class="text-lg font-bold text-gray-900 dark:text-white">+25% add-to-cart rate <span class="text-sm font-normal text-gray-500 dark:text-gray-400">vs. previous external solution</span></p>
</div>

<div class="not-prose mt-8 mb-4">
  <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2"><svg class="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>Framing the Problem: Substitution Is Not Just Matching</h3>
</div>

<p>In grocery e-commerce, stockouts are inevitable. The real question is not <em>whether</em> substitution should happen &mdash; but <strong>how intelligently</strong> it should happen.</p>
<p>When a product becomes unavailable, customers may abandon their cart, leave the platform, choose a poor substitute, or lose trust in the brand.</p>
<p>A simplistic engine might match same category, closest weight, or same brand. However, real-world substitution behavior is <strong>multi-dimensional</strong>:</p>

<div class="not-prose my-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
  <div class="flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-slate-700/60 px-3 py-2 text-sm text-gray-700 dark:text-gray-300"><span class="text-blue-500 dark:text-blue-400 font-bold">&rsaquo;</span> Organic vs non-organic</div>
  <div class="flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-slate-700/60 px-3 py-2 text-sm text-gray-700 dark:text-gray-300"><span class="text-blue-500 dark:text-blue-400 font-bold">&rsaquo;</span> Brand loyalty varies by category</div>
  <div class="flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-slate-700/60 px-3 py-2 text-sm text-gray-700 dark:text-gray-300"><span class="text-blue-500 dark:text-blue-400 font-bold">&rsaquo;</span> Product weight matters</div>
  <div class="flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-slate-700/60 px-3 py-2 text-sm text-gray-700 dark:text-gray-300"><span class="text-blue-500 dark:text-blue-400 font-bold">&rsaquo;</span> Private label &rarr; margin strategy</div>
  <div class="flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-slate-700/60 px-3 py-2 text-sm text-gray-700 dark:text-gray-300"><span class="text-blue-500 dark:text-blue-400 font-bold">&rsaquo;</span> Price range is critical</div>
</div>

<p>The previous external solution operated largely as a <strong>black box</strong>. Business teams could see results, but not reasoning. Tuning behavior was limited. Strategic control was minimal.</p>

<div class="not-prose mt-8 mb-4">
  <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2"><svg class="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>Architectural Philosophy: Modular, Tunable, Explainable</h3>
</div>

<p>Rather than building a monolithic similarity model, I designed the system as an <strong>ensemble of independent similarity components</strong>, inspired by modular recommender architectures.</p>
<p>The design principle: similarity is multi-dimensional. Each dimension should be measured independently, then aggregated in a controlled way. This approach ensured <strong>robustness</strong>, <strong>interpretability</strong>, <strong>business tunability</strong>, and <strong>scalability</strong>.</p>
<div class="not-prose my-5">
  <a href="/projects/recommendation-engines/similarity-food/BlueGranite-Out-of-Stock-Whitepaper.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-lg border border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/25 px-4 py-2.5 text-sm font-semibold text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12"></path><path d="m7 10 5 5 5-5"></path><path d="M5 21h14"></path></svg>
    View / Download BlueGranite Whitepaper
  </a>
</div>

<div class="not-prose mt-8 mb-4">
  <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2"><svg class="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>High-Level Architecture Overview</h3>
</div>

<p>The engine follows a <strong>content-based similarity</strong> framework structured in three main stages:</p>
<ol>
  <li><strong>Feature Engineering</strong></li>
  <li><strong>Independent Similarity Computation</strong></li>
  <li><strong>Weighted Aggregation and Ranking</strong></li>
</ol>
<figure>
  <img src="/projects/recommendation-engines/similarity-food/assets/image-01.png" alt="Similarity Food architecture overview" loading="lazy" />
  <figcaption>High-level architecture view of the Similarity – Food engine.</figcaption>
</figure>

<div class="not-prose mt-8 mb-4">
  <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2"><svg class="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>Family-Normalized Weight Similarity</h3>
</div>

<p>Weight similarity in grocery is <strong>non-trivial</strong>. A 6kg beverage crate and a 150g yogurt cannot be compared on a common absolute scale.</p>
<p>To address this, I <strong>standardized weight within each family</strong>, computed normalized distance, and converted distance into similarity. This ensures weight behaves contextually and prevents distorted comparisons.</p>

<div class="not-prose mt-8 mb-4">
  <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2"><svg class="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>Weighted Aggregation: Turning a Model into a Business Lever</h3>
</div>

<p>Each component produces a normalized score between 0 and 1. The final similarity score is computed as:</p>

<div class="not-prose my-8 flex flex-col items-center">
  <div class="w-full rounded-lg bg-gray-50 dark:bg-slate-800/50 py-6 px-8 text-center">
    <p class="text-lg md:text-xl italic text-gray-800 dark:text-gray-100" style="font-family: 'Times New Roman', 'Georgia', 'CMU Serif', serif; letter-spacing: 0.02em;">Final Score = <var>w</var><sub>1</sub> &middot; Label + <var>w</var><sub>2</sub> &middot; Attributes + <var>w</var><sub>3</sub> &middot; Weight</p>
    <p class="mt-3 text-sm text-gray-500 dark:text-gray-400" style="font-family: 'Times New Roman', 'Georgia', serif;">Where : &ensp; <var>w</var><sub>1</sub> + <var>w</var><sub>2</sub> + <var>w</var><sub>3</sub> = 1</p>
  </div>
</div>

<div class="not-prose float-right ml-5 mb-4 w-56 md:w-64 lg:w-72">
  <figure class="m-0">
    <img src="/projects/recommendation-engines/similarity-food/assets/image-02.png" alt="Weighted aggregation reference diagram" class="rounded-xl border border-gray-200 dark:border-gray-700 w-full" loading="lazy" />
    <figcaption class="text-xs text-center text-gray-500 dark:text-gray-400 mt-1.5">Reference diagram for weighted aggregation.</figcaption>
  </figure>
</div>

<p>The introduction of explicit weights transforms the model from a static algorithm into a <strong>business-tunable system</strong>.</p>

<div class="not-prose my-3 space-y-1.5">
  <div class="flex items-center gap-2 text-sm"><span class="text-blue-600 dark:text-blue-400">&rarr;</span> Increase <strong class="text-gray-900 dark:text-gray-100">Bio weight</strong> <span class="text-gray-500 dark:text-gray-400">&rarr; prioritize organic substitutes</span></div>
  <div class="flex items-center gap-2 text-sm"><span class="text-blue-600 dark:text-blue-400">&rarr;</span> Increase <strong class="text-gray-900 dark:text-gray-100">Brand weight</strong> <span class="text-gray-500 dark:text-gray-400">&rarr; preserve brand loyalty</span></div>
  <div class="flex items-center gap-2 text-sm"><span class="text-blue-600 dark:text-blue-400">&rarr;</span> Increase <strong class="text-gray-900 dark:text-gray-100">Weight similarity</strong> <span class="text-gray-500 dark:text-gray-400">&rarr; enforce size consistency</span></div>
  <div class="flex items-center gap-2 text-sm"><span class="text-blue-600 dark:text-blue-400">&rarr;</span> Increase <strong class="text-gray-900 dark:text-gray-100">Private Label</strong> <span class="text-gray-500 dark:text-gray-400">&rarr; support margin optimization</span></div>
</div>

<p>Instead of embedding rigid rules, the system exposes <strong>controllable parameters</strong>. This was a key differentiator from the previous vendor solution.</p>

<div style="clear: both;"></div>

<div class="not-prose mt-8 mb-4">
  <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2"><svg class="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>Computational Scaling and Optimization</h3>
</div>

<p>With over <strong>45,000 food SKUs</strong>, na&iuml;vely computing full similarity matrices would create unnecessary computational overhead. I introduced a clear constraint: similarity is computed <strong>strictly within product families</strong>, and cross-family comparisons are excluded.</p>
<p>This reduced complexity, improved relevance, accelerated computation, and simplified maintenance. Optimization decisions were driven by both engineering efficiency and domain logic.</p>

<div class="not-prose mt-8 mb-4">
  <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2"><svg class="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>Explainability and Business Adoption</h3>
</div>

<p>One of the strategic goals was restoring trust and visibility into recommendation behavior. To achieve this, I built an <strong>internal Streamlit interface</strong> that allowed business users to query any product, view ranked substitutes, adjust weights dynamically, and understand component contributions.</p>
<p>This shifted the perception of the algorithm from a mysterious system to a <strong>transparent decision engine</strong>. Explainability accelerated adoption significantly.</p>

<div class="not-prose mt-8 mb-4">
  <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2"><svg class="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>Performance Benchmarking</h3>
</div>

<p>The engine was benchmarked against the external Target2Sell/Mirakl solution.</p>

<div class="not-prose my-5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 p-5">
  <div class="flex items-center gap-3">
    <span class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-800/40 flex items-center justify-center text-lg">🏆</span>
    <div>
      <p class="text-xs font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wider mb-0.5">Benchmark Result</p>
      <p class="text-lg font-bold text-blue-800 dark:text-blue-300">+25% add-to-cart rate</p>
    </div>
  </div>
</div>

<p>This validated three hypotheses: <strong>domain-specific internal data</strong> can outperform generic vendor systems, <strong>transparent architectures</strong> increase business alignment, and <strong>well-structured simplicity</strong> can outperform opaque complexity.</p>

<div class="not-prose mt-8 mb-4">
  <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2"><svg class="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>Strategic Impact</h3>
</div>

<div class="not-prose my-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
  <div class="flex items-center gap-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 p-3"><span class="text-blue-500 dark:text-blue-400">&#10003;</span><span class="text-sm font-medium text-gray-800 dark:text-gray-200">Reduced vendor dependency</span></div>
  <div class="flex items-center gap-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 p-3"><span class="text-blue-500 dark:text-blue-400">&#10003;</span><span class="text-sm font-medium text-gray-800 dark:text-gray-200">Lower operational costs</span></div>
  <div class="flex items-center gap-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 p-3"><span class="text-blue-500 dark:text-blue-400">&#10003;</span><span class="text-sm font-medium text-gray-800 dark:text-gray-200">Full algorithmic ownership</span></div>
  <div class="flex items-center gap-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 p-3"><span class="text-blue-500 dark:text-blue-400">&#10003;</span><span class="text-sm font-medium text-gray-800 dark:text-gray-200">Faster iteration cycles</span></div>
  <div class="flex items-center gap-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 p-3"><span class="text-blue-500 dark:text-blue-400">&#10003;</span><span class="text-sm font-medium text-gray-800 dark:text-gray-200">Cross-functional trust</span></div>
</div>

<p>The system is modular and extensible, allowing future enhancements such as customer-level personalization, segment-based weighting, feedback-driven adaptation, and A/B testing optimization.</p>

<div class="not-prose mt-8 mb-4">
  <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2"><svg class="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>Reflections as a Data Scientist</h3>
</div>

<div class="not-prose my-4 rounded-xl bg-gray-50 dark:bg-slate-800/40 border border-gray-200 dark:border-gray-700 p-5">
  <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">This project reinforced several principles that now define how I approach advanced analytics:</p>
  <div class="space-y-2">
    <div class="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200"><span class="text-blue-500">&#9670;</span> Design <strong>systems</strong>, not just models</div>
    <div class="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200"><span class="text-blue-500">&#9670;</span> Favor <strong>modular architectures</strong></div>
    <div class="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200"><span class="text-blue-500">&#9670;</span> Make algorithms <strong>tunable</strong></div>
    <div class="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200"><span class="text-blue-500">&#9670;</span> Optimize for <strong>explainability</strong> as much as accuracy</div>
    <div class="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200"><span class="text-blue-500">&#9670;</span> Align mathematical structure with <strong>business strategy</strong></div>
  </div>
</div>

<p>The &ldquo;Similarity – Food&rdquo; engine illustrates that replacing a black-box vendor does not require extreme complexity. It requires <strong>thoughtful modeling</strong>, <strong>architectural clarity</strong>, and <strong>disciplined alignment</strong> between technical design and business objectives.</p>`,
            items: [
              { title: 'Python' },
              { title: 'NLP / TF-IDF' },
              { title: 'Cosine Similarity' },
              { title: 'BigQuery' },
              { title: 'Cloud Composer (Airflow)' },
              { title: 'Cloud Functions' },
              { title: 'Streamlit' },
            ],
          },
          {
            id: 'similarity-nonfood',
            title: 'Similarity - Non Food Products',
            tagline: 'NLP · Semantic Similarity',
            icon: 'tabler:device-laptop',
            content: `<div class="not-prose mb-4">
  <h3 class="text-xl font-bold text-blue-700 dark:text-blue-400">Adapting Similarity to Sparse Data</h3>
  <p class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Designing the &ldquo;Similarity &ndash; Non Food&rdquo; Engine at Auchan</p>
</div>

<div class="not-prose mb-6 rounded-lg bg-blue-50/60 dark:bg-blue-900/15 border border-blue-100 dark:border-blue-800/50 px-4 py-3">
  <p class="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
    <svg class="w-4 h-4 mt-0.5 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
    <span>This article builds upon the principles established in the <a href="#similarity-food" class="font-semibold text-blue-600 dark:text-blue-400 hover:underline">Similarity &ndash; Food Products</a> engine. Reading that article first is recommended for full architectural context.</span>
  </p>
</div>

<p>Following the successful deployment of the Similarity &ndash; Food substitution engine, the next challenge was extending the approach to <strong>non-food products</strong> across the Auchan e-commerce platform.</p>
<p>At first glance, the problem appears similar: when a product is unavailable, propose relevant alternatives to preserve customer experience and reduce cart abandonment.</p>
<p>However, non-food products introduce a <strong>fundamentally different modeling landscape</strong>. While food products contain rich attributes (ingredients, bio markers, nutritional data, weight normalization, etc.), non-food products typically feature far fewer structured attributes.</p>
<p>The challenge was not to replicate the food algorithm &mdash; but to <strong>adapt the architecture</strong> to a simpler data environment while maintaining recommendation quality.</p>

<div class="not-prose mt-8 mb-4">
  <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2"><svg class="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>Reframing the Problem</h3>
</div>

<p>Non-food substitution behavior is inherently simpler than food substitution:</p>

<div class="not-prose my-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
  <div class="flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-slate-700/60 px-3 py-2 text-sm text-gray-700 dark:text-gray-300"><span class="text-blue-500 dark:text-blue-400 font-bold">&rsaquo;</span> Ingredient-level attributes are irrelevant</div>
  <div class="flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-slate-700/60 px-3 py-2 text-sm text-gray-700 dark:text-gray-300"><span class="text-blue-500 dark:text-blue-400 font-bold">&rsaquo;</span> Nutritional comparisons do not apply</div>
  <div class="flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-slate-700/60 px-3 py-2 text-sm text-gray-700 dark:text-gray-300"><span class="text-blue-500 dark:text-blue-400 font-bold">&rsaquo;</span> Weight similarity is rarely meaningful</div>
  <div class="flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-slate-700/60 px-3 py-2 text-sm text-gray-700 dark:text-gray-300"><span class="text-blue-500 dark:text-blue-400 font-bold">&rsaquo;</span> Product label becomes the primary signal</div>
</div>

<p>Substitution decisions in non-food are primarily driven by <strong>product description and semantic meaning</strong>. Rather than being a drawback, the limited attribute space actually simplifies the modeling strategy. With fewer competing signals, the focus shifts to extracting maximum information from product descriptions.</p>

<div class="not-prose mt-8 mb-4">
  <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2"><svg class="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>Architectural Philosophy: Simplicity with Precision</h3>
</div>

<p>The design principle for the non-food engine was straightforward:</p>

<div class="not-prose my-6 border-l-4 border-blue-500 dark:border-blue-400 pl-4 py-2">
  <p class="text-base font-medium text-gray-800 dark:text-gray-100 italic">When the signal space is limited, focus on extracting maximum value from the strongest signal.</p>
</div>

<p>In this case, the strongest signal is the <strong>product label</strong>.</p>
<p>Instead of building multiple attribute-based similarity models as in the food engine, the non-food algorithm focuses exclusively on <strong>semantic similarity between product labels</strong>.</p>
<p>To improve robustness and capture different linguistic patterns, the system computes similarity using <strong>two complementary semantic similarity methods</strong> applied to the product label.</p>

<div class="not-prose mt-8 mb-4">
  <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2"><svg class="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>Dual Semantic Similarity Modeling</h3>
</div>

<p>Since the product label is the primary information source, the algorithm leverages <strong>two distinct semantic similarity approaches</strong> to analyze product descriptions from complementary perspectives.</p>
<p>Each model processes the label differently and produces an independent similarity score. While one model focuses on <strong>lexical similarity patterns</strong>, the other captures <strong>broader semantic relationships</strong> between words.</p>
<p>By combining two distinct similarity computations, the system becomes more robust to variations in wording, phrasing, and product naming conventions that are common in large retail catalogs.</p>
<p>This approach ensures the algorithm can capture both <strong>surface-level similarity</strong> and <strong>deeper semantic relationships</strong> between products, even when descriptions are not identical.</p>

<div class="not-prose mt-8 mb-4">
  <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2"><svg class="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>Weighted Aggregation</h3>
</div>

<p>Each similarity model produces a normalized score between 0 and 1. The final similarity score is computed through a weighted aggregation:</p>

<div class="not-prose my-8 flex flex-col items-center">
  <div class="w-full rounded-lg bg-gray-50 dark:bg-slate-800/50 py-6 px-8 text-center">
    <p class="text-lg md:text-xl italic text-gray-800 dark:text-gray-100" style="font-family: 'Times New Roman', 'Georgia', 'CMU Serif', serif; letter-spacing: 0.02em;">Final Score = <var>w</var><sub>1</sub> &middot; Similarity<sub>Model&thinsp;1</sub> + <var>w</var><sub>2</sub> &middot; Similarity<sub>Model&thinsp;2</sub></p>
    <p class="mt-3 text-sm text-gray-500 dark:text-gray-400" style="font-family: 'Times New Roman', 'Georgia', serif;">Where : &ensp; <var>w</var><sub>1</sub> + <var>w</var><sub>2</sub> = 1</p>
  </div>
</div>

<p>This maintains the same architectural advantages introduced in the food similarity engine:</p>

<div class="not-prose my-3 space-y-1.5">
  <div class="flex items-center gap-2 text-sm"><span class="text-blue-600 dark:text-blue-400">&rarr;</span> <strong class="text-gray-900 dark:text-gray-100">Transparent scoring</strong> <span class="text-gray-500 dark:text-gray-400">&rarr; fully explainable results</span></div>
  <div class="flex items-center gap-2 text-sm"><span class="text-blue-600 dark:text-blue-400">&rarr;</span> <strong class="text-gray-900 dark:text-gray-100">Explainable recommendations</strong> <span class="text-gray-500 dark:text-gray-400">&rarr; builds business trust</span></div>
  <div class="flex items-center gap-2 text-sm"><span class="text-blue-600 dark:text-blue-400">&rarr;</span> <strong class="text-gray-900 dark:text-gray-100">Adjustable weighting</strong> <span class="text-gray-500 dark:text-gray-400">&rarr; business-tunable parameters</span></div>
</div>

<p>Although simpler than the food engine, the weighted structure still provides <strong>flexibility and interpretability</strong>.</p>

<div class="not-prose mt-8 mb-4">
  <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2"><svg class="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>Efficient Scaling</h3>
</div>

<p>Because the algorithm focuses primarily on product labels, the computational footprint is <strong>significantly lighter</strong> than the food engine. This allows the system to:</p>

<div class="not-prose my-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
  <div class="flex items-center gap-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 p-3"><span class="text-blue-500 dark:text-blue-400">&#10003;</span><span class="text-sm font-medium text-gray-800 dark:text-gray-200">Fast computation across large catalogs</span></div>
  <div class="flex items-center gap-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 p-3"><span class="text-blue-500 dark:text-blue-400">&#10003;</span><span class="text-sm font-medium text-gray-800 dark:text-gray-200">Low operational complexity</span></div>
  <div class="flex items-center gap-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 p-3"><span class="text-blue-500 dark:text-blue-400">&#10003;</span><span class="text-sm font-medium text-gray-800 dark:text-gray-200">Efficient scaling across categories</span></div>
</div>

<p>The design intentionally prioritizes <strong>speed, maintainability, and robustness</strong>.</p>

<div class="not-prose mt-8 mb-4">
  <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2"><svg class="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>From Model to Deployment</h3>
</div>

<p>One of the key advantages of this project was the ability to <strong>reuse the infrastructure</strong> built during the development of the food similarity engine.</p>
<p>The previous project had already established:</p>

<div class="not-prose my-4 grid grid-cols-2 gap-2">
  <div class="flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-slate-700/60 px-3 py-2 text-sm text-gray-700 dark:text-gray-300"><span class="text-blue-500 dark:text-blue-400 font-bold">&rsaquo;</span> Similarity computation pipelines</div>
  <div class="flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-slate-700/60 px-3 py-2 text-sm text-gray-700 dark:text-gray-300"><span class="text-blue-500 dark:text-blue-400 font-bold">&rsaquo;</span> Evaluation frameworks</div>
  <div class="flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-slate-700/60 px-3 py-2 text-sm text-gray-700 dark:text-gray-300"><span class="text-blue-500 dark:text-blue-400 font-bold">&rsaquo;</span> Internal testing tools</div>
  <div class="flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-slate-700/60 px-3 py-2 text-sm text-gray-700 dark:text-gray-300"><span class="text-blue-500 dark:text-blue-400 font-bold">&rsaquo;</span> Deployment workflows</div>
</div>

<p>As a result, the non-food engine moved from design to deployment <strong>significantly faster</strong>.</p>

<div class="not-prose my-6 border-l-4 border-amber-500 dark:border-amber-400 pl-4 py-2">
  <p class="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">Key Principle</p>
  <p class="text-base font-medium text-gray-800 dark:text-gray-100">Well-designed systems accelerate future innovation.</p>
</div>

<p>By leveraging the existing architecture, the non-food substitution engine was implemented and deployed with <strong>minimal additional operational overhead</strong>.</p>

<div class="not-prose mt-8 mb-4">
  <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2"><svg class="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>Key Takeaways</h3>
</div>

<div class="not-prose my-4 rounded-xl bg-gray-50 dark:bg-slate-800/40 border border-gray-200 dark:border-gray-700 p-5">
  <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">Although technically simpler than the food similarity engine, the Similarity &ndash; Non Food algorithm highlights several principles of effective data science practice:</p>
  <div class="space-y-2">
    <div class="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200"><span class="text-blue-500">&#9670;</span> Adapt <strong>model complexity</strong> to the available data</div>
    <div class="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200"><span class="text-blue-500">&#9670;</span> Prioritize the <strong>strongest signal</strong> over increasing feature count</div>
    <div class="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200"><span class="text-blue-500">&#9670;</span> Leverage <strong>complementary similarity techniques</strong> for robustness</div>
    <div class="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200"><span class="text-blue-500">&#9670;</span> Reuse <strong>infrastructure</strong> to accelerate development cycles</div>
  </div>
</div>

<p>Effective machine learning systems are not defined by complexity, but by how well they <strong>align with the structure of the problem</strong> they are designed to solve.</p>`,
            items: [
              { title: 'Python' },
              { title: 'NLP / TF-IDF' },
              { title: 'Cosine Similarity' },
              { title: 'BigQuery' },
              { title: 'Cloud Composer (Airflow)' },
              { title: 'Cloud Functions' },
              { title: 'Streamlit' },
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
            content: `<div class="not-prose mb-4">
  <h3 class="text-xl font-bold text-blue-700 dark:text-blue-400">Remplacer un moteur de recommandation &laquo; bo&icirc;te noire &raquo;</h3>
  <p class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Conception du moteur &laquo; Similarit&eacute; – Alimentaire &raquo; chez Auchan</p>
</div>

<p>Dans le cadre de l&rsquo;effort strat&eacute;gique d&rsquo;Auchan visant &agrave; <strong>internaliser ses capacit&eacute;s avanc&eacute;es en analytics</strong>, j&rsquo;ai pilot&eacute; la conception et l&rsquo;impl&eacute;mentation end-to-end d&rsquo;un moteur de substitution produit pour l&rsquo;e-commerce alimentaire.</p>
<p>L&rsquo;objectif &eacute;tait simple mais strat&eacute;gique : lorsqu&rsquo;un produit est <strong>en rupture</strong> sur la plateforme e-commerce, proposer les substituts les plus pertinents afin de pr&eacute;server le chiffre d&rsquo;affaires et maintenir une exp&eacute;rience client fluide.</p>
<p>Le projet visait &agrave; remplacer une solution externe co&ucirc;teuse et opaque <span class="text-gray-500 dark:text-gray-400">(Target2Sell / Mirakl)</span> par un syst&egrave;me interne, explicable et scalable &mdash; aliment&eacute; enti&egrave;rement par les donn&eacute;es produit d&rsquo;Auchan.</p>

<div class="not-prose my-6 border-l-4 border-amber-500 dark:border-amber-400 pl-4 py-2">
  <p class="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">R&eacute;sultat</p>
  <p class="text-lg font-bold text-gray-900 dark:text-white">+25% de taux d&rsquo;ajout au panier <span class="text-sm font-normal text-gray-500 dark:text-gray-400">vs. solution externe pr&eacute;c&eacute;dente</span></p>
</div>

<div class="not-prose mt-8 mb-4">
  <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2"><svg class="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>Cadrage du probl&egrave;me : la substitution ne se r&eacute;sume pas &agrave; un simple matching</h3>
</div>

<p>En e-commerce alimentaire, les ruptures sont in&eacute;vitables. La vraie question n&rsquo;est pas de savoir <em>si</em> la substitution doit exister, mais <strong>comment elle doit &ecirc;tre faite intelligemment</strong>.</p>
<p>Quand un produit devient indisponible, les clients peuvent abandonner leur panier, quitter la plateforme, choisir un substitut peu pertinent ou perdre confiance dans la marque.</p>
<p>Un moteur simpliste peut matcher la m&ecirc;me cat&eacute;gorie, le poids le plus proche ou la m&ecirc;me marque. En r&eacute;alit&eacute;, le comportement de substitution est <strong>multidimensionnel</strong> :</p>

<div class="not-prose my-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
  <div class="flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-slate-700/60 px-3 py-2 text-sm text-gray-700 dark:text-gray-300"><span class="text-blue-500 dark:text-blue-400 font-bold">&rsaquo;</span> Bio vs non-bio</div>
  <div class="flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-slate-700/60 px-3 py-2 text-sm text-gray-700 dark:text-gray-300"><span class="text-blue-500 dark:text-blue-400 font-bold">&rsaquo;</span> Fid&eacute;lit&eacute; marque variable par cat&eacute;gorie</div>
  <div class="flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-slate-700/60 px-3 py-2 text-sm text-gray-700 dark:text-gray-300"><span class="text-blue-500 dark:text-blue-400 font-bold">&rsaquo;</span> Le poids du produit compte</div>
  <div class="flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-slate-700/60 px-3 py-2 text-sm text-gray-700 dark:text-gray-300"><span class="text-blue-500 dark:text-blue-400 font-bold">&rsaquo;</span> MDD &rarr; strat&eacute;gie de marge</div>
  <div class="flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-slate-700/60 px-3 py-2 text-sm text-gray-700 dark:text-gray-300"><span class="text-blue-500 dark:text-blue-400 font-bold">&rsaquo;</span> Gamme de prix critique</div>
</div>

<p>La solution externe pr&eacute;c&eacute;dente fonctionnait largement comme une <strong>bo&icirc;te noire</strong>. Les &eacute;quipes m&eacute;tier voyaient les r&eacute;sultats sans pouvoir expliquer le raisonnement. Le tuning &eacute;tait limit&eacute;, et le contr&ocirc;le strat&eacute;gique minimal.</p>

<div class="not-prose mt-8 mb-4">
  <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2"><svg class="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>Philosophie d&rsquo;architecture : modulaire, param&eacute;trable, explicable</h3>
</div>

<p>Plut&ocirc;t que de construire un mod&egrave;le monolithique, j&rsquo;ai con&ccedil;u le syst&egrave;me comme un <strong>ensemble de composants de similarit&eacute; ind&eacute;pendants</strong>, inspir&eacute; des architectures de recommandation modulaires.</p>
<p>Principe central : la similarit&eacute; est multidimensionnelle. Chaque dimension doit &ecirc;tre mesur&eacute;e ind&eacute;pendamment puis agr&eacute;g&eacute;e de mani&egrave;re contr&ocirc;l&eacute;e. Cette approche garantit <strong>robustesse</strong>, <strong>interpr&eacute;tabilit&eacute;</strong>, <strong>param&eacute;trage m&eacute;tier</strong> et <strong>scalabilit&eacute;</strong>.</p>
<div class="not-prose my-5">
  <a href="/projects/recommendation-engines/similarity-food/BlueGranite-Out-of-Stock-Whitepaper.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-lg border border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/25 px-4 py-2.5 text-sm font-semibold text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12"></path><path d="m7 10 5 5 5-5"></path><path d="M5 21h14"></path></svg>
    Voir / T&eacute;l&eacute;charger le livre blanc BlueGranite
  </a>
</div>

<div class="not-prose mt-8 mb-4">
  <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2"><svg class="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>Vue d&rsquo;ensemble de l&rsquo;architecture</h3>
</div>

<p>Le moteur suit un framework de <strong>similarit&eacute; content-based</strong> en trois &eacute;tapes :</p>
<ol>
  <li><strong>Feature Engineering</strong></li>
  <li><strong>Calcul ind&eacute;pendant des similarit&eacute;s</strong></li>
  <li><strong>Agr&eacute;gation pond&eacute;r&eacute;e et ranking</strong></li>
</ol>
<figure>
  <img src="/projects/recommendation-engines/similarity-food/assets/image-01.png" alt="Vue d'ensemble de l'architecture Similarit&eacute; Food" loading="lazy" />
  <figcaption>Vue d&rsquo;ensemble de l&rsquo;architecture du moteur Similarit&eacute; – Alimentaire.</figcaption>
</figure>

<div class="not-prose mt-8 mb-4">
  <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2"><svg class="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>Similarit&eacute; de poids normalis&eacute;e par famille</h3>
</div>

<p>La similarit&eacute; sur le poids en alimentaire est <strong>non triviale</strong> : une caisse de boisson de 6kg et un yaourt de 150g ne peuvent pas &ecirc;tre compar&eacute;s sur une &eacute;chelle absolue commune.</p>
<p>Pour y r&eacute;pondre, j&rsquo;ai <strong>standardis&eacute; le poids &agrave; l&rsquo;int&eacute;rieur de chaque famille produit</strong>, calcul&eacute; une distance normalis&eacute;e puis converti cette distance en similarit&eacute;. Le poids devient ainsi contextuel et les comparaisons restent coh&eacute;rentes.</p>

<div class="not-prose mt-8 mb-4">
  <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2"><svg class="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>Agr&eacute;gation pond&eacute;r&eacute;e : transformer un mod&egrave;le en levier m&eacute;tier</h3>
</div>

<p>Chaque composant produit un score normalis&eacute; entre 0 et 1. Le score final est :</p>

<div class="not-prose my-8 flex flex-col items-center">
  <div class="w-full rounded-lg bg-gray-50 dark:bg-slate-800/50 py-6 px-8 text-center">
    <p class="text-lg md:text-xl italic text-gray-800 dark:text-gray-100" style="font-family: 'Times New Roman', 'Georgia', 'CMU Serif', serif; letter-spacing: 0.02em;">Score final = <var>w</var><sub>1</sub> &middot; Label + <var>w</var><sub>2</sub> &middot; Attributes + <var>w</var><sub>3</sub> &middot; Weight</p>
    <p class="mt-3 text-sm text-gray-500 dark:text-gray-400" style="font-family: 'Times New Roman', 'Georgia', serif;">O&ugrave; : &ensp; <var>w</var><sub>1</sub> + <var>w</var><sub>2</sub> + <var>w</var><sub>3</sub> = 1</p>
  </div>
</div>

<div class="not-prose float-right ml-5 mb-4 w-56 md:w-64 lg:w-72">
  <figure class="m-0">
    <img src="/projects/recommendation-engines/similarity-food/assets/image-02.png" alt="Sch&eacute;ma de r&eacute;f&eacute;rence pour l'agr&eacute;gation pond&eacute;r&eacute;e" class="rounded-xl border border-gray-200 dark:border-gray-700 w-full" loading="lazy" />
    <figcaption class="text-xs text-center text-gray-500 dark:text-gray-400 mt-1.5">Sch&eacute;ma de r&eacute;f&eacute;rence &mdash; agr&eacute;gation pond&eacute;r&eacute;e.</figcaption>
  </figure>
</div>

<p>L&rsquo;introduction de poids explicites transforme l&rsquo;algorithme statique en <strong>syst&egrave;me ajustable par le m&eacute;tier</strong>.</p>

<div class="not-prose my-3 space-y-1.5">
  <div class="flex items-center gap-2 text-sm"><span class="text-blue-600 dark:text-blue-400">&rarr;</span> Augmenter <strong class="text-gray-900 dark:text-gray-100">poids Bio</strong> <span class="text-gray-500 dark:text-gray-400">&rarr; prioriser les substituts bio</span></div>
  <div class="flex items-center gap-2 text-sm"><span class="text-blue-600 dark:text-blue-400">&rarr;</span> Augmenter <strong class="text-gray-900 dark:text-gray-100">poids Marque</strong> <span class="text-gray-500 dark:text-gray-400">&rarr; pr&eacute;server la fid&eacute;lit&eacute; marque</span></div>
  <div class="flex items-center gap-2 text-sm"><span class="text-blue-600 dark:text-blue-400">&rarr;</span> Augmenter <strong class="text-gray-900 dark:text-gray-100">poids Poids</strong> <span class="text-gray-500 dark:text-gray-400">&rarr; renforcer la coh&eacute;rence de format</span></div>
  <div class="flex items-center gap-2 text-sm"><span class="text-blue-600 dark:text-blue-400">&rarr;</span> Augmenter <strong class="text-gray-900 dark:text-gray-100">influence MDD</strong> <span class="text-gray-500 dark:text-gray-400">&rarr; soutenir l&rsquo;optimisation de marge</span></div>
</div>

<p>Au lieu d&rsquo;encoder des r&egrave;gles rigides, le syst&egrave;me expose des <strong>param&egrave;tres contr&ocirc;lables</strong>. C&rsquo;&eacute;tait un diff&eacute;renciateur majeur face &agrave; la solution fournisseur pr&eacute;c&eacute;dente.</p>

<div style="clear: both;"></div>

<div class="not-prose mt-8 mb-4">
  <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2"><svg class="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>Scalabilit&eacute; et optimisation du calcul</h3>
</div>

<p>Avec plus de <strong>45 000 SKU alimentaires</strong>, calculer na&iuml;vement des matrices de similarit&eacute; compl&egrave;tes aurait cr&eacute;&eacute; un surco&ucirc;t computationnel inutile. J&rsquo;ai introduit une contrainte : la similarit&eacute; est calcul&eacute;e <strong>strictement au sein des familles produit</strong>, sans comparaisons inter-familles.</p>
<p>Cela a r&eacute;duit la complexit&eacute;, am&eacute;lior&eacute; la pertinence, acc&eacute;l&eacute;r&eacute; les calculs et simplifi&eacute; la maintenance. Les choix d&rsquo;optimisation ont &eacute;t&eacute; guid&eacute;s &agrave; la fois par l&rsquo;efficacit&eacute; engineering et la logique m&eacute;tier.</p>

<div class="not-prose mt-8 mb-4">
  <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2"><svg class="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>Explicabilit&eacute; et adoption m&eacute;tier</h3>
</div>

<p>Un objectif strat&eacute;gique cl&eacute; &eacute;tait de restaurer la confiance et la visibilit&eacute; sur le comportement de recommandation. Pour cela, j&rsquo;ai d&eacute;velopp&eacute; une <strong>interface Streamlit interne</strong> permettant aux utilisateurs m&eacute;tier de rechercher un produit, voir les substituts class&eacute;s, ajuster les poids en dynamique et comprendre la contribution de chaque composant.</p>
<p>Le moteur est ainsi pass&eacute; d&rsquo;un syst&egrave;me per&ccedil;u comme opaque &agrave; un <strong>moteur de d&eacute;cision transparent</strong>. L&rsquo;explicabilit&eacute; a acc&eacute;l&eacute;r&eacute; l&rsquo;adoption.</p>

<div class="not-prose mt-8 mb-4">
  <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2"><svg class="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>Benchmark de performance</h3>
</div>

<p>Le moteur a &eacute;t&eacute; benchmark&eacute; face &agrave; la solution externe Target2Sell/Mirakl.</p>

<div class="not-prose my-5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 p-5">
  <div class="flex items-center gap-3">
    <span class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-800/40 flex items-center justify-center text-lg">🏆</span>
    <div>
      <p class="text-xs font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wider mb-0.5">R&eacute;sultat du benchmark</p>
      <p class="text-lg font-bold text-blue-800 dark:text-blue-300">+25% de taux d&rsquo;ajout au panier</p>
    </div>
  </div>
</div>

<p>Ce r&eacute;sultat valide trois hypoth&egrave;ses : les <strong>donn&eacute;es internes orient&eacute;es domaine</strong> peuvent surpasser des syst&egrave;mes fournisseurs g&eacute;n&eacute;riques, les <strong>architectures transparentes</strong> am&eacute;liorent l&rsquo;alignement m&eacute;tier, et une <strong>simplicit&eacute; bien structur&eacute;e</strong> peut d&eacute;passer une complexit&eacute; opaque.</p>

<div class="not-prose mt-8 mb-4">
  <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2"><svg class="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>Impact strat&eacute;gique</h3>
</div>

<div class="not-prose my-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
  <div class="flex items-center gap-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 p-3"><span class="text-blue-500 dark:text-blue-400">&#10003;</span><span class="text-sm font-medium text-gray-800 dark:text-gray-200">Moins de d&eacute;pendance fournisseur</span></div>
  <div class="flex items-center gap-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 p-3"><span class="text-blue-500 dark:text-blue-400">&#10003;</span><span class="text-sm font-medium text-gray-800 dark:text-gray-200">Co&ucirc;ts op&eacute;rationnels r&eacute;duits</span></div>
  <div class="flex items-center gap-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 p-3"><span class="text-blue-500 dark:text-blue-400">&#10003;</span><span class="text-sm font-medium text-gray-800 dark:text-gray-200">Pleine ma&icirc;trise algorithmique</span></div>
  <div class="flex items-center gap-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 p-3"><span class="text-blue-500 dark:text-blue-400">&#10003;</span><span class="text-sm font-medium text-gray-800 dark:text-gray-200">It&eacute;rations plus rapides</span></div>
  <div class="flex items-center gap-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 p-3"><span class="text-blue-500 dark:text-blue-400">&#10003;</span><span class="text-sm font-medium text-gray-800 dark:text-gray-200">Confiance inter-&eacute;quipes</span></div>
</div>

<p>Le syst&egrave;me reste modulaire et extensible, avec des pistes d&rsquo;&eacute;volution comme la personnalisation client, la pond&eacute;ration par segment, l&rsquo;adaptation pilot&eacute;e par feedback et l&rsquo;optimisation par A/B testing.</p>

<div class="not-prose mt-8 mb-4">
  <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2"><svg class="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>Retour d&rsquo;exp&eacute;rience</h3>
</div>

<div class="not-prose my-4 rounded-xl bg-gray-50 dark:bg-slate-800/40 border border-gray-200 dark:border-gray-700 p-5">
  <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">Ce projet a renforc&eacute; plusieurs principes qui structurent aujourd&rsquo;hui ma pratique :</p>
  <div class="space-y-2">
    <div class="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200"><span class="text-blue-500">&#9670;</span> Concevoir des <strong>syst&egrave;mes</strong>, pas seulement des mod&egrave;les</div>
    <div class="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200"><span class="text-blue-500">&#9670;</span> Privil&eacute;gier les <strong>architectures modulaires</strong></div>
    <div class="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200"><span class="text-blue-500">&#9670;</span> Rendre les algorithmes <strong>param&eacute;trables</strong></div>
    <div class="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200"><span class="text-blue-500">&#9670;</span> Optimiser l&rsquo;<strong>explicabilit&eacute;</strong> autant que la performance</div>
    <div class="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200"><span class="text-blue-500">&#9670;</span> Aligner la structure math&eacute;matique sur la <strong>strat&eacute;gie business</strong></div>
  </div>
</div>

<p>Le moteur &laquo; Similarit&eacute; – Alimentaire &raquo; montre que remplacer une solution bo&icirc;te noire ne n&eacute;cessite pas une complexit&eacute; extr&ecirc;me, mais une <strong>mod&eacute;lisation rigoureuse</strong>, une <strong>architecture claire</strong> et un <strong>alignement disciplin&eacute;</strong> entre design technique et objectifs m&eacute;tier.</p>`,
            items: [
              { title: 'Python' },
              { title: 'NLP / TF-IDF' },
              { title: 'Similarité Cosinus' },
              { title: 'BigQuery' },
              { title: 'Cloud Composer (Airflow)' },
              { title: 'Cloud Functions' },
              { title: 'Streamlit' },
            ],
          },
          {
            id: 'similarity-nonfood',
            title: 'Similarit\u00e9 - Non Alimentaire',
            tagline: 'NLP \u00b7 Similarit\u00e9 S\u00e9mantique',
            icon: 'tabler:device-laptop',
            content: `<div class="not-prose mb-4">
  <h3 class="text-xl font-bold text-blue-700 dark:text-blue-400">Adapter la similarit&eacute; aux donn&eacute;es pauvres</h3>
  <p class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Conception du moteur &laquo; Similarit&eacute; &ndash; Non Alimentaire &raquo; chez Auchan</p>
</div>

<div class="not-prose mb-6 rounded-lg bg-blue-50/60 dark:bg-blue-900/15 border border-blue-100 dark:border-blue-800/50 px-4 py-3">
  <p class="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
    <svg class="w-4 h-4 mt-0.5 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
    <span>Cet article s&rsquo;appuie sur les principes &eacute;tablis dans le moteur <a href="#similarity-food" class="font-semibold text-blue-600 dark:text-blue-400 hover:underline">Similarit&eacute; &ndash; Alimentaire</a>. Il est recommand&eacute; de lire cet article au pr&eacute;alable pour disposer du contexte architectural complet.</span>
  </p>
</div>

<p>Apr&egrave;s le d&eacute;ploiement r&eacute;ussi du moteur de substitution Similarit&eacute; &ndash; Alimentaire, le d&eacute;fi suivant consistait &agrave; &eacute;tendre l&rsquo;approche aux <strong>produits non alimentaires</strong> de la plateforme e-commerce Auchan.</p>
<p>&Agrave; premi&egrave;re vue, le probl&egrave;me semble identique : lorsqu&rsquo;un produit est indisponible, proposer des alternatives pertinentes pour pr&eacute;server l&rsquo;exp&eacute;rience client et r&eacute;duire l&rsquo;abandon de panier.</p>
<p>Cependant, les produits non alimentaires pr&eacute;sentent un <strong>paysage de mod&eacute;lisation fondamentalement diff&eacute;rent</strong>. L&agrave; o&ugrave; les produits alimentaires disposent d&rsquo;attributs riches (ingr&eacute;dients, labels bio, donn&eacute;es nutritionnelles, normalisation du poids, etc.), les produits non alimentaires offrent des attributs structur&eacute;s bien moins nombreux.</p>
<p>L&rsquo;enjeu n&rsquo;&eacute;tait pas de r&eacute;pliquer l&rsquo;algorithme alimentaire &mdash; mais d&rsquo;<strong>adapter l&rsquo;architecture</strong> &agrave; un environnement de donn&eacute;es plus simple tout en maintenant la qualit&eacute; des recommandations.</p>

<div class="not-prose mt-8 mb-4">
  <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2"><svg class="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>Recadrage du probl&egrave;me</h3>
</div>

<p>Le comportement de substitution en non alimentaire est intrins&egrave;quement plus simple qu&rsquo;en alimentaire :</p>

<div class="not-prose my-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
  <div class="flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-slate-700/60 px-3 py-2 text-sm text-gray-700 dark:text-gray-300"><span class="text-blue-500 dark:text-blue-400 font-bold">&rsaquo;</span> Les attributs de type ingr&eacute;dient sont non pertinents</div>
  <div class="flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-slate-700/60 px-3 py-2 text-sm text-gray-700 dark:text-gray-300"><span class="text-blue-500 dark:text-blue-400 font-bold">&rsaquo;</span> Les comparaisons nutritionnelles ne s&rsquo;appliquent pas</div>
  <div class="flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-slate-700/60 px-3 py-2 text-sm text-gray-700 dark:text-gray-300"><span class="text-blue-500 dark:text-blue-400 font-bold">&rsaquo;</span> La similarit&eacute; de poids est rarement significative</div>
  <div class="flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-slate-700/60 px-3 py-2 text-sm text-gray-700 dark:text-gray-300"><span class="text-blue-500 dark:text-blue-400 font-bold">&rsaquo;</span> Le libell&eacute; produit devient le signal principal</div>
</div>

<p>Les d&eacute;cisions de substitution en non alimentaire sont principalement guid&eacute;es par la <strong>description produit et le sens s&eacute;mantique</strong>. Loin d&rsquo;&ecirc;tre un handicap, l&rsquo;espace d&rsquo;attributs limit&eacute; simplifie en r&eacute;alit&eacute; la strat&eacute;gie de mod&eacute;lisation. Avec moins de signaux concurrents, l&rsquo;effort se focalise sur l&rsquo;extraction maximale d&rsquo;information &agrave; partir des descriptions produit.</p>

<div class="not-prose mt-8 mb-4">
  <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2"><svg class="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>Philosophie d&rsquo;architecture : simplicit&eacute; et pr&eacute;cision</h3>
</div>

<p>Le principe directeur du moteur non alimentaire est clair :</p>

<div class="not-prose my-6 border-l-4 border-blue-500 dark:border-blue-400 pl-4 py-2">
  <p class="text-base font-medium text-gray-800 dark:text-gray-100 italic">Lorsque l&rsquo;espace de signal est limit&eacute;, concentrer l&rsquo;effort sur l&rsquo;extraction maximale de valeur du signal le plus fort.</p>
</div>

<p>Dans ce cas, le signal le plus fort est le <strong>libell&eacute; produit</strong>.</p>
<p>Plut&ocirc;t que de construire plusieurs mod&egrave;les de similarit&eacute; fond&eacute;s sur les attributs comme pour l&rsquo;alimentaire, l&rsquo;algorithme non alimentaire se concentre exclusivement sur la <strong>similarit&eacute; s&eacute;mantique entre libell&eacute;s produit</strong>.</p>
<p>Pour am&eacute;liorer la robustesse et capter diff&eacute;rentes structures linguistiques, le syst&egrave;me calcule la similarit&eacute; &agrave; l&rsquo;aide de <strong>deux m&eacute;thodes s&eacute;mantiques compl&eacute;mentaires</strong> appliqu&eacute;es au libell&eacute; produit.</p>

<div class="not-prose mt-8 mb-4">
  <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2"><svg class="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>Double mod&eacute;lisation s&eacute;mantique</h3>
</div>

<p>Le libell&eacute; produit &eacute;tant la source d&rsquo;information principale, l&rsquo;algorithme exploite <strong>deux approches distinctes de similarit&eacute; s&eacute;mantique</strong> pour analyser les descriptions sous des angles compl&eacute;mentaires.</p>
<p>Chaque mod&egrave;le traite le libell&eacute; diff&eacute;remment et produit un score de similarit&eacute; ind&eacute;pendant. L&rsquo;un se focalise sur les <strong>patterns de similarit&eacute; lexicale</strong>, l&rsquo;autre capture des <strong>relations s&eacute;mantiques plus larges</strong> entre les mots.</p>
<p>En combinant deux calculs de similarit&eacute; distincts, le syst&egrave;me gagne en robustesse face aux variations de formulation, de phras&eacute; et de conventions de nommage fr&eacute;quentes dans les catalogues de grande distribution.</p>
<p>Cette approche garantit que l&rsquo;algorithme capte &agrave; la fois la <strong>similarit&eacute; de surface</strong> et les <strong>relations s&eacute;mantiques profondes</strong> entre produits, m&ecirc;me lorsque les descriptions ne sont pas identiques.</p>

<div class="not-prose mt-8 mb-4">
  <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2"><svg class="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>Agr&eacute;gation pond&eacute;r&eacute;e</h3>
</div>

<p>Chaque mod&egrave;le de similarit&eacute; produit un score normalis&eacute; entre 0 et 1. Le score final est calcul&eacute; par agr&eacute;gation pond&eacute;r&eacute;e :</p>

<div class="not-prose my-8 flex flex-col items-center">
  <div class="w-full rounded-lg bg-gray-50 dark:bg-slate-800/50 py-6 px-8 text-center">
    <p class="text-lg md:text-xl italic text-gray-800 dark:text-gray-100" style="font-family: 'Times New Roman', 'Georgia', 'CMU Serif', serif; letter-spacing: 0.02em;">Score final = <var>w</var><sub>1</sub> &middot; Similarit&eacute;<sub>Mod&egrave;le&thinsp;1</sub> + <var>w</var><sub>2</sub> &middot; Similarit&eacute;<sub>Mod&egrave;le&thinsp;2</sub></p>
    <p class="mt-3 text-sm text-gray-500 dark:text-gray-400" style="font-family: 'Times New Roman', 'Georgia', serif;">O&ugrave; : &ensp; <var>w</var><sub>1</sub> + <var>w</var><sub>2</sub> = 1</p>
  </div>
</div>

<p>Ce mod&egrave;le conserve les m&ecirc;mes avantages architecturaux introduits dans le moteur alimentaire :</p>

<div class="not-prose my-3 space-y-1.5">
  <div class="flex items-center gap-2 text-sm"><span class="text-blue-600 dark:text-blue-400">&rarr;</span> <strong class="text-gray-900 dark:text-gray-100">Scoring transparent</strong> <span class="text-gray-500 dark:text-gray-400">&rarr; r&eacute;sultats pleinement explicables</span></div>
  <div class="flex items-center gap-2 text-sm"><span class="text-blue-600 dark:text-blue-400">&rarr;</span> <strong class="text-gray-900 dark:text-gray-100">Recommandations explicables</strong> <span class="text-gray-500 dark:text-gray-400">&rarr; confiance des &eacute;quipes m&eacute;tier</span></div>
  <div class="flex items-center gap-2 text-sm"><span class="text-blue-600 dark:text-blue-400">&rarr;</span> <strong class="text-gray-900 dark:text-gray-100">Pond&eacute;ration ajustable</strong> <span class="text-gray-500 dark:text-gray-400">&rarr; param&eacute;trable par le m&eacute;tier</span></div>
</div>

<p>Bien que plus simple que le moteur alimentaire, la structure pond&eacute;r&eacute;e offre toujours <strong>flexibilit&eacute; et interpr&eacute;tabilit&eacute;</strong>.</p>

<div class="not-prose mt-8 mb-4">
  <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2"><svg class="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>Passage &agrave; l&rsquo;&eacute;chelle</h3>
</div>

<p>L&rsquo;algorithme se concentrant principalement sur les libell&eacute;s produit, l&rsquo;empreinte computationnelle est <strong>nettement plus l&eacute;g&egrave;re</strong> que celle du moteur alimentaire. Cela permet au syst&egrave;me de :</p>

<div class="not-prose my-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
  <div class="flex items-center gap-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 p-3"><span class="text-blue-500 dark:text-blue-400">&#10003;</span><span class="text-sm font-medium text-gray-800 dark:text-gray-200">Calcul rapide sur de larges catalogues</span></div>
  <div class="flex items-center gap-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 p-3"><span class="text-blue-500 dark:text-blue-400">&#10003;</span><span class="text-sm font-medium text-gray-800 dark:text-gray-200">Faible complexit&eacute; op&eacute;rationnelle</span></div>
  <div class="flex items-center gap-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 p-3"><span class="text-blue-500 dark:text-blue-400">&#10003;</span><span class="text-sm font-medium text-gray-800 dark:text-gray-200">Scalabilit&eacute; efficace multi-cat&eacute;gories</span></div>
</div>

<p>La conception privil&eacute;gie d&eacute;lib&eacute;r&eacute;ment la <strong>rapidit&eacute;, la maintenabilit&eacute; et la robustesse</strong>.</p>

<div class="not-prose mt-8 mb-4">
  <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2"><svg class="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>Du mod&egrave;le au d&eacute;ploiement</h3>
</div>

<p>L&rsquo;un des avantages majeurs de ce projet &eacute;tait la capacit&eacute; &agrave; <strong>r&eacute;utiliser l&rsquo;infrastructure</strong> mise en place lors du d&eacute;veloppement du moteur alimentaire.</p>
<p>Le projet pr&eacute;c&eacute;dent avait d&eacute;j&agrave; &eacute;tabli :</p>

<div class="not-prose my-4 grid grid-cols-2 gap-2">
  <div class="flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-slate-700/60 px-3 py-2 text-sm text-gray-700 dark:text-gray-300"><span class="text-blue-500 dark:text-blue-400 font-bold">&rsaquo;</span> Pipelines de calcul de similarit&eacute;</div>
  <div class="flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-slate-700/60 px-3 py-2 text-sm text-gray-700 dark:text-gray-300"><span class="text-blue-500 dark:text-blue-400 font-bold">&rsaquo;</span> Frameworks d&rsquo;&eacute;valuation</div>
  <div class="flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-slate-700/60 px-3 py-2 text-sm text-gray-700 dark:text-gray-300"><span class="text-blue-500 dark:text-blue-400 font-bold">&rsaquo;</span> Outils de test internes</div>
  <div class="flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-slate-700/60 px-3 py-2 text-sm text-gray-700 dark:text-gray-300"><span class="text-blue-500 dark:text-blue-400 font-bold">&rsaquo;</span> Workflows de d&eacute;ploiement</div>
</div>

<p>Le moteur non alimentaire est ainsi pass&eacute; de la conception au d&eacute;ploiement <strong>nettement plus rapidement</strong>.</p>

<div class="not-prose my-6 border-l-4 border-amber-500 dark:border-amber-400 pl-4 py-2">
  <p class="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">Principe cl&eacute;</p>
  <p class="text-base font-medium text-gray-800 dark:text-gray-100">Des syst&egrave;mes bien con&ccedil;us acc&eacute;l&egrave;rent l&rsquo;innovation future.</p>
</div>

<p>En capitalisant sur l&rsquo;architecture existante, le moteur de substitution non alimentaire a &eacute;t&eacute; impl&eacute;ment&eacute; et d&eacute;ploy&eacute; avec un <strong>surco&ucirc;t op&eacute;rationnel minimal</strong>.</p>

<div class="not-prose mt-8 mb-4">
  <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2"><svg class="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>Enseignements cl&eacute;s</h3>
</div>

<div class="not-prose my-4 rounded-xl bg-gray-50 dark:bg-slate-800/40 border border-gray-200 dark:border-gray-700 p-5">
  <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">Bien que techniquement plus simple que le moteur alimentaire, l&rsquo;algorithme Similarit&eacute; &ndash; Non Alimentaire met en lumi&egrave;re plusieurs principes d&rsquo;une pratique efficace en data science :</p>
  <div class="space-y-2">
    <div class="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200"><span class="text-blue-500">&#9670;</span> Adapter la <strong>complexit&eacute; du mod&egrave;le</strong> aux donn&eacute;es disponibles</div>
    <div class="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200"><span class="text-blue-500">&#9670;</span> Prioriser le <strong>signal le plus fort</strong> plut&ocirc;t que multiplier les features</div>
    <div class="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200"><span class="text-blue-500">&#9670;</span> Combiner des <strong>techniques de similarit&eacute; compl&eacute;mentaires</strong> pour la robustesse</div>
    <div class="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200"><span class="text-blue-500">&#9670;</span> R&eacute;utiliser l&rsquo;<strong>infrastructure</strong> pour acc&eacute;l&eacute;rer les cycles de d&eacute;veloppement</div>
  </div>
</div>

<p>Un syst&egrave;me de machine learning efficace ne se d&eacute;finit pas par sa complexit&eacute;, mais par la qualit&eacute; de son <strong>alignement avec la structure du probl&egrave;me</strong> qu&rsquo;il vise &agrave; r&eacute;soudre.</p>`,
            items: [
              { title: 'Python' },
              { title: 'NLP / TF-IDF' },
              { title: 'Similarit\u00e9 Cosinus' },
              { title: 'BigQuery' },
              { title: 'Cloud Composer (Airflow)' },
              { title: 'Cloud Functions' },
              { title: 'Streamlit' },
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
