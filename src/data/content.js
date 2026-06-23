// ─────────────────────────────────────────────────────────────
//  EDIT EVERYTHING ABOUT YOU IN THIS FILE.
//  Swap the name, links, and copy below, the UI updates itself.
//
//  TODO before sharing: add your real GitHub / LinkedIn URLs below,
//  and drop real numbers into the project impact lines where you can.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Saim Tahir',
  firstName: 'Saim',
  role: 'Full-Stack Developer · MERN',
  tagline: 'I turn product ideas into scalable, production-ready software',
  location: 'Remote · GMT+5',
  yearsExperience: 3,
  email: 'saimtahir.910@gmail.com',
  // Business-focused intro, written like a developer who has shipped for real clients.
  intro: `I build and ship full-stack web applications that hold up in production,
  the kind real users depend on every day. Over the last few years I've taken
  products from an empty repo to live platforms with real users: a US ride-hailing
  service, an AI tool for music artists, and real-time mapping. I work the full
  MERN stack end to end, and I care about the things that decide whether a product
  survives. That means performance under load, clean data models, and code the next
  engineer can actually read.`,
  socials: {
    github: 'https://github.com/', // add your real GitHub URL
    linkedin: 'https://linkedin.com/in/', // add your real LinkedIn URL
    twitter: 'https://twitter.com/',
  },
  // Quick, honest signals shown in the hero.
  stats: [
    { value: '3+', label: 'Years in production' },
    { value: '5', label: 'Products shipped' },
    { value: 'MERN', label: 'Full-stack, end to end' },
  ],
}

export const skills = [
  {
    group: 'Frontend',
    note: 'Interfaces that stay fast as the product grows.',
    items: ['React', 'Next.js', 'TypeScript', 'Redux', 'Material UI', 'Tailwind', 'PWA'],
  },
  {
    group: 'Backend',
    note: 'APIs and services built to handle real traffic.',
    items: ['Node.js', 'Express', 'NestJS', 'REST', 'WebSockets', 'JWT Auth'],
  },
  {
    group: 'Databases',
    note: 'Data modelled to scale, indexed to stay quick.',
    items: ['MongoDB', 'PostgreSQL', 'Mongoose', 'Prisma', 'Redis'],
  },
  {
    group: 'Cloud & DevOps',
    note: 'Shipping reliably and keeping it live.',
    items: ['AWS', 'DigitalOcean', 'Docker', 'CI/CD', 'GitHub Actions', 'Nginx'],
  },
]

// Each project shows a clean branded placeholder by default.
// To use a real screenshot, drop a file in /public/screenshots and set its
// `image` to e.g. '/screenshots/hireboard.png'.
export const projects = [
  {
    id: 'myserviceapp',
    name: 'MyServiceApp',
    year: '2024',
    url: 'https://myserviceapp.biz',
    kind: 'Ride-hailing platform · US market',
    image: '',
    blurb:
      'A US-based ride-hailing platform that connects riders with drivers for private, pre-booked trips. It is an Uber-style experience delivered as an installable PWA, so riders get a native feel with zero app-store friction and a lower cost to acquire. I owned both the rider and driver products end to end, from real-time trip matching to the screens drivers use to track earnings and promotions.',
    contribution: [
      'Built the rider and driver apps end to end as a single Next.js PWA codebase',
      'Engineered real-time trip status and live location over WebSockets',
      'Designed the driver earnings, payouts and promotions flows to drive retention',
      'Modelled trip and user data in MongoDB behind clean Node and Nest services',
    ],
    stack: ['Next.js', 'PWA', 'Node.js', 'NestJS', 'MongoDB', 'WebSockets'],
    accent: '#ff6f5b',
  },
  {
    id: 'hireboard',
    name: 'Hireboard',
    year: '2024',
    url: 'https://hireboard.co',
    kind: 'Hiring & talent assessment platform',
    image: '',
    blurb:
      'A LinkedIn-style hiring platform where recruiters find talent and candidates prove their skills through assessments. When a candidate passes, recruiters can take them straight to selection. I built the Node.js backend that runs the whole thing, including the heavier pieces: scheduling interviews through a third-party meeting API, handling payments, and the assessment scoring that gates who gets hired.',
    contribution: [
      'Built the Node.js backend powering the recruiter and candidate flows',
      'Integrated a third-party meeting API for scheduling and running interviews',
      'Implemented payment methods and billing for hiring plans',
      'Built the assessment and scoring pipeline that decides candidate selection',
    ],
    stack: ['Node.js', 'Express', 'MongoDB', 'Payments', 'Meeting API', 'JWT Auth'],
    accent: '#6ea8fe',
  },
  {
    id: 'loopdsp',
    name: 'LoopDSP',
    year: '2024',
    url: 'https://loopdsp.com',
    kind: 'AI platform for music artists',
    image: '',
    blurb:
      'A platform that gives independent artists the support of a full management team through AI. Its agents book meetings, schedule concerts, and help arrange management, automating the admin work that usually eats an artist’s time. I built distinct, task-specific workflows so each agent does one job well, plus the dashboard artists run their day from.',
    contribution: [
      'Integrated AI agents into separate, purpose-built workflows for booking, scheduling and management',
      'Built the artist dashboard and scheduling experience in React and MUI',
      'Wrote the backend orchestration that turns agent output into real bookings',
      'Kept responses fast and grounded so the product stays trustworthy',
    ],
    stack: ['Next.js', 'AI Agents', 'Node.js', 'PostgreSQL', 'Material UI'],
    accent: '#8fe3c8',
  },
  {
    id: 'fribe-map',
    name: 'Fribe Map',
    year: '2023',
    url: 'https://map.fribe.io',
    kind: 'Real-time mapping & navigation',
    image: '',
    blurb:
      'A self-hosted mapping experience in the spirit of Yandex Maps, with location search, live turn-by-turn directions, and real-time position tracking. It cuts the product’s reliance on costly third-party map providers. I built the entire interactive map UI and wired it to the in-house map backend, from the tile layer to routing and live tracking.',
    contribution: [
      'Built the full interactive map UI in React, tuned for smooth panning and zoom on mobile',
      'Integrated in-house map backend APIs for search and routing',
      'Implemented real-time directions and live location tracking',
      'Reduced dependence on external paid map services',
    ],
    stack: ['React', 'Map APIs', 'WebSockets', 'Geolocation', 'WebGL'],
    accent: '#f5c16c',
  },
  {
    id: 'fribe-dashboards',
    name: 'Fribe Dashboards',
    year: '2023',
    url: 'https://dashboard.fribe.io',
    kind: 'Admin & operations dashboards',
    image: '',
    blurb:
      'The operational backbone of the Fribe product suite. These are admin and user dashboards with role-based access, data-heavy tables and analytics, the screens the team actually runs the business on. I built a reusable dashboard system so new internal tools could ship in days instead of weeks.',
    contribution: [
      'Built a reusable dashboard system shared across multiple products',
      'Implemented role-based admin and user views with protected access',
      'Handled large datasets with server-side filtering, sorting and pagination',
      'Cut new-tool build time by reusing a shared component library',
    ],
    stack: ['React', 'Material UI', 'TypeScript', 'Charts', 'REST'],
    accent: '#a78bfa',
  },
]

export const experience = [
  {
    role: 'Full-Stack Developer (MERN)',
    period: '2023 – Present',
    summary:
      'Lead developer across live products in ride-hailing, AI and mapping. I own features from the database to the UI and run the deployment pipelines that ship them, turning product goals into software that performs in production.',
  },
  {
    role: 'Software Engineer',
    period: '2021 – 2023',
    summary:
      'Grew from frontend into full-stack, delivering dashboards and internal tools, then taking on backend services, data modelling and cloud deployments for client products.',
  },
]
