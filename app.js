//Declarando todas as variáveis

//Cliente
var nome = document.getElementById('nomeCliente') //<--Input
var dataEncomenda = document.getElementById('dataEncomenda') //<--Input
var horarioEntrega = document.getElementById('horarioEntrega') //<-- Input
var numeroCliente = document.getElementById('numeroCliente') //<-- Input

//Bolo
var coresBolo = document.getElementById('cakeColors')
var tipoCobertura = document.getElementById('cobertura') //<-- Select
var recheios = document.getElementById('recheios') //<-- Select
var massas = document.getElementById('massas') //<-- Select

//Outras váriaveis
var msg = document.querySelectorAll('.msg-card')[0];
var arealine = document.getElementById('area-inline')
var expandArea = document.querySelectorAll('.expand-area')[0]

var btnColors = document.querySelectorAll('.btn-colors')

//Globais
var myWAnumber = Number();
var mensagem = String();
var confimrData;
var cakecolor = String();
var cakecolor_Code = Array(
    vermelho = 'fb4949',
    azul = '33b8ff',
    amarelo = 'fff133',
    laranja = 'ff7a33',
    rosa = 'fb496d',
    verde = '33ff69',
    castanho = '4f2807',
    branco = 'ffffff'
)

var SelectedColors; // <-- Yes, is an array

function loadbtncolors() {
    //Aqui crio os botões de forma automática

    for (let i = 0; i < 8; i++) {
        arealine.innerHTML += `
            <button class="btn-colors" style="background-color: #${cakecolor_Code[i]};" onclick="savecakecolor(${i})"></button>
        `

    }

}
loadbtncolors();

function expand() {
    expandArea.classList.toggle('expand');
}

const cliente = {
    nome: nome,
    dataEncomenda: dataEncomenda,
    horarioEntrega: horarioEntrega,
    numero: numeroCliente
}

const bolo = {
    coresBolo: coresBolo,
    tipoCobertura: tipoCobertura,
    recheios: recheios,
    massas: massas
}

function savecakecolor(color) {
    switch (color) {
        case 0:
            cakecolor = 'Vermelho'
            break;

        case 1:
            cakecolor = 'Azul'
            break;

        case 2:
            cakecolor = 'Amarelo'
            break;
        case 3:
            cakecolor = 'Laranja'
            break;
        case 4:
            cakecolor = 'Rosa'
            break;
        case 5:
            cakecolor = 'Verde'
            break
        case 6:
            cakecolor = 'Castanho'
            break
        default:
            cakecolor = 'Branco'
            break;
    }
    coresBolo.value = cakecolor;
}

//Funções predefinidas
function delay(segundos, chamada) {
    setTimeout(chamada, segundos * 1000);
}


function encodeURIWhatsappMessage() {
    myWAnumber = 922585060;
    mensagem = `*Formulário da Encomenda*
    _Informações sobre o Cliente_ 
    *Nome do Cliente:* ${cliente.nome.value}
    *Data da encomenda:* ${cliente.dataEncomenda.value}
    *Horário de entrega:* ${cliente.horarioEntrega.value}
    *Número do Cliente:* ${cliente.numero.value}
    
    _Informações sobre o Bolo_
    *Cores do Bolo:* ${bolo.coresBolo.value}
    *Tipo de cobertura:* ${bolo.tipoCobertura.value}
    *Recheios:* ${bolo.recheios.value}
    *Massas:* ${bolo.massas.value}
    `;

    let linkWhatsapp = `https://wa.me/${myWAnumber}?text=${encodeURIComponent(mensagem)}`;

    window.open(linkWhatsapp, '_self');
}

function SendMessage() {
    if (
        nome.value.length == 0 || dataEncomenda.value.length == 0 ||
        horarioEntrega.value.length == 0 ||
        coresBolo.value.length == 0
    ) {
        alert('Por favor, preencha todos os campos!')
    } else {
        confimrData = confirm(`Por favor, antes de clicar em 'OK', confirme as informações: 
Nome: ${cliente.nome.value}
Data da encomenda: ${cliente.dataEncomenda.value}
Horário de entrega: ${cliente.horarioEntrega.value}
Número do Cliente: ${cliente.numero.value}
Cores do Bolo: ${bolo.coresBolo.value}
Tipo de cobertura: ${bolo.tipoCobertura.value}
Recheios: ${bolo.recheios.value}
Massas: ${bolo.massas.value}
`);

        if (confimrData == true) {
            encodeURIWhatsappMessage();
        } else {
            return 0;
        }
    }
}

// Fim :) Delícias  da Glo
//Por Ny