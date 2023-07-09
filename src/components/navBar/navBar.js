import './_navBar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {CartContext} from '../../context/cartContext';
import {CartWidget} from '../cartWidget/cartWidget'
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import {useContext} from 'react'

export const Navbar = () => {

    const {cart} = useContext(CartContext)

    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <h1><Link to ='/' className="logo">Katmandú</Link></h1>
                <button className="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarResponsive" 
                        aria-controls="navbarResponsive" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} size="1x" color="grey"/>
                </button>
                <ul className="collapse navbar-collapse navbar-nav" id="navbarResponsive">
                    <li className="nav-link"><NavLink to='/category/anillos' activeClassName="activeLink" className="link">Anillos</NavLink></li>
                    <li className="nav-link"><NavLink to='/category/collares' activeClassName="activeLink" className="link">Collares</NavLink></li>
                    <li className="nav-link"><NavLink to='/category/aros' activeClassName="activeLink" className="link">Aros</NavLink></li>
                    <li className="nav-link"><NavLink to='/category/pulseras' activeClassName="activeLink" className="link">Pulseras</NavLink></li>
                </ul>
                {cart.length > 0 && <CartWidget />}
      </nav>
        </header>
    )
}