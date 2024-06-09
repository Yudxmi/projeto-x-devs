const btnAvancar = document.getElementById("btn-avancar")
const btnVoltar = document.getElementById("btn-voltar")
let cartaoatual= 0;
const cartoes = document.querySelectorAll(".cartao");

btnAvancar.addEventListener("click", function() {
   const ehUltimoCartao = cartaoatual === cartoes.length - 1
    if (ehUltimoCartao) return; 
    
    esconderCartaoSelecionado();
    
    cartaoatual++;
    MostrarCartao();
    });

    btnVoltar.addEventListener("click", function() {
        const ehPrimeiroCartao = cartaoatual === 0;
        if(ehPrimeiroCartao) return;
        
       esconderCartaoSelecionado()

        cartaoatual--;
        cartoes[cartaoatual].classList.add("selecionado");
        });
    
function MostrarCartao() {
    cartoes[cartaoatual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoselecionado = document.querySelector(".selecionado");
    cartaoselecionado.classList.remove("selecionado");
}

