# helloworld — 인프런 실습 1

Claude Code로 진행한 첫 번째 실습 예제 모음입니다. Python, TypeScript, HTML로 작성한 간단한 Hello World / 입력값 출력 프로그램을 담고 있습니다.

## 구성

| 파일 | 설명 |
| --- | --- |
| `hello.py` | "Hello World"를 출력하는 Python 프로그램 |
| `index.html` | 입력값을 받아 화면에 출력하는 웹 페이지 |
| `app.ts` | 입력값 처리 로직 (TypeScript 원본) |
| `app.js` | `app.ts`를 컴파일한 결과 (브라우저 실행용) |
| `tsconfig.json` | TypeScript 컴파일 설정 |

## 실행 방법

### 1. Python 프로그램

```bash
python3 hello.py
```

출력:

```
Hello World
```

### 2. 웹 페이지 (입력값 출력)

입력창에 값을 입력하고 **출력** 버튼을 누르거나 **Enter** 키를 누르면 입력한 값이 화면에 표시됩니다.

브라우저에서 `index.html`을 직접 열거나, 로컬 서버로 실행합니다.

```bash
# macOS에서 바로 열기
open index.html

# 또는 로컬 서버로 실행 후 http://localhost:8000 접속
python3 -m http.server 8000
```

### TypeScript 다시 컴파일하기 (선택)

`app.ts`를 수정한 경우 아래 명령으로 `app.js`를 다시 생성합니다.

```bash
# TypeScript가 없다면 설치
npm install -g typescript

# tsconfig.json 설정대로 컴파일
tsc
```

## 요구 사항

- Python 3.x
- 최신 웹 브라우저
- (선택) TypeScript — `app.ts` 수정 시
