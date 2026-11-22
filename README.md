# Personal Website

Astro로 만든 개인 사이트입니다. 모든 내용은 `src/content/` 아래 Markdown 파일에 있고, GitHub에 push하면 GitHub Pages로 자동 배포됩니다.

## 탭과 콘텐츠 폴더

| 탭 | 주소 | 내용 파일 |
|---|---|---|
| About | `/` | `src/content/profile/profile.md` (소개글, 사진, 링크, 관심 분야) |
| Work Experience | `/experience` | `src/content/experience/`, `education/`, `honors/` |
| Projects | `/projects` | `src/content/projects/*.md` (파일 하나 = 프로젝트 하나, 상세 페이지 자동 생성) |
| Publications | `/publications` | `src/content/publications/*.md` |
| Blog | `/blog` | `src/content/blog/*.md` (태그 페이지와 RSS 자동 생성) |

## 내용을 수정하는 방법

### 방법 1: 웹 편집기 (`/admin`)

1. GitHub에서 Fine-grained personal access token을 만듭니다.
   - Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token
   - Repository access: 이 사이트 저장소 하나만 선택
   - Permissions → Repository permissions → **Contents: Read and write**
2. `https://jinhyung-park-info.github.io/admin/` 에 접속한 뒤 **Sign In with Token**을 누르고 토큰을 붙여넣습니다.
3. 탭(Blog, Projects …)을 골라 새 글을 만들거나 수정·삭제하고 저장(Publish)합니다.
4. 저장하면 GitHub에 commit이 만들어지고, 약 1~2분 뒤 사이트에 반영됩니다.

로컬에서 `npm run dev`를 실행한 상태라면 `http://localhost:4321/admin/index.html`에서 **Work with Local Repository**를 선택해 내 컴퓨터의 폴더를 바로 편집할 수도 있습니다(Chrome/Edge).

### 방법 2: Markdown 파일 직접 편집

```bash
npm run dev        # http://localhost:4321 에서 미리보기 (hidden 항목도 보임)
# src/content/... 파일을 추가·수정·삭제
git add -A && git commit -m "Add post" && git push   # push하면 자동 배포
```

## 블로그 글 형식

```markdown
---
title: Deduplicating web corpora with MinHash
description: 한 줄 요약 (목록, RSS, 검색 결과에 표시)
date: 2026-11-22
tags: [data, llm]
hidden: false       # true면 실제 사이트에는 안 보이고 로컬 미리보기에서만 보임
---

본문. 코드 블록, 표, 수식($E=mc^2$, $$...$$), 이미지(![설명](/images/파일.png))를 쓸 수 있습니다.
```

- 파일 이름이 주소가 됩니다: `src/content/blog/minhash-dedup.md` → `/blog/minhash-dedup`
- 이미지는 `public/images/`에 넣고 `/images/파일명`으로 참조합니다(웹 편집기로 올리면 자동 처리).
- 프로필 사진: `profile.md`의 `photo` (기본값 `/images/profile.jpg`). /admin → About & Profile → Profile photo에서 바꿀 수 있습니다.
- 공개 여부: 모든 항목(Work Experience, Education, Honors, Projects, Publications, Blog)에 `hidden` 스위치가 있습니다. /admin에서 **Hidden**을 켜거나 파일에 `hidden: true`를 쓰면 실제 사이트에서는 빠지고, `npm run dev` 미리보기에서는 "hidden" 표시와 함께 보입니다. 한 섹션의 항목이 모두 숨겨지면 섹션 제목도 함께 사라집니다.
- 썸네일: Projects·Publications·Blog 파일의 `image` (예: `/images/my-project.png`). /admin에서 각 항목의 Teaser image / Thumbnail로 업로드·선택하면 목록 왼쪽에 표시되고, 비어 있으면 회색 자리만 보입니다. 가로세로 4:3 비율이 가장 잘 맞습니다. 프로젝트와 블로그 글은 상세 페이지 맨 위에도 크게 표시됩니다.
- 홈 화면 첫 두 줄: `profile.md`의 `headline`(굵게)과 `tagline`.
- 홈 화면 Projects·Publications: /admin에서 "Show on home page"를 켠 항목(파일의 `featured: true` / `selected: true`)이 모두 표시됩니다. 하나도 켜지 않으면 위에서부터 3개가 대신 표시됩니다.
- 정렬: Experience, Projects, Honors는 `order` 값이 큰 것이 위로 옵니다. Projects의 `featured: true`, Publications의 `selected: true`는 홈 화면에 표시됩니다.

## 배포

- 저장소: https://github.com/jinhyung-park-info/jinhyung-park-info.github.io (기본 브랜치 `master`)
- 사이트: https://jinhyung-park-info.github.io
- `master`에 push하면 GitHub Actions(`.github/workflows/deploy.yml`)가 빌드해서 배포합니다. Actions 탭에서 진행 상황을 볼 수 있습니다.
- 2022년에 만든 예전 Jekyll 사이트는 삭제했지만 git 기록에는 남아 있어서, 필요하면 이전 커밋에서 파일을 꺼낼 수 있습니다.

개인 도메인을 쓰려면 Settings → Pages → Custom domain에 도메인을 넣고, `astro.config.mjs`의 `SITE_URL`도 바꿉니다.

## 명령어

| 명령 | 설명 |
|---|---|
| `npm install` | 의존성 설치 (처음 한 번) |
| `npm run dev` | 로컬 미리보기 |
| `npm run build` | 배포용 빌드 (`dist/`) |
| `npm run preview` | 빌드 결과 미리보기 |
