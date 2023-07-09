import '../_general.scss';
import './_itemList.scss';
import { AnimationContext } from "../../context/animationContext";
import { Item } from '../item/item';
import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { useParams } from "react-router";
import db from "../../firebase";
import { collection, getDocs, query, where } from 'firebase/firestore';

export const ItemList = () => {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
    const [itemExists, setItemExists] = useState(false);
    const { animation, defaultOptions } = useContext(AnimationContext);

    useEffect(() => {
        const getProducts = async () => {
            console.log(categoryId)
            try {
                const itemCollection = collection(db, 'items');
                
                if (categoryId) {
                    const itemsCategory = query(itemCollection, where('categoryId', '==', categoryId));
                    const querySnapshot = await getDocs(itemsCategory);
                    const itemsFiltered = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                    setItems(itemsFiltered);
                } else {
                    const querySnapshot = await getDocs(itemCollection);
                    const allItems = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                    setItems(allItems);
                }
                
                setItemExists(true);

                console.log(categoryId)
            } catch (error) {
                console.error('Error fetching items:', error);
            }
            console.log(categoryId)
        };

        getProducts();
    }, [categoryId]);

    return (
        <div className="productList">
            {itemExists ? (
                items.length > 0 ? (
                    items.map((props, i) => <Item producto={props} key={i} />)
                ) : (
                    <div className="noProducts">
                        <p>Disculpanos, en este momento no tenemos estos productos para mostrar</p>
                        <Link to={'/'} className="btnKatmandu">Ver nuestros productos</Link>
                    </div>
                )
            ) : null}
        </div>
    );
};
