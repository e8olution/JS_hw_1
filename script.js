//Анимация для Главной Первый блок
document.getElementById("scrollTolets-go").addEventListener("click", function() {
  document.getElementById("lets-go").scrollIntoView({ behavior: "smooth" });
});

// Игра «Угадай число» запускается по нажатию на кнопку
document.querySelector('#game1 .mg-item__info__button').addEventListener('click', function () {
  const getNumber = Math.floor(Math.random() * 100) + 1;
  let userAnswer;

  while ((userAnswer = +prompt('Введите число от 1 до 100')) !== getNumber) {
    alert(userAnswer > getNumber
      ? 'Загаданное число меньше, попробуйте еще раз'
      : 'Загаданное число больше, попробуйте еще раз'
    );
  }
  alert('Поздравляем! Вы угадали число ');
});

// // Сравнение чисел (на меньшее)
// function compareNumbers(num1, num2) {
//   if (num1 === num2) {
//     alert(`Числа равны ${num1} = ${num2}`);
//   } else if (num1 < num2) {
//     alert(`Первое меньше: ${num1}`);
//   } else {
//     alert(`Второе меньше: ${num2}`);
//   }
// }

// // теперь можно просто вызывать:
// let a = +prompt("Введите первое число:");
// let b = +prompt("Введите второе число:");

// compareNumbers(a, b);


// // проверка на четность
// function evenNumber (n) {
//   alert ( n % 2 == 0 ? `Число четное: ${n}` : `Число нечетное: ${n}`) ;
// }

// let c = +prompt("Введите число для проверки на четность:");

// evenNumber(c);



// function sqNumber (n) {
//   let square= n**2;
//   console.log(`Квадрат числа: ${square}`); 
//   return square;
// }

// let d = +prompt ("Введите число:");
// let sqResult = sqNumber(d);  
// console.log(`Используем значение квадрата дальше: ${sqResult}`);

// Сколько лет
function howOld (years) {
  if ( years > 0 && years < 13) {
    alert ('Привет, друг!'); 
  } else if ( years >= 13) { 
    alert ('Добро пожаловать!'); 
  } else { 
    alert ('Вы ввели неправильное значение');
  }
}
let a = +prompt ("Введите ваш возраст"); 
howOld (a);