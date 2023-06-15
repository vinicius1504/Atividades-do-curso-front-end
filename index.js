var card = document.getElementById("areacd") 
var btn = document.getElementById("add")
var btnshop = document.getElementById("addshop")
var shop = document.getElementById("areacd2")

var ids = []

function AddShop(){
    

}


function gerarPod (){
    for ( let i = 0; i< itens.prod.length; i++){
        mecadoria = `
        <div class="prod">
        <h1>${itens.prod[i].aliment}</h1>
        <p>${itens.prod[i].valor}</p>
        <button id = "${itens.prod[i].id}">adiconar</button>
        </div>
        `
        card.innerHTML += mecadoria

        var promt = document.getElementById(itens.prod[i].id)
        promt.onclick = function(){
            console.log("ola")
            
        }

    }
}




window.onload = gerarPod
// 


const itens = {
    "prod": [
        {
            "aliment": "banana",
            "valor" : "6,00",
            "id" : "1"
        },
        {
            "aliment": "maça",
            "valor" : "5,00",
            "id" : "2"
        },
        {
            "aliment": "pera",
            "valor" : "10,00",
            "id" : "3"
        },
        {
            "aliment": "melancia",
            "valor" : "4,00",
            "id" : "4"
        },
        {
            "aliment": "uva",
            "valor" : "30,00",
            "id" : "5"
        },
    ]

}