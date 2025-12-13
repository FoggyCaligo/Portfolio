import icon_univ from '/src/assets/icons/icon_univ.png'
import icon_briefcase from '/src/assets/icons/icon_briefcase.png'
import icon_wing from '/src/assets/icons/icon_wing.png'


export interface TimelineItem {
  year: number
  icon?: string
  title: string
  description: string
}

export const timelineData: TimelineItem[] = [
  {
    year: 2020,
    icon: icon_univ,
    title: 'c++로 아스키 테트리스 일주일 안에 완성',
    description: `
    [ Project Summary ]
    컴퓨터공학과에 진학하며 본격적으로 프로그래밍을 시작한 시기입니다.
    ─────────────────
    이 시기에 선배와의 내기를 계기로,
    C++로 아스키 기반 테트리스 게임을 일주일 안에 구현한 경험이 있습니다.
    ─────────────────
    [ Role & Result ]
    - C++ 기반 콘솔 환경에서 아스키 그래픽을 활용한 테트리스 게임 구현
    - 제한된 시간(1주일) 안에 게임의 핵심 로직 완성
    - 문제를 기능 단위로 나누어 하나씩 해결하는 방식에 익숙해짐
    `
  },
  {
    year: 2021,
    title: '전공 관련 공부에 집중',
    description: `
    [ Project Summary ]
    2021년은 전공 수업과 개인 학습을 병행하며,
    프로그래밍을 ‘과제’가 아닌 ‘도구’로 사용하기 시작한 시기입니다.
    ─────────────────
    [ Role & Result ]
    - C / C++ / Python 등을 활용한 전공 과제 및 개인 실습 수행
    - 간단한 프로그램과 알고리즘 구현을 통해 문제 해결 경험 축적
    - 코드가 동작하는 것과, 이해 가능한 구조로 작성하는 것의 차이를 인식
    ─────────────────
    [Point]
    프로그래밍을 단순히 배우는 단계에서,
    스스로 문제를 정의하고 해결하려는 단계로 넘어간 시기
    `
  },
  {
    year: 2022,
    title: '자동 트레이딩 봇 개발(캡스톤 디자인)',
    description: `
    [ Project Summary ]
    실시간 호가잔량 데이터를 기반으로 주가 흐름을 예측해
    자동으로 매수·매도를 수행하는 트레이딩 봇을 개발했습니다.
    ─────────────────
    [ Role & Result ]
    - Python과 키움증권 API를 이용한 자동 매매 로직 설계 및 구현
    - 실시간 데이터 기반 매매 전략 고안
    - 대전권 대학연합 산학협력 성과공유 발표회에서 발표 진행(대산협회장상 수상)
    - 알고리즘 설계부터 구현, 검증까지 전 과정을 단독으로 수행
    `
  },
  {
    year: 2023,
    title: '3D 프린터 특허 출원',
    description: `
      [ Project Summary ]
      3D프린터의 느린 출력속도를 개선하기 위한 기술로, 
      동시에 여러 노즐을 이용해 출력 속도를 향상시키는 방법에 대한 특허를 출원했습니다.
      ─────────────────
      [ Role & Result ]
      - 다중 노즐을 활용한 3D프린터 출력 속도 향상 기술 개발
      - 특허 출원 완료 (출원번호: 10-2023-0069581)
    `
  },
  {
    year: 2024,
    title: `메디25케어 (실무 프로젝트)`,
    icon: icon_briefcase,
    description: `[ Project Summary ]
            간병인과 보호자를 연결하는 매칭 서비스의 프론트엔드 개발에 참여했습니다.
          기획 문서 없이 타사 서비스를 기준으로 구현이 진행된 프로젝트로,
          기능 구현 이후에도 구조와 의도를 파악하며 유지보수를 수행해야 하는
          실무 환경을 경험했습니다.
          ─────────────────
          [Role]
          - 간병인 지원 파트 전반의 프론트엔드 구현 및 유지보수
          - 백엔드 API 명세서(apidog 기반) 분석 및 Axios 연동
          - 페이지 및 공통 컴포넌트 구조 설계
          ─────────────────
          [Problems]
          - 기획서 및 설계 문서가 없어 구현 의도를 파악하기 어려웠음
          - 타사 프로젝트를 기준으로 개발이 진행되어 코드 구조에 일관성이 부족했음
          - 기능은 동작하지만, 왜 이런 구현이 되었는지 설명할 수 없는 코드가 많았음
          ─────────────────
          [Decisions]
          - 화면 단위가 아닌 기능 단위로 코드를 나누어 구조를 파악하려고 시도함
          - API 응답 구조를 기준으로 데이터 흐름을 명확히 하여 렌더링 과정을 단순화함
          ─────────────────
          [Results]
          - 기존 코드의 동작 흐름을 이해하고 설명할 수 있는 수준까지 구조를 정리함
          - 상태 변화와 렌더링 타이밍을 추적하기 쉬운 기준을 확립함
          - 신규 기능 추가 시 기존 코드의 영향을 예측할 수 있는 기반을 마련함
          ─────────────────
          [Tech Stack]
          Vue.js (Vue 3)
          JavaScript
          Axios
          Vitest
          SCSS`
  },
  {
    year: 2025,
    title: '개인 포트폴리오 사이트 설계 및 구현',
    description: `
    [ Project Summary ]
    지금 보고 있는 이 포트폴리오 사이트입니다.
    프로젝트 경험과 사고 과정을 정리해 보여주는 것을 목표로 Vue.js 기반으로 직접 설계하고 구현했습니다.
    Vite 기반 프로젝트에서 빌드/배포 환경 차이로 발생한 자산 로딩 문제를 분석하고, import 기반 자산 관리 방식으로 해결했습니다.
    `
  },
  {
    year: 2026,
    icon: icon_wing,
    title: '다음 도약',
    description: '확장 예정'
  }
]
