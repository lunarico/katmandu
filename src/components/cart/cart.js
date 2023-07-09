import '../_general.scss'
import './_cart.scss'
import {CartContext} from "../../context/cartContext";
import {Fragment, useContext} from "react";
import {ItemCart} from '../itemCart/itemCart'
import {Link} from 'react-router-dom';

export const Cart = () => {
  const {cart, clearCart, totalPrice} = useContext(CartContext);

  return (
    <main className="cart">
      {cart.length > 0 ? (
        <Fragment>
          <h2>Mi Carrito</h2>
          <div className="listCart">
            {cart.map((props, i) => <ItemCart item={props} key={i}/>)}
          </div>
          <p className="total">Total a pagar: ${totalPrice(cart)}</p>
          <Link className="btnCart" to ='./form'>Comprar</Link>
          <button onClick={clearCart} className="btnCart vaciar">Limpiar carrito</button>
        </Fragment>
      ) : (
        <div className="noProducts">
          <p>No tenés productos agregados al carrito</p>
          <Link to ='/' className="btnKatmandu">Ver nuestros productos</Link>
        </div>
      )}
    </main>
  );
};