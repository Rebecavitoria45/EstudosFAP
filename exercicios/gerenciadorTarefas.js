var readline = require("readline-sync");
var opcao= true;
const membros = [
   
];

function adicionarMembro(nome) {
    membros.push({
        nome: nome,
        tarefas: []
    });
}

function atribuirTarefa(nomeMembro, descricaoTarefa) {
    const membro = membros.find(m => m.nome === nomeMembro);
    if (membro) {
        membro.tarefas.push(descricaoTarefa);
    } else {
        console.log(`Membro com nome ${nomeMembro} não encontrado.`);
    }
}

function exibirMembrosETarefas() {
    membros.forEach(membro => {
        console.log(`Membro: ${membro.nome}`);
        membro.tarefas.forEach(tarefa => {
            console.log(` - Tarefa: ${tarefa}`);
        });
    });
}



while(opcao){
    console.log("=====Menu====")
    console.log("1-Adicionar Membro")
    console.log("2-Adicionar tarefa a um membro")
    console.log("3-exibir membros e tarefas ")
    console.log("0-Sair do sistema ")
    console.log("=================")
    
var escolhaopcao = readline.questionInt("Escolha uma opcao:")
 console.clear();

switch (escolhaopcao)
    {
          case 1:
            var nome = readline.question("Digite o nome do novo membro da equipe:").toLowerCase();
            adicionarMembro(nome);
           
            break;
        case 2:
            var tarefa = readline.question("Adicione a tarefa:");
            var membroequipe = readline.question("Digite o membro da equipe responsavel pela tarefa:").toLowerCase();
            atribuirTarefa(membroequipe, tarefa);
           
            break;
        case 3:
              exibirMembrosETarefas();
             break;
       
        case 0:
            console.log("Saindo do sistema");
            opcao =false;
            break;
        default:
            console.log("opção invalida");
            
    }

   
}





