import {DataTable} from '@cucumber/cucumber'
import assert = require('assert');
import {defineFeature, loadFeature} from "jest-cucumber";
import {mock} from "jest-mock-extended";
import { isTemplateExpression } from 'typescript';
import { Customer } from '../../main/Customer';
import { Item } from '../../main/Item';
import { Storeroom } from '../../main/Storeroom';

const feature = loadFeature('./src/specs/features/basket.feature')

defineFeature(feature, test => {
    const shopper = new Customer()
    const creationDate = "2021/05/25"
    const db = new Storeroom()  
    let result : string[][]    

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
            expect(result[0]).toBe(docString)
        });

        and('they should see', (table) => {
            let expected = [["Units", "Title", "Unit Price", "Line Total"],
            ["2", "The Hobbit", "5.00", "10.00"],
            ["5", "Breaking Bad", "7.00", "35.00"]]
            assert.deepEqual(table.rows(), expected)
        });

        and('they should see', (docString) => {
            expect(result[result.length - 1]).toBe(docString)
        });
    });
})