// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calcRectangleArea(a, b) {
    return a * b;
}

let result = calcRectangleArea(5, 2);
console.log(result);
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// Math.round(Math.PI*100)/100) округлене число пі до 3.14
// Math.pow(r,2) - піднесення числа до степеня
let p = Math.round(Math.PI * 100) / 100;

function calcCircleArea(r) {

    return p * Math.pow(r, 2)
}

let circleArea = calcCircleArea(5);
console.log(circleArea);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let calcCylinderArea = function (h, r) {

    return Math.round(2 * p * h * r * 100) / 100;
}
let cylinderArea = calcCylinderArea(10, 2);
console.log(cylinderArea);

// - створити функцію яка приймає масив та виводить кожен його елемент
function iterArr(arr) {
    for (const arrElement of arr) {
        console.log(arrElement)
    }
}

let numArr = [4, 34, 67, 87, 9];
iterArr(numArr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createP(text) {
    document.write(`<p>${text}</p>`)
}

createP('some text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createTextBloc(text) {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

createTextBloc('Li text');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл)
function createTextBloc2(text, a) {
    document.write(`<ul>`)
    for (let i = 0; i < a; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

createTextBloc2('Li text 2', 10);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let mixArr1 = ['first', 8, true, 'second', 23, false, 'third', 56, 345, true];

function createTextBloc3(arr) {
    document.write(`<ul>`)
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`)
    }
    document.write(`</ul>`)
}

createTextBloc3(mixArr1);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id: 1, name: 'vasya', age: 23},
    {id: 2, name: 'olya', age: 45},
    {id: 3, name: 'petya', age: 54},
    {id: 4, name: 'masha', age: 33},
    {id: 5, name: 'max', age: 63},
    {id: 6, name: 'stas', age: 23},
]

function createTextBloc4(arr) {
    for (const item of arr) {
        document.write(`<div> Id ${item.id} - name ${item.name} - age ${item.age}</div>`)
    }
}

createTextBloc4(users);

console.log('');

// - створити функцію яка повертає найменьше число з масиву
function getMinNum(arr) {
    let minNum = arr[0];
    for (const num of arr) {
        if (minNum > num) {
            minNum = num;
        }
    }
    return minNum;
}

console.log(getMinNum(numArr));
console.log('');
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
function getSum(arr) {
    let sum = 0;
    for (const num of arr) {
        sum += num
    }
    return sum
}

console.log(getSum(numArr));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
    let a = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = a;
    return arr;
}
console.log(swap(numArr, 0, 3));
console.log('');
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH,currencyValues,exchangeCurrency){
    let sum = 0;
    for (const element of currencyValues) {
        if(element.currency === exchangeCurrency){
            sum = sumUAH/ element.value
        }
    }
    return sum;
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));