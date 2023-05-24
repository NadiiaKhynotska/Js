// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
const cutString = (str, n) => {
    let cutStr = [];
    document.write(`<ul>`)
    for (let i = 0; i < str.length; i += n) {
        cutStr.push(str.slice(i, i + n))
    }
    for (const cutStrElement of cutStr) {
        document.write(`<li>${cutStrElement}</li>`)
    }
    document.write(`<li>${cutStr}</li>`)
    document.write(`</ul>`)
}
cutString('насолода!', 3);
cutString('паралелепіпед', 5);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
const deleteCharacters = (str, n) => {
    let arrStr = str.split(' ')
    for (const arrStrElement of arrStr) {
        if (arrStrElement.length === n) {
            document.write(`<p>${arrStrElement}</p>`)
        }
    }
}
let str1 = 'Кожен мисливець бажає знати де сидить фазан';
deleteCharacters(str1, 5);

const deleteCharacter2 =(str, n)  => {
    document.write(`<p>${ str.split(' ').filter(word => word.length === n ).join(' ')}</p>`)
}
deleteCharacter2(str1, 5);
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі
// символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
const insetDash = str => {
    document.write(`<h1>${str.replaceAll(' ', ' - ').toUpperCase()}</h1>`)
}
let str2 = "HTML JavaScript PHP";
insetDash(str2);

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
const firstLetterUp = str => document.write(`<p>${str.slice(0, 1).toUpperCase().concat(str.slice(1))}</p>`);
firstLetterUp('абабагаламага');
//
// - Дано список імен.
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
const normaliseStr = str => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '-' || str[i] === '.' || str[i] === '_') {
            return str.replace(str[i], ' ').replaceAll(str[i],'');
        }
    }
}

const normaliseStr2 = str => {

    str = str
        .replaceAll(" ", "")
        .replaceAll('.', " ")
        .replaceAll('-', " ")
        .replaceAll("_", " ")

    return str
}
//
let n1 = 'Harry...........Potter'
let n2 = 'Ron----------Whisley'
let n3 = 'Hermione__________Granger'
console.log(normaliseStr(n1));
console.log(normaliseStr(n2));
console.log(normaliseStr(n3));
console.log(normaliseStr2(n1));

console.log('створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100-------------')
const createRandomNumsArr = () => {
    let arrNums = [];
    for (let i = 0; i < 20; i++) {
        let num = Math.floor(Math.random() * 100);
        arrNums[i] = num
    }
    return arrNums
}
let randomArr = createRandomNumsArr();
console.log(randomArr);

console.log('створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort')
const createRandomSortNumsArr = () => {
    let arrNums = [];
    for (let i = 0; i < 20; i++) {
        let num = Math.floor(Math.random() * 100);
        arrNums[i] = num
    }
    return arrNums.sort((a, b) => a - b)
}
let randomSortArr = createRandomSortNumsArr()
console.log(randomSortArr);
console.log(' - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги')
// filter, залишивши тільки парні числа (без 0!)
const createRandomFilterArr = () => {
    let arrNums = [];
    for (let i = 0; i < 20; i++) {
        let num = Math.floor(Math.random() * 100);
        arrNums[i] = num
    }
    return arrNums.filter(value => value % 2 === 0 && value !== 0).sort((a, b) => a - b);
}

let filterArr = createRandomFilterArr();
console.log(filterArr);

console.log(' - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.')
const capitalize = str => {
    let strArr = str.split(' ');
    let newStr = ''
    for (const word of strArr) {
        newStr += word[0].toUpperCase() + word.slice(1) + ' '
    }
    return newStr
}

console.log(capitalize('яка повертає рядок, у якому кожне слово починається з великої літери'));
console.log(capitalize('Створити функцію валідатор для адрес електронної пошти'));

const capitalize2 = str => {

    return str.split(' ').map(value => value.slice(0,1).toUpperCase() + value.slice(1)).join(' ');
}
console.log(capitalize2('яка повертає рядок, у якому кожне слово починається з великої літери'));



console.log(' - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе')
// :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)

const validatorEmail = str => {
    if (str.includes('@')
        && str.includes('.', str.indexOf('@'))
        && (str.indexOf('.', str.indexOf('@')) - str.indexOf('@') > 2)
        && str.indexOf('@') !== 0) {
        console.log('This email address is valid')
    } else {
        console.log('This email address is invalid')
    }

}
validatorEmail('someemail@gmail.com');
validatorEmail('someeMAIL@gmail.com');
validatorEmail('someeMAIL@i.ua');
validatorEmail('some.email@gmail.com');
validatorEmail('@gmail.com');
validatorEmail('email@gmail.com');

// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над
// протоколом, з регулярками будете потім бавитись.
//
// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

console.log('відсортувати його в спадаючому порядку за кількістю елементів в полі modules')
let sortArr = coursesArray.sort((a, b) =>
    b.modules.length - a.modules.length
)
console.log(sortArr);

// console.log('- Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.')
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
const count = (str, strSearch) => {
    let pos = 0;
    let count = 0;
    while (true) {
        let foundPos = str.indexOf(strSearch, pos);
        count++
        if (foundPos === -1) break;
        pos = foundPos + 1;
    }
    document.write(`<h2>Кількість шуканих елементів '${strSearch}' = ${count - 1}</h2>`)
}

count('Астрономія - це наука про небесні тіла', 'о');
count('Порахуй мені всі букви', 'ж');

//
// console.log(' - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.')
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
const cutString1 = (str, n) => {
    let strArr = str.split(' ');
    for (let j = strArr.length; j > n; j--) {
        strArr.pop();
    }
    let newStr = ''
    strArr.forEach(value => newStr += value + ' ');
    document.write(`<h2>${newStr}</h2>`);
}

cutString1('яка видаляє зайві слова з рядка str, залишивши у ній n слів ', 9);

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
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
        genre: ['Social communications', 'Modern prose',],
        authors: ['author 1', 'author 2', 'author 3', 'author 4'],
    },
    {
        title: 'The Book Thief',
        pageCount: 412,
        genre: ['Modern prose'],
        authors: ['author 1', 'author 2'],
    }

]

console.log(' -знайти наібльшу книжк')
let sortArrPageCount  = books.sort((a, b) =>
    b.pageCount - a.pageCount)
const maxPageCount = sortArrPageCount[0].pageCount
console.log(sortArrPageCount.filter(value => value.pageCount === maxPageCount));


console.log(' - знайти книжку/ки з найбільшою кількістю жанрів')
let sorBooksGenre = books.sort((a, b) =>
b.genre.length-a.genre.length)

let maxGenreLength = sorBooksGenre[0].genre.length;

console.log(sorBooksGenre.filter(value => value.genre.length === maxGenreLength));

console.log(' - знайти книжку/ки з найдовшою назвою')
let sortTitleLength = books.sort((a, b) =>
b.title.length - a.title.length);
const maxTitleLength = sortTitleLength[0].title.length;
console.log(sortTitleLength.filter(value => value.title.length === maxTitleLength));


console.log('- знайти книжку/ки які писали 2 автори')
let resaltAuthors = books.filter(book => book.authors.length === 2);
console.log(resaltAuthors);

console.log(' - знайти книжку/ки які писав 1 автор')
let resOneAuthor = books.filter(book => book.authors.length === 1);
console.log(resOneAuthor);

console.log(' - вісортувати книжки по кількості сторінок по зростанню')
let sortPages = books.sort((a, b) =>
    a.pageCount -b.pageCount
)
console.log(sortPages);
