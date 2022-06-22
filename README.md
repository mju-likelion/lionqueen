# LionQueen in LionTown - Frontend 🦁

## Hello, We are the lions of MJU!

<br/>
<br/>

## How to Start?

```
# Step 0 : 처음 시작한 경우
yarn install

# Step 1 : 실행
yarn dev
```

<br/>

## ⭐ Info for Members

```
1. next.js 특징 - pages 폴더에 새로 폴더를 만들면 Route가 자동으로 생성되니,  따로 Route 컴포넌트를 만들지 않아도 됩니다.

2. 브랜치 merge 전, 반드시 1명 이상의 코드 리뷰가 요구됩니다.

3. 본 프로젝트에서는 스토리북을 사용 중입니다. 참고해주세요!

4. 스트레스는 안 돼요! 우리 즐겁게 개발합시다! 🐣
```

<br/>

## 🌞 Tech Stack

```
• 주요 개발 언어 및 프레임워크
- Next.js, TypeScript

• 페이지 스타일링
- tailwindCSS

• 배포 및 CDN
- AWS

• etc
- StoryBook
```

<br/>

## 🧃 Git branch & [Git Flow](https://techblog.woowahan.com/2553/)

```
main

develop (default)

feature

release: 배포 준비 단계

hotfix: 배포 후 문제 수정
```

<br/>

## 🍀 Git Commit Message

| 헤더     | 내용                                                |
| -------- | --------------------------------------------------- |
| feat     | 새로운 기능 추가                                    |
| refactor | 코드 리팩토링                                       |
| fix      | 버그 수정                                           |
| style    | 세미 콜론 수정, 줄바꿈, css 변경 등 기능과 무관한 스타일 변경 |
| setting  | 빌드수행, 패키지 설치, 환경 설정 수정 등            |
| docs     | 주석 추가 및 삭제, readme 작성                         | 

## Signin

- 임의로 **maxLength**를 25로 걸어두었는데 추후에 없애거나 수정하겠습니다.
- 초기화면으로 **id**는 **lionid**, **password**는 **lionpassword**입니다.
<br/>

- 해당 id 및 비밀번호로 로그인 시에 **input 창이 초기화** 되며 콘솔에 Login success! 를 확인할 수 있습니다.
![](https://velog.velcdn.com/images/abroak07/post/54ab6d03-ca48-44a2-bc3b-aa4f75efcf37/image.png)
<br/>

- 해당 계정 외에 다른 계정으로 로그인 시에 초기화되지 않으며 **에러메시지**와 콘솔에 Login Failed..를 확인할 수 있습니다.
![](https://velog.velcdn.com/images/abroak07/post/05efd9d9-014a-4ebe-a542-4c8648c9fa5a/image.png)