package steps;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.io.IOException;

public class Hook extends Common {

@Before
    public void BeforeScenario(Scenario scenario){

    System.out.println(scenario.getName() + " started");
    open_web_browser();
}

@After
    public void AfterScenario(Scenario scenario) throws IOException {

    takeFailScreenshot(scenario);
    close_driver();
    System.out.println(scenario + " completed");

}

}
