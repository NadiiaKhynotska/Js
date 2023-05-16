//
// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let smallestNum = (a, b, c) => {
    if (a < b && a < c) {
        return a;
    } else if (b < a && b < c) {
        return b;
    } else return c;
}
console.log(smallestNum(5, 3, 1));
console.log('');
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let biggerNum = (a, b, c) => {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else return c;
}
console.log(biggerNum(67, 345, 0));
console.log('');
// - створити функцію яка повертає найбільше число з масиву
let arrNums = [];
for (let i = 0; i < 20; i++) {
    let num = Math.floor(Math.random() * 100);
    arrNums[i] = num
}
console.log(arrNums);
let maxNum = arr => {
    let maxNum = arr[0];
    for (const num of arr) {
        if (maxNum < num) {
            maxNum = num;
        }
    }
    return maxNum;
}

console.log(maxNum(arrNums));
console.log('');
// - створити функцію яка повертає найменьше число з масиву

let minNum = arr => {
    let minNum = arr[0];
    for (const num of arr) {
        if (minNum > num) {
            minNum = num;
        }
    }
    return minNum;
}
console.log(minNum(arrNums));
console.log('');
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let numSum = arr => {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum;
}
console.log(numSum(arrNums));
console.log('');
//
// - Дано натуральное число n. Выведите все числа от 1 до n.
let seriesOfNums = n => {
    for (let i = 1; i < n + 1; i++) {
        console.log(i)
    }
}
seriesOfNums(5);
console.log('');
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let seriesOfNums2 = (a, b) => {
    if (a < b) {
        for (let i = a; i < b + 1; i++) {
            console.log(i)
        }
    } else if (a > b) {
        for (let i = a; i >= b; i--) {
            console.log(i);
        }
    } else {
        console.log('Numbers are equal')
    }

}
seriesOfNums2(14, 10);
console.log('');
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
let swap = (arr, index) => {
    let a = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = a;
    return arr;
}
console.log(swap([9, 8, 0, 4], 0));
console.log(swap([9, 8, 0, 4], 1));
console.log(swap([9, 8, 0, 4], 2));
console.log('');
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
let zeroMuv = arr => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[count] = arr[i];
            count++;
        }
    }
    for (let i = count; i < arr.length; i++) {
        arr[i] = 0;
    }
    return arr;
}
console.log(zeroMuv([0, 1, 2, 0, 4, 0, 3, 0, 4, 0]));
console.log(zeroMuv([0, 1, 2, 3, 4]));
console.log(zeroMuv([0, 0, 1, 0]));