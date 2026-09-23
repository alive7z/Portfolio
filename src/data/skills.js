import {
  Code2,
  Terminal,
  Database,
  Boxes,
  Palette,
  Server,
  Braces,
  Globe,
  Radio,
  MessagesSquare,
  GitBranch,
  Sidebar,
  Container,
  Cloud,
  TestTube,
  Monitor,
  Layers,
  Workflow,
  Cpu,
  Network,
} from 'lucide-react'

export const skills = [
  {
    title: 'Languages',
    icon: Code2,
    items: [
      { name: 'C++', icon: Braces },
      { name: 'JavaScript', icon: Code2 },
      { name: 'SQL', icon: Database },
    ],
  },
  {
    title: 'Frontend',
    icon: Boxes,
    items: [
      { name: 'React.js', icon: Layers },
      { name: 'Tailwind CSS', icon: Palette },
      { name: 'HTML', icon: Globe },
      { name: 'CSS', icon: Palette },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    items: [
      { name: 'Node.js', icon: Server },
      { name: 'Express.js', icon: Terminal },
      { name: 'REST APIs', icon: Network },
      { name: 'WebSockets', icon: Radio },
      { name: 'Socket.IO', icon: MessagesSquare },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    items: [
      { name: 'MySQL', icon: Database },
      { name: 'MongoDB', icon: Database },
    ],
  },
  {
    title: 'Tools',
    icon: Workflow,
    items: [
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub', icon: Sidebar },
      { name: 'Docker', icon: Container },
      { name: 'Postman', icon: TestTube },
      { name: 'Vercel', icon: Cloud },
      { name: 'Railway', icon: Cloud },
      { name: 'VS Code', icon: Monitor },
    ],
  },
  {
    title: 'Core CS',
    icon: Cpu,
    items: [
      { name: 'Data Structures & Algorithms', icon: Cpu },
      { name: 'Object-Oriented Programming', icon: Layers },
      { name: 'DBMS', icon: Database },
      { name: 'System Design', icon: Workflow },
    ],
  },
]
