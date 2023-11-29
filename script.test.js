
/*

Crear una operación que devuelva el resultado de una suma asíncrona en una promesa. Después elevar al cuadrado el resultado.
Si algún sumando es 0 devolverá error.
Si el resultado de la potencia es mayor que 100 devolverá error.

*/

import { describe,test,expect,vi,beforeEach } from "vitest";
import {asyncAddition,asyncPower,powerAddition} from "./script.js";



test('expect true to be truthy',()=>expect(true).toBeTruthy());

describe('asyncAddition', ()=>{
    test('asyncAddition(a,b) should return a promise', async (done)=>{
        const [a,b]=[4,5];
        expect(asyncAddition(a,b).constructor.name).toBe('Promise');


    // async (done)=>{
    // const result = asyncAddition(4,5);

    // result.then(r=> expect(r).toBe(9))
    //     .then(done)}
    })
    test('asyncAddition(a,b) should resolve with a+b', async (done)=>{
        const [a,b]=[4,5];
        expect(asyncAddition(a,b)).resolves.toBe(9)
    })
    test('asyncAddition(a,b) should reject with "some number is zero" message', async (done)=>{
        const [a,b]=[0,5];
        expect(asyncAddition(a,b)).rejects.toBe('some number is zero')
    })
    test('asyncAddition(a,b) should reject with "some number is zero" message', async (done)=>{
        const [b,a]=[0,5];
        expect(asyncAddition(a,b)).rejects.toBe('some number is zero')
    })
})

describe('asyncPower', ()=>{
    test('asyncPower(a) should return a promise', async (done)=>{
        const a=10;
        expect(asyncPower(a).constructor.name).toBe('Promise');
    })
    test('asyncPower(a) should resolve with a**2', async (done)=>{
        const a=10;
        expect(asyncPower(a)).resolves.toBe(100)
    })
    test('asyncPower(a) should reject with "some number is zero" message', async (done)=>{
        const a=12;
        expect(asyncPower(a)).rejects.toBe('power is greater than 100')
    })

})

describe('powerAddition scenario',()=>{
    let spyConsole;
    beforeEach(()=>{
        spyConsole = vi.spyOn(console,'log');
    })

    test('powerAddition should print the power of the two numbers addition', async (done)=>{
        const [a,b]=[4,5];
        await  powerAddition(a, b)
            expect(spyConsole).toBeCalledWith(81)

    })
    test('powerAddition should print a message "some number is zero" when a parameter is zero', async (done)=>{
        const [a,b]=[4,0];
        try {
            powerAddition(a,b)
        } catch (error) {
            expect(spyConsole).toBeCalledWith('some number is zero');
        }

    })

})
