/*
    Criando a funlção de "listarLivros" para exibir na pagina de Listagem de livros
*/

function listarLivros(){
    //obtendo os dados
    let livros = JSON.parse(localStorage.getItem('livros')) || []
    //criando onde iremos inserir a tabela
    let tabela = document.getElementById('listagem')
    tabela.innerHTML = '' //limpando a tabela
    //criando uma tabela com HTML
    let table = document.createElement('table')
    table.className = 'table table-bordered' //adicionando uma classe para a tag 'table'
    table.innerHTML = `
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Autor</th>
                                <th>Editora</th>
                                <th>Unidades</th>
                                <th>Generos</th>
                                <th>Vendendo</th>
                                <th>Indisponível</th>
                                <th>Sinópse</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                       `
    //preenchendo a tabela com os dados dos Livros

    let tbody = table.querySelector('tbody')
    for(let i=0; i<livros.length; i++){
        let livro = livros[i]
        let row = tbody.insertRow(i)
        row.innerHTML = `
                        <td>${livro.titulo}</td>
                        <td>${livro.autor}</td>
                        <td>${livro.editora}</td>
                        <td>${livro.unidades}</td>
                        <td>${livro.aventura}, ${livro.suspense}, ${livro.terror}, ${livro.biografia}, ${livro.romance}, ${livro.fantasia}</td>
                        <td>${livro.vendendo}</td>
                        <td>${livro.indisponivel}</td>
                        <td>${livro.sinopse}</td>
                        `
    }

    tabela.appendChild(table)
}

//chamando a função
listarLivros()