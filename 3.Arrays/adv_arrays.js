// Transforming Arrays

const movies = ["Tenet" , "Matrix" , "SpiderMan" , "IronMan"]

// map(callback): Creates a new array with the results of calling a function on every element.
lengthOfMoviesChar = movies.map((values , index , array)=> {
    console.log(values);
    return values.length
})

console.log(lengthOfMoviesChar);

// filter(callback): Creates a new array with elements that pass a condition.
filteredMoviesbyCharLength = movies.filter((val,indx,arr)=> {
    console.log(val.length < 7);
    return val.length < 7;
})
console.log(filteredMoviesbyCharLength);

// reduce(callback, initialValue): Reduces the array to a single value by accumulating results.
totalLength = movies.reduce((acc , val)=> {
    return acc + val.length;
},0) 
console.log(totalLength);
