const livros = require('./database')

// pegar o input

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro?S/N')

// Se for Sim, mostrar as categorias disponíveis, perguntar qual categoria ela escolhe 

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis: ')
    console.log('Produtividade e estilo de vida', '/Biografia', '/Romance', '/Poesia', '/Ficção')

    const entradaCategoria = readline.question('Qual categoria você escolhe:')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)

    // Se não, mostrar todos os livros em ordem crescente pela quantidade de páginas
} else {
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Essas são todos os livros disponíveis: ')
    console.table(livrosOrdenados)
}

