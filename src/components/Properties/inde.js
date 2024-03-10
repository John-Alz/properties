let arr = [
    {
        superhost: true,
        location: 'Norway',
        capacity: { people: 3, bedroom: 1 },
    }
]

let filtro = arr.filter((item) => item.capacity.bedroom === 1)
console.log(filtro);