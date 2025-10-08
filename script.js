//Анимация для Главной Первый блок
document.getElementById("scrollTolets-go").addEventListener("click", function() {
  document.getElementById("lets-go").scrollIntoView({ behavior: "smooth" });
});

let book={
  название:'Первая книга',
  автор:'Иван Иванович',
  год_издания:'2000',
  жанр:'фантастика',
}

for (let key in book){
  console.log(`${key}:${book[key]}`);
}