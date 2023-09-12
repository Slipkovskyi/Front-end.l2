let text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ea earum incidunt minima nihil. Blanditiis consectetur cumque debitis delectus dolor dolorem dolorum, eos laboriosam, modi nemo, quasi quos sint voluptatibus!`;

//Сформуємо новий рядок із символів, які мають індекси 12, 6, 18, 25 в рядку text та виведемо його в консоль:
let newIndexString = text[12] + text[6] + text[18] + text[25];
console.log(newIndexString);
//Виведемо в консоль рядок, утворений з рядка text шляхом приведення до нижнього регістру:
let lowerCaseText = text.toLowerCase();
console.log(lowerCaseText);
//Виведемо всі позиції, в яких зустрічається послідовність символів "in":
let positions = [];
let searchStr = "in";
let position = text.indexOf(searchStr);

while (position !== -1) {
    positions.push(position);
    position = text.indexOf(searchStr, position + 1);
}

console.log(positions);
//Розділімо рядок text на масив підрядків за роздільником "пробіл" та виведемо його:
let wordsArray = text.split(" ");
console.log(wordsArray);
//Створимо і виведемо рядок, який є інвертованим рядком text:
let reversedText = text.split("").reverse().join("");
console.log(reversedText);
//Завершимо функцію ucFirst, яка приведе першу літеру тексту до верхнього регістру:
function ucFirst(txt) {
    if (txt.length === 0) return txt; // Перевірка на пустий рядок
    return txt[0].toUpperCase() + txt.slice(1);
 }
 
 console.log(ucFirst('some text'));
 
