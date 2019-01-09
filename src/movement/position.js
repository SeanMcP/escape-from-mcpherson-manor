import { writeToScreen } from '../utils'

export let currentPosition = [0, 0]
export let positionHistory = [[...currentPosition]]

function writePosition(direction) {
    writeToScreen(
        `You travel ${direction}. Current location: ${currentPosition.join(
            ', '
        )}`
    )
}

export function go(direction) {
    let shouldPrintLocation = true
    switch (direction) {
        case 'north':
        case 'n':
            currentPosition[1]++
            positionHistory.unshift([...currentPosition])
            break
        case 'east':
        case 'e':
            currentPosition[0]++
            positionHistory.unshift([...currentPosition])
            break
        case 'south':
        case 's':
            currentPosition[1]--
            positionHistory.unshift([...currentPosition])
            break
        case 'west':
        case 'w':
            currentPosition[0]--
            positionHistory.unshift([...currentPosition])
            break
        case 'back':
        case 'b':
            if (positionHistory.length > 1) {
                positionHistory = positionHistory.slice(1)
                currentPosition = [...positionHistory[0]]
            } else {
                writeToScreen(`You cannot go back.`)
                shouldPrintLocation = false
            }
            break
        case undefined:
            writeToScreen(`You must include a direction.`)
            break
        default:
            return writeToScreen(`I don't recognize that direction.`)
    }
    if (direction && shouldPrintLocation) writePosition(direction)
}
