
export const CartFunction = (state, action) =>
{ const {shoppingCart, totalAmount, quantity} = state
    let product;
    let index;
    let upgradePrice;
    let upgradeQuantity;
    switch(action.type){
        case 'ADD_TO_CART':
            // console.log('add to cart')
            const check = shoppingCart.find(product => product.id === action.id)
            if(check)
            {
                return state
            }
                else{
                    product =action.product
                    product['quantity'] = 1;
                    upgradeQuantity = quantity +1
                    upgradePrice =  totalAmount + product.Price

                    return {shoppingCart: [product, ...shoppingCart], totalAmount: upgradePrice, quantity: upgradeQuantity}
                }
                  break;
                  case 'INCREMENT':
                      product = action.mainCart;
                      product.quantity = product.quantity + 1;
                      upgradePrice = totalAmount + product.Price;
                      upgradeQuantity = quantity + 1;
                      index = shoppingCart.findIndex(mainCart => mainCart.id === action.id);
                      shoppingCart[index] = product;
                      return{shoppingCart: [...shoppingCart],totalAmount: upgradePrice, quantity: upgradeQuantity}
                      break
                  case 'DECREMENT':
                      product = action.mainCart;
                        if(product.quantity > 1){

                            product.quantity = product.quantity -1
                            upgradePrice = totalAmount - product.Price;
                      upgradeQuantity = quantity - product.quantity;
                      index = shoppingCart.findIndex(mainCart => mainCart.id === action.id);
                      shoppingCart[index] = product;
                      return{shoppingCart: [...shoppingCart],totalAmount: upgradePrice, quantity: upgradeQuantity}

                        }
                        else{
                            return state;
                        }
                        break
                    case 'DELETE':
                       const filtered = shoppingCart.filter(product => product.id !== action.id) 
                       product = action.mainCart;
                       upgradeQuantity = quantity - product.quantity;
                       upgradePrice = totalAmount - product.Price * product.quantity;
                       return {shoppingCart:[...filtered], totalAmount: upgradePrice, quantity: upgradeQuantity}

                  default:
                      return state;
            }          
}
