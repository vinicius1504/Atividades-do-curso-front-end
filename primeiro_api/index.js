
var gerar = document.getElementById("cards")
var GERAR_FOTO = document.getElementById("GERAR_FOTO")
var gerar2 = document.getElementById("cards2")

function teste() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(d => {
                    return d.json().then(data => {
                    itens_fotos = data;
                    carregar();
                    console.log(itens_fotos);
                })
        })
}



function carregar() {
    for(let i = 0; i<=10; i++){
    card = ` 
    <div class="card">
    <div class="titulo">
        <p>${itens_fotos[i].title}</p>
    </div>
    <div class="img">
        <img src="${itens_fotos[i].thumbnailUrl}" alt="">
    </div>
</div>
    `
    gerar.innerHTML += card

}

}

teste();



