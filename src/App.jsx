import Navbar from './components/Navbar'; 
import './App.css';


function App() {
  const mark1= "Aliyu"
  const checker= false
  return ( <>
  
  <div className='app-container'>
  <h1 className="conn"> Helloo {checker ? '' : mark1} </h1>
  <Navbar />
  <div className='content'>
  <p >
    
    testing testing
  </p>
  </div>

  </div>
 <p>
  house
 </p>
 </>

  )
}

export default App
