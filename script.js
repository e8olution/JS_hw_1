//Анимация для Главной Первый блок
document.getElementById("scrollTolets-go").addEventListener("click", function() {
  document.getElementById("lets-go").scrollIntoView({ behavior: "smooth" });
});




//let name=prompt('Введите ваше имя');

//alert(`Привет, ${name}`);

//var monthNumber=prompt("Введите номер месяца")
//monthNumber = parseInt(monthNumber);

//switch (true) {
//  case (monthNumber === 12 || monthNumber === 2 || monthNumber === 1):
//    console.log('Зима');
//    break;
//  case (monthNumber>=3 && monthNumber<=5 ):
//    console.log('Весна');
//    break; 
//  case (monthNumber>=6 && monthNumber<=8 ):
//    console.log('Лето');
//    break;     
//  case (monthNumber>=9 && monthNumber<=11 ):
//    console.log('Осень');
//    break;    
//  default:
//    console.log('такого месяца не существует');
//}

let obj={
  "Коля" : '200',
  "Вася" : '300',
  "Петя" : '400'
}
for (let key in obj) {
  console.log(`имя сотрудника ${key} — зарплата ${obj[key]} долларов`);
}