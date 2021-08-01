const map=require('./map')
describe('Map',()=>{
    it('[],cube should return null',()=>{
        expect(map([],num=>Math.pow(num,3))).toBeNull();
    });

    it('[1,2,3],identity should return [1,2,3]',()=>{
        expect(map([1,2,3],num=>Math.pow(num,1))).toEqual([1,2,3]);
    });

    it('[1,2,3],cube should return [1,8,27]',()=>{
        expect(map([1,2,3],num=>Math.pow(num,3))).toEqual([1,8,27]);
    });

});