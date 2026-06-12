# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 개요

인프런 강의 실습용 Hello World 예제 모음입니다. 빌드 시스템, 패키지 매니저(`package.json` 없음), 테스트 프레임워크가 없는 단일 파일 단위의 교육용 저장소입니다. 각 파일은 독립적인 언어별 예제(Python, TypeScript/HTML)입니다.

## 명령어

```bash
# Python "Hello World" 실행
python3 hello.py

# 웹 페이지 실행 (둘 중 하나)
open index.html                  # 브라우저에서 직접 열기 (macOS)
python3 -m http.server 8000      # http://localhost:8000 접속

# TypeScript 재컴파일 (app.ts 수정 후 필수)
npm install -g typescript        # tsc가 없을 경우 1회 설치 (전역)
tsc                              # tsconfig.json 설정대로 app.ts → app.js 생성
```

이 저장소에는 `package.json`이 없으므로 `npm install` / `npm run` 워크플로우가 존재하지 않습니다. TypeScript는 전역(`-g`) 설치에 의존합니다.

## 아키텍처상 주의점

**TypeScript → JavaScript 컴파일 의존성**: `index.html`은 `<script src="app.js">`로 컴파일 결과물만 로드합니다. 원본인 `app.ts`를 수정해도 `tsc`로 재컴파일하지 않으면 브라우저에 반영되지 않습니다. `app.js`는 생성물이므로 직접 수정하지 말고 `app.ts`를 수정한 뒤 재컴파일하세요.

- `tsconfig.json`: `strict: true`, target `ES2017`, module `ES2015`, `include`는 `app.ts`만 대상으로 함
- DOM 연결: `app.ts`의 `getElementById` ID들(`userInput`, `submitBtn`, `output`)은 `index.html`의 요소 `id`와 정확히 일치해야 동작함

## 언어

이 저장소는 한국어 프로젝트입니다. README, UI 텍스트, 주석은 한국어로 작성되어 있습니다.
