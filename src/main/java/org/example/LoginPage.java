package org.example;

import org.openqa.selenium.By;

public class LoginPage  extends Utils{
    //enter username
    private By _username = By.xpath("//input[@id=\"txtUsername\"]");
   //enter password
    private By _password = By.xpath(" //input[@type=\"password\"]");
    //click on login button
    private By _loginbutton    =By.xpath("//input[@ id=\"btnLogin\"]");
    private By _actual  = By.id("spanMessage");


    //enter login details
    public void userenterlogindetails (String username,String password){
        sendText(_username,username);
        sendText(_password,password);

    }
    //click on login Button
    public void clickonloginbutton()
    {
        clickOnElement(_loginbutton);
    }
    public void userShouldSeeErrorMessage(String errorMessage){
        String expected = errorMessage;
        assertTextMessage("user cannot see",expected,_actual);

    }

}

