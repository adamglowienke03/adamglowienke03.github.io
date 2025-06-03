# Obiekty
### Grupowanie danych, które są ze sobą powiązane
```js
let country = {
    name: "Poland",
    population: 38_000_000, // 38000000
    continent: "Europe",
    cities: ["Warszawa", "Kraków"],
    capital: {
        name: "Warszawa",
        population: 2_000_000
    }
};
console.log(country);
```
### W postaci tablicy:
```js
let arrObjects = [
    {name: "Adam", age: 22, favClub: "Real Madrid"},
    {name: "Piotr", age: 21, favClub: "FC Barcelona"}
];
console.log(arrObjects)
```
### Dostanie się do poszczególnych informacji:
```js
console.log(country.name); // Poland
console.log(country.population); // 38000000
console.log(country.capital.name); // Warszawa
```