# Shin Jaeyong – Frontend Portfolio

Vue 3, TypeScript, Vite, TailwindCSS를 사용하여 제작한 개인 포트폴리오 웹사이트입니다.

**[➡️ Live Demo (https://portfolio-1gs.pages.dev/)]**

<br>

![프로젝트 스크린샷](https://via.placeholder.com/800x400.png?text= ![alt text](image.png))

<br>

## ✨ 주요 기능 (Key Features)

- **인터랙티브 프로젝트 타임라인**: 프로젝트 경험을 시간 순서에 따라 시각적으로 보여주는 타임라인 UI
- **최적화된 반응형 UI/UX**: 데스크탑과 모바일 환경에 각각 최적화된 레이아웃 제공
- **부드러운 스크롤 네비게이션**: `useScrollIntoView` 커스텀 훅을 활용한 페이지 내 부드러운 이동 기능
- **재사용 가능한 컴포넌트**: `BaseModal` 등 재사용성을 고려하여 설계된 모달 컴포넌트

## 🛠️ 기술 스택 및 선택 이유 (Tech Stack & Rationale)

- **Vue 3 & Composition API**:
  - **선택 이유**: 컴포넌트 기반 구조와 논리 재사용성을 극대화하여 유지보수가 용이한 코드를 작성하기 위해 선택했습니다. `useScrollIntoView.ts`와 같은 Composable 함수를 통해 관심사를 분리하고 코드의 모듈성을 높였습니다.

- **TypeScript**:
  - **선택 이유**: 정적 타이핑을 통해 개발 단계에서 런타임 에러를 사전에 방지하고, 코드의 안정성과 가독성을 향상시켰습니다. 자동 완성 및 타입 추론을 통해 개발 생산성도 높일 수 있었습니다.

- **TailwindCSS**:
  - **선택 이유**: 유틸리티 우선(Utility-First) 접근법을 통해 별도의 CSS 파일 없이 HTML 내에서 빠르게 UI를 구축하고 일관된 디자인 시스템을 적용했습니다. 반응형 디자인을 효율적으로 구현하는 데 큰 도움이 되었습니다.

- **Vite**:
  - **선택 이유**: 빠른 개발 서버 구동과 최적화된 빌드 성능으로 개발 경험을 크게 향상시켰습니다. HMR(Hot Module Replacement) 속도가 매우 빨라 생산성을 높일 수 있었습니다.

## 🤔 문제 해결 경험 (Challenges & Solutions)

### 1. 데스크탑과 모바일의 복잡한 레이아웃 분리

- **문제 상황**:
  - 데스크탑 환경에서는 넓은 화면을 활용한 복합적인 UI를, 모바일에서는 스크롤에 최적화된 단순한 UI를 제공해야 했습니다. 하나의 컴포넌트에서 `v-if`와 CSS만으로 분기 처리를 할 경우 코드가 지나치게 복잡해지고 유지보수가 어려워지는 문제가 있었습니다.

- **해결 과정**:
  - TailwindCSS의 반응형 분기점(`breakpoint`)을 활용하여 현재 디바이스의 화면 크기를 감지했습니다.
  - 화면 크기에 따라 데스크탑용 `*Desktop.vue` 컴포넌트와 모바일용 `*Mobile.vue` 컴포넌트를 동적으로 렌더링하도록 구현했습니다.
  - 이를 통해 각 디바이스에 특화된 로직과 템플릿을 해당 컴포넌트 내에서 독립적으로 관리할 수 있었고, 코드의 복잡도를 낮추고 유지보수성을 크게 향상시켰습니다.

### 2. 여러 컴포넌트에서 공통 기능 재사용

- **문제 상황**:
  - '특정 섹션으로 부드럽게 스크롤'하는 기능이 페이지 상단의 네비게이션 바와 페이지 내의 버튼 등 여러 컴포넌트에서 중복으로 필요했습니다. 각 컴포넌트에서 동일한 로직을 반복 작성하는 것은 비효율적이었습니다.

- **해결 과정**:
  - Vue 3의 Composition API를 활용하여 `useScrollIntoView.ts` 라는 composable 함수를 직접 구현했습니다.
  - 이 함수는 스크롤 로직을 캡슐화하여, 어떤 컴포넌트에서든 `import`하여 한 줄의 코드로 쉽게 재사용할 수 있도록 만들었습니다.
  - 이를 통해 코드 중복을 제거하고, 스크롤 관련 로직을 한 곳에서 중앙 관리하여 유지보수성을 높였습니다.

## 📁 프로젝트 구조

```
src/
├── assets/         # 정적 에셋 (이미지, CSS)
├── components/     # 재사용 가능한 공용 컴포넌트
│   ├── AboutPage/  # About 페이지 관련 컴포넌트
│   ├── ProjectsPage/ # Projects 페이지 관련 컴포넌트
│   └── SkillsPage/   # Skills 페이지 관련 컴포넌트
├── composables/    # Composition API 함수 (Hooks)
├── data/           # 타임라인 데이터 등
├── pages/          # 라우팅되는 페이지 컴포N넌트
├── router/         # Vue Router 설정
└── main.ts         # 애플리케이션 진입점
```

## 🚀 프로젝트 실행 방법 (Local Development)

1. **저장소 복제**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **의존성 설치**
   ```bash
   npm install
   ```

3. **개발 서버 실행**
   ```bash
   npm run dev
   ```

4. **프로덕션 빌드**
   ```bash
   npm run build
   ```
