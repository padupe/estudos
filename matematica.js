function carregar(){
    var agora = new Date
    var resdata = document.querySelector('div#resdata')
    var resdia = document.querySelector('div#resdia')
    var reshora = document.querySelector('div#reshora')
    
    
    var data = agora.getDate()
    var mes = agora.getMonth()
    switch(mes){
        case 0:
            mes = 01
            break
        case 1:
            mes = 02
            break
        case 2:
            mes = 03
            break
        case 3:
            mes = 04
            break
        case 4:
            mes = 05
            break
        case 5:
            mes = 06
            break
        case 6:
            mes = 07
            break
        case 7:
            mes = 08
            break
        case 8:
            mes = 09
            break
        case 9:
            mes = 10
            break
        case 10:
            mes = 11
            break
        case 11:
            mes = 12
            break
        default:
            mes = 'ERRO'
            break
    }
    
    var ano = agora.getFullYear()
    var dia = agora.getDay()
    switch(dia){
        case 0:
            dia = 'Domingo'
            break
        case 1:
            dia = 'Segunda-Feira'
            break
        case 2:
            dia = 'Terça-Feira'
            break
        case 3:
            dia = 'Quarta-Feira'
            break
        case 4:
            dia = 'Quinta-Feira'
            break
        case 5:
            dia = 'Sexta-Feira'
            break
        case 6:
            dia = 'Sábado'
            break
        default:
            dia = 'ERRO'
            break
    }

    var hora = agora.getHours()
    if (hora > 0 && hora < 12) {
        reshora.innerHTML = `Bom Dia! Agora são ${hora} horas.`
    } else if (hora < 18) {
        reshora.innerHTML = `Boa Tarde! Agora são ${hora} horas.`
    } else {
        reshora.innerHTML = `Boa Noite! Agora são ${hora} horas.`
    }

    resdata.innerHTML = `Olá, hoje é ${data}/${mes}/${ano}.`
    resdia.innerHTML = `${dia}`
    
}

function confirmar(){
    var FormNome = document.querySelector('input#nome')
    var nome = (FormNome.value)
    var FormSex = document.getElementsByName('radsex')
    var res = document.querySelector('div#resuser')
    var sexo = ''
    if (FormSex[0].checked){
        var sexo = 'Masculino'
        res.innerHTML = `Seja bem-vindo ${nome}!`
    } else {
        var sexo = 'Feminino'
        res.innerHTML = `Seja bem-vinda ${nome}!`
    }
    window.alert (`Prazer em te conhecer ${nome}, você é do sexo ${sexo}?`)
}

function adicao(){
    var ad1 = document.querySelector('input#txtad1')
    var ad2 = document.querySelector('input#txtad2')
    var resAd = document.querySelector('div#resadicao')
    if (ad1.value.length == 0 || ad2.value.length == 0) {
        resAd.innerHTML = `\u{1F92A} Favor rever os dados!`
    } else {
        var a1 = Number(ad1.value)
        var a2 = Number(ad2.value)
        resAd.innerHTML = `\u{1F600} ${a1} + ${a2} = ${a1+a2}.`
    }  
}

function subtracao(){
    var sub1 = document.querySelector('input#txtsub1')
    var sub2 = document.querySelector('input#txtsub2')
    var resSub = document.querySelector('div#ressubtracao')
    if (sub1.value.length == 0 || sub2.value.length == 0) {
        resSub.innerHTML = `\u{1F611} Favor rever os dados!`
    } else {
        var s1 = Number(sub1.value)
        var s2 = Number(sub2.value)
        resSub.innerHTML = `\u{1F604} ${s1} - ${s2} = ${s1-s2}.`
    }
}

function divisao(){
    var div1 = document.querySelector('input#txtdiv1')
    var div2 = document.querySelector('input#txtdiv2')
    var resDiv = document.querySelector('div#resdivisao')
    if (div1.value.length == 0 || div2.value.length == 0) {
        resDiv.innerHTML = `\u{1F928} Favor rever os dados!`
    } else {
        var d1 = Number(div1.value)
        var d2 = Number(div2.value)
        resDiv.innerHTML = `\u{1F606} ${d1} ÷ ${d2} = ${d1/d2}.`
    }
}

function multiplicacao(){
    var mult1 = document.querySelector('input#txtmult1')
    var mult2 = document.querySelector('input#txtmult2')
    var resMul = document.querySelector('div#resmultiplicacao')
    if (mult1.value.length == 0 || mult2.value.length == 0) {
        resMul.innerHTML = `\u{1F644} Favor rever os dados!`
    } else {
        var m1 = Number(mult1.value)
        var m2 = Number(mult2.value)
        resMul.innerHTML = `\u{1F917} ${m1} x ${m2} = ${m1*m2}.`
    }
}

function tabuada(){
    var num = document.querySelector('input#txttab')
    var tab = document.querySelector('select#seltab')
    
    if (num.value.length == 0){
        window.alert = ('ERRO')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while (c <= 10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }  
}

function contador(){
    var inicio = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    var resCont = document.querySelector('div#rescont')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert ('[ERRO] Reveja os dados informados!')
        resCont.innerHTML = `Impossível Contar \u{1F62D}`
    } else {
        resCont.innerHTML = `Contando... \u{1F9D0}`
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0) {
            window.alert ('[ERRO] Impossível contar Passo "0" ou Negativo. Passo será consierado "1"')
            p = 1
        }

        if (i < f){
            for (var c = i; c <= f; c += p) {
                resCont.innerHTML += `${c} \u{270C} `
            }
        } else {
            for (var c = i; c >= f; c -= p) {
                resCont.innerHTML += `${c} \u{270C} `
            }
        }
        resCont.innerHTML += `Fim \u{1F590}`
    }
}