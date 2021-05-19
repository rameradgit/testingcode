package steps;

import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.pgLogin;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Login extends Common {

    pgLogin pgLogin = new pgLogin(wdriver);

    @Given("User opens the web application")
    public void userOpensTheWebApplication() {

        System.out.println("Page loaded successfully");
    }

    @When("Submits the {string} and {string}")
    public void submitsTheAnd(String username, String password) throws InterruptedException {

        pgLogin.take_Login(username,password);
        Thread.sleep(3000);

    }

    @Then("Login successful message should be displayed")
    public void loginSuccessfulMessageShouldBeDisplayed() {

        Assert.assertTrue(pgLogin.verifySuccessMsg());

    }

    @Then("Login unsuccessful message should be displayed")
    public void loginUnsuccessfulMessageShouldBeDisplayed() {

        Assert.assertTrue(pgLogin.verifyFailureMsg());

    }
}