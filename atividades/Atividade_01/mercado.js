var produtos_painel = document.getElementById('produtos_painel')
var carrinho_painel = document.getElementById('carrinho_painel')
var carrinho_inf_valor_template = document.getElementById('carrinho_inf_valor_template')
var carrinho_inf_qtd_template = document.getElementById('carrinho_inf_qtd_template')
var carrinho_inf_qtd_dif_template = document.getElementById('carrinho_inf_qtd_dif_template')
var carrinho_inf_desc_template = document.getElementById('carrinho_inf_desc_template')
 
var carrinho = []

const produtos_back_end = [
  {
    'id': '1',
    'nome': 'Batata',
    'img':
        'https://static1.conquistesuavida.com.br/ingredients/5/54/52/05/@/24682--ingredient_detail_ingredient-2.png',
    'valor': 10.42
  },{
    'id': '2',
    'nome': 'Pera',
    'img':
        'https://media.istockphoto.com/id/529401513/pt/foto/.jpg?s=612x612&w=0&k=20&c=DSUVrqR2bW1PFrUgtEDPoe4Yamkg6nS5W646RwWKVP8=',
    'valor': 4.59
    },{
    'id': '3',
    'nome': 'Uva',
    'img':
        'https://mercadoterra.s3.amazonaws.com/web/media/2020/04/uva-thompson.png',
    'valor': 12.10
  },{
    'id': '4',
    'nome': 'Maça',
    'img':
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/280px-Red_Apple.jpg',
    'valor': 9.45
  },{
    'id': '5',
    'nome': 'Fruta do Conde',
    'img':
        'https://static3.tcdn.com.br/img/img_prod/350075/muda_de_fruta_do_conde_com_60cm_feita_de_semente_5073_1_20220412114217.jpg',
    'valor': 46.33
  },
  {
    'id': '6',
    'nome': 'Amora',
    'img':
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Blackberries_%28Rubus_fruticosus%29.jpg/250px-Blackberries_%28Rubus_fruticosus%29.jpg',
    'valor': 12.83
  },{
    'id': '6',
    'nome': 'Kiwi',
    'img':
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg/280px-Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg',
    'valor': 22.52
  }
]
function carregaPage(){
  for (let i = 0; i < produtos_back_end.length; i++) {
    var produto_template =`
        <div class="card">
            <div class="cartao">
              <div class="cartao_top">
                <p>${produtos_back_end[i].nome}</p>
              </div>
              <div class="cartao_main">
                <img src=${produtos_back_end[i].img}>
              </div>
              <div class="cartao_valor">
                <p>R$: ${produtos_back_end[i].valor}</p>
              </div>
              <div class="cartao_botao">
                <button onclick="compra(${i})">Adicionar</button>
              </div>
            </div>
        </div>`;
    produtos_painel.innerHTML += produto_template;
  }
   document.getElementById('btn_finalizar').hidden = true
    document.getElementById('btn_limpar').hidden = true
};

carregaPage();
function compra(index){
  var produto = produtos_back_end[index]
  carrinho.push(produto)
  var item_id=carrinho.length-1
  produto_template = `
    <div class="card" id="item-carrinho-${item_id}">
             <div class="cartao">
                <div class="cartao_top">
                    <p>${produto.nome}</p>
                </div>
                <div class="cartao_main">
                    <img src=${produto.img}>
                </div>
                <div class="cartao_valor">
                    <p>R$: ${produto.valor}</p>
                </div>
                <div class="cartao_botao">
                    <button onclick="remove(${item_id})">Remove</button>
                </div>

            </div>
    </div>`;
  carrinho_painel.innerHTML += produto_template
  document.getElementById('btn_finalizar').hidden = false
  document.getElementById('btn_limpar').hidden = false
    reload_carrinho();

}

function remove(item_id) {
  document.getElementById(`item-carrinho-${item_id}`).remove()
  carrinho.pop(item_id)
  reload_carrinho();
  console.log(carrinho)
}

function reload_carrinho(){
  
  var soma =0;
  for(data of carrinho){
    soma+=data.valor
  }
  soma=Number((soma).toFixed(2));
  var qtd_dif=[... new Set(carrinho.map(x => x.id))].length
  console.log(qtd_dif)
  carrinho_inf_valor_template.innerHTML=soma
  carrinho_inf_qtd_template.innerHTML=carrinho.length
  carrinho_inf_qtd_dif_template.innerHTML=qtd_dif
  if(qtd_dif>=3 & qtd_dif<5){
    carrinho_inf_desc_template.innerHTML=Number((soma*0.1).toFixed(2))
  }else if (qtd_dif>=5){
    carrinho_inf_desc_template.innerHTML=Number((soma*0.2).toFixed(2))
  }else{
    carrinho_inf_desc_template.innerHTML=0
  }
  if(carrinho.length==0){
    document.getElementById('btn_finalizar').hidden = true
    document.getElementById('btn_limpar').hidden = true
  }
}
function limpar_carrinho(){
  while(carrinho_painel.hasChildNodes()){
    console.log(carrinho_painel)
    carrinho_painel.removeChild(carrinho_painel.firstChild)
  }
  carrinho=[]
  reload_carrinho()
}

document.getElementById('btn_limpar').onclick = limpar_carrinho