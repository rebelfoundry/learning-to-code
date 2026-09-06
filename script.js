document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.querySelector("#name");
    const greetButton = document.querySelector("#greet");
    const greeting = document.querySelector("#greeting");

    greetButton.addEventListener("click", function () {
        const name = nameInput.value.trim();

        if (name === "") {
            greeting.textContent = "Please type your name first.";
            return;
        }

        greeting.textContent = "Hello, " + name + "!";
    });
});