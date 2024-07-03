let opcao;

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
    }
    if (!opcao)
        opcao !== 'number'
    console.log("Opcção inválida! Digite novamente por favor")
    switch (opcao) {
        case "1":
            console.log("Adição: Digite os numeros a serem calculados: ")
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
})

