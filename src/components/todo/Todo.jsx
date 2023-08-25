const initTodos = [
  { id: 1, value: 'Buy Eggs', done: false, date: '' },
  { id: 2, value: 'Go to Shopping', done: true, date: '' },
  { id: 3, value: 'Do a 100 pushups', done: false, date: '' },
];

function Todo() {
  // sukirti useReducer() fn
  // atvaizduoti sarasa is state
  // atvaizduoti todo kurie yra baigti perbrauktus ir pilkus (prideti klase)
  // padaryti kad eitu prideti todo
  // sukuriant nauja todo prideti data i date
  // padaryti kad eitu istrinti todo
  // padaryti kad paspaudus ant title todo done apsiverstu
  // suskaidyti i atskirus komponentus

  return (
    <div>
      <h2>Welcome to our Todo</h2>

      <form>
        <fieldset>
          <legend>Add todo</legend>
          <input type='text' placeholder='Add todo' />
          <button type='submit'>Add</button>
        </fieldset>
      </form>

      {/* <TodoList list={todos} */}
      <ul>
        {/* <TodoItem item={item} */}
        <li>
          <span>Buy Milk (id) </span> <button>delete (id)</button>
        </li>
        <li>Do sports</li>
        <li>Pet a cat</li>
      </ul>
    </div>
  );
}

export default Todo;
