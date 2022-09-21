class Paciente{
    private nome: string;
    private dataInternacao: string;
    private sexo: string;
    private idade: number;

    constructor(nome: string, dataInternacao: string, sexo: string, idade: number){
        this.nome = nome;
        this.dataInternacao = dataInternacao;
        this.sexo = sexo;
        this.idade = idade;
    }
    public getNome(): string{
        return this.nome;
    }
    public getData(): string{
        return this.dataInternacao;
    }
    public getSexo(): string{
        return this.sexo;
    }
    public getIdade(): number{
        return this.idade;
    }
}
export{Paciente};