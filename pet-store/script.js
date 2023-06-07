var botao = document.getElementById("bt")
var div = document.getElementById("areacd")

const data_end =
{
   "itens": [
      {
         "id": 1,
         "nome": "coleira",
         "imgpd": "/pet-store/produtos/2-wiskas.png",
         "descricao": "coleira mashcolor",
         "valor": 9.90
      },
      {
         "id": 2,
         "nome": "Petisco",
         "imgpd": "/pet-store/produtos/coelira.jpg",
         "descricao": "teste",
         "valor": 5.50
      },
      {
         "id": 3,
         "nome": "Camas",
         "imgpd": "/pet-store/produtos/petisco.png",
         "descricao": "teste",
         "valor": 9.90
      }
   ]
}




function teste_bnt() {

   for (let i = 0; i <=3; i++) {

      teste = `
      <div class='card'>
      <div class='bxbt'>
          <div class='bxup'>
              <div class='produto'>
              <img src=${data_end.itens[i].imgpd}>
              </div>
              <div class='dcrs'>
                  
              </div>
          </div>
          <div class='osso'>
              <a href=''>
                  <img src='/pet-store/img/osio_bn.png' alt=''>
              </a>
          </div>
      </div>
  </div>
</div> 
   `
      div.innerHTML += teste


   }
}



window.onload = teste_bnt
botao.onclick = teste_bnt