const min=require('./min')
describe('Minimum',()=>{

    it('min([]) should be null',()=>{
        expect(min([])).toBeNull();
    });

    it('min([1,2,3,4]) should be 1',()=>{
        expect(min([1,2,3,4])).toBe(1);
    });
});
