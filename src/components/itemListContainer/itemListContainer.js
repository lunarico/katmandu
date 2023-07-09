import '../_general.scss'
import './_itemListContainer.scss'
import "aos/dist/aos.css"
import {ItemList} from '../itemList/itemList'
import {useEffect} from "react";
import AOS from 'aos'

export const ItemListContainer = (props) => {

    useEffect(() => {AOS.init({duration : 2000});}, [])

    return (
        <main>
            <img src={props.logo} data-aos={"flip-left"} className="logo" alt="Logo Katmandú"></img>
            <ItemList/>
        </main>
    )
}