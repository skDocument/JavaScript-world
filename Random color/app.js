load()
function load()
{
    let random = Math.floor(Math.random() * 9) +1
    let colors = document.getElementById('conta-color').getElementsByTagName('div')
    let randobj = colors[random]
    randobj.id = 'poro'
    let data = randobj.getAttribute('data-color')
    randobj.style.border = "green 10px solid"
    document.body.style.backgroundColor = data
    document.getElementById('title').innerHTML = data
    
    for(let i=0;i< colors.length;++i)
    {
        colors[i].onclick = function (){show(this)}
    }
    
}


function show(ev)
{
    let divs = document.getElementById('conta-color').getElementsByTagName('div')
    for(let i=0;i<divs.length;++i)
    {
        divs[i].style.border = '10px solid white'
    }
    document.getElementById('title').innerHTML = ''
    ev.style.border = 'green 10px solid'
    let data = ev.getAttribute('data-color')
    document.body.style.backgroundColor = data
    document.getElementById('title').innerHTML = data
    
}