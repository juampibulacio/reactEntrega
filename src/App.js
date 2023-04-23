
import './App.css';
import Navbar from './componentes/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/cartContext';
import CartContainer from './componentes/CartContainer/CartContainer';

function App() {

  return (
    <>
<CartProvider>

    <BrowserRouter>
     
      <Navbar/>

      <Routes>
       
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryid" element={<ItemListContainer/>}/>
        <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<CartContainer/>}/>
        <Route path="*" element={ <p>404</p> }  /> 
      </Routes>
    </BrowserRouter>

    </CartProvider>
    </>
  );
}

export default App;


