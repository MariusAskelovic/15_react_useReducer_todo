import { useState } from 'react';
import css from './Counter.module.css';

export default function Counter() {
  const [state, setState] = useState({ value: 0 });
  const [cred, setCred] = useState({
    email: '',
    pass: 'secret',
    town: 'Vilnius',
  });
  function goUp() {
    setState({ value: state.value + 1 });
    // setCred({ ...cred, email: 'james@bond.com' });
  }
  function goDown() {
    setState({ value: state.value - 1 });
    // setCred({ ...cred, pass: 'newiwww pass' });
  }
  console.log('cred ===', cred);
  return (
    <div>
      <h2>Counter</h2>
      <p className='counter'>{state.value}</p>
      <div>
        <button onClick={goUp}>UP</button>
        <button onClick={goDown}>DOWN</button>
      </div>
    </div>
  );
}
