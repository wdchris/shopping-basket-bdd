export class Item {
    title: string;
    price: number;
    id: number;
    
    constructor(id: number, title: string, price: number) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}