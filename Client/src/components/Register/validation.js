export default function validation(input){
    const error = {};

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPassword = new RegExp("[0-9]");

    if(!regexEmail.test(input.email)) {
        error.email = "Debes ingresar un email valido";
    }
    if(!input.email) {
        error.email = "Debes ingresar un email";
    }
    if(input.email.length > 35) {
        error.email = "No puede ser mayor a 35 caracteres";
    }
    if(!regexPassword.test(input.password)) {
        error.password = "El password debe contener al menos un número";
    }
    if(input.password.length < 6 || input.password.length > 10) {
        error.password = "El password debe tener entre 6 10 caracteres!"
    }
    return error;
}