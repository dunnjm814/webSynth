import React from 'react'
import './Square.css'

const Square = ({ active, value, onClick, selected }) => {
    return (
        <div
            className={(active && "cell seq-active") || "cell"}
            style={{backgroundColor: selected}}
            onClick={onClick}
        >
            {value}
        </div>
    );
};

export default Square;