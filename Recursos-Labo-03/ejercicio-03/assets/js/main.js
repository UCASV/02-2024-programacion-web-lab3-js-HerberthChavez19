const requestNumber = () => {
    let num;
    do {
        num = prompt("Introduce un número entero no negativo para calcular su factorial:");
        num = parseInt(num);
        if (num < 0) {
            alert("Introduce un numero positivo")
        }
    } while (isNaN(num) || num < 0);
    return num;
}

const calculateFactorial = (number) => {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}

const main = () => {
    const num = requestNumber();
    const factorial = calculateFactorial(num);
    alert(`El factorial de ${num} (iterativo) es: ${factorial}`);
}

main();

