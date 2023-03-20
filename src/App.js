import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}

      {/* <Signup></Signup> */}

      {/* <Home></Home> */}

      {/* <Navbar></Navbar> */}

    
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}> </Route> 
        <Route path='/login' element={<Login/>}> </Route>
        <Route path='/signup' element={<Signup/>}> </Route>
      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
