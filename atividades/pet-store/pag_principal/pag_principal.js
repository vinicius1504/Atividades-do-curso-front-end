var botao = document.getElementById("bt");
var card = document.getElementsByClassName("produto")[0];
var bntcarrinhoclose = document.getElementById("feccharCarrinho")
var bntcarrinhopen = document.getElementById("abrir_carinho")
var AbaCarrinho = document.getElementById("CarrinhoGeral")

bntcarrinhoclose.onclick = function(){
   AbaCarrinho.style.cssText="margin-left: 500cm;"
}
bntcarrinhopen.onclick = function(){
    AbaCarrinho.style.cssText="margin-left: 0cm;"
}



 
// alert("Otimas Compras!")
function teste_bnt() {
   for (let i = 0; i <data_end.itens.length; i++) {
      Cards = `
      <div class='cards'>
    <div class='bxbt'>
        <div class='itens'>
            <div class='bxup'>
                <div class='imgpd'>
                    <img src=${data_end.itens[i].imgpd}>
                </div>
                
            </div>
            
            <div class='drsc'>
                   <p class='p1'>${data_end.itens[i].nome}</p>
                    <p>${data_end.itens[i].valor}</p>
                </div>
                
                <div class='osso'>
                    <a href=''>
                        <img src='/pet-store/img/osso_btn.png' alt=''>
                    </a>
                </div>
        </div>
    </div>
</div>
   `

   card.innerHTML += Cards

   }
}


window.onload = setTimeout(teste_bnt,(1000))

// botao.onclick = teste_bnt


const data_end =
{
   "itens": [
      {
         "id": 2,
         "nome": "Arranhador Para Gatos Poste. Le Petin",
         "imgpd": "/pet-store/produtos/binquedo.png",
         "valor": "R$ 39,00"
      },
      {
         "id": 3,
         "nome": "Biscrock Pedigreede 1Kg",
         "imgpd": "/pet-store/produtos/biscrok.png",
         "valor": "R$ 10,00"
      },
      {
         "id": 4,
         "nome": "Cama de Melancia, Media",
         "imgpd": "/pet-store/produtos/cama.png",
         "valor": "R$ 19,99"
      },
      {
         "id": 5,
         "nome": "Ração Pedigree para Cães Adultos",
         "imgpd": "/pet-store/produtos/large_f2612a6c-21ca-4256-a0e4-0f78a9b0c652_1k.png",
         "valor": "R$ 25,00"
      },
      {
         "id": 5,
         "nome": "Ração Whiskas Sabor Frango 1,5Kg",
         "imgpd": "/pet-store/produtos/imagem_2023-06-26_135706773-PhotoRoom.png-PhotoRoom.png",
         "valor": "R$ 15,00"
      },
      {
         "id": 6 ,
         "nome": "Shampoo para Cães e Gatos 500ml",
         "imgpd": "/pet-store/produtos/imagem_2023-06-26_092301914-PhotoRoom.png-PhotoRoom.png",
         "valor": "R$ 12,00"
      },
      {
         "id": 7,
         "nome": " Brinquedo Interativo para Cães",
         "imgpd": "/pet-store/produtos/brinquedo_interativo.png",
         "valor": "R$ 8,00"
      },
      {
         "id": 8,
         "nome": "Areia Sanitária para Gatos 5Kg",
         "imgpd": "/pet-store/produtos/areia.png",
         "valor": "R$ 10,00"
      },
      {
         "id": 5,
         "nome": "Cama para gatos Cat Bed",
         "imgpd": "/pet-store/produtos/imagem_2023-06-26_134857326-PhotoRoom.png-PhotoRoom.png",
         "valor": "R$ 100,00"
      },
      {
         "id": 5,
         "nome": "Casa para Gato Arranhador com Rede Bege Lilies Móveis",
         "imgpd": "/pet-store/produtos/imagem_2023-06-26_135223444-PhotoRoom.png-PhotoRoom.png",
         "valor": "R$ 155,00"
      },
      {
         "id": 5,
         "nome": "Osso de Boi",
         "imgpd": "/pet-store/produtos/brinquedo_interativo.png",
         "valor": "R$ 8,00"
      },

      
      
   ]
}

