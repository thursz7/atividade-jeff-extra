// 1) Crie um programa que leia a idade de 4 pessoas e guarde-as em um vetor. No final, mostre: Qual foi a maior idade digitada. Em que posição digitamos a maior idade. 
let idades = [];

for (let i = 0; i < 4; i++) {
    let idade = parseInt(prompt("Digite a idade da pessoa " + (i + 1) + ":"));
    idades.push(idade);
}

let maiorIdade = Math.max(...idades);
let posicaoMaiorIdade = idades.indexOf(maiorIdade);

alert("A maior idade digitada foi: " + maiorIdade);
alert("A posição da maior idade digitada foi: " + (posicaoMaiorIdade + 1));
