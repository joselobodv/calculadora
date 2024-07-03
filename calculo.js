const prompt = require("prompt-sync")();

let opcao;
let resultado;
let num1;
let num2;


console.log("Qual calcule você deseja fazer?");
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
                console.log("Você selecionou o calculo de Adição: Pressione enter para começar! ")
                break;
            case "2":
                console.log("Você selecionou o calculo de Subtração: Pressione enter para começar! ")
                break;
            case "3":
                console.log("Você selecionou o calculo de Multiplicação: Pressione enter para começar! ")
                break;
            case "4":
                console.log("Você selecionou o calculo de Divisão: Pressione enter para começar! ")
                break;
            case "5":
                console.log("Você selecionou o calculo de Porcentagem: Pressione enter para começar ")
                break;
        }
    }
    else {
        switch (opcao) {
            case "1":
                num1 = +prompt("Digite o primerio numero: ");
                if (isNaN(num1)) {
                    console.log("Opção invalida, tente novamente...")
                    break;
                }
                num2 = +prompt("Digite o segundo numero: ");
                if (isNaN(num2)) {
                    console.log("Opção invalida, tente novamente...")
                }
                resultado = num1 + num2
                console.log(resultado)
                break;
            case "2":
                num1 = +prompt("Digite o primerio numero: ");
                if (isNaN(num1)) {
                    console.log("Opção invalida, tente novamente...")
                    break;
                }
                num2 = +prompt("Digite o segundo numero: ");
                if (isNaN(num2)) {
                    console.log("Opção invalida, tente novamente...")
                }
                resultado = num1 - num2
                console.log(resultado)
                break;
            case "3":
                num1 = +prompt("Digite o primerio numero: ");
                if (isNaN(num1)) {
                    console.log("Opção invalida, tente novamente...")
                    break;
                }
                num2 = +prompt("Digite o segundo numero: ");
                if (isNaN(num2)) {
                    console.log("Opção invalida, tente novamente...")
                }
                resultado = num1 * num2
                console.log(resultado)
                break;
            case "4":
                num1 = +prompt("Digite o primerio numero: ");
                if (isNaN(num1)) {
                    console.log("Opção invalida, tente novamente...")
                    break;
                }
                num2 = +prompt("Digite o segundo numero: ");
                if (num2 === 0) {
                    console.log("Não dividimos por zero, tente novamente")
                }
                if (isNaN(num2)) {
                    console.log("Opção invalida, tente novamente...")
                }
                resultado = num1 / num2
                console.log(resultado)
                break;
            case "5":
                num1 = +prompt("Digite a porcentagem que você quer: ");
                if (isNaN(num1)) {
                    console.log("Opção invalida, tente novamente...")
                    break;
                }
                num2 = +prompt("Digite o numero que você quer a porcentagem: ");
                if (isNaN(num2)) {
                    console.log("Opção invalida, tente novamente...")
                }
                resultado = (num1 / 100) * num2
                console.log(resultado + " é " + (num1) + "%" + " de " + (num2))
                break;
        }
        let continuar = prompt("Deseja realizar outra operação? (s/n): ");
        if (continuar.toLowerCase() === "s") {
        } else {
            console.log("Obrigado por usar a calculadora!");
        }
    }

})
