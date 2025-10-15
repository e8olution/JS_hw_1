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

// Сравнение чисел (на меньшее)
function compareNumbers(num1, num2) {
  if (num1 === num2) {
    alert(`Числа равны ${num1} = ${num2}`);
  } else if (num1 < num2) {
    alert(`Первое меньше: ${num1}`);
  } else {
    alert(`Второе меньше: ${num2}`);
  }
}

// теперь можно просто вызывать:
let a = +prompt("Введите первое число:");
let b = +prompt("Введите второе число:");

compareNumbers(a, b);
