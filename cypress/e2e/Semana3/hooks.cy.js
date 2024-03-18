before(()=> {
    //Se ejecuta una unica vez
    console.log('before de arriba')
})

beforeEach(()=> {
    //se ejecuta por cada test
})


afterEach(()=> {
    
})

after (()=>{
//run once all tests are donde


})

describe('Hooks', () => {
before (() => {
//runs once before all tests in the block
})

beforeEach (() => {
    //runs once before all tests in the block
    })


afterEach (() => {
        //runs once before all tests in the block
        })

        
after (() => {
    //runs once before all tests in the block
    })


    it ('Primera Prueba',()=> {

        console.log('estoy en mi primer prueba')
    })

    it ('Segunda Prueba',()=> {

        console.log('estoy en mi primer prueba')
    })

    it ('Tercera Prueba',()=> {

        console.log('estoy en mi primer prueba')
    })

})