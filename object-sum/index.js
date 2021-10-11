const data = [
    {
        id: "1",
        number: 34
    },
    {
        id: "2",
        number: 56
    },
    {
        id: "3",
        number: 67
    },
    {
        id: "4",
        number: 94
    }
]

const add = () => {
    let total = data.reduce(
        (a, b) => {
            return a + b.number
        },
        0
    )
    console.log(total);
}
add()