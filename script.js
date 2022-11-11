let kilometers = prompt("fornisci i kilometri che vuoi percorrere");
let  age = prompt("fornisci la tua età");

let button = document.querySelector(".calcButton");
let etàInput = document.getElementById("age");
let kilometriInput = document.getElementById("kilometers");
etàInput.value =  age;
kilometriInput.value = kilometers;

//calcolare il prezzo totale del viaggio

//prezzo del biglietto
let ticketPriceNoDiscount = kilometers * 0.21;
let ticketFinalPrice;
let discount;

if(age<0){
    console.log("hai sbagliato inserire la tua età, prova ancora");
}else if(age>65) {
    discount = ticketPriceNoDiscount * 40/100;

    ticketFinalPrice = ticketPriceNoDiscount - discount;

} else if (age<65 && age>=18){
    discount = 0;

    ticketFinalPrice = ticketPriceNoDiscount
}else{
    //quindi quando età <18
    discount = ticketPriceNoDiscount * 20/100;

    ticketFinalPrice = ticketPriceNoDiscount - discount;
} 

ticketFinalPrice.toFixed(2);
console.log(`il prezzo del tuo biglietto è : ${ticketFinalPrice}€`);

console.log(button);
button.addEventListener("click", ()=>{
let text = document.getElementById("text");
let textDiv = document.getElementById("textDiv");
textDiv.classList.add("border-dark");

text.textContent = `il prezzo del tuo biglietto è : ${ticketFinalPrice}€`
} );







