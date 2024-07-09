var readline = require("readline-sync");
var opcao= true;
var tarefas = [];

function AdicionarTarefas(id,descricaoTarefa) {
    tarefas.push({
        id: id,
        descricao: descricaoTarefa  
    });
}

function ExcluirTarefas(id){
    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].id === id) {
          tarefas.splice(i, 1);
          break;
        }
      }
}

function EditarTarefas(id, NovadescricaoTarefa){
    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].id === id) {
         tarefas[i].descricao = NovadescricaoTarefa;
          break;
        }
      }
}
function VerificarseIdExiste(id){
    for (let i = 0; i < tarefas.length; i++) {
         if (tarefas[i].id === id) {
         return true
        }
     }
   return false
}

while(opcao){
    console.log("=====Menu====")
    console.log("1-Cadastrar uma Tarefa")
    console.log("2- Alterar uma Tarefa")
    console.log("3-Exibir Tarefas ")
    console.log("4-Excluir uma Tarefa")
    console.log("0-Sair do sistema ")
    console.log("=================")

 var escolhausuario = readline.questionInt("Escolha uma opcao:");

switch(escolhausuario){
    case 1:
         var id = readline.questionInt("Digite um numero para identificar a tarefa:")
         if(VerificarseIdExiste(id)==true){
            console.log("O numero identificador já foi cadastrado");
         }
        else{ 
         var descricaoTarefa = readline.question("Digite a tarefa:")
         AdicionarTarefas(id,descricaoTarefa)
         console.log("Tarefa cadastrada com sucesso.")
        }
    break;

    case 2:
        var id = readline.questionInt("Digite o id da tarefa que voce quer editar:")
        if(VerificarseIdExiste(id)==true){
            var descricaoTarefa = readline.question("Atualize a descricao da tarefa:")
            EditarTarefas(id,descricaoTarefa);
           
        }
        else{
            console.log("Tarefa não encontrada")
        }
    break;

   case 3:
        console.table(tarefas);
   break;

   case 4:
         var id = readline.questionInt("Digite o id da tarefa que voce quer excluir:")
         if(VerificarseIdExiste(id)==true){
            ExcluirTarefas(id)
            console.log("Tarefa excluida com sucesso")
            
        }
         else{
            console.log("Tarefa não encontrada")
         }
   break;

   case 0:
      console.log("Saindo do sistema");
      opcao = false;
    break;
   
   default:
     console.log("opção invalida");
}
}

