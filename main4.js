// console.log("Hola a todos estoy aprendiendo javascript");
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("#clickmeid");
    if (button) {
        button.addEventListener("click", () => {
            alert("Button clicked!");
        });
    }

    const name = document.querySelector("#name");
    if (name) {
        name.addEventListener("input", () => {
            console.log(name.value);
        });
    }

    const form = document.querySelector("#form");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            console.log("Form submitted");
        });
    }

    const output = document.querySelector("#output");
    const increment = document.querySelector("#increment");
    if (increment && output) {
        increment.addEventListener("click", () => {
            output.textContent = parseInt(output.textContent) + 1;
        });
    }
});

