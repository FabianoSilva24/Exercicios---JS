let numero = Number(prompt("Escolha um numero de 1 á 100!"));
let contador = 4;

if (isNaN(Number(contador)) || contador === null){
    alert("invalido!")
}

else if(numero > contador){
    alert("Menor!");
    console.log("Menor!");
}

else if(numero  < contador){
    alert("Maior!");
    console.log("Maior!");
}

else if(numero = contador){
    alert("ACERTOOOOOU!");
    console.log("ACERTOOOOOU!");
}

else{
    alert("ERRRRROU!");
    console.log("ERRRRROU!");
}