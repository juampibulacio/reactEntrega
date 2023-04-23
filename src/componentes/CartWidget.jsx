import { useContext } from "react";
import { cartContext, } from "../context/cartContext";

function CartWidget () {

    const {calcularTotal} = useContext(cartContext);
    

    return (
        <span role="img" aria-label="cart">🛒<span>
            
            {calcularTotal() > 0 && (calcularTotal())}
            
            
             
            </span></span>
    )
}

export default CartWidget 