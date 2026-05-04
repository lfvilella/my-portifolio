import { Github, Linkedin, Mail, Code2, Database, Layout, Server } from 'lucide-react';

export const portfolioData = {
  name: 'Luis Felipe Fabro Vilella',
  role: 'Senior Software Engineer',
  email: 'vilella.luisfelipe@gmail.com',
  location: 'São Paulo, Brazil',
  socials: [
    { name: 'GitHub', url: 'https://github.com/lfvilella', icon: Github },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/lfvilella', icon: Linkedin },
    { name: 'Email', url: 'mailto:vilella.luisfelipe@gmail.com', icon: Mail },
  ],
  about: {
    title: 'Engineering Resilience for Distributed Systems',
    story:
      'Senior Backend / Systems Engineer with a deep focus on distributed infrastructure and technical ownership. I specialize in decomposing high-stakes monolithic systems, optimizing mission-critical data pipelines, and architecting resilient microservices that scale. My approach combines engineering precision with a product-driven mindset to transform complex business challenges into reliable, high-performance systems.',
  },
  skills: [
    {
      category: 'Backend & Systems',
      icon: Server,
      items: ['Python', 'FastAPI', 'Flask', 'SQLAlchemy', 'RabbitMQ', 'Celery', 'Redis', 'PostgreSQL'],
    },
    {
      category: 'Frontend & Mobile',
      icon: Layout,
      items: ['React', 'Vue.js', 'React Native', 'TypeScript', 'TanStack Query', 'Tailwind CSS'],
    },
    {
      category: 'Data & DevOps',
      icon: Database,
      items: ['Docker', 'AWS', 'TimescaleDB', 'ELK Stack', 'Alembic', 'Pydantic', 'Selenium'],
    },
    {
      category: 'Methodology',
      icon: Code2,
      items: ['Microservices', 'API Design', 'Distributed Systems', 'Performance Tuning', 'E2E Testing'],
    },
  ],
  projects: [
    {
      title: 'Microservices Migration',
      tagline: 'High-Stakes Monolith Decomposition',
      description:
        'Led the architectural transition of a mission-critical legacy monolith to a domain-driven microservices architecture. This was a high-complexity migration focused on increasing deployment velocity and enabling independent horizontal scaling for high-traffic components.',
      tech: ['FastAPI', 'RabbitMQ', 'Redis', 'Docker', 'Pydantic'],
      problem:
        'The legacy monolithic core created a single point of failure and bottlenecked deployment frequency to once per week, hindering team autonomy and feature delivery.',
      solution:
        'Designed and executed a phased decomposition strategy using FastAPI for service modularity and AMQP for resilient inter-service communication.',
      impact:
        "Decoupled 15+ domains, reduced deployment lead time by 80%, and eliminated the 'deployment bottleneck' across the engineering organization.",
      github: 'https://github.com/lfvilella',
      live: 'https://lfvilella.com',
      color: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      title: 'Distributed Messaging Systems',
      tagline: 'Resilient Real-time Communication Architecture',
      description:
        'Engineered a high-throughput distributed messaging layer using RPC, AMQP, and persistent queues to handle asynchronous domain events across a distributed microservices ecosystem.',
      tech: ['AMQP', 'RabbitMQ', 'RPC', 'Python', 'Redis'],
      problem:
        'Inconsistent data synchronization and high latency in inter-service communication led to frequent reliability issues during peak processing loads.',
      solution:
        'Implemented a robust messaging patterns including transactional outbox and exponential backoff retries to ensure system-wide eventual consistency.',
      impact:
        'Achieved 99.9% message durability across the cluster and reduced inter-service latency by 45% through optimized RPC patterns.',
      github: 'https://github.com/lfvilella',
      live: 'https://lfvilella.com',
      color: 'from-purple-500/20 to-pink-500/20',
    },
    {
      title: 'Enterprise Safety Platform',
      tagline: 'Product-Minded Engineering & Ownership',
      description:
        'Full-cycle ownership of safety-critical features for a construction compliance platform, integrating complex business logic into a high-performance system.',
      tech: ['Python', 'Flask', 'Vue.js', 'React Native', 'PostgreSQL'],
      problem:
        'Safety compliance data (NFC check-ins, job hazard logs) lacked verification, creating legal liabilities and unreliable audit trails.',
      solution:
        'Architected a secure geolocation and NFC-verified clock-in system paired with a heavy-duty inspection engine and automated risk analysis reporting.',
      impact:
        'Delivered a end-to-end verifiable audit trail used by top-tier construction firms, directly reducing insurance risks for enterprise clients.',
      github: 'https://github.com/lfvilella',
      live: 'https://lfvilella.com',
      color: 'from-emerald-500/20 to-teal-500/20',
    },
  ],
  experience: [
    {
      company: 'SafetyClerk',
      role: 'Senior Software Engineer',
      period: '2024 — Present',
      achievements: [
        'Optimized a mission-critical PDF rendering pipeline, resolving chronic memory-related overflows and reducing document generation time by 75%.',
        'Pioneered a robust end-to-end testing strategy using Playwright and snapshot testing, increasing system reliability and developer confidence for core safety modules.',
        'Led the end-to-end architecture and implementation of third-party enterprise integrations, creating a standardized partner onboarding framework.',
        'Engineered several high-impact product features including Job Hazard Analysis (JHA) modules and geolocation-verified NFC workforce management systems.',
        'Mentored the team on modern frontend patterns and testing maturity, moving the organization toward a quality-first engineering culture.',
      ],
    },
    {
      company: 'Trill Solutions',
      role: 'Senior Software Engineer',
      period: '2021 — 2024',
      achievements: [
        'Architected the monolith-to-microservices migration using FastAPI, RabbitMQ, and Redis, enabling horizontal scalability and independent deployment cycles.',
        'Designed and implemented an internal Python framework to standardize microservice initialization, cutting service bootstrap time by 70%.',
        'Engineered highly performant time-series data storage using TimescaleDB, optimizing telemetry ingestion for IoT and drone pathing data.',
        'Developed a distributed drone flight planning engine, integrating real-time mathematical pathing algorithms with scalable backend APIs.',
        'Enforced rigorous code review and system design standards across distributed teams, significantly reducing technical debt and production incidents.',
      ],
    },
    {
      company: 'Valora',
      role: 'Software Engineer',
      period: '2020 — 2021',
      achievements: [
        'Developed and scaled complex data extraction RPA bots using Selenium and Django, processing thousands of regulatory documents monthly.',
        'Implemented a comprehensive ELK (Elasticsearch, Logstash, Kibana) observability stack on AWS to monitor distributed cron jobs and Celery workers.',
        'Integrated multiple external financial APIs, implementing resilient retry mechanisms and strict data validation layers for asynchronous workflows.',
      ],
    },
  ],
};
