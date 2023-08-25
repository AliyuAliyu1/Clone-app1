import Navbar from './components/Navbar'; 
import './App.css';
import Footers from './components/Footer';





function App() {
  const mark1= "Aliyu"
  const checker= false
  return ( <>
  
  <div className='app-container'>
  <h1 className="conn"> Helloo {checker ? '' : mark1} </h1>
  <Navbar className='navbar' />
  
  <div className='content'>
  <p >
  
  <Footers/>
    testing testing
  </p>
  </div>

  </div>
 <div className='map'>
 <Footers/>
  

 </div>
 </>

  )
}

export default App
