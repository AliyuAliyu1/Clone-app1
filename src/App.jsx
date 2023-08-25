import Navbar from './components/Navbar'; 
import './App.css';
import Footers from './components/Footer';
import Headers from './components/Header';





function App() {
  const mark1= "Items"
  const checker= false
  return (
     <>

     <div className='Header-component'>
     <Headers/>
     <div className='app-container'>
  <h1 className="conn"> Product List {checker ? '' : mark1} </h1>
  <Navbar className='navbar' />
  

  </div>
     </div>
    

  <p>
    hello
  </p>
  <p>
    hello
  </p>
  <p>
    hello
  </p>
  <p>
    hello
  </p>
  <p>
    hello
  </p>
  <p>
    hello
  </p>
  <p>
    hello
  </p>
  <p>
    hello
  </p>
  <p>
    hello
  </p>
  <p>
    hello
  </p>
  <p>
    hello
  </p>
  <p>
    hello
  </p>
  <p>
    hello
  </p>
  <p>
    hello
  </p>
  <p>
    hello
  </p>
  <p>
    hello
  </p>
  <p>
    hello
  </p>
  <p>
    hello
  </p>
  <p>
    hello
  </p>
  <p>
    hello
  </p>
  <p>
    hello
  </p>
 <div className='map'>
 <Footers/>
 </div>


 </>

  )
}

export default App
