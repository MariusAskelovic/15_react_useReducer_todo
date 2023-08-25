import { useState } from 'react';
import css from './Counter.module.css';

export default function Counter() {
  const [countNum, setCountNum] = useState(0);
  const [cred, setCred] = useState({
    email: '',
    pass: 'secret',
    town: 'Vilnius',
  });
  function goUp() {
    setCountNum(countNum + 1);
    setCred({ ...cred, email: 'james@bond.com' });
  }
  function goDown() {
    setCountNum(countNum - 1);
    setCred({ ...cred, pass: 'newiwww pass' });
  }
  console.log('cred ===', cred);
  return (
    <div>
      <h2>Counter</h2>
      <p className='counter'>{countNum}</p>
      <div>
        <button onClick={goUp}>UP</button>
        <button onClick={goDown}>DOWN</button>
      </div>
    </div>
  );
}
