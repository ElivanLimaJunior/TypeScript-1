export class Negociacao {
    constructor(
       private _data: Date, 
       public readonly quantidade: number, 
       public readonly valor: number) {
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime())
        return data
    }
}

// nem sempre o readonly resolve problemas como esse, então um método ou até mesmo um getter, como vimos aqui, pode resolver essa questão da nossa classe.