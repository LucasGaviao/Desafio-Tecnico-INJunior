function novoCliente(nome, fila){
    let nova = [nome];
    for(let i = 0; i < fila.length; i++){
        nova.push(fila[i]);
    }
    console.log(nova);
    return nova;
}

function atenderCliente(fila){
    return fila.pop()
}

function printMenu(){
    console.log(
        "1 - Novo Cliente\n"+
        "2 - Atender Cliente\n"+
        "3 - Sair\n"
    );
}


let fila = ['lucas', 'leo'];
fila = novoCliente('joao', fila);

let alterando = true, num;
while(alterando){
    printMenu();
    num = parseInt(prompt("Insira um numero: "));
    switch(num){
        case 1:
            fila = novoCliente(prompt("Insira o nome do cliente:"),fila);
            break;
        case 2:
            console.log("cliente atendido: "+ atenderCliente(fila));
            break;
        case 3:
            alterando = false;
            break;
    }
}