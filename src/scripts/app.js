// Redeklaracja
//
// var x = 42;
// let x1 = 42;
// const x2 = 42;
//
// console.log(x, x1, x2);

// var x = 42; // ok
// let x1 = 42; // not
// const x2 = 42; // not

// Reinicjalizacja

// var x = 42;
// let x1 = 42;
// const x2 = 42;
//
// x = 666; // ok
// x1 = 666; // ok
// // x2 = 666; // not
//
// console.log(x, x1, x2);

// Hoisting - przeniesienie deklaracji zmiennej, funkcji, class na górę
// aktualnie przetwarzanego zasięgu
// var, let, const - są hoistowane, ale let i const trafiają do TDZ

// console.log(x);
// var x = 42;

// var x;
// console.log(x);
// x = 42;

// TDZ - temporary dead zone
// console.log(x1);
// let x1 = 42;

// Scope, browser - window (global object), nodejs - object
// Funkcyjny - tworzony przez funkcje
// Blokowy - tworzony przez pare klamerek (curly braces)

// if (true) {
//     var x = 42;
//     let x1 = 42;
//     const x2 = 42;
// }

// console.log(x, x1, x2);
// console.log(x);

// function magic(){
//     var x = 42;
//     let x1 = 42;
//     const x2 = 42;
// }
//
// magic()
// console.log(x, x1, x2);

// let x = 42;
// let y = 42;

// function magic(){
//     x = 666;
//     let y = 666;
//     console.log(x, y);
//
// }
//
// magic();
// console.log(x, y);

// LHS / RHS -> left hand side assignment
// LHS - sprawdza aktualny zasięg, i jeżeli zmienna nie istnieje to ją tworzy
// RHS - przeszukuje zasięgi do samej góry (do global)
// LHS - zapis
// RHS - odczyt








