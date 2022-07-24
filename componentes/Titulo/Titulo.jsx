import React from 'react';
import "./Titulo.css"

function Titulo(props) {
    return (
        <div className='titulo'>
            {props.titulo}
        </div>
    );
}

export default Titulo;