$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Feature/login.feature");
formatter.feature({
  "name": "User should not  login  with invalid credential",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User should not be able login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "User enter username as \"\u003cusername\u003e\"and  password as a \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User click on login",
  "keyword": "And "
});
formatter.step({
  "name": "user should see \"\u003cerrorMessage\u003e\"",
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
        "password",
        "errorMessage"
      ]
    },
    {
      "cells": [
        "Admin",
        "admin1234",
        "Invalid credentials"
      ]
    },
    {
      "cells": [
        "Admin1",
        "admin123",
        "Invalid credentials"
      ]
    },
    {
      "cells": [
        "Admin",
        "",
        "Password cannot be empty"
      ]
    },
    {
      "cells": [
        "",
        "admin123",
        "Username cannot be empty"
      ]
    },
    {
      "cells": [
        "Admin1",
        "",
        "Password cannot be empty"
      ]
    },
    {
      "cells": [
        "",
        "admin1234",
        "Username cannot be empty"
      ]
    },
    {
      "cells": [
        "",
        "",
        "Username cannot be empty"
      ]
    },
    {
      "cells": [
        "Admin1",
        "admin1234",
        "Invalid credentials"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "org.example.MyStepdefs.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "User enter username as \"Admin\"and  password as a \"admin1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "org.example.MyStepdefs.userEnterUsernameAsAndPasswordAsA(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on login",
  "keyword": "And "
});
formatter.match({
  "location": "org.example.MyStepdefs.userClickOnLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "org.example.MyStepdefs.userShouldSee(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "org.example.MyStepdefs.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "User enter username as \"Admin1\"and  password as a \"admin123\"",
  "keyword": "When "
});
formatter.match({
  "location": "org.example.MyStepdefs.userEnterUsernameAsAndPasswordAsA(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on login",
  "keyword": "And "
});
formatter.match({
  "location": "org.example.MyStepdefs.userClickOnLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "org.example.MyStepdefs.userShouldSee(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "org.example.MyStepdefs.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "User enter username as \"Admin\"and  password as a \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "org.example.MyStepdefs.userEnterUsernameAsAndPasswordAsA(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on login",
  "keyword": "And "
});
formatter.match({
  "location": "org.example.MyStepdefs.userClickOnLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Password cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "org.example.MyStepdefs.userShouldSee(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "org.example.MyStepdefs.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "User enter username as \"\"and  password as a \"admin123\"",
  "keyword": "When "
});
formatter.match({
  "location": "org.example.MyStepdefs.userEnterUsernameAsAndPasswordAsA(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on login",
  "keyword": "And "
});
formatter.match({
  "location": "org.example.MyStepdefs.userClickOnLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Username cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "org.example.MyStepdefs.userShouldSee(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "org.example.MyStepdefs.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "User enter username as \"Admin1\"and  password as a \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "org.example.MyStepdefs.userEnterUsernameAsAndPasswordAsA(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on login",
  "keyword": "And "
});
formatter.match({
  "location": "org.example.MyStepdefs.userClickOnLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Password cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "org.example.MyStepdefs.userShouldSee(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "org.example.MyStepdefs.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "User enter username as \"\"and  password as a \"admin1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "org.example.MyStepdefs.userEnterUsernameAsAndPasswordAsA(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on login",
  "keyword": "And "
});
formatter.match({
  "location": "org.example.MyStepdefs.userClickOnLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Username cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "org.example.MyStepdefs.userShouldSee(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "org.example.MyStepdefs.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "User enter username as \"\"and  password as a \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "org.example.MyStepdefs.userEnterUsernameAsAndPasswordAsA(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: disconnected: not connected to DevTools\n  (Session info: chrome\u003d80.0.3987.132)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MEGH-LAPTOP\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\hiren\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53968}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: b2b0574dadaac0ae430a5027e28865cd\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\"txtUsername\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.example.Utils.sendText(Utils.java:112)\r\n\tat org.example.LoginPage.userenterlogindetails(LoginPage.java:13)\r\n\tat org.example.MyStepdefs.userEnterUsernameAsAndPasswordAsA(MyStepdefs.java:17)\r\n\tat ✽.User enter username as \"\"and  password as a \"\"(file:///C:/Users/hiren/IdeaProjects/CucumberScenarioHomework/./src/test/resources/Feature/login.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User click on login",
  "keyword": "And "
});
formatter.match({
  "location": "org.example.MyStepdefs.userClickOnLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Username cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "org.example.MyStepdefs.userShouldSee(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.write("!!!!!!!!!!!!...Scenario failed.Please see attached screenshot for the error");
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "org.example.MyStepdefs.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "User enter username as \"Admin1\"and  password as a \"admin1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "org.example.MyStepdefs.userEnterUsernameAsAndPasswordAsA(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d//input[@id\u003d\"txtUsername\"]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MEGH-LAPTOP\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.example.Utils.sendText(Utils.java:112)\r\n\tat org.example.LoginPage.userenterlogindetails(LoginPage.java:13)\r\n\tat org.example.MyStepdefs.userEnterUsernameAsAndPasswordAsA(MyStepdefs.java:17)\r\n\tat ✽.User enter username as \"Admin1\"and  password as a \"admin1234\"(file:///C:/Users/hiren/IdeaProjects/CucumberScenarioHomework/./src/test/resources/Feature/login.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User click on login",
  "keyword": "And "
});
formatter.match({
  "location": "org.example.MyStepdefs.userClickOnLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "org.example.MyStepdefs.userShouldSee(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d80.0.3987.132)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MEGH-LAPTOP\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\hiren\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54001}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 8323d313712e4833338f72c99d805dee\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat org.example.Hooks.closeBrowser(Hooks.java:28)\r\n",
  "status": "failed"
});
});