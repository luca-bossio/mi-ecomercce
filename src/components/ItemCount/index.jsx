import  "./itemCount.css";

import React from "react";

export const ItemCount = () => {
    return ( 
    <div className="count">
        <button>-</button>
        <span>2</span>
        <button>+</button>
        <div>
            <button>Agregar al carrito</button>
        </div>
    </div>

    );
}

export default ItemCount;