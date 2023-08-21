import { createSignal, type Component } from 'solid-js';

const App: Component = () => {
  const [state, _] = createSignal([])

  return (
    <>
      {state().map((item) => (<p>{item}</p>))}
      <div>
        {state().map((item) => (<p>{item}</p>))}
      </div>
    </>
  );
};

export default App;
