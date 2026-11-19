//---------------------------
//      USERNAME    
//---------------------------

const userName = document.querySelector("#cadastro-form__username");
const erroTextUserName = document.querySelector(".cadastro-form__description:nth-child(2)");
const iconErroUserName = document.querySelector(".cadastro-form__icone-error");

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