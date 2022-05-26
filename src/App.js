import './App.css';
import { Routes, Route, Link, BrowserRouter, HashRouter } from "react-router-dom";
import { HomePage } from './HomePage';
import { Mobile } from './Mobile';




function App() {


  return (

<div className='App'>


    <Routes> 

        <Route path='/' element={<HomePage/>} />
        <Route path='/mobile' element={<Mobile/>} />

    </Routes>
   
</div>

      
      
    
  );
}

export default App;
