var readline = require('readline-sync');
var nome = readline.question('Qual e o seu nome?')
var whatsapp = readline.question('Qual e o seu numero do WhatsApp? ')
var peso = readline.questionFloat('Qual e o seu peso (em kg)? ')
var altura = readline.questionFloat('Qual e a sua altura (em metros)? ')

var consumoAgua = ((peso * 35)/1000).toFixed(2);
var imc = (peso/(altura**2)).toFixed(2);
var niveldeobesidade;
      
      if (imc < 18.5) {
        niveldeobesidade = "Abaixo do peso";
      } else if (imc >= 18.5 && imc <= 24.9) {
        niveldeobesidade = "Peso normal";
      } else if (imc >= 25 && imc <= 29.9) {
        niveldeobesidade = "Sobrepeso";
      } else if (imc >= 30 && imc <= 34.9) {
        niveldeobesidade = "Obesidade grau 1 (leve)";
      } else if (imc >= 35 && imc <= 39.9) {
        niveldeobesidade = "Obesidade grau 2 (moderada)";
      } else if (imc >= 40) {
        niveldeobesidade = "Obesidade grau 3 (mórbida)";
      }

      console.log(`Nome: ${nome} - Peso: ${peso} - Altura: ${altura} - Consumo de água diário: ${consumoAgua}Litros - IMC: ${imc} - Nivel de obesidade: ${niveldeobesidade}.`)