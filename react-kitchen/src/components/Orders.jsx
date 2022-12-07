import React from "react";
import Order from "./Order.jsx";


const Orders = ({orders}) => {

    // const ordersList = orders.map(s => {

    //     <div id='order' key={order.id}>

    //     </div>

    // })

    const ordersList = orders.map(order => <Order key={order.id} order={order} />)
//,<Order key={order.id} order={order} />
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
