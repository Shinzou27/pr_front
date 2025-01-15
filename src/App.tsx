import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { useAppSelector } from './app/hook';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const theme = useAppSelector((state) => state.theme.mode);

  return (

    <div className={`App w-full pt-[50px] ${theme}`}>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
