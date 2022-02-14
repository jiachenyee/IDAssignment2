function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message-success", "form__message-error");
    messageElement.classList.add(`form__message-${type}`);
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#signin");
    const APIKEY = "";


    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        window.location.href = "signupform.html";
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        //perform ajax/fetch login here

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });
})
