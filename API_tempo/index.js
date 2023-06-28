
const buscar = document.getElementById("buscar")
var RESULTADO = document.getElementById("RESULTADO")


buscar.onclick = function(){
    busca_cep = document.getElementById("busca_cep").value
    fetch(`https://viacep.com.br/ws/${busca_cep}/json/`).then(cep => {
                return cep.json().then(data => {
                resposta_cep = data;    
                console.log(data)
                gerarRESULTADO()
            })
    })
}

function gerarRESULTADO(){
    ceps =`
    <p>${resposta_cep.cep}</p>
    <p>${resposta_cep.logradouro}</p>
    <p>${resposta_cep.bairro}</p>
    <p>${resposta_cep.localidade}</p>
    
    ` 
    RESULTADO.innerHTML = ceps

}





