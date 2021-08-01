const filter = (array,type) =>{
    if(array.length==0) return array;
    return array.filter(type);
}
module.exports = filter;