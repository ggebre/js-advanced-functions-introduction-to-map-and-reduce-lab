// Your code here

function mapToNegativize(sourceArray){
    return sourceArray.map(element => -1*element)
}

function mapToNoChange(sourceArray){
    return [...sourceArray]
} 
function mapToDouble(sourceArray){
    return sourceArray.map(element => 2*element)
}
function mapToSquare(sourceArray){
    return sourceArray.map(element => element ** 2)
} 

function reduceToTotal(sourceArray, startingPoint = 0){
    return sourceArray.reduce((accum, curr) => accum + curr, startingPoint)
}

function reduceToAllTrue(sourceArray){
    return sourceArray.filter(element => element == false).length == 0 
} 

function reduceToAnyTrue(sourceArray){
    return sourceArray.filter(element => element == true).length > 0 
}

// console.log(reduceToAllTrue([1,false,2]))