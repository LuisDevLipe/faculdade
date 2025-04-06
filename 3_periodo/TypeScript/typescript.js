var Produto = /** @class */ (function () {
    function Produto(id, nome, preco, quantidade, categoria) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
        this.categoria = categoria;
    }
    return Produto;
}());
var Venda = /** @class */ (function () {
    function Venda(produtos) {
        this.produtos = produtos;
    }
    Object.defineProperty(Venda.prototype, "total", {
        get: function () {
            return this.produtos
                .map(function (p, i) {
                return p.preco * p.quantidade;
            })
                .reduce(function (acc, pTotal) { return acc + pTotal; }, 0);
        },
        enumerable: false,
        configurable: true
    });
    return Venda;
}());
var p1 = new Produto(0, "Bola", 10.99, 2, ["esportes", "lazer"]);
var p2 = new Produto(1, "Touca", 25.99, 1, ["Roupas"]);
var vendaA = new Venda([p1, p2]);
console.log(vendaA.total);
