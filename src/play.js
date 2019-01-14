import { clearScreen, normalize, writeToScreen, writeUserInput } from './utils'
import { currentPosition, go } from './movement/position'

function executeCommand(rawInput) {
    const input = normalize(rawInput)
    const [command, ...rest] = input.split(' ')

    const commandRouter = {
        clear: () => clearScreen(),
        // This needs to be broken out into a separate function
        check: () => writeToScreen(`Current location: ${currentPosition}`),
        go: () => go(...rest),
        sdg: () => writeToScreen('Soli Deo gloria!')
    }

    if (commandRouter[command]) {
        commandRouter[command]()
    } else {
        writeToScreen("I don't understand.")
    }
}

function play(input) {
    writeUserInput(input)
    executeCommand(input)
}

export default play
