import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductList from './components/ProductList';





function App() {
  const mark1= "Items"
  const checker= false
  return (
     <>
     

     <div className='Header-component'>
     
      
     <Header/>
     <div className='app-container'>
  <h1 className="conn"> Product List {checker ? '' : mark1} </h1>
  <Navbar className='navbar' />
  

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
