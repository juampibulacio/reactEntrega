import "./navbar.css";
import CartWidget from "./CartWidget";
import  { Link } from "react-router-dom";


function Navbar () {

 

return (
    <div className="container">
<div className="logo">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2IUmlY8D28JgP1l0oKZ-oBvgY-eh1iv7HJg&usqp=CAU" alt="" width="130"/>
  </div>
<nav>
  <ul>
    <li>
      <Link to="/"> Inicio</Link>
    </li>
    <li>
      <Link to="/category/Novela">Novelas</Link>
    </li>
    <li>
    <Link to="/category/Poesía">Poesía</Link>
    </li>
    <li>
    <Link to="/cart"><CartWidget/></Link>
    </li>

  </ul>
  </nav>
</div>

)

}

export default Navbar;