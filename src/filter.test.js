const filter=require('./filter')
describe('Filter',()=>{

    //Return Array if Empty
    it('array[],x=>true should give []',()=>{
        expect(filter([],x=>true)).toEqual([]);
    });

    //Return Array Elements that are True
    test('array [1,2,3],x=>true should give [1,2,3]',()=>{
        expect(filter([1,2,3],x=>true)).toEqual([1,2,3]);
    });

    //Return Array Elements That are False
    test('array [1,2,3],x=>false should give []',()=>{
        expect(filter([1,2,3],x=>false)).toEqual([]);
    });
    //Return Array Elements Greater Than 1
    test('array [1,2,3],x=>x>1 should give [2,3]',()=>{
        expect(filter([1,2,3],x=>x>1)).toEqual([2,3]);
    });
    //Return Array Elements That are Uppercase
    test('array [\'a\',\'B\',\'c\',\'D\'],(x is UpperCase) should give []',()=>{
        expect(filter(['a','B','c','D'],x=>x==x.toUpperCase())).toEqual(['B','D']);
    });

});
