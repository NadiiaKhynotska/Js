// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та
// вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

// let form1 = document.forms[0];
// let bloc = document.createElement('div');
// bloc.classList.add('bloc');
// let name = document.createElement('p');
// let surname = document.createElement('p');
// let age = document.createElement('p')
// bloc.append(name,surname,age);
//
// form1.onsubmit = function (e) {
//     e.preventDefault();
//     document.body.appendChild(bloc);
//     name.innerText = `first name - ${this.firstname.value}`
//     surname.innerText = `surname - ${this.surname.value}`
//     age.innerText = `age - ${this.age.value}`
// }


// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
//
let numberBloc = document.getElementsByClassName('bloc')[0]
let count = localStorage.getItem('count') || 0
let newCount = +count + 1
numberBloc.innerText = newCount
localStorage.setItem('count',newCount)


// // ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається
// інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні
// якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а
// побудувати дом структуру під кожну сессію
// convertMs(ms) {
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;
//
//     const days = this.pad(Math.floor(ms / day));
//     const hours = this.pad(Math.floor((ms % day) / hour));
//     const minutes = this.pad(Math.floor(((ms % day) % hour) / minute));
//     const seconds = this.pad(
//         Math.floor((((ms % day) % hour) % minute) / second));
//
//     return { days, hours, minutes, seconds };
// }
//
// pad(value) {
//     return String(value).padStart(2, '0');
// }

// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
//
//
//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб
// при натисканні на кнопку зникав елемент з id="text".
//
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
//     інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається