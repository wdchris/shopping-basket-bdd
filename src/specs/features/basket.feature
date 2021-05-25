Feature: Shopping Basket

  Scenario: Customer adds to basket
    Given Customer adds 2 copies of "The Hobbit"
    And Customer adds 5 copies of "Beaking Bad"
    And Date is "01/06/2021"
    When they check their shopping basket
    Then they should see
      """
      01/06/2021
      """
    And they should see
      | Units | Title        | Unit Price | Line Total |
      | 2     | The Hobbit   | 5.00       | 10.00      |
      | 5     | Breaking Bad | 7.00       | 35.00      |
    And they should see
      """
      Total: £45.00
      """