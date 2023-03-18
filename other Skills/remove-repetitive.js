export default function removeRepetitive(string) {
    let result = null;
    let arrText = string.split('');
    let list = new Set(arrText)
    let arr = []
    list.forEach(item => {
        arr.push(item) 
    })
    result = arr.join('')
    return result;
}

let text = prompt('چیزی وارد کنید')

console.log(removeRepetitive(text))