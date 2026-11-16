//---------------------------
//      FORÇA SENHA      
//---------------------------

const senha = document.querySelector("#cadastro-form__senha");
senha.addEventListener("input", function() {
    let valor = senha.value;
    let nivel = document.querySelector(".forca-senha__nivel");
    let texto = document.querySelector(".cadastro-form__senha-forca-status")
    let ponto = 0;

    if (valor.length >= 8) ponto++;
    if (/[a-z]/.test(valor)) ponto++;
    if (/[A-Z]/.test(valor)) ponto++;
    if (/[0-9]/.test(valor)) ponto++;
    if (/[^a-zA-Z0-9]/.test(valor)) ponto++;

    nivel.className = "forca-senha__nivel";
    texto.className = "cadastro-form__senha-forca-status"

    if(ponto <= 1){
        nivel.classList.add("fraco");
        texto.classList.add("fraco")
        texto.textContent = "FRACO"
    } else if(ponto <= 4){
        nivel.classList.add("medio");
        texto.classList.add("medio")
        texto.textContent = "MEDIO"
    } else {
        nivel.classList.add("forte");
        texto.classList.add("forte")
        texto.textContent = "FORTE"
    };
});
