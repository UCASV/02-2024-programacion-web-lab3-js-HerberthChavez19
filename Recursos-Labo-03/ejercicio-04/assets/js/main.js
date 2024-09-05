const createCounter = () => {
    let count = 0;
    return () => count++;
}

const showCounter = (counter) => {
    alert(counter());
}

const requestNumber = () => {
    let num;
    do {
        num = prompt("Introduce un número entero hasta el cual desea contar:");
        num = parseInt(num);
    } while (isNaN(num) || num < 0);
    return num;
}


const main = () => {
    const limit = requestNumber();
    const counter = createCounter(); 
    
    for (let i = 0; i <= limit; i++) {
        showCounter(counter);
    }
}

main();
