//---------------------------
//      FORÇA SENHA      
//---------------------------

const senha = document.querySelector("#cadastro-form__senha");
senha.addEventListener("input", function() {
    let valor = senha.value;
    let nivel = document.querySelector(".forca-senha__nivel");
    let ponto = 0;

    if (valor.length >= 8) ponto++;
    if (/[a-z]/.test(valor)) ponto++;
    if (/[A-Z]/.test(valor)) ponto++;
    if (/[0-9]/.test(valor)) ponto++;
    if (/[^a-zA-Z0-9]/.test(valor)) ponto++;

    nivel.className = "forca-senha__nivel";
    if(ponto <= 1){
        nivel.classList.add("fraco");
    } else if(ponto <= 4){
        nivel.classList.add("medio");
    } else {
        nivel.classList.add("forte");
    };
});
