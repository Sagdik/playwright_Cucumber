Feature: User Automation Page validation

Background:
Given user launch url


Scenario: Validate the about page
When select about page
Then user validate about page

Scenario: Search Product From search list
When select contact page
Then user validate contact page
