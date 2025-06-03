# Operator trójelementowy

```js
let speed = 250;

if (speed > 200){
    console.log("Szybko");
}else{
    console.log("Wolno");
}

let result = speed > 200 ? "Szybko" : "Wolno";
console.log(result); // Szybko
```
### Po `?` zapisujemy kod, który będzie wykonany w momencie kiedy `speed > 200` wyniesie `true`.
### Natomiast po `:` zapisujemy kod, który się wykona kiedy `speed > 200` wyniesie `false`