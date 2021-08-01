const tail=(array)=>{
    if(array.length==0) return null;

    array.shift();
    return array;
}
module.exports=tail;