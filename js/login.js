/*
Criando o Script para realizar Login
*/
function validaLogin(event){
    //event.preventDefault() //evita o recarregamento da página

    //obtendo os valores digitados nos campos
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    //Checando se email e senha estão sendo salvos nas variáveis
    //console.log("O email é " + email + "A senha é " + senha)

    if(!email || !senha){ //Checar caso um dos campos não possua nenhuma informação
        alert('É obrigatório informar o email e a senha!')
        return
    }

    //Login feito em 'hard-coding' apenas para testes
    //comparando se as informações do login batem
    if (email === 'aluno@studlib.com' && senha === '123456'){ //caso sim...
        //carrega a página home
        window.location.href = "home.html"
    }else{ //caso não...
        alert('O usuário ou senha informados são inválidos!') //Notifica o usuário de que as informações estão incorretas
    }
}