import { Trophy, Flame, Code2, ShieldCheck, BookOpen, Cloud } from 'lucide-react'
import graphiteTeam from '../assets/achievements/graphite-26-team.jpg'

export const achievements = [
  {
    title: "Graphite’26 Hackathon",
    description: 'Our team, Dev X, secured 1st Runner-Up at Graphic Era Hill University’s 24-hour hackathon with AccessLens, a web accessibility auditor that explains issues, highlights affected elements, and suggests ready-to-use code fixes. We also built a browser extension and published an npm package for audits and reports, while exploring WCAG Level AAA checks.',
    icon: Trophy,
    badge: '1st Runner-Up',
    image: graphiteTeam,
    imageAlt: 'Team Dev X receiving the 1st Runner-Up award at the Graphite’26 hackathon at Graphic Era Hill University',
  },
  {
    title: 'Smart India Hackathon 2026',
    description: 'Shortlisted with IBVAP',
    icon: Trophy,
  },
  {
    title: 'Hack the Winter 2025',
    description: 'National-Level Hackathon Finalist',
    icon: Flame,
  },
  {
    title: '350+ LeetCode Problems',
    description: 'Consistent practice in data structures and algorithms',
    icon: Code2,
  },
  {
    title: 'NPTEL Training',
    description: 'Data Structures and Design',
    icon: BookOpen,
  },
  {
    title: 'AWS Cloud Training',
    description: 'Cloud Essentials and Cloud Practitioner Essentials',
    icon: Cloud,
  },
  {
    title: 'NCC',
    description: 'NCC B Certificate',
    icon: ShieldCheck,
  },
]
