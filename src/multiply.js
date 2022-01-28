export function multiply(a, b) {
    if(typeof a !== "number" || typeof b !== "number"){
        return "saisir 2 nombres"
    }
    if( a === 0 ||  b === 0){
        return "le nombre doit etre different de 0"
    }
    return a * b;
}