import ContextProvider from './providers/ContextProvider';
import Example01 from './components/example01';
import Example02 from './components/example02';
import Example03 from './components/example03';
import Example04 from './components/example04';

function App() {
  return (
    <ContextProvider>
      <Example01>
        <Example02>
          <Example03>
            <Example04 />
          </Example03>
        </Example02>
      </Example01>
    </ContextProvider>
  );
}

export default App;
