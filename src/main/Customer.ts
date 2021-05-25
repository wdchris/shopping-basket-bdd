import { Item } from "./Item";

export class Customer {
    checkBasket(): any {
        return {
            "Date": "01/06/2021",
            "Total": "£45.00",
            "Items": [{
                "Units": "2",
                "Title": 'The Hobbit',
                'Unit Price': "5.00",
                'Line Total': "10.00"
              },
              {
                "Units": "5",
                "Title": 'Breaking Bad',
                'Unit Price': "7.00",
                'Line Total': "35.00"
              }]
        }
    }
    createNewBasketAt(date: any) {
        throw new Error('Method not implemented.');
    }
    addToBasket(amount: any, item: Item) {
        throw new Error('Method not implemented.');
    }

}