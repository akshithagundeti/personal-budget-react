import logo from './logo.svg';
import './App.scss';

import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';

function App() {
  return (
    <Router>
      <Menu/>
      <Hero/>
      <div className="mainContainer">
                <Routes>
                    <Route path='/about' element={ <AboutPage/> } />
                    <Route path='/login' element= { <LoginPage/> }/>
                    <Route path='/' element= { <HomePage/> } />
                </Routes>
                {/* <RouterProvider router={ router }/> */}

            </div>
      <Footer/>
    </Router>
  );
}

export default App;
