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