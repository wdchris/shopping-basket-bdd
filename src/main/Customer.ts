import { Item } from "./Item";

export class Customer {
    checkBasket(): string[][] {
        return [["Date: "],
        ["Units", "Title", "Unit Price", "Line Total"],
        ["2", "The Hobbit", "5.00", "10.00"],
        ["5", "Breaking Bad", "7.00", "35.00"],
        ["Total : £45.00"]]
    }
    createNewBasketAt(date: any) {
        throw new Error('Method not implemented.');
    }
    addToBasket(amount: any, item: Item) {
        throw new Error('Method not implemented.');
    }

}