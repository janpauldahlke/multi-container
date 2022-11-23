import './App.css';
import Otherpage from './Otherpage';
import Fib from './Fib';
import NotFound from './NotFound';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>Welcome to multicontainer fibonaccci sequence</h1>
          <Link to="/">to home</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/otherPage">to other</Link>
        </header>
        
        <div>
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route exact path="/" element={<Fib />}></Route>
            <Route path="/otherpage" element={<Otherpage />}></Route>
          </Routes>
          </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
