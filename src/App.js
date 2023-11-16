
import './App.css';
import Create from './component/Create';
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from './component/Read';
import Update from './component/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Create/>}/>
      <Route exact path="/read" element={<Read/>}/>
      <Route exact path="/edit/:id" element={<Update/>}/>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
