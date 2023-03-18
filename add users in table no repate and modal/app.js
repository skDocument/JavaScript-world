
document.querySelector('.openModal').addEventListener('click', ()=> document.querySelector('.mask').style.display = 'flex')
document.querySelector('.closeModal').addEventListener('click', ()=> document.querySelector('.mask').style.display = 'none')
document.querySelector('.addUserBtn').addEventListener('click', addUser)


function checkUser(newUser){
    let allUsers =  document.querySelectorAll('.tr')
    let user = []; 
    allUsers.forEach((tr ,indx) =>{
        let arr = []
        if(indx <=2){
            arr.push(tr.childNodes[1].innerHTML)
            arr.push(tr.childNodes[3].innerHTML)
        }
        else{
            arr.push(tr.childNodes[0].innerHTML)
            arr.push(tr.childNodes[1].innerHTML)
        }
        user.push(arr.join(' ')); 
    })

    let pat = /\s/g 
    let newa = [...newUser]
    if(pat.test(newa[newa.length -1])){
        return true
    }
    else{
        let checked = user.some((user)=>{
            return user == newUser
        })
    
        return checked;
    } 


}



function addUser(event) {

    let firstName ,lastName
    firstName = document.querySelector('.firstnameInput').value
    lastName = document.querySelector('.lastnameInput').value
    let newUser = firstName + ' ' + lastName;

    if(firstName == '' || lastName == ''){
        document.querySelector('.validateMassage').innerHTML = 'همه ی فیلد ها را پرکنید';
        return false

    }
    if(checkUser(newUser)){
        document.querySelector('.validateMassage').innerHTML = 'کاربر در لیست وجود دارد'
    }
    else{
        let tr = document.createElement('tr')
        let fnName = document.createElement('td')
        fnName.innerHTML = firstName
    
        let lnName = document.createElement('td')
        lnName.innerHTML = lastName
        
        tr.classList.add('tr')
        tr.appendChild(fnName)
        tr.appendChild(lnName)
        console.log(tr.childNodes[0]);
        document.querySelector('.table').appendChild(tr)
        
        document.querySelector('.firstnameInput').value = ''
        document.querySelector('.lastnameInput').value = ''
        document.querySelector('.validateMassage').innerHTML = ''
        document.querySelector('.mask').style.display = 'none' 
    }


    
}   

