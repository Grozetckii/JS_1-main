function isSumOfThreeSquares(n) {
    // Проверяем тривиальные случаи, когда n является полным квадратом или 0
    if (Math.sqrt(n) % 1 === 0 || n === 0) {
        return true;
    }
    // Проверяем ограничение Лагранжа
    for (let i = 1; i <= Math.sqrt(n); i++) {
        const reminder = n - i*i;
        const sqrtReminder = Math.sqrt(reminder);
        if (sqrtReminder % 1 === 0) {
            return true;
        }
    }
    return false;
}

let n = prompt(`Enter a number`);
if (!isFinite(n) || isNaN(parseFloat(n))) alert (`No numbers entered`);
else {
    n=+n;
    if (isSumOfThreeSquares(n)){
        alert ("yes");// Число n представимо в виде суммы трех полных квадратов
    }
    else{
        alert ("no"); // Число n не представимо в виде суммы трех полных квадратов
    }
}





