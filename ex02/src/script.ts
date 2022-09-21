import { Conta } from "./conta";

const conta: Conta = new Conta({
    nome: 'Jean',
    quantia: 3000,
    cpf: 12345678901
});

console.clear();
console.log(`Nome do usuário: ${conta.getNome()}`);
console.log(`Quantia na conta: R$ ${conta.getQuantia()}`);
console.log(`CPF do usuário: ${conta.getCpf()}`);