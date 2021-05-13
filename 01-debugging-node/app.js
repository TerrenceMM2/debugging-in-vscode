const input = "this is a sentence";

const splitSentence = (str) => {
    return str.split(" ");
};

const wordCount = (str) => {
    return splitSentence(str).length;
};

const characterCount = (str) => {
    const wordArr = splitSentence(str);
    const countArr = [];
    for (let i = 0; i < wordArr.length; i++) {
        countArr.push(wordArr[i].length);
    }
    return countArr;
};

const reverseSentence = (str) => {
    const arr = str.split(" ");
    let newArr = [];
    for (let i = arr.length - 1; i !== -1; i--) {
        newArr.push(arr[i].toLowerCase());
    }
    return newArr.join(" ");
};

const containsLetter = (str, letter) => {
    return str.includes(letter.toLowerCase());
};

// Example 1
// console.log(wordCount(input));

// Example 2
// console.log(reverseSentence(input));

// Example 3
// console.log(containsLetter(input, "t"));

// Example 4
// console.log(characterCount(input));
