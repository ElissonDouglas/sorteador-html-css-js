let total = document.getElementById('total');
let maior = document.getElementById('maior');
let menor = document.getElementById('menor');
let botao = document.getElementById('botao-sortear');
let roleta = []
let res = document.getElementById("result-values")
let sorteados = []

botao.onclick = function() {
    res.innerHTML = ''
    let max = maior.value
    let min = menor.value
    let tot = total.value
    let item = document.createElement("div");
    let sorteados = []
    let c = 0
    if (tot > (max - min)) {
        alert("Valor [Total] inválido...\nTente um número menor que o maior valor.")
    } else if (tot == 0){
        alert("O valor TOTAL não pode ser igual a 0...\nTente um valor maior.")
    }else {
        while (c < tot) {
            let num = Math.floor(Math.random() * max+1)
            if (!sorteados.includes(num)) {
                res.innerHTML += '<div class="result-value">' + num + '</div>'
                sorteados.push(num)
                c++
            }  
        } sorteados = []; roleta = [];
    }
}