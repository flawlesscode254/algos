// O(n^2) time complexity without memoization which is not efficient

const calculate = (target) => {
    if (target <= 1) {
        return 1
    }
    else {
        return calculate(target -1) + calculate(target - 2);
    }
}
console.log(calculate(20));           