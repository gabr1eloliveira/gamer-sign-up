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


//-----------------------------------------
//          SENHA - CONFIRMAR SENHA - ERROR
//-----------------------------------------

const senha = document.querySelector("#cadastro-form__senha");
const erroTextSenha = document.querySelector("#cadastro-form__description-senha");
const iconErroSenha = document.querySelector("#cadastro-form__icone-error-senha");
const forcaSenha = document.querySelector(".forca-senha__nivel");
const forcaSenhaStatus = document.querySelector(".cadastro-form__senha-forca-status")

senha.addEventListener("input", function(){
    const senhaValor = senha.value
    const senhaInvalida = senhaValor.length < 8

    iconErroSenha.classList.toggle("erro", senhaInvalida)
    senha.classList.toggle("erro", senhaInvalida)

    if(senhaInvalida){
        erroTextSenha.style.color = "var(--erro)"
    }else{
        erroTextSenha.style.color = "var(--cor-texto)"
    }

    //FORÇA SENHA

    let ponto = 0
    if(senhaValor.length >= 8) ponto++;
    if(/[a-z]/.test(senhaValor) && /[A-Z]/.test(senhaValor))ponto++;
    if(/[0-9]/.test(senhaValor))ponto++;
    if(/[^a-zA-Z0-9]/.test(senhaValor))ponto++

    forcaSenha.classList.remove("fraco", "medio", "forte", "muito-forte")

    if(ponto <= 1){
        forcaSenha.classList.add("fraco")  
        forcaSenhaStatus.textContent = "Fraco"
        forcaSenhaStatus.style.color = "var(--erro)"   
    }else if (ponto <= 2){
        forcaSenha.classList.add("medio")
        forcaSenhaStatus.textContent = "Medio"
        forcaSenhaStatus.style.color = "var(--fair)"  
    }else if (ponto <= 3){
        forcaSenha.classList.add("forte")
        forcaSenhaStatus.textContent = "Forte"
        forcaSenhaStatus.style.color = "var(--sucess)"  
    }else{
        forcaSenha.classList.add("muito-forte")
        forcaSenhaStatus.textContent = "Muito Forte"
        forcaSenhaStatus.style.color = "var(--sucess)" 
    }
})

//CONFIRMAR SENHA

const confirmaSenha = document.querySelector("#cadastro-form__confirma-senha");
const iconErroConfirmaSenha = document.querySelector("#cadastro-form__icone-error-confirma-senha")
const erroTextConfirmaSenha = document.querySelector("#cadastro-form__description-confirma-senha")

confirmaSenha.addEventListener("input", function(){
    
    const confirmaSenhaValor = confirmaSenha.value
    const senhaNaoConsistente = confirmaSenhaValor != senha.value //Mesma variavel usado na função acima

    iconErroConfirmaSenha.classList.toggle("erro", senhaNaoConsistente)
    confirmaSenha.classList.toggle("erro", senhaNaoConsistente)
    if(senhaNaoConsistente){
        erroTextConfirmaSenha.textContent = "As senhas não coincidem"
        erroTextConfirmaSenha.style.color = "var(--erro)"     
    }else{
        erroTextConfirmaSenha.textContent = ""
    }

})