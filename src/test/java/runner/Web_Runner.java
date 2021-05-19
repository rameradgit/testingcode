package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(

        features = "classpath:features",
        glue = {"steps"},
        plugin = {"pretty:STDOUT","html:reports/CucumberReport"}

)
public class Web_Runner{

}