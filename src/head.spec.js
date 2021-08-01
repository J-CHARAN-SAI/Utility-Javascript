const head=require('./head')

describe('Head',()=>{
    it('head([]) should be null',()=>{
        expect(head([])).toBeNull();
    });

    it('head([1,2,3,4]) should be 1',()=>{
        expect(head([1,2,3,4])).toBe(1);
    }); 
});