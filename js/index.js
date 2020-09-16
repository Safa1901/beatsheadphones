const string = "Добрый день! Как ваше настроение?"

const vowels = ["а", "у", "о", "ы", "и", "э", "я", "ю", "ё", "е"]

const getVowels = stringToFilter => {
    let extractVowels = "";

    for (let i =0; i < stringToFilter.length; i++) {
        const currentLetter = stringToFilter[i]

        if (vowels.includes(currentLetter)){
            extractVowels = extractVowels + currentLetter;
        }
    }

    return extractVowels;
}

console.log(getVowels(string));



const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}
];

const getWorthyWorkers = workersArr => {
    const worthyWorkers =[];
    
    for (let i = 0; i < workersArr.length; i++){
        const currentWorker = workersArr[i]

        if (currentWorker.salary > 1000) {
            worthyWorkers.push(currentWorker.name);
        }
    }

    return worthyWorkers;
}

console.log(getWorthyWorkers(workers))



const path = "/users/download/index.html"

const isHtml = path => {
    const requiredExt = ".html";
    const pathExt = path.slice(-5);
    
    if (pathExt == requiredExt) {
        return true
    } else {
        return false
    }
}


console.log(isHtml(path));


const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];

const isEven = num => {
    return num % 2 == 0;
}


const filterArray = (arrayToFilter, filterFn) => {
    const filteredArray = [];

    arrayToFilter.forEach(num => {
        if (filterFn(num))
        filteredArray.push(num)
    })

    return filteredArray;
}

console.log(filterArray(mixedArray, isEven));

const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const items = document.querySelector("#items");

let index = 0;
let type = '';

const clicker = () => {
    if (index > -5 && type === 'right') {
        index--
    } else if (index < 0 && type === 'left'){
        index++
    } else if (index === 0) {
        index = -5;
    } else if (index === -5) {
        index = 0;
    }
    items.style = `transform: translateX(${index * 100}px);`
}

rightBtn.addEventListener("click", (e) => {
    e.preventDefault();
    type = 'right';
    clicker()
});

leftBtn.addEventListener("click", (e) => {
    e.preventDefault();
    type = 'left';
    clicker()
});
