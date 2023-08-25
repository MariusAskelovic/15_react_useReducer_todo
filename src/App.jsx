import './App.css';
import Counter from './components/Counter';
import Todo from './components/todo/Todo';

export default function App() {
  return (
    <div className='container'>
      <h1>Use reducer</h1>
      {/* <Counter /> */}
      <Todo />
    </div>
  );
}
