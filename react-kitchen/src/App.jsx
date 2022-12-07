import { useState } from 'react';
import Orders from './components/Orders.jsx';
import OrderForm from './components/OrderForm';
import './App.css';

function App() {

  const [state, setState] = useState({
    completeOrders: {
      1: { id: 1, name: "erik", address: "address", items: "pizza", isComplete: true }
    },
    incompleteOrders: {
      2: { id: 2, name: "nguyen", address: "address", items: "pepsi", isComplete: false }
    }
  })



  return (
    <div className="App">
      {/* <OrderForm /> */}
      <span>Incomplete Orders:</span>
      <Orders orders={Object.values(state.incompleteOrders)} state={state} setState={setState} />
      <span>Complete Orders:</span>
      <Orders orders={Object.values(state.completeOrders)} state={state} setState={setState} />
    </div>
  )
}

export default App
