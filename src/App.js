import { createStore } from 'redux';
import reducer from './reducer/index';
import * as actions from './actions/index';

const store = createStore(reducer);

export default function App() {

  function minusButton() {
    store.dispatch(actions.decrement())
    console.log(store.getState())
  }

  function plusButton() {
    store.dispatch(actions.increment())
    console.log(store.getState())
  }

  function changeColor() {
    store.dispatch(actions.changeColor([200, 200, 200]))
    console.log(store.getState())
  }

  function initialize() {
    store.dispatch(actions.initialize())
    console.log(store.getState())
  }

  return (
    <div>
      <div>
        <h1>Only Redux</h1>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ paddingRight: '10px' }}>
          <button style={{ padding: '20px' }} onClick={minusButton}>-</button>
        </div>
        <div style={{ paddingRight: '10px' }}>
          <button style={{ padding: '20px' }} onClick={plusButton}>+</button>
        </div>
        <div style={{ paddingRight: '10px' }}>
          <button style={{ padding: '20px' }} onClick={changeColor}>Change Color</button>
        </div>
        <div style={{ paddingRight: '10px' }}>
          <button style={{ padding: '20px' }} onClick={initialize}>Initialize</button>
        </div>
      </div>
    </div>
  );
}
