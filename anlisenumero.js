var num = document.querySelector('input#number')
var lista = document.querySelector('select#insert')
var res = document.querySelector('div#res')
var valores = []

function verifNum (n){
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function verifLista (n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    
    if (verifNum(num.value) && !verifLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `O valor ${num.value} foi inserido!`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Favor rever: Valor já inserido ou Inválido!')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0) {
        window.alert('Favor inserir valores antes de Finalizar')
    } else {
        var total = valores.length
        var soma = 0
        var maior = valores[0]
        var menor = valores[0]
        var media = 0

        for (var pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos] 
            if (valores[pos] < menor)
            menor = valores[pos]
        }

        media = soma/total

        res.innerHTML = ''
        res.innerHTML = `<p>Foram inseridos ${total} registros.</p>`
        res.innerHTML += `<p>A soma dos registros é igual a ${soma}.</p>`
        res.innerHTML += `<p>A média obtida entre os registros é ${media}.</p>`
        res.innerHTML += `<p>O maior valor obtido é ${maior}.</p>`
        res.innerHTML += `<p>O menor valor obtido é ${menor}.</p>`
    }
}