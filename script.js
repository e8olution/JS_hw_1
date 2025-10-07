//Анимация для Главной Первый блок
document.getElementById("scrollTolets-go").addEventListener("click", function() {
  document.getElementById("lets-go").scrollIntoView({ behavior: "smooth" });
});




//let name=prompt('Введите ваше имя');

//alert(`Привет, ${name}`);

let c=Number(prompt('Введите число'));
(c>0 && c<10)?console.log("Верно"):console.log("Неверно");
