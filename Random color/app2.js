const colors = [
    'crimson',
    'deeppink',
    'deepskyblue',
    'gold',
    'lightgray',
    'pink',
    'orange',
    'mediumturquoise',
    'lemonchiffon',
    'indigo'
]

function setColor(color) {
    document.body.style.backgroundColor = color
    document.querySelector('div #title').innerHTML = color

    let acitve = document.querySelector('.active')

    if (acitve !== null) {
        acitve.classList.remove('active')
    }
    document.querySelector(`.colors[data-color = ${color}]`).classList.add('active')
}

colors.forEach(num => {
    const div = document.createElement('div')
    div.classList.add('colors')
    div.setAttribute('data-color', num)
    div.style.backgroundColor = num
    div.onclick = function () { setColor(num) }

    document.querySelector('#buttons').appendChild(div)
})














document.body.onload = function () {
    let random = Math.floor(Math.random() * colors.length)
    let rang = colors[random]
    setColor(rang)
}