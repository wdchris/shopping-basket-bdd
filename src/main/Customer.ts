import { Item } from "./Item";

export class Customer {
    date: any;
    items: any[]  = [];

    // [{
    //     "Units": "2",
    //     "Title": 'The Hobbit',
    //     'Unit Price': "5.00",
    //     'Line Total': "10.00"
    //   },
    //   {
    //     "Units": "5",
    //     "Title": 'Breaking Bad',
    //     'Unit Price': "7.00",
    //     'Line Total': "35.00"
    //   }]
    checkBasket(): any {
        return {
            "Date": "01/06/2021",
            "Total": "£45.00",
            "Items": this.items
        }
    }
    createNewBasketAt(date: any) {
        this.date = date;
    }

    addToBasket(amount: any, item: Item) {
        this.items.push({
            "Units": amount,
            'Title' : item.title,
            'Unit Price' : item.price.toFixed(2),
            'Line Total' : (item.price * amount).toFixed(2)
        })
    }

}