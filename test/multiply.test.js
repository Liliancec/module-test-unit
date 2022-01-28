

import {multiply} from "../src/multiply";

describe("The multiply function", ()=>{

    it("should receive two numbers as arguments", ()=>{
        expect(multiply("a", true)).toBe("saisir 2 nombres")
    })

    it("should receive two numbers different than 0", ()=>{
        expect(multiply(0, 0)).toBe("le nombre doit etre different de 0")
    })

    it("should return a number", ()=> {
        expect(typeof multiply(1, 2)).toBe("number")
        expect(typeof multiply(5, 40)).toBe("number")
    })

    test('adds 1 + 2 to equal 3', ()=> {
        expect(multiply(1, 2)).toBe(2)
    })

})