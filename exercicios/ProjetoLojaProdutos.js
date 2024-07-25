const readline = require('readline-sync');
var opcao = true;
const lojas = [];

function adicionarLoja(nomeLoja) {
    lojas.push({
        nome: nomeLoja,
        produtos: []
    });
}

function adicionarProduto(nomeLoja, nomeProduto, preco) {
    const loja = lojas.find(l => l.nome === nomeLoja);
    if (loja) {
       loja.produtos.push({
        nome: nomeProduto,
        preco: preco,
       });
    } else {
        console.log(`Loja com nome ${nomeLoja} não encontrada.`);
    }
}

function exibirLojasEProdutos() {
    lojas.forEach(loja => {
        console.log(`Loja: ${loja.nome}`);
        loja.produtos.forEach(produto => {
            console.log(` Produto: ${produto.nome} - Preco: ${produto.preco}`);
        });
    }); 
}

function excluirLoja(nomeLoja){
    const loja = lojas.find(l => l.nome === nomeLoja);
    if (loja) {
        for (let i = 0; i < lojas.length; i++) {
            if (lojas[i].nome === nomeLoja) {
              lojas.splice(i, 1);
              break;
            }
          }
    } else {
        console.log(`Loja com nome ${nomeLoja} não encontrada.`);
    }
  
}

function atualizarLoja(nomeLoja,novoNomeLoja){
    const loja = lojas.find(l => l.nome === nomeLoja);
    if (loja) {
        for (let i = 0; i < lojas.length; i++) {
            if (lojas[i].nome === nomeLoja) {
                lojas[i].nome= novoNomeLoja;
              break;
            }
          }
    } else {
        console.log(`Loja com nome ${nomeLoja} não encontrada.`);
    }
  
}

function excluirProduto(nomeLoja, nomeProduto){
    const loja = lojas.find(l => l.nome === nomeLoja);
    if (loja) {
        const index = loja.produtos.findIndex(p => p.nome === nomeProduto);
        if (index >=0) {
            loja.produtos.splice(index, 1);
            console.log(`Produto ${nomeProduto} excluído da loja ${nomeLoja}.`);
        } else {
            console.log(`Produto com nome ${nomeProduto} não encontrado na loja ${nomeLoja}.`);
        }
    } else {
        console.log(`Loja com nome ${nomeLoja} não encontrada.`);
    }
  
}




adicionarLoja("Americanas");
adicionarLoja("Renner")
adicionarProduto("Americanas","Vasilha","10.99");
adicionarProduto("Americanas","Espelho","65.78");
console.log("=======")
exibirLojasEProdutos()
excluirLoja("Renner")
console.log("==========")
exibirLojasEProdutos();
atualizarLoja("Americanas", "Le biscuit")
exibirLojasEProdutos()
excluirProduto("Le biscuit", "Vasilha")
exibirLojasEProdutos()
