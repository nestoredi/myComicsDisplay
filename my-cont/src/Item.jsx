import React from 'react';


const Item = ({comic}) => {
    return (
        <div >
            <img src={comic.imagen}/>
            <p>{comic.nombre}</p>
        </div>
    );
}

export default Item;
