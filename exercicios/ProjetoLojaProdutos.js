const readline = require('readline-sync');
var opcao = true;
const lojas = [];

function adicionarLoja(nomeLoja){
    lojas.push({
        nome: nomeLoja,
        produtos: []
    });
    console.log("Loja cadastrada com sucesso.")
}

function atualizarLoja(){
    var lojaNome= readline.question("Digite o nome da loja que voce deseja atualizar:").toLowerCase();
    var index = lojas.findIndex(l => l.nome === lojaNome)
        if (index>=0) {
        var lojaNomeAtualizado= readline.question("Digite o nome da loja Atualizado:").toLowerCase();
        lojas[index].nome= lojaNomeAtualizado;
        console.log("Loja atualizada com sucesso") 
        } else {
            console.log(`Loja com nome ${lojaNome} não encontrada.`);
        }
}

function excluirLoja(){
        var nomeLoja = readline.question("Digite o nome da loja que voce quer excluir:").toLowerCase();
        const index = lojas.findIndex(l => l.nome === nomeLoja);
        if (index>=0) {
            lojas.splice(index,1)
            console.log("Loja excluida com sucesso")
        } else {
            console.log(`Loja com nome ${nomeLoja} não encontrada.`);
        }
      
}
    
function adicionarProduto() {
    var nomeLoja= readline.question("Digite o nome da loja o qual voce quer cadastrar o produto:").toLowerCase();
    const loja = lojas.find(l => l.nome === nomeLoja);
    if (loja) {
        var nomeProduto = readline.question("Digite o nome do produto:").toLowerCase();
        var preco = readline.question("Digite o preco do produto:")
       loja.produtos.push({
        nome: nomeProduto,
        preco: preco,
       });
       console.log("Produto cadastrado com sucesso")
    } else {
        console.log(`Loja com nome ${nomeLoja} não encontrada.`);
    }
}

function atualizarProduto(){
    var nomeLoja = readline.question("Digite o nome da loja o qual voce quer atualizar o produto:").toLowerCase();
    const loja = lojas.find(l => l.nome === nomeLoja);
    if (loja) {
        var nomeProduto = readline.question("Digite o nome do produto:").toLowerCase();
        const index = loja.produtos.findIndex(p => p.nome === nomeProduto);
        if (index >=0) {
            var nomeProdutoAtualizado = readline.question("Digite o nome Atualizado do produto:").toLowerCase();
            loja.produtos[index].nome = nomeProdutoAtualizado
            console.log("Produto atualizado com sucesso")
        } else {
            console.log(`Produto com nome ${nomeProduto} não encontrado na loja ${nomeLoja}.`);
        }
    } else {
        console.log(`Loja com nome ${nomeLoja} não encontrada.`);
    }
  
}

function excluirProduto(){
    var nomeLoja = readline.question("Digite o nome da loja na qual esta o produto que voce quer excluir:").toLowerCase();
        const loja = lojas.find(l => l.nome === nomeLoja);
        if (loja) {
            var nomeProduto = readline.question("Digite o nome do produto que voce quer excluir:").toLowerCase();
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

function exibirLojasEProdutos() {
    lojas.forEach(loja => {
        console.log(`Loja: ${loja.nome}`);
        loja.produtos.forEach(produto => {
            console.log(` Produto: ${produto.nome} - Preco: ${produto.preco}`);
        });
    }); 
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
      var loja = readline.question("Digite o nome da loja:").toLowerCase();
      adicionarLoja(loja);
      var continuar = readline.question("Deseja cadastrar uma nova loja?")
      } while(continuar=="sim")
    break;
    case 2: 
      atualizarLoja()
    break;
    case 3:
      excluirLoja()
    break;
    case 4:
       adicionarProduto()
    break;
    case 5:
       atualizarProduto()
    break;
    case 6:
       excluirProduto()
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
