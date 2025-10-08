//Анимация для Главной Первый блок
document.getElementById("scrollTolets-go").addEventListener("click", function() {
  document.getElementById("lets-go").scrollIntoView({ behavior: "smooth" });
});


let k=100;
let iterations=0;

while (k>=0) {
  k=k-7;
  iterations++;
}

console.log(k);
console.log(iterations);