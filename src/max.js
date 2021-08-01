const max = (array) => {
    if(array.length==0) return null;
    
    array.sort();
    return array[array.length-1];
}
module.exports = max;