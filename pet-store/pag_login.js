var user = document.getElementById("usuario")
var password = document.getElementById("Senha")
var loginBnt = document.getElementById("loginBnt")
var ShowPass = document.getElementById("ShowPass")
var nome = user.vaule
var senha = password.vaule


// console.log(user, password, loginBnt, ShowPass)

function forms() {
    // alert("Bem-Vindo " + user.value)
    // alert("sua senha " + password.value)
    verificar(user, password)
}

function Showpassword() {
    // console.log("ola")
    if (password.type == 'text') {
        password.type = 'password'
    } else {
        password.type = 'text'
    }
}

function verificar (user, password){
        if (user ==nome & password ==senha){
            console.log("eror")
            return true
        }
            
    }
    


ShowPass.onclick = Showpassword
loginBnt.onclick = forms

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






