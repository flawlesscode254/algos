const calculate = (items) => {
    const answer = items.reduce((a, b) => a + b)
    console.log(answer);
}
calculate([2, 5, 7, 8, 3, 5,])