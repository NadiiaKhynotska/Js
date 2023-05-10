// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
let arr = [];
for (let i = 2; i < 102; i++) {
    if (i % 2 === 0) {
        arr[arr.length] = i;
    }
}
console.log(arr);

//     b. заповнити його 50 непарними числами за допомоги циклу.
let arr2 = [];
for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        arr2[arr2.length] = i
    }
}
console.log(arr2);
// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let arr3 = [];
for (let i = 0; i < 20; i++) {
    let randomNum = Math.floor(Math.random() * 100);
    arr3[i] = randomNum
}
console.log(arr3);
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let arr4 = [];
for (let i = 0; i < 20; i++) {
    let randomNum = Math.floor(Math.random() * 733) + 8;
    arr4[i] = randomNum;
}
console.log(arr4);
// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 2; i < arr4.length; i += 3) {
    console.log(arr4[i]);
}
console.log('');
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 2; i < arr4.length; i += 3) {
    if (arr4[i] % 2 === 0) {
        console.log(arr4[i]);
    }
}
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let newArr = [];

for (let i = 2; i < arr4.length; i += 3) {
    if (arr4[i] % 2 === 0) {
        newArr[newArr.length] = arr4[i]
    }
}
console.log(newArr);
console.log('');
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
let arrNums = [1, 2, 3, 5, 7, 9, 56, 8, 67, 88, 75, 92, 3, 7, 22, 34,];
for (let i = 0; i < arrNums.length; i++) {
    if (arrNums[i + 1] % 2 === 0) {
        console.log(arrNums[i]);
    }
}
console.log('');

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let total = [100, 250, 50, 168, 120, 345, 188];
let sum = 0;
for (const cost of total) {
    sum += cost;
}
let averagePrice = Math.round((sum / total.length) * 100) / 100;
console.log(averagePrice);

//
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let arr5 = [];
let multipliedArr5 = [];
for (let i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * 100);
    arr5[i] = randomNum
}
for (const arr5Element of arr5) {
    multipliedArr5[multipliedArr5.length] = arr5Element * 5;
}
console.log(arr5);
console.log(multipliedArr5);
console.log('');

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let mixArr = [1, 45, 'one', 'two', true, 4, 4, 10, false]
let numArr = [];
for (const mixArrElement of mixArr) {
    if (typeof mixArrElement === 'number') {
        numArr[numArr.length] = mixArrElement;
    }
}
console.log(mixArr);
console.log(numArr);
console.log('');

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
let usersWithCities = [];

for (const userWithId of usersWithId) {
    for (const cityWithId of citiesWithId) {
        if (userWithId.id === cityWithId.user_id) {
            userWithId.address = cityWithId;
            usersWithCities[usersWithCities.length] = userWithId;
        }
    }
}
console.log(usersWithCities);
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
//
//
//
//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
for (const arr5Element of arr5) {
    if (arr5Element % 2 === 0)
        console.log(arr5Element);
}
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let copyArr5 = [];
for (const arr5Element of arr5) {
    copyArr5[copyArr5.length] = arr5Element;
}
console.log(copyArr5);
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let letters1 = ['a', 'b', 'c', 'r', 'i', 'r', 'd']
let word1 = '';
for (let i = 0; i < letters1.length; i++) {
    word1 += letters1[i];
}
console.log(word1);
console.log('');
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let letters2 = ['a', 'b', 'c', 'r', 'i', 'v', 'b', 'x', 'z'];
let i = 0;
let word2 = '';
while (i<letters2.length){
    word2 +=letters2[i];
    i++;
}
console.log(word2);
console.log('');
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let letters = ['a', 'b', 'c', 'r', 'i']
let word = '';
for (const letter of letters) {
    word += letter;
}
console.log(word);
// //