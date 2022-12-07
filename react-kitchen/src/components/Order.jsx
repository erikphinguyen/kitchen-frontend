import React from "react";

const Order = ({ order, state, setState }) => {

    const handleComplete = async (e) => {
        e.preventDefault();
        console.log('WHAT IS STATE', state)
        console.log('WHAT IS ORDER', order.isComplete)
        setState(!order.isComplete)
    }

    return (
        <li className="order">
            <span>{order.name}</span>
            <span>{order.address}</span>
            <span>{order.items}</span>
            <div>
                <button onClick={handleComplete}>{order.isComplete ? "Complete" : "Not Complete"}</button>
            </div>
        </li>
    )
}

export default Order;
