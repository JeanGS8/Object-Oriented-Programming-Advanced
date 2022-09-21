import { Paciente } from "./Paciente";
const paciente: Paciente = new Paciente('Jean', '18/07/2020', 'masculino', 21);

console.clear();
console.log(`Nome do paciente: ${paciente.getNome()}`);
console.log(`Sexo do paciente: ${paciente.getSexo()}`);
console.log(`data de internação: ${paciente.getData()}`);
console.log(`idade do paciente: ${paciente.getIdade()}`);