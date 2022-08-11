export default function operations(ops){
    let result = null;
    let pos = []
    let arr = ops.split(' ')
    let dig = /[\d]/
    for(let i=0;i < arr.length ; ++i)
    {
        if(dig.test(arr[i]))
        {
            pos.push(Number( arr[i]) )
        }

        if(arr[i] == 'D')
        {
            if(pos.length < 1)
            {
                alert('تعداد اعضای آرایه حداقل باید 1 باشد')
                return null;
            }

            else 
            {
                let lastArr =  pos[pos.length - 1]
                pos.push(lastArr * 2)
            }
        }

        if(arr[i] == 'R')
        {
            if(pos.length < 1)
            {
                alert('تعداد اعضای آرایه حداقل باید 1 باشد')
                return null;
            }
            else 
            {
                pos.pop()
            }
        }

        if(arr[i] == '+')
        {
            if(pos.length < 2)
            {
                alert('تعداد اعضای آرایه حداقل باید 2 باشد')
                return null;
            }

            else{
                let lastArr =  pos[pos.length - 1]
                let secondLastArr = pos[pos.length - 2]
                pos.push(lastArr + secondLastArr )
            }
        }
    }
    result =  pos.reduce((first , second) => first + second);
    return result;
}

let op = prompt('Enter operations : ');
console.log(operations(op))