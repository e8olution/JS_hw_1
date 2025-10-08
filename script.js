//Анимация для Главной Первый блок
document.getElementById("scrollTolets-go").addEventListener("click", function() {
  document.getElementById("lets-go").scrollIntoView({ behavior: "smooth" });
});


let months=["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октрябрь","ноябрь","декабрь"];
for (i=0; i<months.length;i++) {
console.log(`Название месяца:${months[i]},его порядковый номер:${i+1}`);
}