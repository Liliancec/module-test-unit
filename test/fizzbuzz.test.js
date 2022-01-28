import {fizzBuzz} from "../src/fizzbuzz";

describe("The FizzBuzz function", () => {


  test('should return fizz on multiples of 3', () => {
    expect(fizzBuzz(3)).toBe('fizz');
    expect(fizzBuzz(6)).toBe('fizz');
  });

  test('should return fizz on multiples of 5', () => {
    expect(fizzBuzz(5)).toBe('buzz');
    expect(fizzBuzz(25)).toBe('buzz');
  });

  test('should return an error if is not a number', () => {
    expect(fizzBuzz('cuicui')).toBe('saisir un nombre');
  });

  test('should return an error if n > 100 or n < 0', () => {
    expect(fizzBuzz(102)).toBe('saisir un nombre entre 0 et 100');
    expect(fizzBuzz(-5)).toBe('saisir un nombre entre 0 et 100');
  });

  test('should return if is a multiple of 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz');
  });
})


// A completer