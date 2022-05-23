function comparaNumeros(num1, num2) {
    
    if (num1 <= 0 && num2 <= 0) {
        return "Os dois números precisam ser maiores que 0";
    }
    if (num1 <= 0) {
        return "O numero 1 precisa ser maior que 0";
    }
  	if(num2 <= 0){
      return "O numero 2 precisa ser maior que 0"
    }
    if (!Number(num1) || !Number(num2)) {
        return "Defina dois números!";
    }

    const SOMA = num1 + num2;
    var resultado10 = '';
    var resultado20 = '';

    if (num1 === num2) {
        var iguais = "iguais";
    } else {
        var iguais = "diferentes";
    };
    if (SOMA > 10) {
        resultado10 = "maior";
    } else {
        resultado10 = "menor";
    };
    if (SOMA > 20) {
        resultado20 = "maior";
    } else {
        resultado20 = "menor";
    };
    return `Os numeros ${num1} e ${num2} são ${iguais}, sua soma é ${SOMA}, que é ${resultado10} que 10 e ${resultado20} que 20.`;
}
console.log(comparaNumeros(1,2));