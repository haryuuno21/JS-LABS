// 26. Напишите функцию sumOfSquares(arr), которая возвращает сумму квадратов значений массива.

function sumOfSquares(arr){
    sum = 0 
    arr.forEach(num => {
        sum += num*num
    });
    return sum
}

console.log(sumOfSquares([1,2,3,4]))
console.log(sumOfSquares([]))
console.log(sumOfSquares([-1,-2,-3,-4]))