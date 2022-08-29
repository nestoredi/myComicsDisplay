import React from 'react';
import Item from './Item';

const ItemList = ({lista}) => {
    return (
        <div>
            {lista.map((comic)=>
           <Item comic={comic}/>
           )}
        </div>
    )
        
}

export default ItemList;
