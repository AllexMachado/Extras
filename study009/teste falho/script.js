
const matrizGastos = [
    ['Alimentação', 0],
    ['Transporte', 0],
    ['Lazer', 0],
    ['Outros', 0],
    ['Total', 0]
]

//Fuções ultilitárias
const obterElemento = (id) => document.getElementById(id);
const valorNegativo = (valor) => valor < 0;
const somarValor = (total, valor) => total + valor;
const limparCampos = () => obterElemento('valor').value = '';

// Obter valores do formulário
const obterValorInformado = () => parseFloat(obterElemento('valor').value);
const obterCategoriaInformada = () => obterElemento('categoria').value;

// Obter categoria da matriz
const obterCategoria = (matriz, nomeCategoria) => matriz.find((item) => item[0] === nomeCategoria);

// Atualizar valor da matriz
const atualizarValorCategoria = (categoria, valor) => categoria[1] = somarValor();

const atualizarInterface = () => {
    matrizGastos.forEach(([nome, valor]) => {
        const elemento = obterElemento(nome);
        elemento.textContent = `${nome}: R$ ${valor}`;
    })
}



function adicionarGasto() {
    /*
        1 - Pegar o valor informado
        2 - Pegar a categoria
        3 - Impedir que o valor seja negativo
        4 - O valor seja atualizado de acordo com a categoria
            . Criar variáveis para controlar e armazenar os valores das categorias
        5 - Atualizar os valores
        6 - Limpar o campo de valor
        7 - Exibir os valores atualizados na tela
    */

    const valorInformado = parseFloat(obterValorInformado());
    const categoriaInformada = obterCategoriaInformada();

    if (valorNegativo(valorInformado)) {
        alert('Valor Inválido, ele não pode ser negativo!');
        return;
    }

    const categoria = obterCategoria(matrizGastos, categoriaInformada);
    const total = obterCategoria(matrizGastos, 'Total');
    
    atualizarValorCategoria(categoria, valorInformado);
    atualizarValorCategoria(total, valorInformado);
    atualizarInterface();
    limparCampos();
}