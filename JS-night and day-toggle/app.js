document.querySelector('.target').addEventListener("click" , (event) =>{
    let pos =  event.target.getAttribute('accesskey')
    if(pos === 'day'){
        event.target.setAttribute('accesskey' , 'night');
        event.target.style.left = '58%';
        document.body.style.backgroundColor = '#081a33';
       event.target.style.backgroundColor = '#3c5577';
       event.target.parentNode.style.backgroundColor = '#6f84a3';
       event.target.innerHTML = '<i class="fa fa-moon"></i>'
    }
    else if(pos === 'night'){
        event.target.setAttribute('accesskey' , 'day');
        event.target.style.left = '0%';
        document.body.style.backgroundColor = 'aliceblue';
       event.target.style.backgroundColor = '#253b5c';
       event.target.parentNode.style.backgroundColor = 'rgb(255, 255, 255)'
       event.target.innerHTML = '<i class="fa fa-sun"></i>'
    }
})