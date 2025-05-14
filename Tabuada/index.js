const inputNumero = document.getElementById("input-numero");
const botaoAddNumero = document.getElementById("adicionar-numero");
const listaTabuada = document.getElementById("tabuada");
const form = document.querySelector("form"); // Seleciona o formulário

function gerarTabuada(evento) {
    evento.preventDefault();

    const numero = Number(inputNumero.value); 

    if (isNaN(numero)) {
        alert("Por favor, insira um número válido");
        return;
    }

    listaTabuada.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        const itemLista = document.createElement("li");
        itemLista.className = "equacao";
        itemLista.textContent = `${numero} x ${i} = ${resultado}`;
        listaTabuada.appendChild(itemLista);
    }
}

botaoAddNumero.addEventListener("click", gerarTabuada);

form.addEventListener("submit", gerarTabuada);
