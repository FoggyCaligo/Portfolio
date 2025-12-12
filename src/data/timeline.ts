export interface TimelineItem {
  year: number
  icon?: string
  title: string
  description: string
}

export const timelineData: TimelineItem[] = [
  {
    year: 2020,
    icon: '/src/assets/icons/icon_univ.png',
    title: '대학교 입학',
    description: '컴퓨터 관련 전공 시작'
  },
  {
    year: 2021,
    title: '',
    description: ''
  },
  {
    year: 2022,
    title: '',
    description: ''
  },
  {
    year: 2023,
    title: '',
    description: ''
  },
  {
    year: 2024,
    icon: '/src/assets/icons/icon_suitcase.png',
    title: '실무 경험',
    description: '프론트엔드 실무 시작'
  },
  {
    year: 2025,
    title: '',
    description: ''
  },
  {
    year: 2026,
    icon: '/src/assets/icons/icon_wing.png',
    title: '다음 도약',
    description: '확장 예정'
  }
]
