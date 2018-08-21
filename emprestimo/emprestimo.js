let idade = Number(prompt("Qual a sua idade?"));

if (isNaN(Number(idade)) || idade === null){
   console.log("Valor invalido!");
}
else if (idade > 21 && idade < 60){
    alert("Aprovado");
    console.log("aprovado");  
} 
else{
    alert("Não foi dessa vez, tente dnv");
    console.log("Não foi dessa vez, tente dnv");
}

let renda = Number(prompt("Qual a sua renda?"));

if (isNaN(Number (renda)) || renda === null){
    alert("valor invalido");
}

else if (renda  > 1500){
    alert("aprovado");
}
else{
    alert("Negado!");
}

let parcelas = Number(prompt("Qual o valor de parcelas desejadas?"));

if(isNaN(Number(parcelas)) || parcelas === null){
    alert("Valor invalido.");
}

else if(parcelas < 36 ){
    alert("Aceito.");
}

else{
    alert("Negado.");
}