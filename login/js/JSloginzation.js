const login = document.getElementById("login");
const password = document.getElementById("password");
const validation = document.getElementById("validation");
const form = document.getElementById("form");
const validois = document.getElementById("validationdois")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checklogin()
    checkpassword()
})


function checklogin() {
    const loginerror = login.value;
    if (loginerror === "") {
        // Se o campo estiver vazio, mostre o erro
        checkinput(login);
        checkvalidation();
    } else {
        // Se o campo for preenchido, remova o erro
        removeError(login, validation);
    }
}

function checkpassword() {
    const passworderror = password.value;
    if (passworderror === "") {
        // Se o campo estiver vazio, mostre o erro
        checkinput(password);
        checkvalidationdois();
    } else {
        // Se o campo for preenchido, remova o erro
        removeError(password, validois);
    }
}

function checkinput(input) {
    const formItem = input.parentElement; 

    formItem.className = "label-error";
}

function checkvalidation () {
    const formItem = validation.parentElement;

    formItem.className = "validation-error";
}

function checkvalidationdois () {
    const formItem = validationdois.parentElement;

    formItem.className = "validation-error";
}

function removeError(input, validationDiv) {
    const formItem = input.parentElement;
    formItem.className = ""; 

    const validationItem = validationDiv.parentElement;
    validationItem.className = "validation";
}

