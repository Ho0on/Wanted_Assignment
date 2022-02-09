## Wanted-pre-onboarding 1st Assignment

## 3조 삼전십만가조 

- [김상훈](https://github.com/Ho0on)
- [오동녘어진이](https://github.com/eojine94)
- [이나은](https://github.com/cotton-cotton)
- [홍정빈](https://github.com/tohjbin2)

### 1. 배포 주소

[데모 링크](http://mycurrencycalculator.s3-website.ap-northeast-2.amazonaws.com)

### 2. 과제 구현 목록

- 첫번째 계산기 (담당자 : 오동녘어진이, 김상훈)

1. select box로 한국, 필리핀, 일본 3개의 국가 중 하나를 선택할 수 있는 기능.
2. 국가를 선택했을때 해당 국가의 통화와 달러 단위의 환율을 보여준다.
3. 송금액을 입력했을때 환율에 따라 계산을 하여 submit버튼을 눌렀을때 총 수취금액 출력.
4. 수취금액이 소수점 두자리까지 출력되고 세자리 수마다 콤마를 찍어준다.
5. 송금액 0보다 작거나 10000보다 클경우 경고창 띄우기.

- 두번째 계산기 (담당자 : 이나은, 홍정빈)

1. select box로 한국, 미국, 홍콩, 일본, 중국, 캐나다 6개의 국가 중 하나를 선택할 수 있는 기능.
2. 하단 Tab바에도 위와같이 5개의 국가를 나열(select box에서 선택된 국가는 제외)
3. 하단 Tab바 선택된 국가의 통화 기준으로 레이아웃 변경.
4. 입력된 금액 값이 1000이 넘을 경우 자동적으로 1000으로 변경.
5. 사용자의 수치 입력에 따라 환율에 따라 총 금액이 계산되어 출력된다.
6. API에서 timestamp를 받아와 기준일을 날짜 포맷에 맞게 출력한다.

### 3. 설치 및 시작하는 법

1) 파일 클론 받기

```
git clone https://github.com/eojine94/wanted_currency_calculator
```

2) node-modules 설치

```
cd wanted_currency_caculator
npm install
```

3) .env 파일 추가하여 코드 작성

```
 REACT_APP_API_ADDRESS=http://api.currencylayer.com/live?access_key={API키}
```

4) 실행

```
npm start
```

### 4. 기능별 영상

***첫번째 계산기***

</br>

<img src='https://user-images.githubusercontent.com/63281199/151019550-7a7c098e-4008-4d40-8b13-ea5bebc4b3e0.gif'/>

</br>
<hr/>
</br>

***두번째 계산기***

</br>

<img src='https://user-images.githubusercontent.com/63281199/151019622-03a4d1cb-daa4-4d97-8372-292c2be96840.gif'/>
