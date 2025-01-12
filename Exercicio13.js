
function adicionarJogador(time){
    if(!time) time = [];
    time.push({
        nome: prompt("Nome:"),
        idade: parseInt(prompt("idade:")),
        posicao: prompt("posição:"),
        pontuacao: parseInt(prompt("pontuação:"))
    })
    return time;
}

function buscarPorPosicao(time){
    pos = prompt("posição:");
    let jogadores = [];
    for(let i = 0; i < time.length; i++){
        if(time[i].posicao == pos) jogadores.push(time[i].posicao);
    }
    if(jogadores.length == 0){
        console.log("O time não possui jogadores nessa posição!");
        return null;
    }
    return jogadores;
}

function listarTime(time){
    for(let i = 0; i < time.length; i++) console.log(time[i]);
}

function calcularPontuacaoMedia(time){
    if(!time) return 0;
    let media = 0;
    for(let i = 0; i < time.length; i++) media += time[i].pontuacao;
    media /= time.length; 
}

function printMenu(){
    console.log(
        "1 - Adicionar jogador\n"+
        "2 - Buscar por posição\n"+
        "3 - Listar time\n"+
        "4 - Calcular pontuação média\n"+
        "5 - Sair\n"
    );
}

let time = [];
let jogadores = [];
let media = 0;
let alterando = true;
while(alterando){
    printMenu();
    let num = parseInt(prompt("Insira o numero da operação desejada desejada:"));
    switch(num){
        case 1:
            time = adicionarJogador(time);
            break;
        case 2:
            jogadores = buscarPorPosicao(time);
            console.log(jogadores);
            break;
        case 3:
            listarTime(time);  
            break;
        case 4:
            media = calcularPontuacaoMedia(time);
            console.log("Media: " + 0);
            break;
        case 5:
            alterando = false;
            break;
    }
}