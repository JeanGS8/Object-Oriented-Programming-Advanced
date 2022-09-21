"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Paciente_1 = require("./Paciente");
var paciente = new Paciente_1.Paciente('Jean', '18/07/2020', 'masculino', 21);
console.clear();
console.log("Nome do paciente: ".concat(paciente.getNome()));
console.log("Sexo do paciente: ".concat(paciente.getSexo()));
console.log("data de interna\u00E7\u00E3o: ".concat(paciente.getData()));
console.log("idade do paciente: ".concat(paciente.getIdade()));
