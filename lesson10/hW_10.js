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


