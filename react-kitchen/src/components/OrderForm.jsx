import React from 'react'

function OrderForm() {
  return (
    <form>
        <label>
            Name
            <input
                type="text"
            />
        </label>
        <label>
            Address
            <input
                type="text"
            />
        </label>
        <label>
            Items
            <select>
                <option>Pineapple and Ham Pizza</option>
                <option></option>
                <option>Pepsi</option>
            </select>
        </label>
        <label>
            Complete
            <input
                type="checkbox"
            />
        </label>
    </form>
  )
}

export default OrderForm
