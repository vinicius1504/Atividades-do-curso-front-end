var botao = document.getElementById("bt");
var card = document.getElementsByClassName("produto")[0];
var bntcarrinhoclose = document.getElementById("feccharCarrinho")
var bntcarrinhopen = document.getElementById("abrir_carinho")





function fecharCarinho (){
   AbaCarrinho = document.getElementById("AbaCarrinho")
   while (AbaCarrinho.hasChildNodes()) {
      AbaCarrinho.removeChild(AbaCarrinho.firstChild);
    }
}
bntcarrinhoclose.onclick = fecharCarinho

function abrircarriho(){
   AbaCarrinho = document.getElementById("AbaCarrinho")
   abaCarrinho = `
   <div class="AbaCarrinho" id="AbaCarrinho">
   <div class="CarrinhoTopo">
       <div class="txtcar">
           <p>Meu Carrinho</p>
       </div>
       <div class="BntCarrinho">
           <a href="#" id="feccharCarrinho">
               <img src="/pet-store/img/carinho.png" alt="">
           </a>
       </div>
   </div>
   <div class="meiocarrinho">
       <div class="produto_carrinho">
           <div class="Card_Carrinho">
               <div class="">
                   <img src="" alt="">
                   <p></p>
                   <p></p>
                   <p></p>
               </div>
               <div class="areap_Bnts_compras">
                   <div class="Bnts_compras">
                       <button> Finalizar Compra</button>
                       <button> Coninuar Comprando</button>
                   </div>
               </div>
           </div>
       </div>
   </div>
</div>
   `
   AbaCarrinho.innerHTML += abaCarrinho

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
         "imgpd": "/pet-store/produtos/biscrok.png",
         "valor": "R$ 10,00"
      },
      {
         "id": 5,
         "nome": "Ração Pedigree para Cães Adultos",
         "imgpd": "/pet-store/produtos/biscrok.png",
         "valor": "R$ 10,00"
      },
      {
         "id": 5,
         "nome": "Ração Pedigree para Cães Adultos",
         "imgpd": "/pet-store/produtos/biscrok.png",
         "valor": "R$ 10,00"
      },
      {
         "id": 5,
         "nome": "Ração Pedigree para Cães Adultos",
         "imgpd": "/pet-store/produtos/biscrok.png",
         "valor": "R$ 10,00"
      },
      {
         "id": 5,
         "nome": "Ração Pedigree para Cães Adultos",
         "imgpd": "/pet-store/produtos/biscrok.png",
         "valor": "R$ 10,00"
      }

      
      
   ]
}