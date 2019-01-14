import { coinFlip, writeToScreen } from '../utils'
import {
    listAbbrDirections,
    oppositeDirection
} from '../movement/direction'

function generateExits(enterDirection=undefined) {
    const exits = [oppositeDirection[enterDirection]]
    listAbbrDirections.forEach((direction) => {
        if (coinFlip() && !exits.includes(direction)) exits.push(direction)
    })
    return exits.filter(entry => entry)
}

class Room {
    constructor(enterDirection) {
        this.description = 'I am a room'
        this.exits = generateExits(enterDirection)
        // this.itemCount = 5
    }

    // set item(value) {
    //     this.itemCount = this.itemCount + value
    // }

    writeDescription() {
        return writeToScreen(this.description)
    }

    writeExits() {
        return writeToScreen(`Exits: ${this.exits.join(', ')}`)
    }
}

export default Room
