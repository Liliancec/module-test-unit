// Add the unit tests of the sum function here
import {sum} from "../src/sum";

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('test de chaine de caractere', ()=>{
  expect(sum("ugjh", "hjk")).toBe("il faut que a et b soit un nombre")
});
