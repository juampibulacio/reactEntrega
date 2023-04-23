import Item from "../Item"
import Flex from "../Flex/Flex"


function ItemList ({products}) {
    return (
            <Flex>
            { products.map((producto) => (
            <Item
            key={producto.id}
            id={producto.id}
            title={producto.title}
            price={producto.price}
            category={producto.category}
            img={producto.img}
            offer={producto.offer}
            stock={producto.stock}
                />))
            }
                </Flex>
             )}

                export default ItemList