import { getUnProducto } from "../../asyncmock";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";

const ItemDetailContainer = () => {
    const [products, setProducto] = useState (null);

    const {idItem} = useParams ();

    useEffect (() =>{
        getUnProducto(idItem)
        .then(res => setProducto(res))
    }, [idItem])
  
    return (
    <div>
        <ItemDetail {...products}/>
    </div>
  )

}

export default ItemDetailContainer