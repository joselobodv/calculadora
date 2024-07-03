const prompt = require("prompt-sync")();

let opcao;
let num1;
let num2;

console.log("O que desdeja calcular?");
console.log("1. Adição");
console.log("2. Subtração");
console.log("3. Multiplicação");
console.log("4. Divisão");
console.log("5. Porcentagem");

process.stdin.on("data", function (data) {
    let entrada = data.toString().trim();
    if (!opcao) {
        opcao = entrada
        switch (opcao) {
            case "1":
                console.log("Adição: Pressione enter para começar! ")
                break;
            case "2":
                console.log("Subtração: Digite os numeros a serem calculados: ")
                break;
            case "3":
                console.log("Multiplicação: Digite os numeros a serem calculados: ")
                break;
            case "4":
                console.log("Divisão: Digite os numeros a serem calculados: ")
                break;
            case "5":
                console.log("Porcentagem: Digite os numeros a serem calculados: ")
                break;
        }
    }
    else {
        switch (opcao) {
            case "1":
                let num1 = +prompt("Digite o primerio numero: ");
                if (isNaN(num1)) {
                    console.log("Opção invalida, tente novamente...")
                    break;
                }
                let num2 = +prompt("Digite o segundo numero: ");
                if (isNaN(num2)) {
                    console.log("Opção invalida, tente novamente...")
                }
                let resultado = num1 + num2
                console.log(resultado)
                break;
        }
    }
})
