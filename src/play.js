import { clearScreen, normalize, writeToScreen, writeUserInput } from './utils' 

function executeCommand(rawInput) {
    const input = normalize(rawInput)

    const commandRouter = {
        'clear': () => clearScreen(),
        'sdg': () => writeToScreen('Soli Deo gloria!')
    }

    if (commandRouter[input]) {
        commandRouter[input]()
    } else {
        writeToScreen('I don\'t understand.')
    }
}

function play(input) {
    writeUserInput(input)
    executeCommand(input)
}

export default play