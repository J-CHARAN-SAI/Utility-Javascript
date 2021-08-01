const max=require('./max')
describe('Maximum',()=>{

    it('max([]) should be null',()=>{
        expect(max([])).toBeNull();
    });

    it('max([1,2,3,4]) should be 4',()=>{
        expect(max([1,2,3,4])).toBe(4);
    });
});