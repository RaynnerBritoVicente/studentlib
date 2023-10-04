/*
    Criação da função "salvarLivro" armazenando as informações no LocalStorage do navegador
*/

function salvarLivro(){
    //obtendo os dados do formulário
    let titulo = document.getElementById('titulo').value
    let autor = document.getElementById('autor').value
    let editora = document.getElementById('editora').value
    let unidades = document.getElementById('unidades').value
    let aventura = document.getElementById('aventura')
    let suspense = document.getElementById('suspense')
    let terror = document.getElementById('terror')
    let biografia = document.getElementById('biografia')
    let romance = document.getElementById('romance')
    let fantasia = document.getElementById('fantasia')
    let vendendo = document.getElementById('vendendo')
    let indisponivel = document.getElementById('indisponivel')
    let sinopse = document.getElementById('sinopse').value
    let data = document.getElementById('data').value

    let statusLivro

    if(aventura.checked == false){
        aventura = " "
    }else{
        aventura = "Aventura"
    }

    if(suspense.checked == false){
        suspense = " "
    }else{
        suspense = "Suspense"
    }

    if(terror.checked == false){
        terror = " "
    }else{
        terror = "Terror"
    }

    if(biografia.checked == false){
        biografia = " "
    }else{
        biografia = "Biografia"
    }

    if(romance.checked == false){
        romance = " "
    }else{
        romance = "Romance"
    }

    if(fantasia.checked == false){
        fantasia = " "
    }else{
        fantasia = "Fantasia"
    }

    if(vendendo.checked == false && indisponivel.checked == true){
        statusLivro = "indisponivel"
    }else{
        statusLivro = "vendendo"
    }


    //criando um objeto com os dados do livro
    let livro = {titulo:titulo, autor:autor, editora:editora, unidades:unidades, aventura:aventura, suspense:suspense, terror:terror, biografia:biografia, romance:romance, fantasia:fantasia, statusLivro:statusLivro, sinopse:sinopse, data:data}
    //criando o array de livros
    let livros = 
                JSON.parse(localStorage.getItem('livros')) || []
    //adicionando o livro ao array de livros.
    //Método Push adiciona no fim do Array
    livros.push(livro)
    //salva a lista atualizada no localStorage
    localStorage.setItem('livros', JSON.stringify(livros))
}