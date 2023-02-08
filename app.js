const yourName = document.querySelector('#yourName')
const theirName = document.querySelector('#theirName')
document.querySelector('#calc').addEventListener('click', calculate)
const output = document.querySelector('#output')
const singleGuys = ['salman', 'hari', 'ram']
function calculate() {
    const yourNameValue = yourName.value
    const theirNameValue = theirName.value
    if (yourNameValue == '' || theirNameValue == '') {
        return alert('Please enter both names')
    }
    if (

        singleGuys.includes(yourNameValue.toLowerCase())
        ||
        singleGuys.includes(theirNameValue.toLowerCase())
    ) {
        clearInput()
        return output.innerText = "Oops! this guy will never love"
    }
    const lovePercent = parseInt(Math.random() * 100)
    output.innerText = yourNameValue + ' and ' + theirNameValue + ' are in ' + lovePercent + '% love'
    clearInput()
}

function clearInput() {
    yourName.value = ''
    theirName.value = ''
}