import React,{createContext, useReducer} from "react";
import { CartFunction } from "./CartFunction";
export const AddCart =  createContext()

const AddCartProvider = (props) =>
{
    const [carry, dispatch] = useReducer(CartFunction, {shoppingCart: [], totalAmount: 0, quantity: 0});
    return(
        <AddCart.Provider value={{...carry, dispatch}}>
            {props.children}
        </AddCart.Provider>
    )
}
export default AddCartProvider