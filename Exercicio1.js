function delta(a, b, c){
    return (b*b)-(4*a*c);
}

function X1(a,b,d){
    let num = b*(-1) + Math.sqrt(d);
    let den = 2*a;
    return num/den;
}

function X2(a,b,d){
    let num = b*(-1) - Math.sqrt(d);
    let den = 2*a;
    return num/den;
}
let a = 0;
while (a == 0){ // Se a = 0, não é uma expessão quadratica.
    a = parseFloat(prompt("Digite o valor de A: "));
}
let b = parseFloat(prompt("Digite o valor de b: "));
let c = parseFloat(prompt("Digite o valor de c: "));
let d = delta(a,b,c);
if(d < 0){
    alert("A eqaução nao possui raizes reais!");
}else if(d === 0.0){
    alert(`A equação possui a raiz única: ${X1(a,b,d)}.`);
}else if(d > 0){
    alert(`A equção possui as raizes, x1: ${X1(a,b,d)} e x2: ${X2(a,b,d)}`);
}