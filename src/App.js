import {  Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AuthorPage from './pages/AuthorPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Podcasts from './components/Podcasts';
import MenuModal from './components/MenuModal';
import SignUp from './components/SignUp';
import Book from './components/Book';

function App() {
  return (
    <Router>
      <div className='body'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<AuthorPage/>}/>
          <Route path='/podcasts' element={<Podcasts/>}/>
          <Route path='/book' element={<Book/>}/>
        </Routes>
        <Footer/>
      </div>

    </Router>
  );
}

export default App;
