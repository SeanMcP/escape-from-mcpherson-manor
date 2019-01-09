import marked from 'marked'
import { Screen } from './elements'

function scrollToBottom() {
    Screen.scrollTop = Screen.scrollHeight;
}

export function writeUserInput(input) {
    Screen.innerHTML += marked(`&gt; ${input}`)
    scrollToBottom()
}