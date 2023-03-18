

$(document).ready(function(){
   let firstDate =  $('.firstdate').persianDatepicker({
        initialValue: false,
        observer: true,
        format: 'YYYY/MM/DD',
        altField: '.observer-example-alt'   
    })
    let secondeDate =  $('.secondedate').persianDatepicker({
        initialValue: false,
        observer: true,
        format: 'YYYY/MM/DD',
        altField: '.observer-example-alt'   
    })



    document.querySelector('.form-title-inp').addEventListener('keyup' , checkedTitle)
    document.querySelector('.form-submit button').addEventListener('click' , addToList)
   function checkedTitle (event) {
        let value = new Array()
        value.push(event.target.value)
        let pat = /^[آ-ی ء چ]+$/
        if(pat.test(event.target.value)){
                
            let newValue = value.join('')
    
            event.target.value = newValue
        }
        else{
            let newval = [...event.target.value]
            newval.pop()
            event.target.value = newval.join('')
        }


    }

    function addToList(event){
        let Date1 = firstDate.model.state.view
        let Date2 = secondeDate.model.state.view
        let pat = /^[آ-ی ء چ]+$/
        let title = document.querySelector('.form-title-inp').value
        let inpdateOneValue = document.querySelector('#firstDate').value
        let inpdateTwoValue = document.querySelector('#secondeDate').value
        if(Date1.unixDate < Date2.unixDate && pat.test(title) && inpdateOneValue != '' && inpdateTwoValue != ''){
            let li = document.createElement('li');
            let titleList = document.createElement('span');
            let firstDateList = document.createElement('span');
            let secondeDateList = document.createElement('span');


            titleList.innerHTML = `عنوان : ${title}`;
            firstDateList.innerHTML = `تاریخ اول :  ${inpdateOneValue}`
            secondeDateList.innerHTML = `تاریخ دوم : ${inpdateTwoValue}`

            li.appendChild(titleList)
            li.appendChild(firstDateList)
            li.appendChild(secondeDateList)


            document.querySelector('.list-users').appendChild(li)
            document.querySelector('.validateMassage').innerHTML = ''
        }
        else{
            document.querySelector('.validateMassage').innerHTML = 'لطفا در وارد کردن مقادیر دقت کنید'
        }
        
    }
})





