function sumOfSquares(array) {
    let sum = 0; // Инициализирует переменную sum значением 0.

    for (let i = 0; i < array.length; i++) {
        sum += Math.pow(array[i], 2); /* // Добавляет к сумме квадрат элемента с индексом i из массива. */
    }

    return sum; /* Возвращает вычисленную сумму квадратов. */
}

const mojArray = [0, 1, 2, 3, 4, 5]; // Создает массив с входными данными.
const result = sumOfSquares(mojArray); // Вызывает функцию sumOfSquares, передавая массив в качестве аргумента.
console.log(result); // Выводит результат работы функции в консоль.


