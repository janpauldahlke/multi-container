import './App.css';
import Otherpage from './Otherpage';
import Fib from './Fib';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h2>Fib Calculator</h2>
      <BrowserRouter>
        <Fib />
        <Otherpage />
      </BrowserRouter>
    </div>
  );
}

export default App;
