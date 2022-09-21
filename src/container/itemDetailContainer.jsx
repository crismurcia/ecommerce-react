import ItemDetailComponent from '../components/Item/itemDetailComponent';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = (key) => {

    const [item, setItem] = useState([]);
    let {idProducto} = useParams();

    const getItem = async () => {
        try {
            const response = await fetch(`https://api.mercadolibre.com/items/${idProducto}`);
            const data = await response.json(); 
            setItem(data); 
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getItem();
    }, [])

    return (
       <ItemDetailComponent item={item} />
    )
}

export default ItemDetailContainer;