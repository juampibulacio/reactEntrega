import { createContext, useState } from 'react';
const cartContext = createContext ({cart: []});  
  
  

  function CartProvider(props) {
    const [cart, setCart] = useState([]);
    const newCart = JSON.parse(JSON.stringify(cart));
    


    function addItem (product, countFromCounter) {
         if(isIteminCart(product.id)) {
            const itemIndex = cart.findIndex(
                (itemInCart)=> itemInCart.id === product.id
                );
            newCart[itemIndex].count += countFromCounter;
        }
         else {
            newCart.push({... product, count:countFromCounter})
         }
         setCart(newCart);   
    }

    function isIteminCart(id) {
        return cart.some((itemInCart) => itemInCart.id === id);
    }

    function removeItem (id) {
        setCart ( 
        cart.filter((prod) => prod.id !== id)
        )
    }

    


    function getTotalPrice() {
        let total = 0
        cart.forEach(item => total += (item.price)*(item.count))
       return total.toFixed(2);
   }
   
 
   function calcularTotal() {
        let total = 0
        cart.forEach(item => total += item.count)
       return total;
   }
   
   function getCountInCart(id) {
    const item = cart.find((itemInCart) => itemInCart.id === id);
    return item !== undefined? item.count : 0;
   }
   


    return (
        <cartContext.Provider value={{cart, addItem,isIteminCart, getTotalPrice, getCountInCart, calcularTotal, removeItem}}>
            {props.children}
        </cartContext.Provider>
    )
  }

  export {cartContext, CartProvider}