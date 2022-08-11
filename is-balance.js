
export default function isBalance(input) {
    let result = null;

    let test = null
    let test2 = null
    let num = 1
    for(let i=0 ; i < input.length / 2 ;++i)
    {
        if(input.charAt(i) === '(' && input.charAt(input.length - num++) !== ')' ) 
            test = false;
        
    
        else if(input.charAt(i) === '{' && input.charAt(input.length - num++) !== '}')
            test = false;
        
    
        else if(input.charAt(i) === '[' && input.charAt(input.length - num++) !== ']')
            test = false
        
        else 
        {
            if(test === false)
            {
                test = false
            }
            else
            {
                test = true;
            }
            
        }



        

        
    }

    for(let i=0 ; i < input.length ;++i)
    {
        if(input.charAt(i) === '(' && input.charAt(++i) !== ')' ) 
            test2 = false;
        
    
        if(input.charAt(i) === '{' && input.charAt(++i) !== '}' ) 
            test2 = false;
        
    
        if(input.charAt(i) === '[' && input.charAt(++i) !== ']' ) 
            test2 = false;
        
        else 
        {
            if(test2 === false)
            {
                test2 = false
            }
            else
            {
                test2 = true;
            }
            
        }
        
    }



    if(test || test2)
    {
        result = 'این رشته بالانس تعمیم یافته است'
    }
    else
    {
        result = 'این رشته بالانس نیست'
    }
    return result
}



let input = prompt('enter a input')
console.log(isBalance(input))