import React from "react";
import Order from "./Order.jsx";


const Orders = ({order}) => {

    // const ordersList = orders.map(order => {

    //     <div id='order' key={order.id}>

    //     </div>

    // })

    console.log('WHAT IS ORDERS', orders)

    const ordersList = orders.map(order => console.log('WHAT IS ORDER IN ORDERLIST', order),<Order key={order.id} order={order} />)

    return (
        <ul className="orders-list">
            {ordersList}
        </ul>
    )
}

export default Orders;

// class Orders extends React.Component {
//     constructor(props) {
//         super(props);
//     }
// }
