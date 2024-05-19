// 2. Напишите функцию euclid, которая позволяет находить НОД натуральных чисел. Функция должна работать с любым количеством аргументов

function euclid(...args){
    let minNum = NaN
    let count = 0
    while(count != args.length){
        count = 0
        minNum = Math.min(...args)
        args.forEach((num, index, array) => {
            if(num % minNum == 0)
                {
                    array[index] = minNum
                    count++
                } 
            else if(num > minNum) array[index] = num-minNum*Math.floor(num/minNum)
            else count++
        });
    }
    return minNum
}

console.log(euclid(21,49,56,343));
console.log(euclid(70,315,210,490));
console.log(euclid(70))
console.log(euclid())