//Анимация для Главной Первый блок
document.getElementById("scrollTolets-go").addEventListener("click", function() {
  document.getElementById("lets-go").scrollIntoView({ behavior: "smooth" });
});

let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
let min= parseInt(numbers[0]);
for (i=0; i<numbers.length; i++) {
  let currentNumber = parseInt(numbers[i]);
  if (currentNumber < min) {
    min=currentNumber;
  }
}
console.log(`Минимальное число:`,min);