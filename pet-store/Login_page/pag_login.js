var user = document.getElementById("usuario")
var password = document.getElementById("Senha")
var loginBnt = document.getElementById("loginBnt")
var ShowPass = document.getElementById("ShowPass")
var nome = "fredeico"
var senha = "12345"


// console.log(user, password, loginBnt, ShowPass)

function repostaLg() { // função para o usuario responder se esta certo o usuario
    verificar(user, password)
    if (user.value == nome && password.value == senha){
        alert("bem vindo " + user.value)
        location.href('/pet-store/pag_principal.html')
    }
    else{
        alert("tem cadastro aqui n")
    }
}

function verificar (user, password){ //função para verificar se é igual
        if (user.value == nome && password.value == senha){
            return true
        }
            
    }
    

function Showpassword() {
        // console.log("ola")
        if (password.type == 'text') {
            password.type = 'password'
        } else {
            password.type = 'text'
        }
    }

loginBnt.onclick = repostaLg
ShowPass.onclick = Showpassword
const usuario = {
    "users": [
        {
        "nome":"fredeico",
        "senha":"12345"
    },
    {
        "nome":"mauricio",
        "senha":"3452"
    }
    ]
}






