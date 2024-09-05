const requestNumber = () => {
    let num;
    do {
        num = prompt("Introduce un número:");
        num = parseInt(num);
    } while (isNaN(num));
    return num;
}


const searchNumber = (number, array) => {
    const index = array.indexOf(number);
    return index;
}

const main = () => {
    let numbers = [1, 2, 3, 4, 5, 6]; 
    const newNumber = requestNumber();
    numbers.push(newNumber);
    const numberToSearch = requestNumber();
    const index = searchNumber(numberToSearch, numbers); 

    if (index !== -1) {
        alert(`El número ${numberToSearch} se encuentra en el índice ${index}.`);
    } else {
        alert(`El número ${numberToSearch} no se encuentra en el array.`);
    }
}

main();


