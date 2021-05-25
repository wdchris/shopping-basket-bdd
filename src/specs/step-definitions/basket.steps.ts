import {DataTable} from '@cucumber/cucumber'
import {defineFeature, loadFeature} from "jest-cucumber";
import {mock} from "jest-mock-extended";
import { Customer } from '../../main/Customer';
import { Storeroom } from '../../main/Storeroom';

const feature = loadFeature('./src/specs/features/basket.feature')

defineFeature(feature, test => {
    const shopper = new Customer()
    const db = new Storeroom()  
    let result : any    

    test('Customer adds to basket', ({ given, and, when, then }) => {
        given(/^Date is "(.*)"$/, (date) => {
            shopper.createNewBasketAt(date)
        });

        and(/^Customer adds (\d+) copies of "(.*)"$/, (amount, title) => {
            shopper.addToBasket(amount, db.find(title))
        });

        and(/^Customer adds (\d+) copies of "(.*)"$/, (amount, title) => {
            shopper.addToBasket(amount, db.find(title))
        });

        when('they check their shopping basket', () => {
            result = shopper.checkBasket()
        });

        then('they should see', (docString) => {
            expect(result.Date).toBe(docString)
        });

        and('they should get a table', (table) => {
            expect(result.Items).toEqual(table)
        });

        and('they should see', (docString) => {
            expect("Total: " + result.Total).toBe(docString)
        });
    });
})