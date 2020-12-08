http://sriku.org/blog/2020/03/26/the-await-on-need-pattern/ 

With async/await, code that does async activities starts to read like synchronous code with the keywords async and await thrown in at appropriate points.

> But don’t lose sight of opportunities for concurrency while settling into the comfort zone of synchronous-looking code.

Example

```js
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
```

## Calling 

// Bad way
```js
async function thisMethodCallTakesMoreTime() {
    console.log('Bad way is expensive.....')
    console.time('compute')
    const val1 = await getData(3000)
    const val2 = await getData(5000)
    console.log(await finallyComputeResult(val1, val2))
    console.timeEnd('compute')
}
```

Cost: `8.012s`


// Good way
```js
async function thisTakesLessTime() {
    console.log('Good way is cheap.....')
    console.time('compute-cost')
    const val1 = getData(3000)
    const val2 = getData(5000)
    console.log(await finallyComputeResult(await val1, await val2))
    console.timeEnd('compute-cost')
}
```

Cost: `5.005s`

