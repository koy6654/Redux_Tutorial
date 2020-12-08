# Redux Tutorial

Redux flow.png 참조

store는 1개                                         const store = createStore(reducer);
state : 직접 접속할 수 없고 data값 나타냄     
getState : state 값을 render로 가져옴                store.getState()
subscribe : state가 바뀔때마다 render시킴            store.subscribe(render)
action : 버튼 클릭 및 바뀔 객체라 생각
dispatch : action을 reducer에 전달 및 reducer 작동   store.dispatch(actions.decrement())
reducer : oldstate와 action을 받아 새로운 state 생성 (concat 같이 기존 data 건들지 않고 새로운 data 생성)

reducer로 새로운 state가 return되면 render가 다시 호출 되야됨
따라서 dispatch가 subscribe를 재호출
이에 따라 render가 다시 되야되고 getState로 인해 새로운 state가 화면에 갱신됨
            

