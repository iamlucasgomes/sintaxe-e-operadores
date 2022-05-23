function comparaNumeros(num1, num2) {
    const SOMA = num1 + num2;
    if (num1 === num2) {
        var iguais = "iguais";
    } else {
        var iguais = "diferentes";
    };
    if (soma > 10) {
        var maior = "maior";
    } else {
        var maior = "menor";
    };
    if (soma > 20) {
        var menor = "maior";
    } else {
        var menor = "menor";
    };
    return`Os numeros ${num1} e ${num2} são ${iguais}, sua soma é ${soma}, que é ${maior} que 10 e ${menor} que 20.`;
}
console.log(comparaNumeros(2,2));