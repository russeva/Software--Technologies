function extractCapital(arr) {

    let inputText = arr.join(",");

    let allWords = inputText.split(/\W+/);

    let uppercaseWords = allWords
        .filter(l => l.length > 0)
        .filter(x => x.toUpperCase() == x);

    console.log(uppercaseWords.join(', '));
}
