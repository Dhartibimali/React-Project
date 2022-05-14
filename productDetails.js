import React, {createContext, useState} from "react"

import fruits from "../Image/apple.jpg"
import Vegetable from "../Image/G2.jpg"
import Oranges from "../Image/g3.jpg"
import Grapes from "../Image/g4.jpg"
import Microphones from "../Image/e1.jpg"
import CellPhone from "../Image/e2.jpg"
import Laptops from "../Image/e3.jpg"
import Headphones from "../Image/e4.jpg"






export const ProductDetails = createContext();// createContext create function lai call garako



const Productprovider = (props) =>
{
    const [products] = useState([
        {id:1000, name: 'Apples', Price: 120, image: fruits},
        {id:1001, name: 'Mango', Price: 100, image: Vegetable},
        {id:1002, name: 'Oranges', Price: 130, image: Oranges},
        {id:1003, name: 'Grapes', Price: 160, image: Grapes},
        {id:1004, name: 'sony', Price: 4000, image: Microphones},
        {id:1005, name: 'Iphone', Price: 120000, image: CellPhone},
        {id:1006, name: 'Mac', Price: 1500000, image: Laptops},
        {id:1007, name: 'samsung', Price: 4500, image: Headphones}

    ])
    return(
        // provider means to provide the above mentione data to the child element
            <ProductDetails.Provider value={{products: [...products]}}>
                {props.children}
            </ProductDetails.Provider>
    )
}
export default Productprovider