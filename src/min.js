const min=(array)=>{
    if(array.length==0) return null;

    array.sort();

    return array[0];

}

module.exports=min;