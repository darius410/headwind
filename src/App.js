import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
// import { useState } from 'react';

function App() {
  
  // const [isAuth, setIsAuth] = useState(false);



  return (

    <BrowserRouter>

  
    <Routes> 
      <Route path="/" element={<Login/>} /> 
      <Route path="/FightcadeClone" element={<Login/>} /> 
      <Route path="/Login" element={<Login /> } />
      <Route path="/Register" element={<Register/>} /> 
      <Route path="/Dashboard" element={<Dashboard />} /> 
    
    </Routes>
  
</BrowserRouter>
    
    
  );
}

export default App;
