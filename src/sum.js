// Implement the sum function here
export function sum(a, b) {
    if (typeof a === "number" && typeof b === "number"){
        let sum = a+b;
        return sum
    }else{
        return "il faut que a et b soit un nombre"
    }
}
