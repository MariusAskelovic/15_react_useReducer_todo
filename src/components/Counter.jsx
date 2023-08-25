import { useState } from 'react';
import css from './Counter.module.css';
import { useReducer } from 'react';

const initCounterValue = { countNum: 0, countTitle: 'Push Ups' };

function counterReducer(state, action) {
  switch (action.type) {
    case 'UP':
      return { ...state, countNum: state.countNum + 1 };
    case 'DOWN':
      return { ...state, countNum: state.countNum - 1 };
    case 'UPBY':
      return { ...state, countNum: state.countNum + action.payloud };
    case 'RESET':
      return initCounterValue;
    case 'EDIT_TITLE':
      return { ...state, countTitle: action.payloud };

    default:
      console.warn('tipas nerastas');
      return state;
  }

  //   return state;
}

export default function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initCounterValue);

  //   const [state, setState] = useState({ countNum: 0 });
  const [cred, setCred] = useState({
    email: '',
    pass: 'secret',
    town: 'Vilnius',
  });
  function goUp() {
    dispatch({ type: 'UP' });
    // setState({ countNum: state.countNum + 1 });
    // setCred({ ...cred, email: 'james@bond.com' });
  }
  function goDown() {
    dispatch({ type: 'DOWN' });
    // setState({ countNum: state.countNum - 1 });
    // setCred({ ...cred, pass: 'newiwww pass' });
  }
  function goReset() {
    dispatch({ type: 'RESET' });
  }
  function upBy(howMuch) {
    console.log('howMuch ===', howMuch);
    dispatch({ type: 'UPBY', payloud: howMuch });
    // dispatch({ type: 'UPBY', betkas: howMuch });
  }
  function titleChange(event) {
    dispatch({ type: 'EDIT_TITLE', payloud: event.target.value });
  }

  //   console.log('cred ===', cred);
  return (
    <div className='card'>
      <input onChange={titleChange} type='text' placeholder='Change title' />
      <h2>{state.countTitle}</h2>
      <p className='counter'>{state.countNum}</p>
      <div>
        <button onClick={goUp}>UP</button>
        <button onClick={goDown}>DOWN</button>
        <button onClick={goReset}>RESET</button>
        <button onClick={() => upBy(10)}>up by 10</button>
      </div>
    </div>
  );
}
