import './_itemDetailContainer.scss'
import {AnimationContext} from "../../context/animationContext";
import {ItemDetail} from '../itemDetail/itemDetail'
import {useEffect, useState, useContext} from 'react';
import {useParams} from "react-router"
import db, { getFirestore } from '../../firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { doc, getDoc } from 'firebase/firestore';


export const ItemDetailContainer = () => {

     const [item, setItem] = useState(null);
     
     const {itemId} = useParams()
   
    const [itemExists, setItemExists] = useState(false)
    const [loading, setloading] = useState(true)
    const {animation, defaultOptions} = useContext(AnimationContext);

     useEffect(() => {
         const getItem = async () => {
             console.log(itemId)
            try {
                 const itemRef = doc(db, 'items', itemId);
                 const itemSnapshot = await getDoc(itemRef);

                 if (itemSnapshot.exists()) {
                     setItem({ ...itemSnapshot.data(), id: itemSnapshot.id });
                } else {
                     console.log('No existe el ítem');
                 }
             } catch (error) {
                 console.error('Error fetching item:', error);
             } finally {
                setloading(false)
                setItemExists(true)
             }
         };

         getItem();
     }, [itemId]);


    return (
        <main className="itemDetail">
           
                {itemExists ? (
                    <ItemDetail props={item} />
                ) : (
                    <p>Lo sentimos, este producto no existe</p>
                
            )}
        </main>
    )
}





// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import db from '../../firebase';
// import { doc, getDoc } from 'firebase/firestore';

// export const ItemDetailContainer = () => {
//     const { itemId } = useParams();
//     const [item, setItem] = useState(null);

//     useEffect(() => {
//         const getItem = async () => {
//             console.log(itemId)
//             try {
//                 const itemRef = doc(db, 'items', itemId);
//                 const itemSnapshot = await getDoc(itemRef);

//                 if (itemSnapshot.exists()) {
//                     setItem({ ...itemSnapshot.data(), id: itemSnapshot.id });
//                 } else {
//                     console.log('No existe el ítem');
//                 }
//             } catch (error) {
//                 console.error('Error fetching item:', error);
//             }
//         };

//         getItem();
//     }, [itemId]);

//     return (
//         <div>
//             {item ? (
//                 // Renderizar el detalle del ítem
//                 <div>
//                     <h2>{item.nombre}</h2>
//                     <p>{item.descripcion}</p>
//                     <p>Precio: {item.precio}</p>
//                     <img src={item.imagen} alt={item.nombre} />
//                 </div>
//             ) : (
//                 // Renderizar mientras se carga el ítem
//                 <p>Cargando...</p>
//             )}
//         </div>
//     );
// };