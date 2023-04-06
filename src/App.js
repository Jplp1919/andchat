import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home"
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  return (
   /* <div className="App"> 
     <Login/>
    </div>*/
    <Router>
    <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home/>}/>
    </Routes>
  </Router> 
  
  
  
  );
}

export default App;
