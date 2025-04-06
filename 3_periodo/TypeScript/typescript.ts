class Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  categoria: string[];

  constructor(
    id: number,
    nome: string,
    preco: number,
    quantidade: number,
    categoria: string[],
  ) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
    this.categoria = categoria;
  }
}

class Venda {
  produtos: Produto[];
  constructor(produtos: Produto[]) {
    this.produtos = produtos;
  }

  get total(): number {
    return this.produtos
      .map((p, i) => {
        return p.preco * p.quantidade;
      })
      .reduce((acc, pTotal) => acc + pTotal, 0);
  }
}

let p1 = new Produto(0, "Bola", 10.99, 2, ["esportes", "lazer"]);
let p2 = new Produto(1, "Touca", 25.99, 1, ["Roupas"]);

let vendaA = new Venda([p1, p2]);
console.log(vendaA.total);
