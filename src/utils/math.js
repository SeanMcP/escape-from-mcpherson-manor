export function rollD(number) {
    return Math.floor(Math.random() * number) + 1
}

export function coinFlip() {
    return rollD(2) === 1
}