const reduce=(arr, type , addOn = undefined) => {
    if(arr.length == 0) return addOn;
    const reduced=arr.reduce(type);
    
    if(addOn) return (addOn+reduced);
    return reduced;
}
module.exports = reduce;