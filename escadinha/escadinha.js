let degraus = Number(prompt("Quantos degraus deve ter a escada?"));
let caracteres = prompt("Escolha um caractere?");
let escadinha = caracteres


for(let i = 0; i < degraus; i++){
    console.log(caracteres.repeat(i));
}