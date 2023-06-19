// Variaves para os produtos
var card_prod = document.getElementById("card_prod")  
var card_shop = document.getElementById("card_shop")
var limpar_carrinho = document.getElementById("limpar_carrinho")
var finalizar_Compra = document.getElementById("finalizar_Compra")
//Variaves para os valores em geral de Total,Unidade e Desconto
var resultado_total = document.getElementById("resultado_total")
var resultado_Desconto = document.getElementById("resultado_Desconto")
var resultado_Unidades = document.getElementById("resultado_Unidades")
let total = []
var Carrinho_geral = []
var descontos = []

// Gerar os produtos na tela


window.onload = function(){
    for (let i = 0; i < data_produtos.produtos.length; i++){
        cardprodutos = `
        <div class="cds">
        <div class="txt_prod">
            <p>${data_produtos.produtos[i].nome}</p>
        </div>
        <div class="img"><img
                src="${data_produtos.produtos[i].img}"> 
        </div>
        <div class="txt_valor">
            <p>R$: ${data_produtos.produtos[i].Valor}</p>
        </div>
        <button onclick= "Adicioanr_carrinho(${i})" id ="${data_produtos.produtos[i].id}">Adicionar</button>
    </div>`
    card_prod.innerHTML += cardprodutos}
}
function Adicioanr_carrinho (itens){
    cardprodutos = `
    <div class="cds"    >
    <div class="txt_prod">
        <p>${ data_produtos.produtos[itens].nome}</p>
    </div>
    <div class="img"><img
            src="${ data_produtos.produtos[itens].img}">
    </div>
    <div class="txt_valor">
        <p>R$: ${ data_produtos.produtos[itens].Valor}</p>
    </div>
    <button onclick= "remover_prod(this)" id ="${ data_produtos.produtos[itens].id}">Remover</button>
</div>
    `
    total.push(data_produtos.produtos[itens].Valor)
    Carrinho_geral.push(data_produtos.produtos[itens].id)
    somar_valores()
    qtd_dif(itens)
    card_shop.innerHTML += cardprodutos
}
function remover_prod(itens) {
    itens.parentNode.remove()
    console.log(Carrinho_geral)
}
function somar_valores(){
    somar = 0
    for (let i = 0; i<total.length; i++){
        somar += total[i]
    }
    resultado_total.innerHTML = `<P>R$: ${somar}</P>`
}
function qtd_dif(itens){
    const puxar_diferentes = (array, valo) => 
    array.reduce((acc, iten) => valo === iten ? acc + 1 :acc, 0)
    var dif = puxar_diferentes(Carrinho_geral, data_produtos.produtos[itens].id)
    if (dif ===3){
        swal.fire("Você ganhou 10% de desconto")
        resultado_Desconto.innerHTML = `<P>R$: ${(somar*0.1).toFixed(2)}</P>`
        descontos.push(somar*0.1)}
    else if(dif ===5){
        swal.fire("Você ganhou 15% de desconto")
        resultado_Desconto.innerHTML = `<P>R$: ${(somar*0.1).toFixed(2)}</P>`
        descontos.push(somar*0.1)}
}
function limparcarrinho(){
    while (card_shop.hasChildNodes()) {
        card_shop.removeChild(card_shop.firstChild);
        total = []
        Carrinho_geral = []
        descontos = []
}
}
limpar_carrinho.onclick = limparcarrinho

function finalizarCompra(){
    val = descontos.pop()
    result = +somar - +val;
    console.log(result)
    swal.fire("Sua compra deu o toal de: R$"+result)
}
finalizar_Compra.onclick = finalizarCompra


const data_produtos = 
{
    "produtos" : [
        {
        "nome" : "Banana",
        "img" : "https://www.infoescola.com/wp-content/uploads/2010/04/banana_600797891.jpg",
        "Valor" : 5.00,
        "id" : "CD1"
    },
    {
        "nome" : "Maça",
        "img" : "https://d3ugyf2ht6aenh.cloudfront.net/stores/746/397/products/maca-argentina1-a86acef532d11addf315221676880019-640-0.webp",
        "Valor" : 4.00,
        "id" : "CD2"
    },
    {
        "nome" : "Uva",
        "img" : "https://media.guiame.com.br/archives/2015/10/15/1427125018-uva.jpg",
        "Valor" : 3.00,
        "id" : "CD3"
    },
    {
        "nome" : "Pera",
        "img" : "https://t00987.vtexassets.com/arquivos/ids/160622-800-800?v=637862568301130000&width=800&height=800&aspect=true",
        "Valor" : 2.00,
        "id" : "CD4"
    },
    {
        "nome" : "Melancia",
        "img" : "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/cenourao/media/uploads/produtos/foto/7a448289831efile.png",
        "Valor" : 15.00,
        "id" : "CD5"
    }
]
}