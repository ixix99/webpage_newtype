# Newtype SARL Documentation Wiki

## 1. 프로젝트 개요
- **회사명**: Newtype SARL
- **공식 도메인**: `newtype.sarl` (Cloudflare Registrar 보유)
- **주요 목적**: 외국인 인재의 한국 정착을 지원하는 AI 기반 정착 플랫폼 ("The First Gateway & AI-Powered Settlement Platform for Life in Korea") 및 Anthropic Claude 스타트업/개발자 혜택 지원
- **핵심 언어 지원**: 6개 국어 지원
  - 🇺🇸 English (기본)
  - 🇰🇷 한국어
  - 🇻🇳 Tiếng Việt (베트남)
  - 🇺🇿 O'zbek tili (우즈베키스탄)
  - 🇲🇳 Монгол хэл (몽골)
  - 🇳🇵 नेपाली (네팔)

---

## 2. 호스팅 인프라: Cloudflare Pages + GitHub 배포 가이드

`newtype.sarl` 도메인을 이미 **Cloudflare**에서 구매하셨으므로, 가장 추천되는 100% 무료 호스팅 방식은 **Cloudflare Pages**입니다.

### 장점:
1. **0원 무료 플랜**: 대역폭 무제한, 무료 자동 SSL/HTTPS 인증서 발급.
2. **원클릭 도메인 연결**: 도메인이 이미 Cloudflare에 있어 복잡한 DNS 레코드나 네임서버 변경 없이 버튼 하나로 `newtype.sarl`이 연결됩니다.
3. **GitHub 자동 배포**: 로컬에서 코드를 수정하고 `git push`만 하면 30초 내에 전 세계 엣지 서버로 자동 배포됩니다.

---

### [배포 진행 3단계 가이드]

#### 1단계: GitHub 레포지토리 생성 및 코드 푸시
1. [GitHub](https://github.com)에 로그인 후 신규 레포지토리(예: `newtype-sarl-website`, Private 또는 Public)를 생성합니다.
2. 로컬 터미널에서 아래 명령을 실행하여 코드를 푸시합니다:
   ```bash
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/newtype-sarl-website.git
   git branch -M main
   git push -u origin main
   ```

#### 2단계: Cloudflare Pages 프로젝트 생성
1. [Cloudflare 대시보드](https://dash.cloudflare.com/)에 로그인합니다.
2. 좌측 메뉴에서 **Workers & Pages** ➔ **Create application** 클릭 ➔ **Pages** 탭 선택 ➔ **Connect to Git**을 클릭합니다.
3. 위에서 생성한 GitHub 레포지토리(`newtype-sarl-website`)를 선택합니다.
4. **빌드 설정(Build settings)**을 다음과 같이 입력합니다:
   - **Framework preset**: `Vite` (또는 `None`)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. **Save and Deploy**를 클릭하면 즉시 빌드 및 무료 서브도메인(`*.pages.dev`) 배포가 완료됩니다.

#### 3단계: `newtype.sarl` 커스텀 도메인 연결 (30초 소요)
1. 생성된 Pages 프로젝트 상세 화면에서 **Custom domains** 탭 클릭 ➔ **Set up a custom domain** 클릭.
2. `newtype.sarl` (및 필요 시 `www.newtype.sarl`) 입력 후 **Continue** 클릭.
3. 도메인이 이미 Cloudflare에 등록되어 있으므로 **Activate domain** 버튼만 누르면 DNS CNAME 레코드와 SSL 인증서가 자동으로 세팅됩니다.
4. 이제 브라우저에서 `https://newtype.sarl`로 접속할 수 있습니다!

---

## 3. 개발 이력 (Changelog)
- **[Task 001: corporate_landing_page](file:///.agent/tasks/001_corporate_landing_page/request_spec.md)** (2026-10-08)
  - 초기 웹사이트 및 다국어 엔진 구축 완료
  - 6개 국어(EN, KO, VI, UZ, MN, NE) 74개 키 100% 매핑
  - Vite 기반 초고속 정적 빌드 및 Cloudflare Pages 배포 호환성 검증 통과
