// 1- Crie um array vazio chamado animals

// 2- Adicione nesse array dois animais: dog e cat (você pode fazer isso de mais de uma forma diferente!)

// 3- Adicione no começo do array outro animal: spider

// 4- Remova o primeiro elemento do array

// 5- Remova o último elemento do array

// 6- Como ficou o array final?! E qual é o elemento 1 desse array?

let animals = ["dog", "cat"];

console.log(animals);

animals.unshift("spider");

console.log(animals);

animals.shift();

console.log(animals);

animals.pop();

console.log(animals);

// R: O array ficou apenas: animals = ["Dog"]. O lemento 1 não existe, apenas o elemento 0.
