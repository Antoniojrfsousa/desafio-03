class herois {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar(){
        if(this.tipo === "guerreiro"){
            console.log(`o ${this.tipo} atacou usando espada`);
        }else if(this.tipo ==="mago"){
            console.log(`o ${this.tipo} atacou usando magia`);
        }else if(this.tipo === "monge"){
            console.log(`o ${this.tipo} atacou usando artes marciais`); 
        }else {
            console.log(`o ${this.tipo} atacou usando shuriken `)
        }
    }
}

let aventureiro = new herois("Antonio jr", 34, "monge")

aventureiro.atacar()

