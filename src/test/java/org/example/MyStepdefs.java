package org.example;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.example.LoginPage;

public class MyStepdefs {
    LoginPage loginPage = new LoginPage();
    @Given("User is on login page")
    public void userIsOnLoginPage() {
    }

    @When("User enter username as {string}and  password as a {string}")
    public void userEnterUsernameAsAndPasswordAsA(String username, String password) {
        loginPage.userenterlogindetails(username, password);
    }

    @And("User click on login")
    public void userClickOnLogin() {
        loginPage.clickonloginbutton();
    }

    @Then("user should see {string}")
    public void userShouldSee(String errorMessage) {
        loginPage.userShouldSeeErrorMessage(errorMessage);
    }
}
