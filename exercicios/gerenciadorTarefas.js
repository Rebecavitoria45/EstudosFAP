
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

// Exemplo de uso do sistema

adicionarMembro('Ana');
adicionarMembro('Carlos');
adicionarMembro('rebeca');
atribuirTarefa('Ana', 'Desenvolver API');
atribuirTarefa('Ana', 'Testar aplicação');
atribuirTarefa('Ana', 'Fazer front-end')
atribuirTarefa('Carlos', 'Documentar código');

exibirMembrosETarefas();

console.table(membros)