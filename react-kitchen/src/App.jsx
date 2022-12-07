import { useState } from 'react';
import Orders from './components/Orders.jsx';
import OrderForm from './components/OrderForm';
import './App.css';

function App() {

  const [state, setState] = useState({
    completeOrders: {
      1: { id: 1, name: "erik", address: "address", items: "pizza" }
    },
    incompleteOrders: {
      2: { id: 2, name: "nguyen", address: "address", items: "pepsi" }
    }
  })



  return (
    <div className="App">
      <OrderForm />
      <Orders />
    </div>
  )
}

export default App
