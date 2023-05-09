// --створити масив з:
//   - з 5 числових значень
let numArr = [4, 34, 67, 87, 9]
// - з 5 стічкових значень
let srtArr = ['name', 'age', 'status', 'skills', 'address']
// - з 5 значень стрічкового, числового та булевого типу
let mixArr = [4, 6, 'county', 'city', true]
// - та вивести його в консоль
console.log(numArr);
console.log(srtArr);
console.log(mixArr);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль;
let arr = [];
arr[0] = 'first item';
arr[1] = false;
arr[2] = 4564;
arr[3] = 'last item';

console.log(arr);

// // - є масив
let arrOfNumbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// // 1. перебрати його циклом while
let i = 0;
while (i < arrOfNumbers.length) {
    console.log(arrOfNumbers[i])
    i++;
}
console.log('');
// // 2. перебрати його циклом for
for (let j = 0; j < arrOfNumbers.length; j++) {
    const arrOfNumber = arrOfNumbers[j];
    console.log(arrOfNumber);
}
console.log('');
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = 0;
while (i < arrOfNumbers.length) {
    if (i % 2 !== 0) {
        console.log(arrOfNumbers[i]);
    }
    i++;
}
console.log('');
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let j = 0; j < arrOfNumbers.length; j++) {
    const arrOfNumber = arrOfNumbers[j];
    if (j % 2 !== 0) {
        console.log(arrOfNumber);
    }
}
console.log('');
// 5. перебрати циклом while та вивести  числа тільки парні  значення
i = 0;
while (i < arrOfNumbers.length) {
    if (arrOfNumbers[i] % 2 === 0) {
        console.log(arrOfNumbers[i]);
    }
    i++;
}
console.log('');
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let j = 0; j < arrOfNumbers.length; j++) {
    const arrOfNumber = arrOfNumbers[j];
    if (arrOfNumber % 2 === 0) {
        console.log(arrOfNumber);
    }
}
console.log('');
// 7. замінити кожне число кратне 3 на слово "okten"
for (let j = 0; j < arrOfNumbers.length; j++) {
    let arrOfNumber = arrOfNumbers[j];
    if (arrOfNumber % 3 === 0) {
        arrOfNumber = 'okten';
    }
    console.log(arrOfNumber);
    document.write(`<ul>
                          <li> ${arrOfNumber} </li>
                    </ul>`)
}
document.write(`<hr>`);
console.log('');
// 8. вивести масив в зворотньому порядку.

for (let j = arrOfNumbers.length - 1; j >= 0; j--) {
    const arrOfNumber = arrOfNumbers[j];
    console.log(arrOfNumber);
    document.write(`<ul>
                     <li> ${arrOfNumber} </li>
                </ul>`);
}
console.log('');
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
i = arrOfNumbers.length - 1;
while (i >= 0) {
    console.log(arrOfNumbers[i])
    i--;
}
console.log('');
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом у зворотньому порядку
i = arrOfNumbers.length - 1;
while (i >= 0) {
    if (i % 2 !== 0) {
        console.log(arrOfNumbers[i]);
    }
    i--;
}
console.log('');
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом вивести у зворотньому порядку
for (let j = arrOfNumbers.length - 1; j >= 0; j--) {
    const arrOfNumber = arrOfNumbers[j];
    if (j % 2 !== 0) {
        console.log(arrOfNumber);
    }
}
console.log('');

// 5. перебрати циклом while та вивести  числа тільки парні  значення
i = arrOfNumbers.length - 1;
while (i >= 0) {
    if (arrOfNumbers[i] % 2 === 0) {
        console.log(arrOfNumbers[i]);
    }
    i--;
}
console.log('');

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let j = arrOfNumbers.length - 1; j >= 0; j--) {
    const arrOfNumber = arrOfNumbers[j];
    if (arrOfNumber % 2 === 0) {
        console.log(arrOfNumber);
    }
}
console.log('');
document.write(`<hr>`);

// 7. замінити кожне число кратне 3 на слово "okten"
for (let j = arrOfNumbers.length - 1; j >= 0; j--) {
    let arrOfNumber = arrOfNumbers[j];
    if (arrOfNumber % 3 === 0) {
        arrOfNumber = 'okten';
    }
    console.log(arrOfNumber);
    document.write(`<ul>
                          <li> ${arrOfNumber} </li>
                    </ul>`)
}
document.write(`<hr>`);
console.log('');

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let numbers = [34, 56, 78, 56, 12, 344553, 989, 4455, 9, 30];
for (let j = 0; j < numbers.length; j++) {
    const number = numbers[j];
    console.log(number)
}
console.log('');
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let strings = ['str1', 'str2', 'str3', 'str4', 'str5', 'str6', 'str7', 'str8', 'str9', 'str10',]
i = 0;
while (i < strings.length) {
    console.log(strings[i])
    i++;
}
console.log('');
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let mixArr1 = ['first', 8, true, 'second', 23, false, 'third', 56, 345, true];
for (const mixArrElement of mixArr1) {
    console.log(mixArrElement);
}
console.log('');
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
for (let j = 0; j < mixArr1.length; j++) {
    const mixArr1Element = mixArr1[j];
    // console.log(typeof mixArr1Element)
    if (typeof mixArr1Element === 'boolean') {
        console.log(mixArr1Element)
    }
}
console.log('');
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (let j = 0; j < mixArr1.length; j++) {
    const mixArr1Element = mixArr1[j];
    if (typeof mixArr1Element === 'number') {
        console.log(mixArr1Element);
    }
}
console.log('');

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (let j = 0; j < mixArr1.length; j++) {
    const mixArr1Element = mixArr1[j];
    if (typeof mixArr1Element === 'string') {
        console.log(mixArr1Element);
    }
}
console.log('');
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
let newArr = [];
newArr[0] = 45;
newArr[1] = '45';
newArr[2] = true;
newArr[3] = 55;
newArr[4] = '55';
newArr[5] = false;
newArr[6] = 76;
newArr[7] = '76';
newArr[8] = true;
newArr[9] = '9-i989798yihi';
for (let j = 0; j < newArr.length; j++) {
    const newArrElement = newArr[j];
    console.log(newArrElement);
}
console.log('');

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (i = 0; i < 10; i++) {
    console.log(i)
    document.write(`<span>${i}</span>`)
}
document.write(`<hr>`)
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (i = 0; i < 100; i++) {
    console.log(i)
    document.write(`<span>${i}-</span>`)
}
document.write(`<hr>`)
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (i = 0; i < 200; i += 2) {
    console.log(i)
    document.write(`<span>${i}-</span>`)
}
document.write(`<hr>`);
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i)
        document.write(`<span>${i}-</span>`)
    }
}
document.write(`<hr>`);
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(i)
        document.write(`<span>${i}-</span>`)
    }
}
document.write(`<hr>`);

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {
        title: 'Deception Point',
        pageCount: 560,
        genre: ['Mystical detective'],
        authors: ['Dan Brown', 'author 2'],
    },
    {
        title: 'The Churchill Factor',
        pageCount: 730,
        genre: ['Political figures'],
        authors: ['Boris Johnson']
    },
    {
        title: 'Три товариші',
        pageCount: 679,
        genre: ['Classical prose'],
        authors: ['Еріх Марія Ремарк']
    },
    {
        title: 'Atomic HabitsAtomic HabitsAtomic HabitsAtomic Habits',
        pageCount: 299,
        genre: ['Self development', 'Motivation'],
        authors: ['author 1', 'author 2'],
    },
    {
        title: 'The Fine Art Of Small Talk',
        pageCount: 74,
        genre: ['Social communications'],
        authors: ['author 1', 'author 2', 'author 3', 'author 4'],
    },
    {
        title: 'The Book Thief',
        pageCount: 412,
        genre: ['Modern prose'],
        authors: ['author 1', 'author 2'],
    }

]
// -знайти наібльшу книжку.
let valuePageCount = [];
for (let j = 0; j < books.length; j++) {
    const book = books[j];
    valuePageCount[j] = book.pageCount;
}
// Знаходимо найбільше значення кількості сторінок
let p = 0;
for (let j = 0; j < valuePageCount.length; j++) {
    const pages = valuePageCount[j];
    if (pages > p) {
        p = pages;
    }
}
// шукаю книгу в якій є поле з кількістю сторінок що  === р
for (let j = 0; j < books.length; j++) {
    const book = books[j];
    if (book.pageCount === p) {
        console.log(book);
    }
}
console.log(p);
console.log(valuePageCount);

// - знайти книжку/ки з найбільшою кількістю жанрів
// Свторюю масив і з значеннями жанрів із масиву книг
let genres = [];
for (let j = 0; j < books.length; j++) {
    const book = books[j];
    genres[j] = book.genre;
}
// Знаходжу найбільшу довжину вкладеного масиву у масиві жанри
let genreCount = 0;
for (let j = 0; j < genres.length; j++) {
    const genre = genres[j];
    if (genre.length > genreCount) {
        genreCount = genre.length;
    }
}
// знаходжу ту книгу у якої є поле жанри з кількістю яка дорівнює genreCount
for (let j = 0; j < books.length; j++) {
    const book = books[j];
    if (book.genre.length === genreCount) {
        console.log(book);
    }
}

// - знайти книжку/ки з найдовшою назвою
// створюю масив із назв книг
let titles = [];
for (let j = 0; j < books.length; j++) {
    const book = books[j];
    titles[j] = book.title;
}
// знаходжу найдовшу назву
let longestTitle = 0
for (let j = 0; j < titles.length; j++) {
    const title = titles[j];
    if (title.length > longestTitle) {
        longestTitle = title.length;
    }
}
// знаходжу книгу з найдовшою назвою
for (let j = 0; j < books.length; j++) {
    const book = books[j];
    if (book.title.length === longestTitle) {
        console.log(book);
    }
}

// - знайти книжку/ки які писали 2 автори
// свтоюю масив із авторами
let authors = [];
for (let j = 0; j < books.length; j++) {
    const book = books[j];
    authors[j] = book.authors;
}

// знаходжу в кладений масив із набільшою довжиною
let longestAuthorsList = 0;
for (let j = 0; j < authors.length; j++) {
    let authorsList = authors[j];
    if (authorsList.length > longestAuthorsList) {
        longestAuthorsList = authorsList.length;
    }
}
// знаходжу книгу у якої значення ключа автори дорівнює longestAuthorsList
for (let j = 0; j < books.length; j++) {
    const book = books[j];
    if (book.authors.length === longestAuthorsList) {
        console.log(book);
    }
}
// - знайти книжку/ки які писав 1 автор
for (let j = 0; j < books.length; j++) {
    const book = books[j];
    if (book.authors.length === 1) {
        console.log(book);
    }
}