import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductList from './components/ProductList';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';


function App() {
  const mark1= "Items"
  const checker= false
  return (
     <>
     

     <div className='Header-component'>
     
      
     {/* <Header/> */}
     <div className='app-container'>
  <h1 className="conn"> Product List {checker ? '' : mark1} </h1>
  <div className='yes'>
            <About/>
            <Contact/>
            <HomePage/>
            <Login/>
            <NotFound/>
  </div>


  {/* <Navbar className='navbar' /> */}

  

  </div>
     </div>
    
     
     <ProductList/>
     <ProductList/>
     <ProductList/>
     <ProductList/>
     <ProductList/>
     <ProductList/>
 <div className='map'>
 <Footer/>
 </div>


 </>

  )
}

export default App
