
function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message-success", "form__message-error");
    messageElement.classList.add('form__message-${type}');
}

function setInputError(inputElement, message){
    inputElement.classList.add("form__input-error");
    inputElement.parentElement.querySelector(".form__input-message-error").textContent = message;
}

function clearInputError(inputElement){
    inputElement.classList.remove("form__input-error");
    inputElement.parentElement.querySelector(".form__input-message-error").textContent = "";
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

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        //perform ajax/fetch login here

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "username" &&e.target.value.length > 0 && e.target.value.length < 8){
                setInputError(inputElement, "Username must be at least 8 characters in length.");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});


/*
function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector(".form__message");
  
    messageElement.textContent = message;
    messageElement.classList.remove("form__message-success", "form__message-error");
    messageElement.classList.add('form__message-${type}');
  }
  
  function setInputError(inputElement, message){
    inputElement.classList.add("form__input-error");
    inputElement.parentElement.querySelector(".form__input-message-error").textContent = message;
  }
  
  
  function clearInputError(inputElement){
    inputElement.classList.remove("form__input-error");
    inputElement.parentElement.querySelector(".form__input-message-error").textContent = "";
  }
  
  document.addEventListener("DOMContentLoaded", () =>{
    const loginForm = document.querySelector("#signin");
    const createAccountForm = document.querySelector("#signup1");
  
    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
      e.preventDefault();
      loginForm.classList.add("form--hidden");
      createAccountForm.classList.remove("form--hidden");
    });
  
    document.querySelector("#linkLogin").addEventListener("click", e => {
      e.preventDefault();
      loginForm.classList.remove("form--hidden");
      createAccountForm.classList.add("form--hidden");
    });
  
    loginForm.addEventListener("submit", e => {
      e.preventDefault();
  
      //perform your ajax/fetch login
  
      setFormMessage(loginForm, "error", "Invalid username/password combination");
    });
  
    document.querySelectorAll(".form__input").forEach(inputElement => {
      inputElement.addEventListener("blur", e => {
        if (e.target.id === "username" && e.target.value.length > 0 && e.target.value.length < 8){
          setInputError(inputElement, "Username must be at least 8 characters in length.");
        }
      });
  
      inputElement.addEventListener("input", e => {
        clearInputError(inputElement);
      });
    });
  });
  */