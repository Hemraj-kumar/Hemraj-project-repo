import Home from './Components/Home';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
function App() {
  return (
    <div className="App">
      <particlesBack/>
      <Router>
        <Routes>
          <Route path="/"element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/skills" element={<Skills/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          {/* <Route element={<Home/>}></Route>
          <Route element={<Home/>}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
