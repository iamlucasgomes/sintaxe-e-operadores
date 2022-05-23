function comparaNumeros(num1, num2) {
    const SOMA = num1 + num2;
    if (num1 === num2) {
        var iguais = "iguais";
    } else {
        var iguais = "diferentes";
    };
    if (SOMA > 10) {
        var maior = "maior";
    } else {
        var maior = "menor";
    };
    if (SOMA > 20) {
        var menor = "maior";
    } else {
        var menor = "menor";
    };
    return`Os numeros ${num1} e ${num2} são ${iguais}, sua soma é ${SOMA}, que é ${maior} que 10 e ${menor} que 20.`;
}
console.log(comparaNumeros(1,2));