const data = [
    {
        name: "pawel",
        age: 38,
        city: "krakow",
        hobbies: ["js", "python", "drugs"]
    },
    {
        name: "jakub",
        age: 20,
        city: "szczecin",
        hobbies: ["skateboard", "webDev", "gaming"]
    },
    {
        name: "Norbert",
        age: 46,
        city: "Kraków",
        hobbies: ["motoryzacja", "architektura", "komputery"]
    },
    {
        name: "adam",
        age: 31,
        city: "warszawa",
        hobbies: ["wow", "super", "fajne"]
    },
    {
        name: "paulina",
        age: 28,
        city: "dabrowa gornicza",
        hobbies: ['cycling', "volleyball", "movies"]
    },
    {
        name: "marcin",
        age: 37,
        city: "jesionka",
        hobbies: ["tennis", "skiing", "cooking"]
    },
    {
        name: "Jakub",
        age: 24,
        city: "Głowno",
        hobbies: ["football", "games", "music"]
    },
    {
        name: "kamil",
        age: 26,
        city: "warsaw",
        hobbies: ["dancing", "cycling", "reading"]
    },
    {
        name: "kasia",
        age: 34,
        city: "warszawa",
        hobbies: ["konie", "podroze", "old-timery"]
    },
    {
        name: "pawel",
        age: 41,
        city: "zabrze",
        hobbies: ["wfb", "running"]
    }
];


// oblicz średnią wieku
// const avgAge = (persons) => {
//     let sumAge = 0;
//
//     for (const person of persons) {
//         sumAge += person.age;
//     }
//
//     return sumAge / persons.length;
// }

//
// const avgAge = (persons) => {
//     const ages = persons.map((person) => person.age);
//     return ages.reduce((acc, ce) => acc + ce) / persons.length;
// }

// const avgAge = (persons) => persons.reduce((acc, ce) => acc + ce.age, 0) / persons.length;

// console.log(avgAge(data));

// średnia wieku dla ludzi, którzy mają imię powyżej 5 znaków

// const avgAge2 = (people) => {
//     let sumAge = 0;
//     let counter = 0;
//
//     for (const person of people) {
//         if (person.name.length > 5) {
//             sumAge += person.age;
//             counter++;
//         }
//     }
//
//     return sumAge / counter;
// }

// const avgAge2 = (people) => {
//     const filteredPeople = people.filter((person) => person.name.length > 5);
//     const mappedPeople = filteredPeople.map((person) => person.age);
//
//     return mappedPeople.reduce((acc, ce) => acc + ce) / mappedPeople.length;
// }

// const avgAge2 = (people) => {
//     const filteredPeople = people.filter(function (person){
//         return person.name.length > 5;
//     })
// }

// const avgAge2 = (people) => people
//     .filter((person) => person.name.length > 5)
//     .map((person) => person.age)
//     .reduce((acc, ce) => acc + ce) / people.filter((person) => person.name.length > 5).length;

// const avgAge2 = (people) => people
//     .reduce((acc, ce) => acc + (ce.name.length > 5 ? ce.age : 0), 0) / people.filter((person) => person.name.length > 5).length;


// console.log(avgAge2(data));


// Tablica wszystkich imion od dużej litery


// const getAllNames = (elements) => {
//     const names = [];
//
//     for (const person of elements) {
//         names.push(person.name[0].toUpperCase() + person.name.slice(1))
//     }
//
//     return names
// }

// function capitalize(text) {
//     return text[0].toUpperCase() + text.slice(1);
// }
//
// const getAllNames = (elements) => elements
//     .map((person) => capitalize(person.name))
//
//
// console.log(getAllNames(data));

// Sprawdź czy wszyscy mają 3 hobby

// const checkHobbies = (elements) => {
//     for (const element of elements){
//         if (element.hobbies.length !== 3){
//             return false;
//         }
//     }
//     return true;
// }

// const checkHobbies = (elements) => elements
//     .every((element) => element.hobbies.length === 3);

// const checkHobbies = (elements) => !(elements.some((element) => element.hobbies.length !== 3));
//
// console.log(checkHobbies(data));

// Zwróć tablicę wszystkich hobby

// {
//     name: "kasia",
//     age: 34,
//     city: "warszawa",
//     hobbies: ["konie", "podroze", "old-timery"]
// },

// const getAllHobbies = (elements) => {
//     const hobbies = [];
//
//     for (const element of elements){
//         for (const hobby of element.hobbies) {
//             hobbies.push(hobby);
//         }
//     }
//
//     return hobbies;
// }


// const getAllHobbies = (elements) => {
//     let hobbies = [];
//
//     for (const element of elements){
//         hobbies = hobbies.concat(element.hobbies);
//     }
//
//     return hobbies;
// }


// const getAllHobbies = (elements) => {
//     let hobbies = [];
//
//     for (const element of elements){
//         hobbies = [...hobbies, ...element.hobbies];
//     }
//
//     return hobbies;
// }

// const getAllHobbies = (elements) => elements
//     .map((element) => element.hobbies)
//     .flat();

// const getAllHobbies = (elements) => elements
//     .flatMap((element) => element.hobbies)
//
// console.log(getAllHobbies(data));


// const getNamesWhoLoveJS = (items) => {
// //     pusta tablica do trzymania imion
//     const names = [];
//
// //     iteracja po tablicy, aby można było przetwarzać każdy element z osobna
//     for (const item of items) {
// //     sprawdzamy, czy osoba ma js w hobbies -> includes
//         if (item.hobbies.map((hobby) => hobby.toLowerCase()).includes('js')) {
// //     dodajemy imię do tablicy imion
//             names.push(item.name)
//         }
//     }
//
// //     zwracamy tablice imion
//     return names;
// }

// const getNamesWhoLoveJS = (items) => items
//     .filter((item) => item.hobbies.includes('js'))
//     .map((item) => item.name);
//
// console.log(getNamesWhoLoveJS(data));

// sformatuj dane tak aby wyświetlić tablice imie - miasto - wiek
// 'pawel - krakow - 38'

// function formatData(persons) {
// //      zmienna na tablice, w której będziemy trzymać dane
//     const sentences = [];
//
// //     przeiteruj po wszystkich elementach
//     for (const person of persons) {
// //     do tablicy z danymi włóż (push) tekst, wygenerowany przez
// //     template literal string
//         sentences.push(`${person.name} - ${person.city} - ${person.age}`)
//     }
//
// //     zwróc tablice
//     return sentences;
// }

// const formatData = (persons) => persons
//     .map((person) => `${person.name} - ${person.city} - ${person.age}`)

// const formatData = (persons) => persons
//     .map(({name, city, age}) => `${name} - ${city} - ${age}`)
//
// console.log(formatData(data));

// function capitalize(text) {
//     return text[0].toUpperCase() + text.slice(1);
// }
//
// const list = data
//     .map((item, id) => `${id}. ${capitalize(item.name)}, ${capitalize(item.city)}`)


// policz ile jest niepowtarzalnych hobby
// function countUniqueHobby(elements) {
// //     tablica na unique hobby
//     const uniqueHobbies = [];
//
// //     loop po wszystkich obiektach elements
//     for (const element of elements){
// //     2 loop po każdym hobby z osobna
//         for (const hobby of element.hobbies){
// //     sprawdź, czy już takie jest (uwzględnij wielkość liter)
//             if (!uniqueHobbies.includes(hobby.toLowerCase())){
// //     jeżeli nie ma to dodaj
//                 uniqueHobbies.push(hobby.toLowerCase());
//             }
//         }
//     }
// //     zwróć ilość unikalnych hobby
//     return uniqueHobbies.length;
// }

// const countUniqueHobby = (elements) => new Set(
//     elements.flatMap((element) => element.hobbies)
// ).size
//
//
// console.log(countUniqueHobby(data));

// wyświetl imiona osób, które mają index podzielny przez 3

// function getLuckyPersons(items) {
// //     tablica na imiona
//     const luckyPersons = [];
//
// //     loop po wszystkich elementach używając indeksu
//     for (let i = 0; i < items.length; i++){
// //     sprawdzenie czy index jest podzielny przez 3, modulo (remainder)
//         if (i % 3 === 0){
// //     dodać imie, jeżeli jest podzielny index przez 3
//             luckyPersons.push(items[i].name);
//         }
//     }
//
// //     zwrócic imiona jako tekst, oddzielone przecinkami
//     return luckyPersons.join(', ')
// }

const getLuckyPersons = (items) => items
    .filter((item, id) => id % 3 === 0)
    .map((item) => item.name)
    .join(', ');

console.log(getLuckyPersons(data));