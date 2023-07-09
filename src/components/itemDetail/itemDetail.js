import '../_general.scss';
import './_itemDetail.scss';
import {CartContext} from '../../context/cartContext'
import {ItemCount} from '../itemCount/itemCount';
import {Link} from 'react-router-dom';
import {useContext, useEffect, Fragment} from 'react'

export const ItemDetail = ({props}) => {

    const {addItem, contador, setContador, onAdd, onSubmit, isInCart} = useContext(CartContext)

    const addToCart = () => {
        contador > 0 ? (
            addItem(props, contador)
        ):(
            alert(`No se pueden agregar ${contador} productos al carrito`))
    }

    useEffect (() => {setContador(0)}, [])

    return (
        <div className="cardDetail">
            <img src={props.imagen} alt={props.descripcion}></img>
            <div className="cardProp">
                <h1>{props.nombre}</h1>
                <h3>{props.descripcion}</h3>
                <h5>${props.precio}</h5>
                {isInCart(props) ? (
                    <Fragment>
                        <p>Agregaste este producto a tu carrito</p>
                        <Link to='/cart' className="btnDetail">Ir al carrito</Link>
                    </Fragment>
                ) : (
                    <Fragment>
                        <ItemCount 
                            count={contador}
                            item={props}
                            onAdd={onAdd} 
                            onSubstract={onSubmit} 
                            quantity={contador}
                            setter={setContador}
                            stock={props.stock}
                        />
                        {props.stock > 0 && <button onClick={addToCart} className="btnDetail">
                                                Agregar {contador} producto/s al carrito
                                            </button>}
                    </Fragment>)
                }
            </div>
        </div>
    )
}