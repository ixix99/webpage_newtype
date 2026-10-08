# Task 001 Development Checklist (todo.md)

- [x] 1. 프로젝트 기반 환경 구성 및 번들러 설정
  - Vite 기반의 초경량 번들러 및 정적 에셋 빌드 파이프라인 구성 (`package.json`, `vite.config.js`)
  - Cloudflare Pages 호환 정적 산출물 (`dist/`) 디렉토리 타겟팅
  - Evidence: `package.json`, `vite.config.js` 작성 완료, `npm run build` 성공 (`dist/index.html`, `dist/assets/` 생성 확인, 97ms 번들링)

- [x] 2. 6개 국어 다국어(i18n) 딕셔너리 및 실리콘밸리급 카피라이팅 구축
  - 영어(EN 기본), 한국어(KO), 베트남어(VI), 우즈베크어(UZ), 몽골어(MN), 네팔어(NE) 완전 번역 데이터
  - Claude 스타트업 심사역을 설득할 수 있는 고품격 비즈니스/기술 카피라이팅
  - Evidence: `src/i18n.js` 내 74개 키 x 6개 언어 = 444개 번역 노드 전수 구현. `test/verify_i18n.js` 자동 검증 통과 (누락 0건, `evidence/i18n_test.log`)

- [x] 3. 모던 럭셔리 & 하이엔드 테크 비주얼 UI 레이아웃 구현
  - Deep space dark navy / ambient glow 팔레트, 글래스모피즘, 고해상도 타이포그래피
  - Header: Newtype SARL 로고, 6개 국어 스위처, Get in Touch CTA
  - Hero: 임팩트 있는 비전 메시지, 인터랙티브 AI Concierge 프리뷰 카드
  - Problem & Landscape: 한국 인구구조 변화 및 외국인 정착 4대 장벽 시각화
  - Solution Bento Grid: 단계별 정착 파이프라인 (주거/통신 ➔ 금융/생활 ➔ AI 오케스트레이션)
  - Claude & AI Technology: Anthropic Claude를 활용한 다국어 맥락 추론 및 지능형 에이전트 구조
  - Company & Trust: Newtype SARL 법인 정보, 비전, 다국어 문의 모달/CTA
  - Evidence: `index.html`, `src/style.css` 작성 완료. 320px~4K 반응형 무오버플로우 방어 완료.

- [x] 4. 인터랙티브 기능 및 마이크로 인터랙션 구현
  - 새로고침 없는 실시간 6개 국어 전환 엔진 (선택 상태 로컬 저장)
  - Bento 카드 마우스 호버 효과 및 앰비언트 글로우
  - 반응형 네비게이션 드로어 (모바일 최적화)
  - Claude 심사용 공식 제휴/문의 인터랙티브 모달
  - Evidence: `src/main.js`의 `applyLanguage()`, `initLangDropdown()`, `initModal()` 구현. `localStorage` 예외 차단 래퍼 탑재 완료.

- [x] 5. 프로덕션 빌드, SEO 메타태그 및 배포 준비
  - OpenGraph, Favicon, Twitter Card, viewport, SEO 최적화 메타태그
  - `npm run build` 검증 및 정적 파일 무결성 확인
  - Cloudflare Pages 설정 가이드 문서 준비
  - Evidence: `public/favicon.svg`, `dist/` 빌드 완료 (로그: `evidence/build.log`). 배포 가이드 문서화 완료.
