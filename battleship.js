var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
let guess;  //номер kletki v текущей попыткe
let hits = 0;  //количество попаданий
let guesses = 0;  //количсество попыток
let isSunk = false;  //потоплен корабль или нет
while (isSunk == false) {
    guess = prompt("Вы готовы ебашить?! (Введи ёбаное число 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Еблан, введи корректное число!");
    } else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            alert("ПОПАЛ!");
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alert("Ты разъебал мой корабль ,чёрт!");
            }

        }
        else {
            alert("УПС!МИМО!");
        }

    }
}
let улов = "Ты ебанул " + guesses + " попытки, что бы разъебать фригат, " +
    "а это означает ,что твой зоркий глаз, как у ебучего сокола! С общей точностью " + (3 / guesses);
alert(улов);