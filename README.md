# JMDB_API Read Me

> Vue.js와 Open api를 이용한 영화검색 사이트 입니다.  
연도별, 시리즈별, 에피소드 별로 검색이 가능하며 , 한 번에 10 -30개까지 검색이 가능합니다.
또한 검색된 영화의 포스터 부분을 누르면 영화의 상세정보를 볼 수 있는 상세페이지로 이동합니다.
component를 간단하게 하기 위해서 Vuex를 사용했고, Vue-router를 사용하여 화면간의 전환을 간편하게 할 수 있도록 적용했습니다.
또한 Scss를 적용하여 코드를 더욱 간결하게 보이도록 구현했습니다.


![ezgif com-gif-maker](https://user-images.githubusercontent.com/82005305/135117113-a16c2cd5-f156-4720-a87c-f4a0259a0930.gif)

<br><br>

![ezgif com-gif-maker](https://user-images.githubusercontent.com/82005305/135117720-90b32ce8-10a8-4e36-92e3-525e55062386.gif)



# Installation

## **Project setup**

```jsx
npm install
```

### **Compiles and hot-reloads for development**

```
npm run serve

```

### **Compiles and minifies for production**

```jsx
npm run build
```

### Sass-loader

```jsx
sass-loader@10.0.5 node-sass
```

# 기능설명

## Search(메인페이지)

- 검색창 : 검색창에 제목과 검색 개수, 연도를 설정하고 검색버튼을 누른다.
- 검색어가 비어있거나, 잘못되었을 경우에는 다시 입력해 달라는 문구가 뜨면서 검색이 되지 않는다.
- 영화포스터 : 검색된 영화포스터에는 개봉일과 제목이 같이 나오며, 포스터를 클릭하게 되면 상세페이지로 이동하게 된다.

## Movie(상세페이지)

- 영화의 정보가 뜨기전 스켈레톤 이미지와, 로딩애니메이션이 뜨도록 설정하였다.
- 영화의 개봉일, 상영시간, 제목, 출연자. 감독, 별점, 영화사 등의 정보가 나온다

## About페이지

- 개발자의 상세정보를 표시해둠
