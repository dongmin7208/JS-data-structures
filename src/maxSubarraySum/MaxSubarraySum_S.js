/*

Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

整数の配列とnという数字を受け入れるmaxSubarraySumという関数を書き込みます。 関数は、配列内の連続するn個の要素の最大合計を計算する必要があります。

정수배열과 n이라고 하는 숫자를 받아들이는 max Subarray Sum이라고 하는 함수를 씁니다. 함수는 배열 내에서 연속되는 n개의 요소의 최대 합계를 계산할 필요가 있습니다.

*/

function maxSubarraySum(arr, num){
    if(num > arr.length){
        return null
    }
    var max = -Infinity
    for (let i = 0; i < arr.length - num + 1; i ++){
        let temp =0 ;
        for(let j= 0; j <num; j++){
            temp += arr[i+j];
        }
        if (temp > max){
            max = temp;
        }
        console.log(temp, max)
    }
    return max;
}

maxSubarraySum(`${[2,6,9,2,1,8,5,6,3],3} +S`) 
maxSubarraySum([1,2,5,2,8,1,5],2) //10
maxSubarraySum([1,2,5,2,8,1,5],4) //17
maxSubarraySum([4,2,1,6],1) //6
maxSubarraySum([4,2,1,6,2],4) //13
maxSubarraySum([],4) //null