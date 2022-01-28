export function fizzBuzz(n) {


    if(typeof n !== "number"){
        return  "saisir un nombre";
    }
    if (n < 0 || n > 100){
        return  "saisir un nombre entre 0 et 100";
    }
    if (n % 15 === 0){
        return  "FizzBuzz";
    }
    if (n % 3 === 0){
        return  "fizz";
    }
    if (n % 5 === 0){
        return   "buzz";
    }
    return n
}

