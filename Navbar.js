import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { AddCart } from "../Global/AddCart";
const Navbar = () => {
    const {quantity} = useContext(AddCart)
    return(
        <nav>
            <ul className="Shop">
                <li>
                    <Link to="/">Shopping</Link>
                </li>
            </ul>
            <ul className="Todo">
                <li>
                    <Link to="carts">
                        <span className="cart"> <i class="fa-solid fa-cart-shopping"></i>
                        <span className="Count">{quantity}</span>
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;