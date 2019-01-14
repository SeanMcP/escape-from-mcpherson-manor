import { shuffle, writeToScreen } from '../utils'
import {
    abbrDirectionsInOrder,
    mapAbbrDirectionToFull,
    mapAbbrDirectionToOpposite
} from '../movement/direction'
import ROOM_DATA from '../data/rooms.json'

function generateExits(enterDirection = undefined, type) {
    const numberOfExits = ROOM_DATA[type].exits
    const exits = []
    if (enterDirection) exits.push(mapAbbrDirectionToOpposite[enterDirection])
    const shuffledDirections = shuffle(abbrDirectionsInOrder)
    let i = 0
    while (exits.length < numberOfExits) {
        const current = shuffledDirections[i]
        if (!exits.includes(current)) exits.push(current)
        i++
    }
    return abbrDirectionsInOrder.filter((direction) =>
        exits.includes(direction)
    )
}

function getRandomRoom(enterDirection) {
    if (enterDirection) {
        const keys = Object.keys(ROOM_DATA)
        return keys[Math.floor(Math.random() * keys.length)]
    }
    return 'hallway'
}

class Room {
    constructor(enterDirection) {
        this.type = getRandomRoom(enterDirection)
        this.description = ROOM_DATA[this.type].description
        this.exits = generateExits(enterDirection, this.type)
        // this.itemCount = 5
    }

    // set item(value) {
    //     this.itemCount = this.itemCount + value
    // }

    writeDescription() {
        return writeToScreen(this.description)
    }

    writeExits() {
        return writeToScreen(
            `Exits: ${this.exits
                .map((exit) => mapAbbrDirectionToFull[exit])
                .join(', ')}`
        )
    }
}

export default Room
