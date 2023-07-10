/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum (v, z) {
    if (v === z) {
    return ((v + z) * 3)
    }
    else {
    return v + z 
    }
}
const valore = crazySum (35, 35)
console.log(valore)





/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary (a) {
    if (a > 20, a <= 100){
    return a + ' true '
}
    if (a === 400) {
    return a + ' true '
    }
    else {
        return 'numero fuori serie'
    }
}

const prova = boundary (79)
console.log(prova)






/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/


function reverseString (a) {
   let separata = a.split('').reverse('')
return console.log(separata)

}

const invertita = reverseString ('EPICODE')







/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst (g) {
    /*let lore = ('')
    for (let i = 0; i < lore.length; i++){
    lore = g.charAt(0).toUpperCase();}
         return lore */
    const result = g.split()
    let jo = (' ')
    for ( let i = 0; i < result.length; i++) {
     jo = jo + (result[i].toUpperCase() + result.slice(1)) 
    }
    return jo
}

let frase = upperFirst ('la mia frase con parole senza senso')
console.log(frase) 







/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom (n) {
    let finale1 = []
    for ( let i = 0; i < Math.floor(Math. random() * 10) ; i++) {
        finale1.push(Math.floor(Math. random() * 10))
        
    }
    return finale1
 }

const finale = giveMeRandom ()
console.log(finale)





//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area (l1, l2) {
    return l1 * l2
}

const result = area (7, 8)

console.log(result)




/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/


function crazyDiff (c, d) {
    const differenzaAssoluta = Math.abs (c - d)
        if (differenzaAssoluta > 19){
        return (differenzaAssoluta * 3)}
        else  {return Math.abs( c - d )}
}

const cifraFinale = crazyDiff(-31, 19)

console.log(cifraFinale)





/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify (e) {
   if (e.startsWith('code')) {
      return e
   }
   else {
    return 'code' + e
   }
}
const cod = codify ('codeJunior')
console.log(cod)






/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/


function check3and7 (h) {
    if (h % 3 === 0 ) {
        return true
    }
    if (h % 7 === 0) {
        return true
    }
    else {
        return false
    }
    
}

const intero = check3and7 (71)
console.log(intero)





/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

function cutString (str) {
    const marti = str.slice(1,15)
    return marti
}

const stringaa = cutString('un altra stringa')
console.log(stringaa)
