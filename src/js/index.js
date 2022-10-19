

//passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML.

const abas = document.querySelectorAll(".aba");  

abas.forEach(aba => {
    aba.addEventListener("click", function() {
        console.log("clicou na aba", aba);

        const abaSelecionada = document.querySelector(".aba.selecionado");
        abaSelecionada.classList.remove("selecionado")

        aba.classList.add("selecionado")

        const informacaoSelecionada = document.querySelector(".informacao.selecionado");
        informacaoSelecionada.classList.remove("selecionado");

        const idDoElementoDeInformacoesDaAba = 
        `informacao-${aba.id}`

        const informacaoASerMostrada = document.
        getElementById(idDoElementoDeInformacoesDaAba)
        informacaoASerMostrada.classList.add("selecionado")




    });
});



