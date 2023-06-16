var produtos_painel = document.getElementById("produtos")
var btn_vetor=[]
var soma = 0
const produtos_back_end = [
    {
        "id":"cod_1",
        "nome":"Batata",
        "img":"https://static1.conquistesuavida.com.br/ingredients/5/54/52/05/@/24682--ingredient_detail_ingredient-2.png",
        "valor":10.3
    },
    {
        "id":"cod_2",
        "nome":"Pera",
        "img":"https://media.istockphoto.com/id/529401513/pt/foto/.jpg?s=612x612&w=0&k=20&c=DSUVrqR2bW1PFrUgtEDPoe4Yamkg6nS5W646RwWKVP8=",
        "valor":4.3
    }
]

window.onload = function(){
    for(var i=0 ; i < produtos_back_end.length ; i++){
        var produto_template =`
            <div class="cartao">
            <div>
                <p>${produtos_back_end[i].nome}</p>
            </div>
            <div><img src=${produtos_back_end[i].img}></div>
            <div>
                <p>Valor: ${produtos_back_end[i].valor}</p>
            </div>
            <div>
                <button id=${produtos_back_end[i].id}>Comprar</button>
            </div>
        </div>`
        produtos_painel.innerHTML+= produto_template
        btn_vetor.push(document.getElementById(produtos_back_end[i].id))
        btn_vetor[i].onclick = function(){
            console.log(produtos_back_end)
            console.log(produtos_back_end[0])
            console.log(produtos_back_end[i])   
            console.log(produtos_back_end[i].valor)
            console.log(soma)
        }
    }
}

