let ol = document.createElement('ol')
document.querySelector('.result').appendChild(ol)


let boxes = localStorage.getItem('memory')
boxes = boxes === null ? [] : JSON.parse(boxes)

for(let val of boxes)
{
    createBox(val)
}

document.querySelector('.form').onsubmit = (ev) => {
    ev.preventDefault();
    let inp = document.querySelector('.inp1').value

    if(inp.trim() === '')
    {
        alert('fild is empty')
        return
    }

    let id = (Math.random() + 1).toString(15).substring(3)
    const data = {id,inp}
    
    boxes.push(data)
    setBox()
    createBox(data)

}

function createBox(arg)
{
    let li = document.createElement('li')
    li.classList.add('item-box')
    let title = document.createElement('h3')
    title.innerHTML = arg.inp
    title.onclick = () => {
        let value = prompt('Enter new title ')
        title.innerHTML = value;
        arg.inp = value
        setBox()
    }

    let but = document.createElement('button')
    but.classList.add('btn-close')
    but.innerHTML = 'x'
    but.onclick = () => {
        if(confirm('are you sure?'))
        {
            li.remove()
            boxes = boxes.filter(num => num.id !== arg.id)
            setBox()
        }

    }

    li.appendChild(title)
    li.appendChild(but)

    ol.appendChild(li)
}


function setBox()
{
    localStorage.setItem('memory' , JSON.stringify(boxes))
}






























// const container = document.createElement('ol')
// document.querySelector('.result').appendChild(container)

// let boxes = localStorage.getItem('memo')
// boxes = boxes === null ? [] : JSON.parse(boxes)

// for(let value of boxes)
// {
//     createBox(value)
// }


// document.querySelector('.form').onsubmit = (ev) => {
//     ev.preventDefault();
//     let inp = document.querySelector('.inp1').value

//     if(inp.trim() === '')
//     {
//         alert('fild is empty')
//         return
//     }


//     let id = (Math.random() + 1).toString(36).substring(7)
    
//     let data = {id,inp}

//     boxes.push(data)
//     setBox()
//     createBox(data)
// }

// function createBox(arg)
// {
//     let row = document.createElement('li')
//     row.classList.add('item-box')
//     let h3 = document.createElement('h3')
//     h3.innerHTML = arg.inp
//     h3.onclick = () => {
//         let value = prompt('Eneter New value')
//         h3.innerHTML = value
//         arg.inp = value
//         setBox()
//     }


//     let but = document.createElement('button')
//     but.classList.add('btn-close')
//     but.innerHTML = 'x'
//     but.onclick = () => {
//         if(confirm('are you sure?'))
//         {
//             row.remove();
//             boxes = boxes.filter(num => num.id !== arg.id)
//             setBox()
//         }
//     }

//     row.appendChild(h3)
//     row.appendChild(but)

//     container.appendChild(row)
    

// }


// function setBox()
// {
//     localStorage.setItem('memo' , JSON.stringify(boxes))
// }