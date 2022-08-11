export default function encoder(inputString , repeatCount){

    let result = null;
    let enWords = [
        'a' , 'b' , 'c' , 'd' , 'e' , 'f' , 'g', 'h' ,'i' , 'j' , 'k' , 'l' , 'm' , 'n' , 'o' , 'p' , 'q' , 'r' 
        , 's' , 't' , 'u' , 'v' , 'x' , 'y' , 'z'
    ] 
    
    let borna = inputString.split('')
    let boresh =  borna.slice(borna.length - 1)
    borna.pop()
    let [ta] = boresh[0]
    borna.unshift(ta)

    for(let i = 0 ;i< borna.length ; ++i){
        for(let j=0;j<enWords.length;++j)
        {
            if(borna[i] == enWords[j])
            {
                if(borna[i] === 'z')
                {
                    borna[i] = enWords[repeatCount -1]
                }
                else
                {
                    borna[i] = enWords[j += repeatCount]  
                }

            } 
        }

    }

    result = borna.join('')

    return result;
}

let string = prompt('enter the words : ')
let count = eval(prompt('count repeat  '))
string.toLowerCase()
console.log(encoder(string , count))