import { Item } from "./Item";

export class Customer {
    date: any;
    items: any[]  = [];
    total: number = 0;

    checkBasket(): any {
        return {
            "Date": "01/06/2021",
            "Total": "£" + this.total.toFixed(2),
            "Items": this.items
        }
    }
    createNewBasketAt(date: any) {
        this.date = date;
    }

    addToBasket(amount: any, item: Item) {
        let lineTotal = item.price * amount;
        this.total += lineTotal;
        this.items.push({
            "Units": amount,
            'Title' : item.title,
            'Unit Price' : item.price.toFixed(2),
            'Line Total' : lineTotal.toFixed(2)
        })
    }

}