interface NewConta{
    nome: string;
    quantia: number;
    cpf: number;
}

class Conta{
    private nome: string;
    private quantia: number;
    private cpf: number;

    constructor({nome, quantia, cpf}: NewConta){
        this.nome = nome;
        this.quantia = quantia;
        this.cpf = cpf;
    }

    public getNome(): string{
        return this.nome;
    }
    public getQuantia(): number{
        return this.quantia;
    }
    public getCpf(): number{
        return this.cpf;
    }
}
export{Conta};