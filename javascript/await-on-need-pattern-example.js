const { WSAETOOMANYREFS } = require("constants")

// Expensive call to fetch data
function getData(time) {
    return new Promise((resolve, reject) => {
        if (!time || !Number.isInteger(time)) reject('Invalid time')
        setTimeout(() => {
            const result = Math.floor(Math.random(10) * 100)
            console.log(`Data ${result} is calculated after ${time} ms`)
            resolve(result)
        }, time)
    })
}

// Compute result once two data have been fetched
function finallyComputeResult(val1, val2) {
    return new Promise((resolve, reject) => {
        resolve(val1 + val2)
    })
}

// ===============================

// Bad way
async function thisMethodCallTakesMoreTime() {
    console.log('Bad way is expensive.....')
    console.time('compute')
    const val1 = await getData(3000)
    const val2 = await getData(5000)
    console.log(await finallyComputeResult(val1, val2))
    console.timeEnd('compute')
}

// Good way: Async await way
async function thisTakesLessTime() {
    console.log('Good way is cheap.....')
    console.time('compute-cost')
    const val1 = getData(3000)
    const val2 = getData(5000)
    console.log(await finallyComputeResult(await val1, await val2))
    console.timeEnd('compute-cost')
}
// Promise way
function thisAlsoTakesLessTime() {
    console.time('compute-cost')
    Promise.all([getData(3000), getData(5000)]).then((values) => {
        return finallyComputeResult(values[0], values[1])
    }).then(res => {
        console.log(res)
        console.timeEnd('compute-cost')
    })

}


// thisMethodCallTakesMoreTime() // Took 8.012s
thisTakesLessTime() // Took 5.005s
    // thisAlsoTakesLessTime(); // 5.006s