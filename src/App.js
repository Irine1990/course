
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import All from "./components/All";
import Career from './components/Career';
import Cybersecurity from './components/Cybersecurity';
import Fullstack from './components/Fullstack';
import DataScience from './components/DataScience';
import Card from './components/Card';




 function App() {

  return (
    <div className="App">
      <h1>COURSES BLOG</h1>
    
      <BrowserRouter>
        <NavBar />
        <Card/>
        <Routes>
          <Route path="/" />
          <Route path="/all" element={<All />} />
          <Route path="/fullstack" element={<Fullstack />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/datascience" element={<DataScience />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </BrowserRouter>
      
    </div>


  )
}
export default App;
