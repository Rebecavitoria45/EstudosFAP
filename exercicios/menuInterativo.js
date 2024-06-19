var readline = require("readline-sync");
var opcao= true;

while(opcao){
    console.log("=====Menu====")
    console.log("1-Listar clientes")
    console.log("2-Cadastrar clientes")
    console.log("3-Editar clientes")
    console.log("4-Remover clientes")
    console.log("0-Sair do sistema ")
    console.log("=================")

var escolhausuario = readline.questionInt("Escolha uma opcao:")
   
switch (escolhausuario)
    {
          case 1:
            console.log("Listando clientes");
            break;
        case 2:
            console.log("cadastrando cliente");
            break;
        case 3:
            console.log("Editando clientes");
            break;
        case 4:
            console.log("Removendo cliente");
            break;
        case 0:
            console.log("Saindo do sistema");
            opcao =false;
            break;
        default:
            console.log("opção invalida");
            
    }
   
}
