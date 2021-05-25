import {DataTable} from '@cucumber/cucumber'
import {defineFeature, loadFeature} from "jest-cucumber";
import {mock} from "jest-mock-extended";

const feature = loadFeature('./src/specs/features/basket.feature')

defineFeature(feature, test => {
    // const basket = mock<ShoppingBasket>()
    // let account: Account
    // beforeEach(() => {
    //     account = new Account()
    // })

    test('Customer adds to basket', ({ given, and, when, then }) => {
        given(/^Customer adds (\d+) copies of "(.*)"$/, (amount, title) => {
            
        });

        and(/^Customer adds (\d+) copies of "(.*)"$/, (amount, title) => {

        });

        and(/^Date is "(.*)"$/, (date) => {

        });

        when('they check their shopping basket', () => {

        });

        then('they should see', (docString) => {

        });

        and('they should see', (table) => {

        });

        and('they should see', (docString) => {

        });
    });
})