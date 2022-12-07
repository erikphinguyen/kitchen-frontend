const render = () => {
    const root = document.getElementById("root");
    const App = document.createElement("div")

    App.innerText = "Hello World w/ JS";

    root.appendChild(App);
}

document.addEventListener('DOMContentLoaded', () => {
    render();
})
