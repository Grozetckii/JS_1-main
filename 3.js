let text = prompt (`Enter text `);
let resText = ``;

function hasNumber(myString) {
    return /\d/.test(myString);
}

function reverseWords(str) {
    // Разделение строки на слова
    let words = str.split(" ");

    // Перебор каждого слова и обращение его букв
    let reversedWords = words.map(word => {
        if (!hasNumber(word)) {
            // Разделение слова на буквы
            let letters = word.split("");
            // Обращение порядка букв в слове
            let reversedLetters = letters.reverse();
            // Объединение букв обратно в слово
            let reversedWord = reversedLetters.join("");
            return reversedWord;
        }
    });

    // Объединение слов в новую строку
    let reversedString = reversedWords.join(" ");

    return reversedString;
}

if (text == ``) alert (`Text is Empty`);
else {
    alert(reverseWords(text));
}


