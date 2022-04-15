$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/FEATURE/Login.feature");
formatter.feature({
  "name": "Here we will automate Login application of Saucelab webpage.",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validating positive scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enters username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the products webpage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.background({
  "name": "Enter the URL https://www.saucedemo.com",
  "description": "    Given: The user is on login page",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating positive scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enters username \"standard_user\" and password \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "PRODUCTSTEPS.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LOGINSTEPS.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the products webpage",
  "keyword": "Then "
});
formatter.match({
  "location": "LOGINSTEPS.user_enters_the_products_webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Enter the URL https://www.saucedemo.com",
  "description": "    Given: The user is on login page",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating positive scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enters username \"problem_user\" and password \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "PRODUCTSTEPS.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LOGINSTEPS.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the products webpage",
  "keyword": "Then "
});
formatter.match({
  "location": "LOGINSTEPS.user_enters_the_products_webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validating negative scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enters username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User finds an error message \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "user1",
        "abc@123"
      ]
    },
    {
      "cells": [
        "user2",
        "xyz@123"
      ]
    }
  ]
});
formatter.background({
  "name": "Enter the URL https://www.saucedemo.com",
  "description": "    Given: The user is on login page",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating negative scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enters username \"user1\" and password \"abc@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "PRODUCTSTEPS.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LOGINSTEPS.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User finds an error message \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LOGINSTEPS.user_finds_an_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Enter the URL https://www.saucedemo.com",
  "description": "    Given: The user is on login page",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating negative scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enters username \"user2\" and password \"xyz@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "PRODUCTSTEPS.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LOGINSTEPS.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User finds an error message \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LOGINSTEPS.user_finds_an_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});