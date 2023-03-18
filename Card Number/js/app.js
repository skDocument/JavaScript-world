


class foc{
    constructor(con,config)
    {
        const containner = document.querySelector(con);
        this.containner = containner;
        this.config = config;

        containner.addEventListener('keypress' , event => {
            if(event.target.tagName === 'INPUT')
            {
                if(event.target.value.length >= config.inpLength )
                {
                    event.returnValue = false
                }

            }
        });


        containner.addEventListener('keyup' , event => {
            if(event.target.tagName === "INPUT")
            {
                let value = event.target.value;

                if(event.key !== 'Backspace' && value.length === config.inpLength)
                {
                    let order = parseInt(event.target.getAttribute('data-order'))
                    let next = containner.querySelector(`input[data-order = "${order + 1}" ] `) 

                    if(value !== null)
                    {
                        next.focus()
                    }
                    else
                    {
                        if(this.toFinish())
                        {
                            if(config.onFinish)
                            {
                                config.onFinish()
                            }
                        }
                    }
                }
            }
        });



        containner.addEventListener('keydown' , event => {
            if(event.target.tagName === 'INPUT')
            {
                let value = event.target.value

                if(event.key === 'Backspace' && value.length === 0)
                {
                    let order = parseInt(event.target.getAttribute('data-order'))
                    let previous = containner.querySelector(`input[data-order = "${order - 1}"]`)

                    if(previous !== null)
                    {
                        previous.focus()
                    }
                }
            }
        });



    }

    
    toFinish()
    {
        let inputs = document.querySelectorAll('input')
        let empty = Array.from(inputs).filter(input => {
            return input.value === '';
        })

        return empty.length === 0;
    }
}


new foc('.inputs-conta' , {
    inpLength : 4,
    onFinish () {
        console.log('Finished!')
    }
})