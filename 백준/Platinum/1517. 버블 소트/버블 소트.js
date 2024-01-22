function countInversions(arr) {
    let count = 0;

    function mergeSort(arr) {
        const len = arr.length;
        if (len <= 1) return arr;

        const mid = Math.floor(len / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);

        return merge(mergeSort(left), mergeSort(right));
    }

    function merge(left, right) {
        let result = [];
        let leftIndex = 0, rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] <= right[rightIndex]) {
                result.push(left[leftIndex++]);
            } else {
                count += left.length - leftIndex;
                result.push(right[rightIndex++]);
            }
        }

        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }

    mergeSort(arr);
    return count;
}

// 입력 처리
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// 결과 출력
console.log(countInversions(arr));
