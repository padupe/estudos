function confirmar(){
    var fNome = document.querySelector('input#user')
    var fEnd = document.querySelector('input#end')
    var fNum = document.querySelector('input#num')
    var fBairro = document.querySelector('input#bairro')
    var fCity = document.querySelector('input#city')
    var fUF = document.querySelector('select#uf')

    if (fNome.value.length == 0 || fEnd.value.length == 0 || fNum.value.length == 0 || fBairro.value.length == 0 || fCity.value.length == 0 || fUF.value.length == 0) {
        window.alert ('Favor preenhcer os dados!')
    } else {
        var nome = fNome.value
        var end = fEnd.value
        var num = Number(fNum.value)
        var bairro = fBairro.value
        var city = fCity.value
        var UF = fUF.value
        switch (UF) {
            case 'AC':
                UF = "Acre"
                break
            case 'AL':
                UF = 'Alagoas'
                break
            case 'AM':
                UF = 'Amazonas'
                break
            case 'AP':
                UF = 'Amapá'
                break
            case 'BA':
                UF = 'Bahia'
                break
            case 'CE':
                UF = 'Ceará'
                break
            case 'DF':
                UF = 'Distrito Federal'
                break
            case 'ES':
                UF = 'Espírito Santo'
                break
            case 'GO':
                UF = 'Goiás'
                break
            case 'MA':
                UF = 'Maranhão'
                break
            case 'MG':
                UF = 'Minas Gerais'
                break
            case 'MS':
                UF = 'Mato Grosso do Sul'
                break
            case 'MT':
                UF = 'Mato Grosso'
                break
            case 'PA':
                UF = 'Pará'
                break
            case 'PB':
                UF = 'Paraíba'
                break
            case 'PE':
                UF = 'Pernambuco'
                break
            case 'PI':
                UF = 'Piauí'
                break
            case 'PR':
                UF = 'Paraná'
                break
            case 'RJ':
                UF = 'Rio de Janeiro'
                break
            case 'RN':
                UF = 'Rio Grande do Norte'
                break
            case 'RO':
                UF = 'Rondônia'
                break
            case 'RR':
                UF = 'Roraima'
                break
            case 'RS':
                UF = 'Rio Grande do Sul'
                break
            case 'SC':
                UF = 'Santa Catarina'
                break
            case 'SE':
                UF = 'Sergipe'
                break
            case 'SP':
                UF = 'São Paulo'
                break
            case 'TO':
                UF = 'Tocantins'
                break
            default:
                UF = 'ERRO'
                break
        }
        var res = document.querySelector('div#res01')
        res.innerHTML = `${nome}, reside na ${end}, nº${num}, no bairro ${bairro} da cidade de ${city} no estado ${UF}.`
    }
}

function pares() {
    var fN1 = document.querySelector('input#num1')
    var fN2 = document.querySelector('input#num2')
    var res02 = document.querySelector('div#res02')

    if (fN1.value.length == 0 || fN2.value.length == 0) {
        window.alert ('ERRO! Informe "Número 1" e "Número 2".')
    } else {
        var n1 = Number(fN1.value)
        var n2 = Number(fN2.value)
        res02.innerHTML = ''

        if (n1 < n2) {
            for (var i = n1; i <= n2; i++) {
                if (i % 2 == 0) {
                    res02.innerHTML += ` ${i} /`
                }
            }
        } else {
            window.alert (`Impossível Verificar! "Número 2" será considerado o dobro de "Número 1": ${n1*2}`)
            var n2 = n1*2
            for (var i = n1; i <= n2; i++) {
                if (i % 2 == 0) {
                    res02.innerHTML += ` ${i} /`
                }
            } 
        }
        res02.innerHTML += "."    
    }
}

function buscahabilidade() {
    var HabBus = document.querySelector('select#buscahab')
    var fAluno = document.querySelector('input#aluno')
    var fHab1 = document.querySelector('input#hab1')
    var fHab2 = document.querySelector('input#hab2')
    var fHab3 = document.querySelector('input#hab3')
    var res03 = document.querySelector('div#res03')

    if (HabBus.value.length == 0 || fAluno.value.length == 0 || fHab1.value.length == 0 || fHab2.value.length == 0 || fHab3.value.length == 0) {
        window.alert ('ERRO! Favor rever os dados')
    } else {
        var buscHab = HabBus.value
        var aluno = fAluno.value
        var habilidades = [fHab1.value, fHab2.value, fHab3.value]
        res03.innerHTML = ''

        switch(buscHab){
            case '1':
                buscHab = 'CSS'
                break
            case '2':
                buscHab = 'HTML'
                break
            case '3':
                buscHab = 'Java'
                break
            case '4':
                buscHab = 'JavaScript'
                break
            case '5':
                buscHab = 'PHP'
                break
            case '6':
                buscHab = 'Phyton'
                break
            default:
                break
        }
        res03.innerHTML = `${aluno} possui as seguintes habilidades: ${habilidades.join(', ')}.<br>`
    }
    
    if (habilidades.indexOf(buscHab) != -1) {
        res03.innerHTML += `${aluno} possui a habilidade buscada!`
    } else {
        res03.innerHTML += `${aluno} <strong>não</strong> possui a habilidade buscada!`
    }
}

function confereExp() {
    var fAluno = document.querySelector('input#est')
    var fEstudo = document.querySelector('input#exp')
    var res04 = document.querySelector('div#res04')

    if (fAluno.value.length == 0 || fEstudo.value.length == 0) {
        window.alert ('ERRO! Favor informar os dados para verificação.')
    } else {
        var aluno = fAluno.value
        var exp = Number(fEstudo.value)

        if (exp <= 1) {
            res04.innerHTML = `${aluno} você é considerado <strong>INICIANTE</strong>.`
        } else if (exp <= 3) {
            res04.innerHTML = `${aluno} você é considerado como nível <strong>INTERMEDIÁRIO</strong>.`
        } else if (exp <= 6) {
            res04.innerHTML = `${aluno} você é considerado como nível <strong>AVANÇADO</strong>.`
        } else {
            // Maior que 6
            res04.innerHTML = `${aluno} você é considerdo como nível <strong>EXPERIENTE</strong>.`
        }
    }
}

function vetoreshab() {
    var usuarios = [
        {
            nome: 'Diego',
            habilidades: ['JavaScript', 'ReactJS', 'Redux']
        },
        {
            nome: 'Gabriel',
            habilidades: ['VueJS', 'Ruby on Rails', 'Elixir']
        }
    ]

    var res05a = document.querySelector('div#res105')
    var res05b = document.querySelector('div#res205')

    for (var res of usuarios) {
        res05a.innerHTML += `O ${res.nome} possui as habilidades ${res.habilidades.join(', ')}.<br>`
    }

    for (i = 0; i <= usuarios.length; i++) {
        res05b.innerHTML += `O ${usuarios[i].nome} possui as habilidades ${usuarios[i].habilidades.join(", ")}.<br>`
    }
}
