
import React, {useContext} from "react";
import {ProductDetails} from "../Global/productDetails"
import { AddCart} from "../Global/AddCart";
import Background from './Background'


const Product = () =>
{
const {products} = useContext(ProductDetails);
const {dispatch} = useContext(AddCart)

    return(
    < div className='container'>
        <Background/>
    
       <div className="Produts">
           {products.map((product)=>(
               <div className="product" key={product.id}>
                   <div className="image">
                       <img src={product.image} alt="Not Found"/>
                       </div>
                       <div className="details">
                           <div className="name">
                               {product.name}
                               </div>
                               <div className="price">
                                   ${product.Price}.00
                                   </div>
                                   {/* <div className="productdescription">
                                   {product.description}
                                   </div> */}
                           </div>
                           <div className="Add" onClick={() => dispatch({type: 'ADD_TO_CART',
                            id: product.id, product: product})}>Add To Cart</div>
                   </div>
           ))}
       </div>
    
    </div>
    
    )
}
export default Product;