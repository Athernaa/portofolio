import {
  SiAmazonaws,
  SiAmazondynamodb,
  SiGooglecloud,
  SiHeroku,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiPhp,
  SiLua,
  SiTypescript,
  SiVercel,
  SiHtml5,
  SiCss3,
} from 'react-icons/si'
import { Javascript } from '@components/icons'
import type { SkillGroupProps } from './SkillGroup'

export const data: SkillGroupProps[] = [
  {
    id: '1',
    category: 'languages',
    skills: [
      { name: 'Typescript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Javascript', icon: Javascript, color: '#F7DF1E' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'Lua', icon: SiLua, color: 'blue' },
      { name: 'HTML5', icon: SiHtml5, color: '#CC342D' },
      { name: 'CSS3', icon: SiCss3, color: '#3178C6' },
    ],
  },
  {
    id: '2',
    category: 'Fivem Frameworks',
    skills: [
      { name: 'ESX', icon: SiLua, color: '#61DAFB' },
      { name: 'QBCore', icon: SiLua, color: '#777BB4' },
      { name: 'NP Base', icon: SiLua, color: '#3178C6' },
      { name: 'Custom FrameWork', icon: SiLua, color: 'gray.500' },
    ],
  },
  // {
  //   id: '3',
  //   category: 'back-end',
  //   skills: [
  //     { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  //     { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  //     { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
  //     { name: 'Express', icon: SiExpress, color: '#000000' },
  //     { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
  //   ],
  // },
  {
    id: '3',
    category: 'cloud',
    skills: [
      { name: 'Amazon Web Services', icon: SiAmazonaws, color: '#232F3E' },
      { name: 'Google Cloud Platform', icon: SiGooglecloud, color: '#4285F4' },
      { name: 'Vercel', icon: SiVercel, color: '#000000' },
      { name: 'Heroku', icon: SiHeroku, color: '#430098' },
      { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
    ],
  },
  {
    id: '4',
    category: 'databases',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Amazon DynamoDB', icon: SiAmazondynamodb, color: '#4053D6' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    ],
  },
]
