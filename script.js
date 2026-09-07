const nameInput = document.querySelector("#name");
const greetForm = document.querySelector("#greet-form");
const greeting = document.querySelector("#greeting");

greetForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();

    if (name === "") {
        greeting.textContent = "Please type your name first.";
        return;
    }

    greeting.textContent = "Hello, " + name + "!";
});
