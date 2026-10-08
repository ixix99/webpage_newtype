# Task 001: Newtype SARL 공식 웹사이트 및 Cloudflare Pages 배포 파이프라인

## 1. 프로젝트 개요 (Executive Summary)
- **회사명**: Newtype SARL (도메인: `newtype.sarl`)
- **미션**: "The First Gateway & AI-Powered Settlement Platform for Life in Korea"
- **사회적 배경**: 한국의 저출산·고령화 및 인력 부족 대응을 위한 외국인 유학생/근로자/전문인력 유입 급증, 하지만 정착 과정(주거, 통신, 금융, 생활)에서의 심각한 언어 및 정보 파편화 장벽 존재
- **해결 솔루션**: 초기 주거·통신 원스톱 연결 ➔ 금융/보험/교육/생활 확장 ➔ Claude/LLM 기반 개인화 맞춤 정착 컨시어지 에이전트 플랫폼
- **타겟 프로그램**: Anthropic Claude 스타트업/개발자 혜택 프로그램 심사 대응 및 글로벌 파트너 신뢰도 확보

## 2. 호스팅 및 인프라 명세
- **호스팅 인프라**: Cloudflare Pages (+ GitHub)
  - 도메인 등록처: Cloudflare Registrar (`newtype.sarl`)
  - 배포 방식: Git 기반 무중단 자동 배포 (Continuous Deployment)
  - CDN & 보안: Cloudflare 글로벌 엣지 네트워크, 전 구간 무료 자동 SSL/TLS, DDoS 방어
- **기술 스택**:
  - 초경량 고성능 모던 웹 아키텍처 (Vite + Modern Vanilla JS / Tailwind CSS or Pure Modern CSS with Zero-dependency build)
  - 빌드 결과물: `dist/` 정적 사이트 (Cloudflare Pages 최적화)
  - 인터랙션: 고해상도 글래스모피즘, 다크/모던 앰비언트 테마, 매끄러운 반응형 레이아웃, 실시간 다국어 전환 엔진

## 3. 다국어 지원 체계 (Multi-Language Engine)
- 기본 언어: **영어 (English)** - Claude 글로벌 심사역 및 국제 파트너 대상
- 지원 언어 목록 (한국 내 최다 유입 5대 국가 언어 + 한국어):
  1. English (EN) - Default
  2. 한국어 (KO)
  3. Tiếng Việt (VI)
  4. O'zbek tili (UZ)
  5. Монгол хэл (MN)
  6. नेपाली (NE)
- 구현 방식: 클라이언트 사이드 즉각 언어 전환 (No-page-reload I18n 딕셔너리 매핑)

## 4. 페이지 구성 및 디자인 전략 (High-End Aesthetic)
- **Top Bar**: Newtype SARL 로고, 6개 국어 선택 드롭다운/토글러, Contact CTA
- **Hero Section**:
  - 임팩트 있는 타이포그래피 ("Bridging Global Talent to Korea through Agentic Intelligence")
  - 핵심 가치 제안 및 배경 스토리
  - AI Settlement Platform 프리뷰 인터랙티브 카드
- **The Challenge & Opportunity (왜 지금인가?)**:
  - 한국의 인구 구조 변화와 외국인 유입 데이터/트렌드 인포그래픽
  - 초기 정착 4대 장벽 (Language, Housing, Telecom, Banking)
- **Our Solution & Roadmap (Bento Grid)**:
  - Phase 1: Housing & Telecom Concierge (Immediate Onboarding)
  - Phase 2: Essential Life Infrastructure (Finance, Insurance, Mobility, Education)
  - Phase 3: Claude-Powered Autonomous Settlement Agent (Hyper-personalized context matching)
- **Why Anthropic Claude? (AI Architecture)**:
  - 다국어 복합 맥락 이해 (Nuanced Cross-Lingual Empathy)
  - 행정 및 생활 규정 RAG 지식 베이스
  - 안전하고 신뢰할 수 있는 에이전틱 오케스트레이션
- **Company Credibility & Contact (SARL Official Info)**:
  - Newtype SARL 회사 법인 정보 및 이메일
  - 파트너십 / 제휴 / 채용 / 문의 폼/버튼
- **Footer**: 저작권 표기, 법적 고지, 소셜/이메일 링크

## 5. 비기능적 요구사항 (Non-Functional Requirements)
- 세련되고 모던한 실리콘밸리/스타트업 감성 (대충 만든 느낌 원천 차단)
- 모바일/태블릿/데스크톱 100% 반응형 최적화
- 완벽한 SEO 메타태그 (OpenGraph, Twitter Card, 다국어 hreflang 구조)
- Cloudflare Pages 즉시 배포 가능성 (Build Command & Output Directory 표준화)
