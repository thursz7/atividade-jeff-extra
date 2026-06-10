// 3) Desenvolva um programa que colete e armazene os nomes e as alturas de diferentes pessoas em um vetor. O programa deve permitir que o usuário insira quantas alturas desejar e só deve ser encerrado quando o usuário optar por parar. Ao final, exiba a maior altura, a menor altura e a quem pertencem respectivamente. 
let nomes = [];
let alturas = [];

let continuar = true;
while (continuar) {
    let nome = prompt("Digite o nome da pessoa:");
    let altura = parseFloat(prompt("Digite a altura da pessoa:"));

    nomes.push(nome);
    alturas.push(altura);

    let opcao = prompt("Deseja inserir mais uma pessoa? (s/n)");
    if (opcao !== "s") {
        continuar = false;
    }
}

let maiorAltura = Math.max(...alturas);
let menorAltura = Math.min(...alturas);
let posicaoMaiorAltura = alturas.indexOf(maiorAltura);
let posicaoMenorAltura = alturas.indexOf(menorAltura);

alert("A maior altura digitada foi: " + maiorAltura);
alert("A menor altura digitada foi: " + menorAltura);
alert("A pessoa com a maior altura é: " + nomes[posicaoMaiorAltura]);
alert("A pessoa com a menor altura é: " + nomes[posicaoMenorAltura]);