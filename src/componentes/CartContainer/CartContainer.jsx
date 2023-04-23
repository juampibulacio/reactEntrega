import React, {useContext} from "react";
import { cartContext } from "../../context/cartContext";
import Flex from "../Flex/Flex";
import { createOrder } from "../../services/firestore";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import FormCheckout from "./FormCheckout";



function CartContainer() {
    const context = useContext(cartContext)
    const {cart, getTotalPrice, removeItem} = context;


async function handleCheckout(userData) {

    const order = {
        items: cart,
        buyer: userData,
        total: getTotalPrice(), 
        date: new Date(),
    }
    const orderId = await createOrder(order);
    
    const orderComplete = await swal({
        title: "¡Gracias!",
        text: "Tu compra se realizó correctamente. \n Tu número de compra es: \n " + orderId,
        icon: "success",
      });
   

    //Limpiar carrito:
    setInterval("location.reload()",500);
    
} 



    return (
        <Flex>
<div>
{cart.length < 1 && 
<div><h1> Tu carrito está vacío </h1>
<h3>
      <Link to="/"> Volver a Inicio</Link>
</h3>
</div>
 }


{cart.length > 0 && ( <div>
    <h1>Tu carrito</h1>
    {
        cart.map( (item) => 
        <div key={item.id}>
         <h2> {item.title} </h2>
         <p>cantidad: {item.count} </p>
         <p>precio: ${((item.price)*(item.count)).toFixed(2)} </p>
         <button onClick={()=> removeItem(item.id)}> remover </button>
         </div>
         ) 
     }
     <br />
 <span><h3>El total de tu compra es de: ${getTotalPrice()} </h3></span>
 <br />
 <br />
 <FormCheckout onCheckout={handleCheckout} />
</div>  )  }

</div>
</Flex>
)
}

export default CartContainer; 