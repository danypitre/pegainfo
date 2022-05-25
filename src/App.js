import './App.css';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { HomePage } from './HomePage';
import { Mobile } from './Mobile';




function App() {


  return (

<div className='App'>
  <BrowserRouter  basename={process.env.PUBLIC_URL}>

    <Routes> 
        <Route path='/' element={<HomePage/>} />
        <Route path='/mobile' element={<Mobile/>} />

    </Routes>
    </BrowserRouter>
  
</div>

      
      
    
  );
}

export default App;
