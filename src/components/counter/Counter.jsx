import { useReducer, useState } from 'react';

const initCounter = { value: 0 };

function counterReducer(state, action) {
  switch (action.type) {
    case 'upBy':
      return { value: state.value + action.payload };
    case 'up':
      return { value: state.value + 1 };
    case 'down':
      return { value: state.value - 1 };
    case 'reset':
      return { value: 0 };
    default:
      // throw new Error('tokio action tipo nera');
      console.warn('tokio action tipo nera');
      return initCounter;
  }
}

function Counter(props) {
  // sukurti state counterValue
  //   const [counterState, setCounterState] = useState(initCounter);
  const [state, dispatch] = useReducer(counterReducer, initCounter);

  // sukurti fn handleUp, handleDown, handleUpBy, handleReset
  function handleUp() {
    // setCounterState((prevCountState) => ({ value: prevCountState.value + 1 }));
    // setCounterValue(counterValue + 1); // not good

    dispatch({ type: 'up' });
  }
  function handleDown() {
    // setCounterState((prevCountState) => ({ value: prevCountState.value - 1 }));

    dispatch({ type: 'down' });
  }
  function handleUpBy(howMuch) {
    // setCounterState((prevCountState) => ({
    //   value: prevCountState.value + howMuch,
    // }));
    dispatch({ type: 'upBy', payload: howMuch });
  }
  function handleReset() {
    // setCounterState(initCounter);
    dispatch({ type: 'reset' });
  }

  return (
    <div className='card counter'>
      <p>Counter</p>
      <h2>{state.value}</h2>
      <div className='ctrl'>
        <button onClick={handleUp}>up</button>
        <button onClick={handleDown}>down</button>
        <button onClick={() => handleUpBy(10)}>up by 10</button>
        <button onClick={handleReset}>reset</button>
      </div>
    </div>
  );
}
export default Counter;
