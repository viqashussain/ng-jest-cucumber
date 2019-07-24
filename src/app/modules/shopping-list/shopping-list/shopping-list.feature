Feature: Shopping List

    Scenario: Loading the shopping list component
        When I go to the shopping list component
        Then I should be able to view the shopping list component

    Scenario: Adding a new item to the shopping list
        When I go to the shopping list component
        And I add the following item to the shopping list
            | item | price |
            | Milk | 1.39  |
        Then the shopping list should have the following items
            | item | price |
            | Milk | 1.39  |

    Scenario: Calculating the total price of the shopping list
        When I go to the shopping list component
        Given the current total price is '2.84'
        When I add the following item to the shopping list
            | item  | price |
            | Bread | 0.85  |
        Then the total price of the shopping list should be '3.69'
