//---------------------------
//      USERNAME-ERROR   
//---------------------------

const userName = document.querySelector("#cadastro-form__username");
const erroTextUserName = document.querySelector("#cadastro-form__description-username");
const iconErroUserName = document.querySelector("#cadastro-form__icone-error-username");

userName.addEventListener("input", function(){

    const valorUserName = userName.value ;
    const userInvalido = valorUserName.length < 3;
    
    iconErroUserName.classList.toggle("error", userInvalido)
    userName.classList.toggle("error", userInvalido)
    if(userInvalido){
        erroTextUserName.textContent = "Use pelo menos 3 caracteres"
        erroTextUserName.style.color = "var(--erro)"
    }else{
        erroTextUserName.textContent = "3-20 caracteres: letras, números, _ ou -";
        erroTextUserName.style.color = ""
    }
})


//---------------------------
//          EMAIL-ERROR
//---------------------------

const email = document.querySelector("#cadastro-form__email");
const erroTextEmail = document.querySelector("#cadastro-form__description-email")
const iconErroEmail = document.querySelector("#cadastro-form__icone-error-email")

email.addEventListener("input", function(){

    const valorEmail = email.value;
    const validaEmail = !validarEmail(valorEmail)

    iconErroEmail.classList.toggle("erro", validaEmail)
    email.classList.toggle("erro", validaEmail)

    if(validaEmail){
        erroTextEmail.textContent = "Entre com um email válido, como you@example.com"
        erroTextEmail.style.color = "var(--erro)"
    }else{
        erroTextEmail.textContent = ""
    }

});

function validarEmail(email){
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regexEmail.test(email)
}