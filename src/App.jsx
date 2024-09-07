import './App.css'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './pages/home/Home'
import Error from './pages/nopage/Error'
import About from './pages/About/About';

function App() {

  return (
    <div className='overflow-hidden'>
   <Router id="main">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/*' element={<Error/>}/>
      {/* // <Route path='/Allproduct' element={<AllProducts/> */}
      <Route path='/About' element={<About/>}/>

    </Routes>
     
   </Router>
    </div>
  )
}

export default App
