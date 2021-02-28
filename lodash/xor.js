function xor(arr1, arr2) {
    return [...arr1.filter(a1 => !arr2.includes(a1)), ...arr2.filter(a2 => !arr1.includes(a2)) ]
}
const res = xor([2, 1], [2, 3]);
console.log(res)