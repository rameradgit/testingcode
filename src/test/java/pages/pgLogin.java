package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import java.nio.Buffer;

public class pgLogin {

    private WebDriver driver;

    private static final By INPUT_USERNAME = By.name("name");
    private static final By INPUT_PASSWORD = By.name("passwor");
    private static final By BUTTON_SIGNIN = By.xpath("//input[@type='submit']");
    private static final By MSG_SUCCESS = By.xpath("//h1[contains(text(),'Login Success')]");
    private static final By MSG_FAILURE = By.id("error");

    public pgLogin(WebDriver driver) {
        this.driver=driver;
    }

    public void take_Login(String username, String password){

        driver.findElement(INPUT_USERNAME).sendKeys(username);
        driver.findElement(INPUT_PASSWORD).sendKeys(password);
        driver.findElement(BUTTON_SIGNIN).click();

    }

    public boolean verifySuccessMsg(){

        if (driver.findElement(MSG_SUCCESS).isDisplayed()) {

            return true;
        }

        return false;
    }

    public boolean verifyFailureMsg(){

        if (driver.findElement(MSG_FAILURE).isDisplayed()) {

            return true;
        }

        return false;
    }

}
