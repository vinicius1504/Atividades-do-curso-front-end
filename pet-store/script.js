var botao = document.getElementById("bt");
var card = document.getElementsByClassName("produto")[0];


function alets (){


}





alert("Otimas Compras!")
function teste_bnt() {
   
   for (let i = 0; i <=7; i++) {

      cards = `
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
  
   console.log(data_end.itens[i].id)
      card.innerHTML += cards


   }
}


window.onload = setTimeout(teste_bnt,(2000))

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

      
      
   ]
}