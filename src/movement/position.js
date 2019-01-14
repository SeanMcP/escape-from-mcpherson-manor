import { writeToScreen } from '../utils'
import { DIRECTIONS, mapAbbrDirectionToFull } from './direction'
import Room from '../classes/Room'

export let currentPosition = [0, 0]
export let positionHistory = [[...currentPosition]]
export const map = {
    '0,0': new Room()
}

function writePosition(direction) {
    writeToScreen(
        `You travel ${
            direction.length === 1
                ? mapAbbrDirectionToFull[direction]
                : direction
        }. Current location: ${currentPosition.join(', ')}`
    )
}

export function go(direction) {
    let userDidMove = true
    let shouldCreateNewRoom = true
    const currentRoom = map[currentPosition.join()]
    const directionInitial = direction[0]
    if (
        currentRoom.exits.includes(directionInitial) ||
        directionInitial === DIRECTIONS.back.abbr
    ) {
        switch (direction) {
            case DIRECTIONS.north.full:
            case DIRECTIONS.north.abbr:
                currentPosition[1]++
                positionHistory.unshift([...currentPosition])
                break
            case DIRECTIONS.east.full:
            case DIRECTIONS.east.abbr:
                currentPosition[0]++
                positionHistory.unshift([...currentPosition])
                break
            case DIRECTIONS.south.full:
            case DIRECTIONS.south.abbr:
                currentPosition[1]--
                positionHistory.unshift([...currentPosition])
                break
            case DIRECTIONS.west.full:
            case DIRECTIONS.west.abbr:
                currentPosition[0]--
                positionHistory.unshift([...currentPosition])
                break
            case DIRECTIONS.back.full:
            case DIRECTIONS.back.abbr:
                if (positionHistory.length > 1) {
                    positionHistory = positionHistory.slice(1)
                    currentPosition = [...positionHistory[0]]
                    shouldCreateNewRoom = false
                } else {
                    writeToScreen(`You cannot go back.`)
                    userDidMove = false
                }
                break
            case undefined:
                writeToScreen(`You must include a direction.`)
                break
            default:
                return writeToScreen(`I don't recognize that direction.`)
        }

        if (direction && userDidMove) {
            const currentPositionString = currentPosition.join()
            if (shouldCreateNewRoom && !map[currentPositionString]) {
                const newRoom = new Room(direction[0])
                map[currentPositionString] = newRoom
            }
            const enteredRoom = map[currentPositionString]
            writePosition(direction)
            enteredRoom.writeDescription()
            enteredRoom.writeExits()
        }
    } else {
        writeToScreen('There is no exit in that direction.')
    }
}
