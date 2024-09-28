// select Element 
const p = document.querySelectorAll('p')
console.log(p);


//first code to chnage all char into  random Number
// function randomType(element, characters, duration, sequential = false) {
//     let originalText = element.innerText;
//     let textArray = originalText.split('');
//     let charactersArray = characters.split('');
//     let startTime = new Date().getTime();
//     let interval;

//     if (sequential) {
//         let currentIndex = 0;
//         interval = setInterval(function () {
//             textArray[currentIndex] = charactersArray[Math.floor(Math.random() * charactersArray.length)];
//             element.innerText = textArray.join('');
//             currentIndex++;
//             if (currentIndex === textArray.length) {
//                 currentIndex = 0;
//             }
//             if (new Date().getTime() - startTime >= duration) {
//                 clearInterval(interval);
//                 element.innerText = originalText;
//             }
//         }, 20);
//     } else {
//         interval = setInterval(function () {
//             for (let i = 0; i < textArray.length; i++) {
//                 textArray[i] = charactersArray[Math.floor(Math.random() * charactersArray.length)];
//             }
//             element.innerText = textArray.join('');
//             if (new Date().getTime() - startTime >= duration) {
//                 clearInterval(interval);
//                 element.innerText = originalText;
//             }
//         }, 0);
//     }
// }
// randomType(p, '10', 1000, true)


// Second Code To change all char inot random Number
// function randomNumber01(element, characters, duration, sequential = false) {
//     let originalText = element.innerText;
//     let textArray = originalText.split('');
//     let charactersArray = characters.split('');
//     let startTime = new Date().getTime();
//     let interval;

//     if (sequential) {
//         interval = setInterval(function () {
//             for (let i = 0; i < textArray.length; i++) {
//                 textArray[i] = charactersArray[Math.floor(Math.random() * charactersArray.length)];
//             }
//             element.innerText = textArray.join('');
//             if (new Date().getTime() - startTime >= duration) {
//                 clearInterval(interval);
//                 element.innerText = originalText;
//             }
//         }, 0);
//     }
// }

// randomNumber01(p, '01', 1000, true)

// Third Code to Chnage all char inot Random Number 
// function randomNumber02(element, characters, duration, sequential = false) {
//     let originalText = element.innerText;
//     let textArray = originalText.split('');
//     let charactersArray = characters.split('');
//     let startTime = new Date().getTime();
//     let interval;

//     if (sequential) {
//         let currentIndex = 0;
//         interval = setInterval(function () {
//             textArray[currentIndex] = charactersArray[Math.floor(Math.random() * charactersArray.length)];
//             element.innerText = textArray.join('');
//             currentIndex++;
//             if (currentIndex === textArray.length) {
//                 currentIndex = 0;
//             }
//             if (new Date().getTime() - startTime >= duration) {
//                 clearInterval(interval);
//                 element.innerText = originalText;
//             }
//         }, 20);
//     }
// }

// randomNumber02(p, '011', 1000, true)

// each paragraph 
p.forEach(img => {

    function randomNumber02(element, characters, duration, sequential = false) {
    let originalText = element.innerText;
    let textArray = originalText.split('');
    let charactersArray = characters.split('');
    let startTime = new Date().getTime();
    let interval;

    if (sequential) {
        let currentIndex = 0;
        interval = setInterval(function () {
            textArray[currentIndex] = charactersArray[Math.floor(Math.random() * charactersArray.length)];
            element.innerText = textArray.join('');
            currentIndex++;
            if (currentIndex === textArray.length) {
                currentIndex = 0;
            }
            if (new Date().getTime() - startTime >= duration) {
                clearInterval(interval);
                element.innerText = originalText;
            }
        }, 20);
    }
    }
    
    randomNumber02(img, '01', 1000, true)
})