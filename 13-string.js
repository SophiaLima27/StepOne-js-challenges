// Escreva uma função que converte o nome para iniciais. 
// Por exemplo, se eu passar o nome João e sobrenome Viana, a função deve retornar J.V.

// O retorno deve ser duas letras maiúsculas, seguidas de um ponto.

// Outros exemplos:
// `Maria Silva` => `M.S.`
// `Pedro Pedroso`  => `P.P`

let firstName = "Sophia";
let middleName = "Lima";
let lastName = "Trevisan";

function abbrevName(firstName, middleName, lastName) {
	console.log (firstName.charAt (0) + '. ' + middleName.charAt (0) + '. ' + lastName.charAt (0) + '. ');
	return;
}

abbrevName(firstName, middleName, lastName);
