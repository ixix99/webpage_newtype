# Task 001 Invariants & Non-Negotiable Hard Gates (invariants.md)

## 1. 품질 및 디자인 헌법 (Aesthetic & Polish Invariants)
- **INV-01 (템플릿 느낌 원천 배제)**: 부트스트랩이나 값싼 무료 템플릿의 느낌(원색 원형 버튼, 어색한 스톡 이미지, 투박한 카드 섀도우)을 일체 금지한다. 최신 테크 유니콘(Linear, Vercel, Stripe, Anthropic) 감성의 딥 다크 네이비/차콜 배경, 서브틀(Subtle) 보더, 정교한 마이크로 그라디언트, 산세리프 모던 폰트(`Inter`, `Plus Jakarta Sans`, `Pretendard`)를 적용한다.
- **INV-02 (완벽한 다국어 100% 커버리지)**: 번역 키 누락으로 인한 `undefined` 노출, 원시 키 노출(`t.something`), 깨진 유니코드 문자를 엄격히 금지한다. 지원 6개 국어(EN, KO, VI, UZ, MN, NE) 모두 모든 UI 요소에 100% 번역 데이터가 실장되어야 한다.
- **INV-03 (반응형 무오버플로우 헌법)**: 320px부터 4K 해상도까지 수평 스크롤바(`overflow-x: hidden` 억지 덮어쓰기가 아닌 본질적 유연한 그리드/플렉스)가 생기지 않아야 한다.

## 2. 기술 및 보안 헌법 (Technical & Security Invariants)
- **INV-04 (빌드 무결성)**: 빌드 커맨드 `npm run build` 실행 시 에러 및 경고 0건이어야 하며, 단일 명령으로 완전히 독립적인 `dist/` 정적 파일 번들이 생성되어야 한다.
- **INV-05 (외부 런타임 종속성 배제)**: 런타임에 외부 유료 API나 불안정한 서드파티 CDN 스크립트 장애 시 사이트 렌더링이 멈추지 않아야 한다. 모든 핵심 로직과 스타일은 빌드 에셋 내에 번들링되어야 한다.
- **INV-06 (스토리지 에러 방어)**: 시크릿 모드나 쿠키 차단 환경에서 `localStorage` 접근 시 예외로 인해 스크립트가 멈추지 않도록 안전한 Fallback 핸들러를 갖춘다.
- **INV-07 (Anthropic 심사 특화)**: 단순 중개 회사가 아닌 "외국인 정착 과정의 극심한 정보 비대칭을 해결하는 AI 정착 에이전트 플랫폼"으로서의 비전과 아키텍처가 명확히 서술되어야 한다.
