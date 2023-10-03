/*
    Criação da função "salvarLivro" armazenando as informações no LocalStorage do navegador
*/

function salvarLivro(){
    //obtendo os dados do formulário
    let titulo = document.getElementById('titulo').value
    let autor = document.getElementById('autor').value
    let editora = document.getElementById('editora').value
    let unidades = document.getElementById('unidades').value
    let aventura = document.getElementById('aventura').value
    let suspense = document.getElementById('suspense').value
    let terror = document.getElementById('terror').value
    let biografia = document.getElementById('biografia').value
    let romance = document.getElementById('romance').value
    let fantasia = document.getElementById('fantasia').value
    let vendendo = document.getElementById('vendendo').value
    let indisponivel = document.getElementById('indisponivel').value
    let sinopse = document.getElementById('sinopse').value
    //criando um objeto com os dados do livro
    let livro = {titulo:titulo, autor:autor, editora:editora, unidades:unidades, aventura:aventura, suspense:suspense, terror:terror, biografia:biografia, romance:romance, fantasia:fantasia, vendendo:vendendo, indisponivel:indisponivel, sinopse:sinopse}
    //criando o array de livros
    let livros = 
                JSON.parse(localStorage.getItem('livros')) || []
    //adicionando o livro ao array de livros.
    //Método Push adiciona no fim do Array
    livros.push(livro)
    //salva a lista atualizada no localStorage
    localStorage.setItem('livros', JSON.stringify(livros))
}