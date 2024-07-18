let imagem = document.querySelector(".copo-starbucks")
    let circulo = document.querySelector(".circulo")

    function trocaimagem(endereco){
        imagem.src = endereco
    }

    function trocaCor(cor){
        circulo.style.background =cor
    }
