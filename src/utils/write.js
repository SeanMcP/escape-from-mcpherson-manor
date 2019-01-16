import marked from 'marked'
import { Screen } from './elements'

function scrollToBottom() {
    Screen.scrollTop = Screen.scrollHeight
}

export function clearScreen() {
    while (Screen.firstChild) {
        Screen.removeChild(Screen.firstChild)
    }
    writeToScreen('*Screen cleared*')
}

export function writeToScreen(input, preventScroll) {
    Screen.innerHTML += marked(input)
    if (!preventScroll) scrollToBottom()
}

export function writeUserInput(input) {
    writeToScreen(`&gt; ${input}`)
}
