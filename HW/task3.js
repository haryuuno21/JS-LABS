// 28. Напишите функцию moveElement(arr,from,to), которая позволяет переместить элемент массива из позиции from в позицию to.

function moveElement(arr,from,to){
    if(from == to) return arr
    if(to < 0) to = arr.length + to
    let num = arr.splice(from,1)
    arr.splice(to,0,num[0])

    return arr
}

console.log(moveElement([0,1,2,3,4],1,4))
console.log(moveElement([1],-1,-1))
console.log(moveElement(['a','b','c'],-1,-2))
console.log(moveElement(['a',1,2,'b'],1,-1))

let arr = [0,1,2,3,4,5,6]
moveElement(arr,2,-1)
console.log(arr)