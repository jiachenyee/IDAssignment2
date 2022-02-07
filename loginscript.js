function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message-success", "form__message-error");
    messageElement.classList.add('form__message-${type}');
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#signin");
    const createAccountForm1 = document.querySelector("#signup1");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm1.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm1.classList.add("form--hidden");
    });
});