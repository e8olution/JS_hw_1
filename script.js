// === Анимация для Главной Первый блок ===
document.getElementById("scrollTolets-go").addEventListener("click", function() {
  document.getElementById("lets-go").scrollIntoView({ behavior: "smooth" });
});


// === Игра 1: «Угадай число» запускается по нажатию на кнопку === 
document.querySelector('#game1 .mg-item__info__button').addEventListener('click', function () {
  const getNumber = Math.round(Math.random() * 100) + 1;
  let userAnswer;

  while ((userAnswer = +prompt('Введите число от 1 до 100')) !== getNumber) {
    alert(userAnswer > getNumber
      ? 'Загаданное число меньше, попробуйте еще раз'
      : 'Загаданное число больше, попробуйте еще раз'
    );
  }
  alert('Поздравляем! Вы угадали число ');
});



// === Игра 2: Арифметика (сложение, вычитание, умножение, деление) ===
document.querySelector('#game2 .mg-item__info__button').addEventListener('click', function () {

  function getRandomNumber() {
    return Math.round(Math.random() * 101);
  }

  do {
    // --- Сложение ---
    let num1 = getRandomNumber();
    let num2 = getRandomNumber();
    let correctAddition = num1 + num2;
    let userAddition = prompt(`Сколько будет ${num1} + ${num2}?`);
    if (parseInt(userAddition) === correctAddition) {
      alert("Ответ на сложение правильный!");
    } else {
      alert(`Неверно! Правильный ответ: ${correctAddition}`);
    }

    // --- Вычитание ---
    let a, b;
    do {
      a = getRandomNumber();
      b = getRandomNumber();
    } while (a - b < 0);
    let correctSubtraction = a - b;
    let userSubtraction = prompt(`Сколько будет ${a} - ${b}?`);
    if (parseInt(userSubtraction) === correctSubtraction) {
      alert("Ответ на вычитание правильный!");
    } else {
      alert(`Неверно! Правильный ответ: ${correctSubtraction}`);
    }

    // --- Умножение ---
    let x = getRandomNumber();
    let y = getRandomNumber();
    let correctMultiplication = x * y;
    let userMultiplication = prompt(`Сколько будет ${x} × ${y}?`);
    if (parseInt(userMultiplication) === correctMultiplication) {
      alert("Ответ на умножение правильный!");
    } else {
      alert(`Неверно! Правильный ответ: ${correctMultiplication}`);
    }

    // --- Деление ---
    let m, n;
    do {
      m = getRandomNumber();
      n = getRandomNumber();
    } while (n === 0 || m % n !== 0);
    let correctDivision = m / n;
    let userDivision = prompt(`Сколько будет ${m} ÷ ${n}?`);
    if (parseInt(userDivision) === correctDivision) {
      alert("Ответ на деление правильный!");
    } else {
      alert(`Неверно! Правильный ответ: ${correctDivision}`);
    }
    // --- Запрос на повтор игры ---
  } while (confirm("Хотите решить ещё?"));
});

// === Игра 3: Переверни текст  ===

document.querySelector('#game3 .mg-item__info__button').addEventListener('click', function () {

  function invertedWord(word) {
      let letters = word.toLowerCase().split(''); // переводим в нижний регистр и разбиваем на массив
      for (let i = letters.length - 1; i > 0; i--) {
          // перемешиваем методом Фишера-Йейтса
          const j = Math.floor(Math.random() * (i + 1));
          [letters[i], letters[j]] = [letters[j], letters[i]];
      }
      return letters.join(''); // собираем обратно в строку
  }

  // Запрос слова у пользователя
  const userWord = prompt("Введите слово:");

  // Вывод перемешанного слова
  if (userWord) {
      const inverted = invertedWord(userWord);
      alert(`Ваше перемешанное слово: ${inverted}`);
  } else {
      alert("Вы не ввели слово!");
  }
});


// === Игра 5: Простая викторина  ===

document.querySelector('#game5 .mg-item__info__button').addEventListener('click', function () {


// Массив вопросов и правильных ответов
  const quiz = [
      {
          question: "Какой цвет у неба?",
          options: ["1. Красный", "2. Синий", "3. Зеленый"],
          correctAnswer: 2 // номер правильного ответа
      },
      {
          question: "Сколько дней в неделе?",
          options: ["1. Шесть", "2. Семь", "3. Восемь"],
          correctAnswer: 2
      },
      {
          question: "Сколько у человека пальцев на одной руке?",
          options: ["1. Четыре", "2. Пять", "3. Шесть"],
          correctAnswer: 2
      }
  ];
  // Переменная для подсчета правильных ответов
  let score = 0;
  // Проходим по каждому вопросу
  for (let i = 0; i < quiz.length; i++) {
      const currentQuestion = quiz[i];
      // Запрос ответа у пользователя
      const userAnswer = prompt(`${currentQuestion.question}\n${currentQuestion.options.join('\n')}`);
      
      // Проверка правильности ответа
      if (parseInt(userAnswer) === currentQuestion.correctAnswer) {
          score++; // увеличиваем счетчик правильных ответов
      }
  }
  // Вывод результата
  alert(`Вы ответили правильно на ${score} из ${quiz.length} вопросов!`);
});