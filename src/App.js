import React, { useState } from 'react';

const App = () => {
  const init = 10;
  const [count, setCount] = useState(init);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const increment2 = () => setCount(previousCount => previousCount + 1);
  const decrement2 = () => setCount(previousCount => previousCount - 1);

  const reset = () => setCount(init);
  const double = () => setCount(count * 2);
  const nabeatu = () => setCount(count % 3 === 0 ? count / 3 : count);

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
        <button onClick={double}>x2</button>
        <button onClick={nabeatu}>3の倍数のときだけあほになる</button>
      </div>
    </>
  );
}

export default App;
