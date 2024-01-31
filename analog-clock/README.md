# Analog Clock

> 리액트로 아날로그 시계를 구현한 프로젝트입니다.  
> 시계 UI 표출, 시계에 마우스 오버시 툴팁 노출하도록 하였습니다.

## 1. 내용

### `사용한 기술스택`

- **React, TypeScript**
- **Redux-toolkit**
  - redux devtools를 사용하여 디버깅을 쉽게 할 수 있고, redux 코드를 더 간단하게 작성할 수 있어 Redux-tookit을 사용하였습니다.
- **Styled Components**
  - 일정 시간마다 시계 및 툴팁 UI를 업데이트 해야하므로, javascript 환경을 최대한 이용하고 css와 데이터를 쉽게 공유하기 위해 Styled Components를 사용하였습니다.
  - 자식 컴포넌트, 스타일 컴포넌트의 구별을 용이하게 하기 위해 S-dot 네이밍을 사용하였습니다.

### `스토어 구성`

- **clock**
  - 시계 관련 정보를 관리하는 저장소입니다. (시침/분침/초침 각도, 현재 시간)

### `hooks 구성`

- **useRedux (@/src/hooks/useRedux.ts)**
  - dispatch, selector 사용시 매번 타입을 지정하는 코드를 작성하지 않도록, hook으로 작성하여 컴포넌트 내부에서 사용하였습니다.
- **useThrottle (@/src/hooks/useThrottle.ts)**
  - 필요한 곳에서 공통으로 사용할 수 있도록 throttle 코드를 hook으로 작성하였습니다.

### `utils 함수`

- **getClockData (@/src/utils/getClockData.ts)**
  - 시침/분침/초침 각도 및 현재 시간을 계산하여 반환하는 util 함수 입니다.
  - 스토어에서 초기값 설정시, 시계 컴포넌트 내부에서 일정 시간마다 데이터 업데이트시 사용하는 함수입니다.

### `화면 구성`

- **메인 화면 (@/src/App.tsx)**
  - 시계 화면 1개로만 화면을 구성했기 때문에, 따로 Pages 폴더 및 Router 구조 설정하지 않고 App.tsx를 메인 화면으로 작성하였습니다.
  - 메인 컴포넌트인 시계 컴포넌트를 표출하도록 하였습니다.

### `컴포넌트 구성`

- **마우스 오버 툴팁 (@/src/components/Tooltip/MouseHoverTooltip.tsx)**
  - 다른 곳에서도 사용할 수 있는 공통 컴포넌트로 작성하였습니다.
  - children으로 받은 내부 요소와 툴팁 UI를 div로 묶음으로써, 특정 범위 내부에서 마우스 움직임에 따른 툴팁 UI 표출 여부 및 위치 지정을 할 수 있도록 하였습니다.
  - throttle을 사용하여 렌더링 성능이 저하되지 않도록 하였습니다.
- **시계 (@/src/components/Clock/Clock.tsx)**
  - 1초마다 시계 관련 정보를 업데이트 할 수 있도록 setInterval을 사용하였습니다. (시침/분침/초침 각도, 현재 시간)
  - 시계 UI 업데이트를 위해 styled components prop으로 각도를 전달하여 UI 업데이트 될 수 있도록 하였습니다.

## 2. 실행 방법

```
npm install

npm run dev
```
