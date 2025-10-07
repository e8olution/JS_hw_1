//Анимация для Главной Первый блок
document.getElementById("scrollTolets-go").addEventListener("click", function() {
  document.getElementById("lets-go").scrollIntoView({ behavior: "smooth" });
});




//let name=prompt('Введите ваше имя');

//alert(`Привет, ${name}`);

let d=Number(prompt('Введите 1 число'));
let e=Number(prompt('Введите 2 число'));
(d>100 || e>100)?console.log("Верно"):console.log("Неверно");
