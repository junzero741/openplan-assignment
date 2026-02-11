# 오픈플랜 웹 프론트엔드 과제



## 배포 링크
https://openplan-assignment-web-iota.vercel.app/

## 핵심 기능
- 메인 페이지에서 “다음” 버튼 클릭 시 사진 조회 후 결과 페이지로 이동
- 결과 페이지에서 사진 미리보기와 메타데이터(`id`, `author`, `width`, `height`, `url`, `download_url`) 표시
- 결과 페이지 배경을 조회한 사진으로 적용하여 몰입감 강화
- 사진 조회 이력이 없으면 1초 후 홈으로 자동 복귀
- 조회 버튼 중복 클릭 방지 + 로딩 스피너 제공
- 이미지 로딩 전 스켈레톤 UI 제공
- 404 페이지 제공

## 기술 스택
- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS + `tailwind-merge`
- 상태 관리: Zustand (persist 적용)
- 데이터 패칭: React Query
- UI/디자인: Storybook, Lottie(스피너)
- 모노레포: Turborepo + pnpm workspace
- 배포: Vercel

## 실행 방법
### 공통
- Node.js >= 18, pnpm >= 9
- 의존성 설치: `pnpm install`

### 웹 앱 실행
- 개발: `pnpm dev --filter web`
- 빌드: `pnpm build --filter web`
- 타입 체크: `pnpm check-types --filter web`

### Storybook 실행
- 개발: `pnpm dev --filter @repo/storybook`
- 빌드: `pnpm build --filter @repo/storybook`

## 프로젝트 구조
```
apps/
	web/                 # Next.js 앱 (실서비스)
		app/               # App Router 페이지
		components/        # 공통 UI/레이아웃 컴포넌트
		actions/           # React Query 훅
		hooks/             # 커스텀 훅
		stores/            # Zustand 스토어
	storybook/           # UI 컴포넌트 확인용
packages/
	ui/                  # 공용 UI 컴포넌트(Button/Card)
	eslint-config/       # ESLint 설정
	tailwind-config/     # Tailwind 공통 설정
	typescript-config/   # TS 공통 설정
```

## 주요 구현 포인트
- 사진 조회/전역 상태 저장: [apps/web/actions/usePhotoInfoQuery.ts](apps/web/actions/usePhotoInfoQuery.ts), [apps/web/stores/photoStore.ts](apps/web/stores/photoStore.ts)
	- `react-query`로 조회한 데이터를 `zustand`에 저장하고 `persist`로 새로고침 내구성 확보
- 결과 페이지 UI/UX:
	- 사진 상세: [apps/web/components/photoDetail.tsx](apps/web/components/photoDetail.tsx)
	- 배경 이미지 적용: [apps/web/components/resultPageContainer.tsx](apps/web/components/resultPageContainer.tsx)
- 클릭 스로틀/로딩 UX: [apps/web/hooks/useThrottledClick.ts](apps/web/hooks/useThrottledClick.ts), [apps/web/components/photoLinkButton.tsx](apps/web/components/photoLinkButton.tsx)
	- 연속 클릭 방지와 스피너 표시로 사용자 혼란 최소화
- 404 대응: [apps/web/app/not-found.tsx](apps/web/app/not-found.tsx)

## 커밋 히스토리 요약
최근 커밋을 기준으로 기능 흐름이 한눈에 보이도록 요약했습니다.
- UI/UX 안정화: 반응형 개선, 스켈레톤, LCP 이미지 우선순위 적용
- 상태 관리: 사진 조회 결과 `zustand persist` 저장
- 네비게이션: 조회 이력 없을 때 자동 복귀, 뒤로가기 버튼
- 결과 페이지: 상세 컴포넌트, 배경 이미지 적용, 레이아웃 공통화
- 품질/정리: 사용하지 않는 코드·폰트 제거, 포맷/리팩터링



## 문제 해결 및 회고
- **중복 클릭/로딩 UX**: 클릭 스로틀과 Lottie 스피너를 결합해 네트워크 지연 시 사용자의 재클릭을 방지했습니다.
- **결과 페이지 진입 안정성**: 사진 조회 이력 없이 접근하면 자동으로 홈으로 돌아가도록 가드 로직을 추가했습니다.
- **LCP 개선**: 결과 페이지의 대표 이미지를 우선 로드 대상으로 지정해 체감 성능을 개선했습니다.
- **재사용 가능한 레이아웃**: 헤더/메인/섹션/푸터를 공용화하여 페이지 구성 비용을 줄였습니다.
