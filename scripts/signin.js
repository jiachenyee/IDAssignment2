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
        window.location.href = "signup.html";
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        var inputUsername = document.getElementById("username").value;
        var inputPassword = document.getElementById("password").value;

        var request = new XMLHttpRequest();
        request.open("GET", "https://idassignment2-22a6.restdb.io/rest/member?apikey=620a818d34fd62156585852d", true);

        request.addEventListener("load", function() {
            if (request.status >= 200 && request.status < 400) {
                var data = JSON.parse(request.responseText);

                var member = data.filter(member => (member["username"] == inputUsername && member["password"] == inputPassword))[0]
                
                if (member == undefined) {
                    setFormMessage(loginForm, "error", "Authentication error. Try again with a different username or password.");
                } else {
                    localStorage.setItem("userInfo", JSON.stringify(member));
                    window.open(`/index.html`,"_self")
                }
            } else {
                setFormMessage(loginForm, "error", "Network error");
            }
        });
        
        request.addEventListener("error", function() {
            setFormMessage(loginForm, "error", "Network error");
        })
        
        request.send();
    });
})
