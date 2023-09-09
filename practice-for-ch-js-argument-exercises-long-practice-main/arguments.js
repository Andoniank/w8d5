function sum() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

console.log(sum(1, 2, 3, 4))


function sum2(...args) {
    let sum = 0
    for (const arg of args) {
        sum += arg
    }
    return sum
}

console.log(sum2(1, 2, 3, 4, 5))