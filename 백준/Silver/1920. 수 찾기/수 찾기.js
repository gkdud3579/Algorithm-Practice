const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]);
const A = input[1].split(' ').map(Number).sort((a, b) => a - b);
const M = parseInt(input[2]);
const queries = input[3].split(' ').map(Number);

function binarySearch(array, target) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (array[mid] === target) {
            return 1; // 찾은 경우
        }

        if (array[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return 0; // 찾지 못한 경우
}

const results = queries.map(query => binarySearch(A, query));
console.log(results.join('\n'));
