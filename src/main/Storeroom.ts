import { Item } from "./Item";

export class Storeroom {
    private books:{ [name: string]: Item } = { 
        "The Lord of the Rings": new Item(10001, "The Lord of the Rings", 10.00),
        "The Hobbit" : new Item(10002, "The Hobbit", 5.00) }

    private dvds: { [name: string]: Item } = {
        "Game of Thrones": new Item(20001, "Game of Thrones", 9.00),
        "Breaking Bad": new Item(20110, "Breaking Bad", 7.00)}
    
    find(title: string): Item {
        return this.books[title] || this.dvds[title]
    }
}