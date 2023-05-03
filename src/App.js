import { Route, Routes } from 'react-router-dom';

import Calculator from './pages/Calculator';
import Quotes from './pages/Quotes';
import Home from './pages/Home';
import NavBar from './components/NavBar';

import './App.css';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/quotes' element={<Quotes />} />
      </Routes>
    </div>
  );
}

export default App;
