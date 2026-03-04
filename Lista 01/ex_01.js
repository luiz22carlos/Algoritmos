// Importa módulo para ler dados do teclado
const readline = require("readline");

// Cria interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pergunta o primeiro número
rl.question("Digite o primeiro número: ", function(num1) {

  // Pergunta o segundo número
  rl.question("Digite o segundo número: ", function(num2) {

    // Converte para inteiro
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    // Operações
    let soma = num1 + num2;
    let subtracao = num1 - num2;
    let multiplicacao = num1 * num2;
    let divisao = num1 / num2;

    // Exibe resultados
    console.log("Adição:", soma);
    console.log("Subtração:", subtracao);
    console.log("Multiplicação:", multiplicacao);
    console.log("Divisão:", divisao);

    rl.close();
  });

});