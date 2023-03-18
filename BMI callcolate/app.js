    function play(ev) {
        let height, weght
        height = parseInt(document.querySelector('.form .inp1').value)
        weght = parseInt(document.querySelector('.form .inp2').value)
        let attr = ev.getAttribute('accesskey')
        let pat = /\d/
        if (pat.test(height) && pat.test(weght) && attr === 'off') {
            height = Math.pow(height, 2)
            let bmi = weght / height
            bmi = bmi * 10000
            bmi = bmi.toFixed(2)
            let result = document.createElement('div')
            result.innerHTML = bmi

            result.classList.add('res')

            document.querySelector('.form').appendChild(result)
            ev.setAttribute('accesskey', 'on')


        }

        else if(!(pat.test(height) && pat.test(weght))){
            alert('قد و وزن باید عددی باشد')
        }
    }

    function row(ev) {
        let but = document.querySelector('.button')
        if (ev.keyCode === 8) {
            let w = document.querySelector('.inp2').value
            let h = document.querySelector('.inp1').value
            if (w === '' || h === '') {
                let pa = document.querySelector('.form')
                pa.removeChild(document.querySelector('.res'))
                but.setAttribute('accesskey' , 'off')
            }
        }
    }
