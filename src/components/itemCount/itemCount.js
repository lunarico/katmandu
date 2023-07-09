import { Fragment } from 'react';
import './_itemCount.scss'
import {Link} from 'react-router-dom';

export const ItemCount = ({onSubstract, onAdd, count, setter, quantity, stock}) => {    
    return (
        <div className="contadorCont">
            {stock > 0 ? (
                <div className="contador">
                    <button onClick={() => onSubstract(count, setter)} className="resta">-</button>
                    {quantity}
                    <button onClick={() => onAdd(count, setter, stock)} className="suma">+</button>
                </div>
            ):(
                <Fragment>
                    <p className="noStock">Lo sentimos, no tenemos más stock de este producto</p>
                    <Link to={'/'} className="btnDetail">Volver</Link>
                </Fragment>
            )} 
        </div>
    )
}
export default ItemCount;