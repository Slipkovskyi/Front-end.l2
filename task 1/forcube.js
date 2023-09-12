// Отримуємо посилання на таблицю
var table = document.getElementById("myTable");

// Отримуємо всі комірки таблиці
var cells = table.getElementsByTagName("td");

// Змінна для визначення, чи потрібно зараз додавати клас "selected"
var addSelectedClass = true;

// Проходимося по всіх комірках і додаємо або видаляємо клас "selected" відповідно
for (var i = 0; i < cells.length; i++) {
    if (addSelectedClass) {
        cells[i].classList.add("selected");
    } else {
        cells[i].classList.remove("selected");
    }
    
    // Змінюємо значення addSelectedClass для наступної комірки
    addSelectedClass = !addSelectedClass;
}
