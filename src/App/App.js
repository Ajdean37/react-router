import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from '../views/HomeView/HomeView';
import AboutView from '../views/AboutView/AboutView';
import NoMatchView from '../views/NoMatchView/NoMatchView';
import Navbar from '../components/Navbar/Navbar';



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='About' element={<AboutView />} />
        <Route path='*' element={<NoMatchView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
