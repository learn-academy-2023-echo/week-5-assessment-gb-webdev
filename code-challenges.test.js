// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

// describe("codeStr", () => {
//     it("returns a string argument as a string, but changes 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0 ", () => {
//     const secretCodeWord1 = "Lackadaisical"
//     const secretCodeWord2 = "Gobbledygook"
//     const secretCodeWord3 = "Eccentric"
//         expect(codeStr(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//         expect(codeStr(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//         expect(codeStr(secretCodeWord3)).toEqual("3cc3ntr1c")
//     })
// })



// b) Create the function that makes the test pass.

// Pseudo code: Create a function that takes in a string, return the string split into an array so we can use .map to iterate through the array. Add a conditional to see if the iterated map values(uppercased) contain certain letters. if so, return the desired number instead of the letter. Add an else that returns the origin value if it isn't one of those letters. join the array back to a string, but outside of maps block scope.

// const codeStr = (string) => {
// return string.split("").map((value) => {
//     if (value.toUpperCase() === "A") {
//         return "4"
//     }  else if (value.toUpperCase() === "E") {
//         return "3"
//     } else if (value.toUpperCase() === "I") {
//         return "1"
//     } else if (value.toUpperCase() === "O") {
//         return "0"
//     } else {
//         return value
//     }

// }).join("")
// }


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

// describe("wordFind" && "wordFinds", () => {
//   it("Finds a word in the array using a single letter from a var passed in. if the value in the array has that letter, return it in the new array, otherwise drop the value.", () => {
//       expect(wordFind).toEqual(["Mango", "Apricot", "Peach"])
//       expect(wordFinds).toEqual(["Cherry", "Blueberry", "Peach"])
//     })
// })

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const filterLetterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const filterLetterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

      


// Pseudo code: create a higher order function that takes in an array, use .filter to iterate through the array. With the .filters built in if statement,  lower case the array (since the var letter is lower case) and use .includes with the variable provided. This will return any strings in the array containing that variable character only 
//(I could only manage to use 2 seperate functions)

// b) Create the function that makes the test pass.

// const wordFind = fruitArray.filter((array, character) => {
//         return array.toLowerCase().includes(filterLetterA)
//     }) 
//     const wordFinds = fruitArray.filter((array) => {
//         return array.toLowerCase().includes(filterLetterE)
//     }) 

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
    it("Returns a boolean value letting us know if an array contains 2 of one number and 3 of another, no matter what order the numbers are in.", () => {
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
        expect(fullHouse(hand4)).toEqual(true)   
    })
})

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.

// Pseudo code: // Pseudo code: create a function with an array param, add a var with an empty object to track occurences. Create a for loop and conditional statement. This will iterate through the array and see if any of the values in the array meet our criteria. If they do, they can be pulled out and added to our object. So 2 vars will default as false, but if our object [new arr var] === 2 matching cardnumbers this will be true, if our object [new arr var] === 3 return both of these as true. Then the object can be returned as a true boolean value. 

// input: array
// Output: boolean 

// const cardCount = {   }

const fullHouse = (array) => {
    const winningHand = {} 
    for (const cardNumber of array)  {
        if (!winningHand [cardNumber]) {
            winningHand [cardNumber] = 0
        } winningHand [cardNumber] ++ 
    } let pair = false 
    let threeOfKind = false
    for (let cardNumber in winningHand) {
        if (winningHand [cardNumber] === 2) {
            pair = true
        } else if (winningHand [cardNumber] === 3) {
            threeOfKind = true
        }
    }
    return pair && threeOfKind
}

// Elmer helped me with this :D
