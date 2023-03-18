class inavlid {
    constructor() {
        this.inputs = document.querySelectorAll('.inp')
    }

    result() {

        if ((this.inputs[0].value.length >= 5 && this.inputs[1].value.length >= 5) && 
        (this.inputs[0].value !== '' && this.inputs[1].value !== '')) {

            for (let i = 0; i < this.inputs.length; ++i) {
                let req = document.querySelectorAll('.pA')
                req[i].style.display = 'none'
                this.inputs[i].value = null
            }

        } else {
            for (let input of this.inputs) {
                if (input.value === '') {
                    let place = input.nextSibling.nextSibling
                    place.style.display = 'block'
                } else{
                    let place = input.nextSibling.nextSibling
                    place.style.display = 'none'
                }

                if (input.value.length < 5) {
                    let place = input.nextSibling.nextSibling.nextSibling.nextSibling
                    place.style.display = 'block'
                    
                } else {
                    let place = input.nextSibling.nextSibling.nextSibling.nextSibling
                    place.style.display = 'none'
                }

            }
        }

    }
}

const valid = new inavlid()
document.querySelector('form').onsubmit = (ev) => {
    ev.preventDefault()
    valid.result()
}