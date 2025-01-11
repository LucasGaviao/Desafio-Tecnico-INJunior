function verificarIdades(ano, lista){
    let verificados = [];
    let v;
    for (let i = 0; i < lista.length; i++) {
        v = ano - lista[i] >= 18  ? 'Maior': 'Menor';
        verificados[i] = "Pessoa " + i + ": " + v + " de Idade.";
    }
    return verificados;
}

let nascimentos = [2000,2002,2004, 2005, 2010, 2015, 1990];
let ano = prompt("Digite o ano atual: ");
console.log(ano);
let resp = verificarIdades(ano, nascimentos);
console.log(resp);