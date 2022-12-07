
const render = () => {
    const root = document.getElementById("root");
    const App = document.createElement("div")

    App.innerText = "Hello World w/ JS";

    const OrderForm = document.createElement("form");

    const name = document.createElement("input");
    name.placeholder = "Name";
    const address = document.createElement("input");
    address.placeholder = "Address";
    const items = document.createElement("input");
    items.placeholder = "Items";

    const submit = document.createElement("button");
    submit.innerText = "Submit"

    OrderForm.append(name, address, items, submit);
    App.append(OrderForm)
    root.append(App);
}

document.addEventListener('DOMContentLoaded', () => {
    render();
})

// WHAT REACTS BUILDS HTML FOR US -- building HTML is basically editting nodes in a tree
/*
const Form = () => {
    return (
        <div>

        </div>
    )
}
*/
