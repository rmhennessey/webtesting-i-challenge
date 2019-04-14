const enhancer = require('./enhancer.js');


// test away!

//REPAIR

it('should restore durability to 100', () => {
    expect(enhancer.repair(item)).toBe(item.durability === 100)
})


//SUCCEED 
it('should increase enhancement by 1 with max at 20', () => {
    expect(enhancer.succeed(item)).toBe(item.enhancement++ || item.enhancement)
})

//FAILURE 

it ('enhancementFailure', () => {
    expect(enhancer.fail(item)).toBe((item.durability =- 5) || (item.durability =- 10 && item.enhancement--) || (item.durability =- 10) || (item) )
})

const item = {
    durability: 90,
    enhancement: 20
}
