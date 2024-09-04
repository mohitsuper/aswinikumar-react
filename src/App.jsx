import './App.css'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './pages/home/Home'
import Error from './pages/nopage/Error'
function App() {

  return (
    <div className='overflow-hidden'>
   <Router id="main">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/*' element={<Error/>}/>
    </Routes>
     
   </Router>
    </div>
  )
}

export default App
