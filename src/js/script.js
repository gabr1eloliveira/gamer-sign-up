//---------------------------
//      FORÇA SENHA      
//---------------------------

const senha = document.querySelector("#cadastro-form__senha");
senha.addEventListener("input", function() {
    let valor = senha.value;
    let nivel = document.querySelector(".forca-senha__nivel");
    let senhaForcaStatus = document.querySelector(".cadastro-form__senha-forca-status")
    let senhaDesc = document.querySelector(".cadastro-form__description:nth-child(2)")
    let ponto = 0;

    if (valor.length >= 8) ponto++;
    if (/[a-z]/.test(valor)) ponto++;
    if (/[A-Z]/.test(valor)) ponto++;
    if (/[0-9]/.test(valor)) ponto++;
    if (/[^a-zA-Z0-9]/.test(valor)) ponto++;

    nivel.className = "forca-senha__nivel";
    senhaForcaStatus.className = "cadastro-form__senha-forca-status"
    if(ponto <= 1){
        nivel.classList.add("fraco");
        senhaForcaStatus.classList.add("fraco")
        senhaForcaStatus.textContent = "FRACO"
        senhaDesc.style.color = "red"
    } else if(ponto <= 4){
        nivel.classList.add("medio");
        senhaForcaStatus.classList.add("medio")
        senhaForcaStatus.textContent = "MEDIO"
        senhaDesc.style.color = "var(--cor-texto)"
    } else {
        nivel.classList.add("forte");
        senhaForcaStatus.classList.add("forte")
        senhaForcaStatus.textContent = "FORTE"
    };
});


