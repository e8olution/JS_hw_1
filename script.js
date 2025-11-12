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



// === Игра 4: Камень, Ножницы, Бумага ===

document.querySelector('#game4 .mg-item__info__button').addEventListener('click', function playGame () {
  const options = ["камень", "ножницы", "бумага"] ;

  function theWinner (userChoice,compChoice){
    if (userChoice === compChoice) return "Ничья!";
    if (
      (userChoice === "камень" && compChoice === "ножницы") ||
      (userChoice === "ножницы" && compChoice === "бумага") ||
      (userChoice === "бумага" && compChoice === "камень")
    ) return "Вы победили!";
    return "Компьютер победил!";
 }

  let playAgain = true;

  while (playAgain) {
    let userChoice = prompt("Выберите: камень, ножницы или бумага");
    if (!userChoice) break; // пользователь нажал Отмена

    userChoice = userChoice.toLowerCase();

    if (!options.includes(userChoice)) {
      alert("Неверный выбор! Попробуйте снова.");
      continue; // повторяем цикл
    }

    const compChoice = options[Math.floor(Math.random() * options.length)];
    const resultGame = theWinner(userChoice, compChoice);

    alert(`Вы выбрали: ${userChoice}\nКомпьютер выбрал: ${compChoice}\nРезультат: ${resultGame}`);

    playAgain = confirm("Сыграть ещё?");
  }
});



// === Игра 5: Простая викторина  ===

document.querySelector('#game5 .mg-item__info__button').addEventListener('click', function () {

  // Массив вопросов и правильных ответов
  const quiz = [
    {
      question: "Какой цвет у неба?",
      options: ["1. Красный", "2. Синий", "3. Зеленый"],
      correctAnswer: 2,
      correctText: "синий"
    },
    {
      question: "Сколько дней в неделе?",
      options: ["1. Шесть", "2. Семь", "3. Восемь"],
      correctAnswer: 2,
      correctText: "семь"
    },
    {
      question: "Сколько у человека пальцев на одной руке?",
      options: ["1. Четыре", "2. Пять", "3. Шесть"],
      correctAnswer: 2,
      correctText: "пять"
    }
  ];

  let score = 0;

  for (let i = 0; i < quiz.length; i++) {
    const currentQuestion = quiz[i];
    
    let userAnswer = prompt(`${currentQuestion.question}\n${currentQuestion.options.join('\n')}`);
    if (!userAnswer) continue; // если пользователь нажал "Отмена" — пропускаем
    
    // Приводим ответ к нижнему регистру и убираем пробелы
    userAnswer = userAnswer.trim().toLowerCase();

    // Проверяем: если ответ — цифра
    if (parseInt(userAnswer) === currentQuestion.correctAnswer) {
      score++;
    } 
    // Проверяем: если ответ — слово
    else if (userAnswer === currentQuestion.correctText.toLowerCase()) {
      score++;
    }
  }

  alert(`Вы ответили правильно на ${score} из ${quiz.length} вопросов!`);
});


// === Игра 6: Генератор случайных цветов ===

document.querySelector('#game6 .mg-item__info__button').addEventListener('click', function () {
  
  // Создаём слой
  const layer = document.createElement('div');
  layer.id = 'color-layer';
  document.body.appendChild(layer);

  // Стили для вспышки
  layer.style.position = 'fixed';
  layer.style.inset = '0';
  layer.style.backgroundColor = getRandomColor();
  layer.style.zIndex = '9999'; // поверх всего
  layer.style.opacity = '1';
  layer.style.transition = 'opacity 0.5s ease';
  
  // Через 1 секунду — начинаем затухание
  setTimeout(() => {
    layer.style.opacity = '0'; // плавное исчезновение
  }, 1000);

  // Через 2 секунды — удаляем элемент
  setTimeout(() => {
    layer.remove();
  }, 2000);

  // Функция случайного цвета
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});

