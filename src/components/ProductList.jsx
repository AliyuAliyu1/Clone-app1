
import products from "./products";

const ProductList = () => { 
     return ( 
          <div> {products.map((product) => ( 
              <div key={product.id}> 
                  <h3>{product.name}</h3> 
                  <p>${product.price}</p> 
               </div> ))} 
          </div> ); }; 
export default ProductList;