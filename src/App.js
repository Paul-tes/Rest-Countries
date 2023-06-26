import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Details />} />
    </Routes>
  );
}

export default App;
