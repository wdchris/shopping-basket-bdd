Feature: Shopping Basket

  Scenario: Customer adds to basket
    Given Date is "02/06/2021"
    And Customer adds 3 copies of "The Hobbit"
    And Customer adds 5 copies of "Breaking Bad"
    When they check their shopping basket
    Then they should see
      """
      02/06/2021
      """
    And they should get a table
      | Units | Title        | Unit Price | Line Total |
      | 3     | The Hobbit   | 5.00       | 15.00      |
      | 5     | Breaking Bad | 7.00       | 35.00      |
    And they should see
      """
      Total: £50.00
      """