
document.querySelector('.form-submit  button').addEventListener('click' , checkedForm)
document.querySelector('.inp-price').addEventListener('keyup' , sepratePrice)


const reverseString = str => str.split('').reverse().join('')
function sepratePrice(event) {
    let input = event.target
    let inputValue = input.value

    inputValue = inputValue.replace(/,/g , "" )
    if(isNaN(Number(inputValue))){
        return false;
    }

    let sepratedNamber = inputValue.toString();
    sepratedNamber = reverseString(sepratedNamber)
    sepratedNamber = sepratedNamber.split('')

    let tmpSeperatedNumber = "";

    let j = 0;
    for (let i = 0; i < sepratedNamber.length; i++) {
        tmpSeperatedNumber += sepratedNamber[i]
        j++
        if(j == 3)
        {
            tmpSeperatedNumber += ','
            j = 0;
        }
        
    }

    sepratedNamber = reverseString(tmpSeperatedNumber)
    if(sepratedNamber[0] == ',') sepratedNamber = sepratedNamber.replace(',' , '')
    event.target.value = sepratedNamber

}



function checkedForm (event){
    let idCode = document.querySelector('.inp-idCode').value
    let price = document.querySelector('.inp-price').value
    let pat = /^[0-9,]+$/
    let pat2 = /^[0-9]+$/

    if(pat.test(price) && pat2.test(idCode) && idCode.length == 10 ){
        genrateUser(idCode , price)
        document.querySelector('.validMassage').innerHTML =  ''

    }else{
        document.querySelector('.validMassage').innerHTML = 'از صحت مقادیر وارد شده اطمینان حاصل کنید'
    }

}


function genrateUser(idCode , price){
    let li = document.createElement('li')
    let userId = document.createElement('span')
    userId.innerHTML = `کد ملی  : ${idCode}`;
    let userPrice = document.createElement('span')
    userPrice.innerHTML = `مبلغ  : ${price}`;



    li.appendChild(userId)
    li.appendChild(userPrice)


    document.querySelector('.list-users').appendChild(li)



}



