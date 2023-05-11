// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function getMinNum(a, b, c) {
    let result
    if (a < b && a < c) {
        result = a;
    } else if (b < a && b < c) {
        result = b;
    } else result = c;
    return result;
}

console.log(getMinNum(-31, 52, 112));
console.log('');

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function getMaxNum(a, b, c) {
    let result
    if (a > b && a > c) {
        result = a;
    } else if (b > a && b > c) {
        result = b;
    } else result = c;
    return result;
}

console.log(getMaxNum(45, 91, 511));
console.log('');

// - створити функцію яка повертає найбільше число з масиву
let arrNums = [];
for (let i = 0; i < 20; i++) {
    let randomNum = Math.floor(Math.random() * 100);
    arrNums[i] = randomNum
}
console.log(arrNums);

function getMaxItem(arr) {
    let result = arr[0];
    for (const num of arr) {
        if (num > result) {
            result = num;
        }
    }
    return result;
}

console.log(getMaxItem(arrNums));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function getAverageValue(arr) {
    let result = 0;
    for (const num of arr) {
        result += num;
    }
    return result / arr.length;
}

console.log(getAverageValue(arrNums));
console.log('');

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function getMinMaxValue() {
    let minNum = arguments[0];
    let maxNum = arguments[0];
    for (const argument of arguments) {
        if (argument < minNum) {
            minNum = argument;
        } else if (argument > maxNum) {
            maxNum = argument
        }
    }
    console.log(maxNum);
    return minNum;
}

console.log(getMinMaxValue(45, 677, -98, 12, 34, -6));
console.log('');
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
function createRandomArr() {
    let randomArr = [];
    for (let i = 0; i < 20; i++) {
        let randomNum = Math.floor(Math.random() * 100);
        randomArr[i] = randomNum
    }
    return randomArr;
}

console.log(createRandomArr());
console.log('');

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який
// характеризує кінцеве значення діапазону.
function createRandomArr1(limit) {
    let randomArr1 = [];
    for (let i = 0; i < 10; i++) {
        let randomNum = Math.floor(Math.random() * limit);
        randomArr1[i] = randomNum
    }
    return randomArr1;
}

let arrNums1 = createRandomArr1(500);
console.log(arrNums1);
console.log('');

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function createReversArr(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result[result.length] = arr[i];
    }
    return result;
}

let reversArr = createReversArr(arrNums1);
console.log(reversArr);
console.log('');

// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
function filterItems() {
    if (arguments.length === 1) {
        console.log(arguments[0])
    } else if (arguments.length === 2) {
        console.log(arguments[0] + arguments[1])
    }
}

filterItems(3, 9);
//
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий
// результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
// [2,3,4,5]
// результат
// [3,5,7,9]
function sumOfArr(arr1, arr2) {
    let result = [];
    for (const arr1Element of arr1) {
        result[result.length] = arr1Element + arr2[result.length];
    }

    return result;
}

console.log(sumOfArr([1, 2, 3, 4, 10, 89, 0], [2, 3, 4, 5, 8, 9, 0]));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
function getObjKeys(arr){
    let result = [];
    for (const arrElement of arr) {
        for (const arrElementKey in arrElement) {
            result[result.length] = arrElementKey;
        }
    }
    return result;
}

console.log(getObjKeys([{name: 'Dima', age: 13}, {model: 'Camry'}]));
console.log('');
//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function getObjValues(arr){
    let result = [];
    for (const arrElement of arr) {
        for (const arrElementKey in arrElement) {
            result[result.length] = arrElement[arrElementKey];
        }
    }
    return result;
}

console.log(getObjValues([{name: 'Dima', age: 13}, {model: 'Camry'}]));
console.log('');