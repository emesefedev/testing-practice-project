export function analyzeArray(array) {
    const result = {
        average: getTotalSum(array) / array.length,
        min: getMin(array),
        max: getMax(array),
        length: array.length
     }
    
    return result
}

function getMax(array) {
    return Math.max(...array)
}

function getMin(array) {
    return Math.min(...array)
}

function getTotalSum(array) {
    return array.reduce((acc, curr) => acc + curr)
}