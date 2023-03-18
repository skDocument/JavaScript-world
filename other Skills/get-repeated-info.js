export default function getRepeatedInfo(number){
    let result = null;

    let dig = /[\D]/
    if(dig.test(number) || number == '0')
    {
        alert('فقط رقم وارد کنید !')
        return null;
    }
    let stringNumber = [...number.toString()];
    let obj = new Object();
    let num = [];
    for(let i=0;i<stringNumber.length;++i)
    {   
        num.push( [ Number(stringNumber[i]) , stringNumber[i] ]);

        for(let j=1;j<Number(stringNumber[i]);++j)
        {
            num[i][1] += stringNumber[i];
        }   
    }
    console.log(num)
    obj = Object.fromEntries(num);
    result = obj;
    return result;
}


let number = prompt('اعداد دلخواه خود را از 1 تا 9 به دلخواه وارد کنید')

console.log(getRepeatedInfo(number))