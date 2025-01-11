let x = parseInt(prompt("Insira um número: "));

if(x%3 == 0.0){
    console.log("fizz");
}else if(x%5 == 0){
    console.log("buzz");
}else if((x%3 == 0 ) && (x%5 == 0)){
    console.log("fizzbuzz");
}