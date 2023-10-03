// Write your code below this line



function decoder(str){

const arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

let addValue = +str[0]
let newStr = str.substring(1)
let awnser = []
console.log(newStr)
console.log(addValue)
console.log(str)

for(let k = 0; k < newStr.length; k++){
    for(let i = 0; i < arr.length; i++){
      if (arr[i] === newStr[k]){
        awnser.push(arr[i + addValue]) 
      } 
    }
} return awnser.join('')

}

console.log(decoder('2fcjjm'))
