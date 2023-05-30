//VERIFICO SE FUNZIONA
console.log('JS OK');

//PRENDO L'ELEMENTO CONTA DAL DOM
const countElement = document.getElementById('conta');

//STAMPO I NUMERI DA 1 A 100
for (let i = 1; i <= 100; i++ ){

    //SE SONO MULTIPLI SIA DI 3 e 5 e QUINDI DI 15
    if (i % 15 == 0) 
    console.log("FizzBuzz");
    //SE SONO SOLO MULTIPLI DI 3
    else if (i % 3 == 0) 
    console.log("Fizz");
    //SE SONO SOLO MULTIPLI DI 5
    else if (i % 5 == 0) 
    console.log("Buzz");
    //ALTRIMENTI PER TUTTI GLI ALTRI NUMERI
    else
    console.log(i);
}





