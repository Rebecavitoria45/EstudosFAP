const readline = require('readline-sync');
var opcao = true;
const lojas = [];

function adicionarLoja(nomeLoja) {
    lojas.push({
        nome: nomeLoja,
        produtos: []
    });
    console.log("Loja cadastrada com sucesso.")
}

function adicionarProduto(nomeLoja, nomeProduto, preco) {
    const loja = lojas.find(l => l.nome === nomeLoja);
    if (loja) {
       loja.produtos.push({
        nome: nomeProduto,
        preco: preco,
       });
       console.log("Produto cadastrado com sucesso")
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

function atualizarProduto(nomeLoja, nomeProduto, nomeProdutoAtualizado){
    const loja = lojas.find(l => l.nome === nomeLoja);
    if (loja) {
        const index = loja.produtos.findIndex(p => p.nome === nomeProduto);
        if (index >=0) {
            loja.produtos[index].nome = nomeProdutoAtualizado
        } else {
            console.log(`Produto com nome ${nomeProduto} não encontrado na loja ${nomeLoja}.`);
        }
    } else {
        console.log(`Loja com nome ${nomeLoja} não encontrada.`);
    }
  
}

while(opcao){
  console.log("====Menu=====")
  console.log("1-Cadastre Loja")
  console.log("2-Atualize Loja")
  console.log("3-Exclua Loja")
  console.log("4-Cadastre Produto")
  console.log("5-Atualize Produto")
  console.log("6-Excluir Produto")
  console.log("7-Listar Lojas e Produtos")
  console.log("0-Sair do sistema")

  var escolhaUsuario = readline.questionInt("Escolha uma opcao:")

  switch(escolhaUsuario){

     case 1:
     do{
      var loja = readline.question("Digite o nome da loja:")
      adicionarLoja(loja);
      var continuar = readline.question("Deseja cadastrar uma nova loja?")
     } while(continuar=="sim")
     break;

     case 2: 
      var lojaNome= readline.question("Digite o nome da loja que voce deseja atualizar:")
      var novoNomeLoja = readline.question("Digite o nome da loja atualizado:")
      atualizarLoja(lojaNome,novoNomeLoja)
      break;

      case 3:
       var lojaNome = readline.question("Digite o nome da loja que voce quer excluir:")
       excluirLoja(lojaNome)
       break;
     
     case 4:
        var lojaNome = readline.question("Digite o nome da loja o qual voce quer cadastrar o produto:")
        var nomeProduto = readline.question("Digite o nome do produto:")
        var precoProduto = readline.question("Digite o preco do produto:")
        adicionarProduto(lojaNome,nomeProduto,precoProduto)
        break;
    
    case 5:
        var lojaNome = readline.question("Digite o nome da loja o qual voce quer atualizar o produto:")
        var nomeProduto = readline.question("Digite o nome do produto:")
        var nomeProdutoAtualizado = readline.question("Digite o nome Atualizado do produto:")
         atualizarProduto(lojaNome,nomeProduto,nomeProdutoAtualizado)
        break;
    
    case 6:
        var lojaNome = readline.question("Digite o nome da loja na qual esta o produto que voce quer excluir:")
        var nomeProduto = readline.question("Digite o nome do produto que voce quer excluir:")
        excluirProduto(lojaNome,nomeProduto)
        break;
    
    case 7:
        exibirLojasEProdutos()
        break;

    case 0:
        opcao = false;
        console.log("Saindo do sistema.....")
        break;

    default:
       console.log("Opcao invalida")

}
}
