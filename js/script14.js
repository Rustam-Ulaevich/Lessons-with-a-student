// Arrays Массивы
//         0   1   2     3     4      5          6           7
// let arr = [15, 4, 'Ufa', true, false, NaN, 0, 9]
// let arr2 = new Array()

// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[7].adress);
// console.log(arr[arr.length-1].adress);

// pop/push  shift/unshift

// let arr = [1, 2, 3]
// arr.pop()
// // console.log(arr);
// arr.push('4')

// console.log(arr);
// arr.shift()
// console.log(arr);
// arr.unshift('a')
// console.log(arr);

// Пузырьковый метод сортировки

function bubbleSort(array){
    for(i=0; i<array.length; i++){
        for(j=0; j<array.length-j; j++){
            if(array[j]>array[j+1]){
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
    return array
}

let dsfjghsesjk = [5, 4, 1, 3, 2, 0]
let dsfjghsejk2 = [4, 1, 3, 2, 0, 5]
let dsfjghsejk3 = [4, 1, 3, 2, 0, 5]
console.log(bubbleSort(dsfjghsesjk));






