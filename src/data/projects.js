export const projects = [
  {
    slug: 'ibvap',
    title: 'IBVAP',
    subtitle: 'Intelligent Border Video Analytics Platform',
    role: 'Full-Stack Developer',
    description:
      'Built a full-stack intelligent surveillance platform for live camera monitoring, alerts, analytics, evidence tracking, and multi-source video ingestion.',
    tagline:
      'A full-stack AI surveillance platform that turns live video feeds into real-time intelligence — detecting persons, vehicles, intrusions and abnormal behaviour across camera feeds.',
    problem:
      'Border and perimeter monitoring relies heavily on manual observation, making it slow to react and impractical to scale across many camera feeds.',
    solution:
      'IBVAP ingests multiple live camera sources and runs on-device AI (YOLO11n with ByteTrack) to detect persons, vehicles and intrusions in real time, then surfaces instant alerts, analytics and evidence through a polished web dashboard.',
    architecture:
      'A React.js dashboard talks to an Express.js API over REST and Socket.IO. A Python vision worker runs YOLO11n detection, ByteTrack tracking, ANPR and virtual fencing, feeding live results back through the same stack. MySQL stores events, users and evidence, while Docker containerizes the services.',
    technologies: [
      'React.js',
      'Express.js',
      'MySQL',
      'YOLO11n',
      'OpenCV',
      'Socket.IO',
      'Docker',
    ],
    github: 'https://github.com/alive7z/Intelligent-Border-Video-Analytics-Platform.git',
    image: '/src/assets/projects/ibvap-dashboard.png',
    features: [
      'Live camera monitoring',
      'Real-time alerts',
      'Analytics dashboard',
      'Evidence management',
      'Person and vehicle detection',
      'ByteTrack object tracking',
      'ANPR',
      'Virtual fencing',
      'Loitering detection',
      'Authentication',
      'Role-Based Access Control',
      'Multi-source video ingestion',
    ],
    metrics: [
      { value: '10.49', suffix: ' FPS', label: 'AI Video Processing' },
      { value: '91.95', suffix: ' ms', label: 'Average Frame Processing' },
      { value: '97', suffix: '', label: 'REST API Endpoints' },
      { value: '19', suffix: '', label: 'Backend Route Modules' },
    ],
    metricNote: 'Benchmarked on Apple M4 CPU',
  },
  {
    slug: 'civic-issue',
    title: 'Civic Issue Reporting Platform',
    subtitle: 'Community Issue Reporting & Tracking',
    role: 'Full-Stack Developer',
    description:
      'A mobile application allowing citizens to report civic issues using images and GPS-based location data, and track the status of their complaints.',
    tagline:
      'An end-to-end civic tech app that lets citizens report issues with photo and GPS proof, then track every complaint to resolution.',
    problem:
      'Civic complaints often get lost between phone calls, forms and social media, and citizens rarely get a way to follow up on their report.',
    solution:
      'A React Native app that captures an issue with images and GPS location, submits it via a REST API to Express.js, and keeps citizens updated with transparent status tracking.',
    architecture:
      'React Native on the client captures images and GPS coordinates, posting them to an Express.js REST API backed by a persistent store. Complaint status flows back to the app so citizens always know where their report stands.',
    technologies: ['React Native', 'JavaScript', 'Express.js', 'REST APIs', 'GPS'],
    github: '',
    image: '/src/assets/projects/civic-issue.png',
    features: [
      'GPS-based reporting',
      'Image uploads',
      'Issue submission',
      'Complaint tracking',
      'Status updates',
      'REST API integration',
    ],
    metrics: null,
    metricNote: '',
  },
]