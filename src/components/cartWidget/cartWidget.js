import './_cartWidget.scss'
import {CartContext} from '../../context/cartContext';
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {NavLink} from 'react-router-dom';
import {useContext, useState, useEffect} from 'react'

export const CartWidget = () => {

    const {cart} = useContext(CartContext)
    const [total, setTotal] = useState(0);

    const quantityCount = (cart) => {
        const result = cart.reduce((acc, item) => (acc += item.quantity), 0);
        setTotal(result)
    };
      
    useEffect(() => {quantityCount(cart)}, [cart, total])    

    return (
        <div className="cartWidget">
            <NavLink to='/cart' activeClassName="activeLinkWidget" className="linkWidget">
                <FontAwesomeIcon icon = {faShoppingBag} />
                <p className="quantity">{total}</p>
            </NavLink>
        </div>
    )
} 