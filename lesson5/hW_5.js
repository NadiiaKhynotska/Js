
// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let areaRectangle = (a, b) => a * b;
console.log(areaRectangle(5, 10));
console.log('');
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let areaCircle = r => Math.round(Math.PI * 100) / 100 * r ** 2;
console.log(areaCircle(2));
console.log('');

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let areaCylinder = (h, r) => 2 * Math.round(Math.PI * 100) / 100 * r * h;
console.log(areaCylinder(10, 3));
console.log('');
// - створити функцію яка приймає масив та виводить кожен його елемент
let mixArr1 = ['first', 8, true, 'second', 23, false, 'third', 56, 345, true];
let printer = arr => {
    for (const item of arr) {
        console.log(item)
    }
}
printer(mixArr1);
console.log('');
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let printerP = text => {
    document.write(`<p>${text}</p>`)
}
printerP('SOME TEXT');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let printerBloc = text => {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
printerBloc('TEXT FROM THE BLOC');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість
// li визначається другим аргументом, який є числовим (тут використовувати цикл)
let printerBloc2 = (text, num) => {
    document.write(`<ul>`)
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
printerBloc2('TEXT FROM ANOTHER BLOC', 5);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let printerBloc3 = arr => {
    document.write(`<ol>`)
    for (const item of arr) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ol>`)
}
printerBloc3(mixArr1);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id: 1, name: 'vasya', age: 23},
    {id: 2, name: 'olya', age: 45},
    {id: 3, name: 'petya', age: 54},
    {id: 4, name: 'masha', age: 33},
    {id: 5, name: 'max', age: 63},
    {id: 6, name: 'stas', age: 23},
]
let printerBloc4 = arr => {
    for (const item of arr) {
        document.write(`<div> id - ${item.id} name - ${item.name} age - ${item.age}</div>`)
    }
}
printerBloc4(users);
// - створити функцію яка повертає найменьше число з масиву
let minNum = arr => {
    let minNum = arr[0];
    for (const num of arr) {
        if (num < minNum) {
            minNum = num;
        }
    }
    return minNum;
}

let arrNums = [];
for (let i = 0; i < 20; i++) {
    let num = Math.floor(Math.random() * 100);
    arrNums[i] = num
}
console.log(arrNums);
console.log(minNum(arrNums));
console.log('');

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

let sum = arr => {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum;
}
console.log(sum(arrNums));
console.log('');
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr, index1, index2) => {
    let a = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = a;
    return arr;
}
console.log(swap(arrNums, 0, 19));
console.log('');

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            return sumUAH / item.value;
        }
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));

