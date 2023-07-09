import '../_general.scss'
import './_item.scss'
import "aos/dist/aos.css"
import {Link} from 'react-router-dom';
import {useEffect} from "react";
import AOS from 'aos'

export const Item = (props, i) => {

    useEffect(() => {AOS.init({duration : 2000});}, [])

    return (
        <div className="card" data-aos={"zoom-in"}>
            <img src={props.producto.imagen} alt={props.producto.descripcion}></img>
            <h4>{props.producto.nombre}</h4>
            <Link to={`/item/${props.producto.id}`} className="btnKatmandu">+</Link>
        </div>
    )
}