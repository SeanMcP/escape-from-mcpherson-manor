import { Input, Enter } from './utils/elements'
import play from './play'

function getInput() {
    const { value } = Input
    play(value)
    Input.value = ''
}

Enter.addEventListener('click', getInput)

function actOnEnter(event) {
    if (event.key === 'Enter') {
        Enter.click()
    }
}

Input.addEventListener('keypress', actOnEnter)