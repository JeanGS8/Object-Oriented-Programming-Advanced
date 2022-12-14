"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
var Conta = /** @class */ (function () {
    function Conta(_a) {
        var nome = _a.nome, quantia = _a.quantia, cpf = _a.cpf;
        this.nome = nome;
        this.quantia = quantia;
        this.cpf = cpf;
    }
    Conta.prototype.getNome = function () {
        return this.nome;
    };
    Conta.prototype.getQuantia = function () {
        return this.quantia;
    };
    Conta.prototype.getCpf = function () {
        return this.cpf;
    };
    return Conta;
}());
exports.Conta = Conta;
