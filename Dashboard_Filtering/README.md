# Wanted_Pre_onboarding Assignment from [Ateamventures]

## 3조 삼전십만가조

- [김상훈](https://github.com/Ho0on)
- [오동녘어진이](https://github.com/eojine94)
- [이나은](https://github.com/cotton-cotton)
- [홍정빈](https://github.com/tohjbin2)

## 🚀 배포 주소

[🔗 데모 링크](https://pre-onboarding-ateamventures.herokuapp.com/)

## 🖥 구현 영상

***전체 필터링***

![111](https://user-images.githubusercontent.com/88081661/153037525-d5239909-f0ca-45c6-b870-140d51dd8465.gif)

<br>

***모바일 반응형 사이드메뉴***

![2222](https://user-images.githubusercontent.com/88081661/153036947-1dc0fad4-3a24-474d-a436-4baa0c9f3451.gif)

## ✅ 과제 구현 목록

**_1) server 열고 data 받아오기_**

- json server 열고 data fetch 로직 구현

**_2) 견적 요청 카드 배치 및 토글기능 구현_**

- 전체적인 레이아웃 구현
- '상담중인 요청만 보기' 토글 버튼 구현
- data status가 '상담중'일 경우 '상담중' 뱃지 달아주기
- 토글 버튼의 상태가 ON일 경우 상담중인 카드만 출력, 반대로 상태가 OFF일 경우 전체 카드 출력

**_3) 필터링 박스 & 필터링 리셋_**

- 가공방식 / 재료 필터링 체크박스 구현
- 항목 체크시 항목에 해당되는 견적 요청 카드만 화면에 출력
- 필터링 리셋 클릭 시 견적 요청 카드 초기화 되어 출력

✨ 필터링 로직 설명 ✨

선택한 가공방식과 재료를 하나의 배열로 묶어서 요청 데이터의 가공방식, 재료와 비교하여 완전 포함된 것만 필터링 되도록 구현

**_4) 모바일 반응형_**

- 500px 이하 모바일 반응형 디자인 구현
- 사이드 메뉴 애니메이션 구현�

  <br>

## 💻 설치 및 시작하는 법

1. 파일 클론 받기

```
git clone https://github.com/Ho0on/wanted_pre_onborading_Ateamventures.git
```

2. 패키지 설치

```
npm install
```

3. json-server 실행

```
npx json-server --watch ./public/db/data.json --port 4000
```

4. 실행

```
npm start
```
