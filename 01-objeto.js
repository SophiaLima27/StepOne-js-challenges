// 1- Crie um objeto chamado user com as seguintes propriedades:

// - username
// - email
// - age

// E com os seguintes métodos (ações):

// - login: com o console.log("Efetuou o login");
// - logout: com o console.log("Efetuou o logout");

// 2- Mostre uma propriedade! Agora dê um console.log apenas da propriedade age

// 3-  Adicione uma nova propriedade! Adicione uma nova propriedade chamada phone e depois dê um console.log(user); para ver se a propriedade realmente foi adicionada.

// 4- Faça um update de um valor! Troque o valor do username para outro valor e depois dê um console.log(user); para ver se a propriedade realmente foi substituída.

// 5- Remova um valor! Remova o valor age e depois dê um *console.log(user);* para ver se a propriedade realmente foi deletada.

let user = {
    username: "sophialima27",
    email: "sophia.limatrevisan08@gmail.com",
    age: "15 years old",
    
    login: function () {
        console.log ("Efetuou o login");
    },

    logout: function () {
        console.log ("Efetuou o logout");
    }
};

console.log (user)

// 2- Mostre uma propriedade! Agora dê um console.log apenas da propriedade age

console.log (user.age)

// 3-  Adicione uma nova propriedade! Adicione uma nova propriedade chamada phone e depois dê um console.log(user); para ver se a propriedade realmente foi adicionada.

user.phone = "(16)996338298";
console.log (user)

// 4- Faça um update de um valor! Troque o valor do username para outro valor e depois dê um console.log(user); para ver se a propriedade realmente foi substituída.

user.username = "sophia_27";
console.log (user);

// 5- Remova um valor! Remova o valor age e depois dê um *console.log(user);* para ver se a propriedade realmente foi deletada.

delete user.age;
console.log (user);
