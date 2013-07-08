Feature: Convert a dollar amount to string representation

    Scenario: Less than one dollar
        When I run `node ../../src/exercise1.js 0.14`
        Then it should pass with:
        """
        Convert 0.14
             to "14/100 dollars"
        """

    Scenario: It should render a trailing zero when cents divisible by 10
        When I run `node ../../src/exercise1.js 0.20`
        Then it should pass with:
        """
        Convert 0.20
             to "20/100 dollars"
        """

    Scenario: One dollar even still shows cents
        When I run `node ../../src/exercise1.js 1.00`
        Then it should pass with:
        """
        Convert 1.00
             to "One and 00/100 dollars"
        """

    Scenario: Dollar values over twenty and under one hundred are hyphenated
        When I run `node ../../src/exercise1.js 22.32`
        Then it should pass with:
        """
        Convert 22.32
             to "Twenty-two and 32/100 dollars"
        """

    Scenario: Hundreds of dollars are displayed with a space
        When I run `node ../../src/exercise1.js 443.50`
        Then it should pass with:
        """
        Convert 443.50
             to "Four hundred forty-three and 50/100 dollars"
        """

    Scenario: Thousands of dollars are also displayed with a space
        When I run `node ../../src/exercise1.js 5657.75`
        Then it should pass with:
        """
        Convert 5657.75
             to "Five thousand six hundred fifty-seven and 75/100 dollars"
        """
    
    Scenario: Handles tens of thousands of dollars
        When I run `node ../../src/exercise1.js 30869.00`
        Then it should pass with:
        """
        Convert 30869.00
             to "Thirty thousand eight hundred sixty-nine and 00/100 dollars"
        """

    Scenario: Handles hundreds of thousands of dollrs
        When I run `node ../../src/exercise1.js 999999.99`
        Then it should pass with:
        """
        Convert 999999.99
             to "Nine hundred ninety-nine thousand nine hundred ninety-nine and 99/100 dollars"
        """

    Scenario: Millions are rejected
        When I run `node ../../src/exercise1.js 1000000.00`
        Then it should pass with:
        """
        Only values between 0 and 999999.99 are supported. Please enter a supported number.
        """

    Scenario: Negative numbers are rejected
        When I run `node ../../src/exercise1.js -0.01`
        Then it should pass with:
        """
        Only values between 0 and 999999.99 are supported. Please enter a supported number.
        """
