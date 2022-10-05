# React Native Cli react-native-web 설정

## react-native cli 프로젝트 생성

```bash
npx react-native init ${projectName} --template react-native-template-typescript
```

- (M2 맥북에어 기준) `cocoapods` 설치 선택 시 `gem`이 아닌 `brew` 선택
  - `gem` 선택 시 `pod install` 시 에러 발생
- 실행 확인

## react-native-web 설치

### web 실행을 위한 패키지 설치

```bash
yarn add react-dom react-native-web

yarn add -D react-scripts
```

- 패키지 버전 정보
  ```json
  {
    "dependencies": {
      "react": "18.1.0",
      "react-dom": "^18.2.0",
      "react-native": "0.70.1",
      "react-native-web": "^0.18.9"
    },
    "devDependencies": {
      "@babel/core": "^7.12.9",
      "@babel/runtime": "^7.12.5",
      "@react-native-community/eslint-config": "^2.0.0",
      "@tsconfig/react-native": "^2.0.2",
      "@types/jest": "^26.0.23",
      "@types/react-native": "^0.70.0",
      "@types/react-test-renderer": "^18.0.0",
      "@typescript-eslint/eslint-plugin": "^5.37.0",
      "@typescript-eslint/parser": "^5.37.0",
      "babel-jest": "^26.6.3",
      "eslint": "^7.32.0",
      "jest": "^26.6.3",
      "metro-react-native-babel-preset": "^0.72.1",
      "react-scripts": "^5.0.1",
      "react-test-renderer": "18.1.0",
      "typescript": "^4.8.3"
    }
  }
  ```

### 폴더 구조 생성

1. public/index.html 생성 : 이 때, `<div id=”root” />`로 등록할 id와 동일하게 등록
2. src 폴더 생성
   1. `app.tsx`, `app.json` 파일 `src` 폴더로 이동
   2. `index.js` 파일 `src` 폴더로 이동
   3. 루트 경로의 `index.js`를 `index.native.js`로 파일명 변경, import 경로 수정
3. `app.tsx` 내 지원하지 않는 컴포넌트 제거
4. `package.json` 내 웹 실행 명령어 추가
   - `"web": "react-scripts start"`

## 실행

---

```bash
# metro 실행
yarn start

# ios 실행
yarn ios

# android 실행
yarn android

# web 실행
yarn web
```

## react-native-navigation 설정

### docs 따라서 해당하는 패키지 설치

### iOS

```bash
npx pod-install ios
```

### Android

- `MainActivity.java` 파일에서 아래 코드 추가

  ```java
  // 최상단에 추가
  import android.os.Bundle;

  // 클래스 내에 추가
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
  ```

- 설치 후 android 및 ios 다시 빌드 → 실행 성공

## TODO

- [x] 기본 환경 설정
- [ ] `eslint` 적용
- [ ] `styled-components` 또는 `emotion` 적용
- [ ] 앱 배포 확인

## Reference

[Create a native and web app with React Native + React Native Web](https://aureliomerenda.medium.com/create-a-native-web-app-with-react-native-web-419acac86b82)
