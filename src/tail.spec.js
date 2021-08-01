const tail=require('./tail')

describe('Tail',()=>{
    it('[] should return null',()=>{
        expect(tail([])).toBeNull();

    });

    it('[1,2,3,4] should return [2,3,4]',()=>{
        expect(tail([1,2,3,4])).toEqual([2,3,4]);
    });
});