
function ItemDetail ({product}) {
    return (
        <div>
            <br />
        <img src={product.img}></img>
        <h1>{product.title}</h1>
        <h3>{product.category}</h3>
        { product.offer && <h2>Oferta {product.offer}% </h2> }
        <p>Precio: ${product.price}</p>
        </div>
    )
}

export default ItemDetail

