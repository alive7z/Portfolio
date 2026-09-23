import ibvapDashboard from '../assets/projects/ibvap-dashboard.png'
import ibvapDashboardLight from '../assets/projects/ibvap-dashboard-light.png'
import janaSahayaHome from '../assets/projects/civic-issue.png'

export const projects = [
  {
    slug: 'ibvap',
    title: 'IBVAP',
    subtitle: 'Intelligent Border Video Analytics Platform',
    role: 'Full-Stack Developer',
    description:
      'Built and deployed a real-time video analytics platform that detects and tracks people, vehicles, license plates, and faces, then turns object movement into contextual security incidents.',
    tagline:
      'A full-stack border surveillance platform that converts live video into real-time, explainable intelligence for operators.',
    problem:
      'Continuous border surveillance is difficult to scale with manual monitoring. Operators need timely, contextual alerts without duplicate events being generated for the same tracked object in every frame.',
    solution:
      'IBVAP combines YOLO11, ByteTrack, ANPR/EasyOCR, and YuNet with dynamically configurable surveillance zones, virtual fences, and risk rules. It evaluates movement against flexible threat policies and maintains a single evolving incident per tracked object.',
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
    live: '',
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
    metrics: null,
    metricNote: '',
  },
  {
    slug: 'janasahaya',
    title: 'JanaSahaya',
    subtitle: 'Civic Issue Reporting & Resolution Platform',
    role: 'Full-Stack Developer',
    description:
      'Built a full-stack civic issue platform for citizens, officers, and administrators, with geotagged reporting, issue assignment, SLA monitoring, resolution tracking, analytics, and audit logs.',
    tagline:
      'A transparent civic-tech workflow that takes a citizen report from geotagged submission to verified resolution.',
    problem:
      'Civic complaints are often scattered across calls, forms, and social media. Citizens lack visibility into progress, while officers lack a shared system for prioritization, ownership, and SLA tracking.',
    solution:
      'JanaSahaya provides dedicated workflows for three user roles and uses a 0-100 priority score based on issue age, votes, nearby complaints, and escalation signals. Duplicate detection combines Haversine distance with text and category similarity.',
    architecture:
      'The React.js frontend connects to a Node.js and Express.js API backed by a 22-table MySQL database. JWT authentication, RBAC, MySQL transactions, and Socket.IO secure and synchronize the workflow. The frontend is deployed on Vercel, with the Dockerized backend and MySQL on Railway.',
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MySQL',
      'Socket.IO',
      'Docker',
      'Vercel',
      'Railway',
    ],
    github: 'https://github.com/alive7z/JanaSahaya',
    live: '',
    displayUrl: 'jana-sahaya.vercel.app',
    image: janaSahayaHome,
    darkImage: null,
    imageAlt: 'JanaSahaya civic issue reporting and resolution platform home page',
    features: [
      'Citizen, officer, and admin roles',
      'Geotagged issue reporting',
      'Issue assignment and tracking',
      'SLA monitoring',
      '0-100 priority scoring',
      'Duplicate issue detection',
      'Real-time Socket.IO updates',
      'Resolution verification',
      'Analytics and audit logs',
      'JWT authentication and RBAC',
    ],
    metrics: [
      { value: '3', suffix: '', label: 'User Roles' },
      { value: '22', suffix: '', label: 'MySQL Tables' },
      { value: '43', suffix: '', label: 'Automated Tests' },
      { value: '54', suffix: '', label: 'API Operations' },
    ],
    metricNote: 'Implementation metrics verified in the project documentation',
  },
]
