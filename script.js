//Анимация для Главной Первый блок
document.getElementById("scrollTolets-go").addEventListener("click", function() {
  document.getElementById("lets-go").scrollIntoView({ behavior: "smooth" });
});




//let name=prompt('Введите ваше имя');

//alert(`Привет, ${name}`);

let password='пароль';
let answer=prompt('Введите пароль');
if (answer===password) {
  console.log ('Пароль введен верно!');
}
else {
  console.log('Пароль введен неверно');
} 