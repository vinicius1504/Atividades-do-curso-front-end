var card = document.getElementById("areacd") 
var btn = document.getElementById("add")
var btnshop = document.getElementById("addshop")
var shop = document.getElementById("areacd2")
var CleanShop = document.getElementById("CleanShop")

// area de valores
var resultado = document.getElementById("resultado")
var valorGeral = []
var total = []
var carrinhoGeral = []



window.onload = function (){ // gerar os produos na tela de acordo com o json interno
    for ( let i = 0; i< itens.prod.length; i++){
        mecadoria = `
        <div class="prod">
        <h1>${itens.prod[i].aliment}</h1>
        <p>${itens.prod[i].valor}</p>
        <button onclick= "AddShop(${i})" id ="${itens.prod[i].id}">adiconar</button>
        </div>
        `
        card.innerHTML += mecadoria
        
    }
}


function AddShop(index){// função para add no carrinho
    mecadoria = `
    <div class="prod">
    <h1>${itens.prod[index].aliment}</h1>
    <p>${itens.prod[index].valor}</p>
    <button onclick= "removeshop(this)" id ="${itens.prod[index].id}">Remover</button>
    </div>
    `
    shop.innerHTML += mecadoria
    // console.log(itens.prod[index])
    valor.push(itens.prod[index].valor)

    // console.log(valor)

}

function carrinho (){
    shopitens = 
    `
    
    `

}

btnshop.onclick = function(){
    var soma = 0
    for (let i = 0; i<valor.length; i++){
        soma += valor[i]
    }

    result = 
    `
    <h3>${soma}</h3>
    `

    resultado.innerHTML = result
    // console.log(soma)
}



function removeshop(index){// esse aqui remove individual
    index.parentNode.remove()
    }

CleanShop.onclick = function(){// limpar todo o carrinho
    while (shop.hasChildNodes()){
    shop.removeChild(shop.firstChild)
    }}











const itens = {
    "prod": [
        {
            "aliment": "banana",
            "valor" : 6.00,
            "id" : "1"
        },
        {
            "aliment": "maça",
            "valor" : 5.00,
            "id" : "2"
        },
        {
            "aliment": "pera",
            "valor" : 10.00,
            "id" : "3"
        },
        {
            "aliment": "melancia",
            "valor" : 4.00,
            "id" : "4"
        },
        {
            "aliment": "uva",
            "valor" : 3.00,
            "id" : "5"
        },
    ]

}