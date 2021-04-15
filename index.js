// Code your solutions in this file
function writeCards(array, word) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        result.push(`Thank you, ${array[i]}, for the wonderful ${word} gift!`)
    }
    return result
}

function countDown(num) {
    while (num >= 0) {
        console.log(num)
        num--
    }
}