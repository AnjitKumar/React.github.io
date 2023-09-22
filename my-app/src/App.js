import logo from './logo.svg';
import './App.css';
import Registrationform from './pages/Registrationform';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
    <Route path='/register' element={<Registrationform></Registrationform>}></Route>
    <Route path='/Login' element={<LoginForm></LoginForm>}></Route>
    <Route path='/home' element={<Home></Home>}></Route>
   </Routes>
   </BrowserRouter>
     
    </div>
  );
}

export default App;
