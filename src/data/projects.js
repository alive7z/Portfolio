import ibvapDashboard from '../assets/projects/ibvap-dashboard.png'
import ibvapDashboardLight from '../assets/projects/ibvap-dashboard-light.png'
import pratyayaDashboard from '../assets/projects/pratyaya-dashboard.svg'

export const projects = [
  {
    slug: 'ibvap',
    title: 'IBVAP',
    subtitle: 'Intelligent Border Video Analytics Platform',
    role: 'Full-Stack Developer',
    description:
      'Built a real-time border surveillance platform shortlisted for Smart India Hackathon 2026. It detects and tracks objects, assesses risk, and prevents duplicate alerts while turning video into contextual security incidents.',
    tagline:
      'A full-stack border surveillance platform that converts live video into real-time, explainable intelligence for operators.',
    problem:
      'Continuous border surveillance is difficult to scale with manual monitoring. Operators need timely, contextual alerts without duplicate events being generated for the same tracked object in every frame.',
    solution:
      'IBVAP combines YOLO11n, ByteTrack, ANPR/EasyOCR, and YuNet with dynamically configurable surveillance zones, virtual fences, and risk rules. It evaluates movement against flexible threat policies and maintains a single evolving incident per tracked object.',
    architecture:
      'A React.js dashboard connects to Node.js, MySQL, and Redis services deployed with Docker and Nginx on AWS EC2. The FastAPI AI engine runs on an edge device with Apple MPS acceleration and connects securely through Tailscale, with automatic RTSP reconnection and offline handling.',
    technologies: [
      'React.js',
      'Node.js',
      'FastAPI',
      'MySQL',
      'Redis',
      'YOLO11',
      'ByteTrack',
      'OpenCV',
      'Docker',
      'AWS EC2',
    ],
    github: 'https://github.com/alive7z/Intelligent-Border-Video-Analytics-Platform',
    live: 'https://ibvap-uk.duckdns.org',
    displayUrl: 'ibvap · surveillance command centre',
    image: ibvapDashboardLight,
    darkImage: ibvapDashboard,
    imageAlt: 'IBVAP overview dashboard showing alerts, system health, and live surveillance',
    features: [
      'Person and vehicle detection',
      'ByteTrack object tracking',
      'ANPR with EasyOCR',
      'YuNet face detection',
      'Configurable surveillance zones',
      'Virtual fences and risk rules',
      'Single evolving incidents',
      'Automatic RTSP reconnection',
      'Offline handling',
      'Edge-to-cloud deployment',
    ],
    metrics: [
      { value: '10.49', suffix: ' FPS', label: 'Average at 720p' },
      { value: '91.95', suffix: ' ms', label: 'Processing Latency' },
      { value: '2026', suffix: '', label: 'SIH Shortlist' },
    ],
    metricNote: 'Video performance measured on an Apple M4 CPU, as reported in the resume',
  },
  {
    slug: 'pratyaya',
    title: 'Pratyaya',
    subtitle: 'Payment Reliability Platform',
    role: 'Full-Stack Developer',
    description:
      'Built a merchant-focused payment sandbox with payment authorization, capture, and partial refunds across four demo roles. Idempotent workflows, a double-entry ledger, and a transactional outbox keep simulated financial records accurate and traceable.',
    tagline:
      'A simulated payment platform exploring reliable financial systems, from idempotent operations to ledger integrity.',
    problem:
      'Payment systems must remain correct through retries, provider failures, and asynchronous events. A merchant needs consistent payment state and an auditable record through every operation.',
    solution:
      'Pratyaya models authorization, capture, and partial refunds with idempotent operations, balanced double-entry journals, and a transactional outbox. Provider routing, circuit breakers, reconciliation, and human-authorized AI assistance extend the reliability workflows.',
    architecture:
      'A React dashboard works with Node.js and Express.js REST APIs and MongoDB Atlas. MongoDB ACID transactions and background jobs coordinate payment state changes, ledger entries, and outbox records. Vitest covers payment APIs and mock-provider operations.',
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB Atlas',
      'Vitest',
    ],
    github: 'https://github.com/alive7z/Pratyaya',
    live: 'https://pratyaya-sand.vercel.app',
    displayUrl: 'Pratyaya · payment reliability sandbox',
    image: pratyayaDashboard,
    darkImage: null,
    imageAlt: 'Pratyaya simulated payment reliability dashboard',
    features: [
      'Authorization, capture, and partial refunds',
      'Four merchant demo roles',
      'Idempotent payment operations',
      'Double-entry ledger journals',
      'Transactional outbox and background jobs',
      'Provider routing and circuit breakers',
      'Reconciliation workflows',
      'Human-authorized AI assistance',
      'MongoDB ACID transactions',
      'Mock-provider integration tests',
    ],
    metrics: [
      { value: '4', suffix: '', label: 'Demo Roles' },
      { value: '30', suffix: '', label: 'Passing API Tests' },
      { value: '10', suffix: '', label: 'Provider Tests' },
      { value: '3', suffix: '', label: 'Payment Operations' },
    ],
    metricNote: 'Vitest results reported in the resume; includes authorization, capture, and partial refunds',
  },
]
