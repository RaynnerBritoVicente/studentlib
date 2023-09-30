/*
Criando o Script para realizar Login
*/
function validaLogin(event){
    //event.preventDefault() //evita o recarregamento da página

    //obtendo os valores digitados nos campos
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    //obter o email e senha criptografados
    //console.log("O email é " + email + "A senha é " + senha)

    if(!email || !senha){ //Checar caso um dos campos não possua nenhuma informação
        alert('É obrigatório informar o email e a senha!')
        return
    }

    if (email === 'aluno@studlib.com' && senha === '123456'){
        //carrega a página principal
        window.location.href = "home.html"
    }else{
        alert('O usuário ou senha informados são inválidos!')
    }
}