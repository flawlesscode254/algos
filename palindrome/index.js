const evaluate = (item) => {
    let a = item.split('').reverse().join('')
    if (item === a) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

evaluate("dad dad")