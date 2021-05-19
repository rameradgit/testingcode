package steps;

import cucumber.api.Scenario;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import java.io.*;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class Common {

    public static WebDriver wdriver;
    private String strProjLoc;
    private String strDriverLoc;
    private String strBrowser;
    private String strAppPath;
    private String strHeadless;

    private static final String WEBDRIVERCHROME = "webdriver.chrome.driver";

    private Properties prop = new Properties();


    public Common() {

        InputStream input;

        strProjLoc = System.getProperty("user.dir");
        strDriverLoc = strProjLoc + "/src/test/resources/drivers";

        try {
            input = new FileInputStream(strProjLoc + "/src/test/resources/configs/config.properties");
            prop.load(input);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    public void open_web_browser(){

        strBrowser=prop.getProperty("browser.name");
        strAppPath = prop.getProperty("cap.App");
        strHeadless = prop.getProperty("browser.headless");

        if (strBrowser.equalsIgnoreCase("GC")){

            ChromeOptions options = new ChromeOptions();

            options.setExperimentalOption("useAutomationExtension",false);

            if (strHeadless.equalsIgnoreCase("true")){

                options.addArguments("headless");
            }

            System.setProperty(WEBDRIVERCHROME,strDriverLoc + "/chromedriver.exe");

            wdriver = new ChromeDriver(options);
            wdriver.manage().window().maximize();
            wdriver.get(strAppPath);
            wdriver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);

            //For multi window handling at startup
            for (String win_hndl : wdriver.getWindowHandles()){

                wdriver.switchTo().window(win_hndl);
            }
        }

    }

    public void close_driver(){

        wdriver.close();

    }

    public void takeFailScreenshot(Scenario scenario) throws IOException {

        if (scenario.isFailed()) {

            TakesScreenshot scrshot = ((TakesScreenshot) wdriver);
            File srcfile = scrshot.getScreenshotAs(OutputType.FILE);

            String dttimestamp = (new SimpleDateFormat("yyyyMMddHHmmsss")).format(new Date());
            String reppath = "./reports/";
            String scrshotname = dttimestamp + ".png";
            String dest = reppath + scrshotname;
            File destfile = new File(dest);
            FileUtils.copyFile(srcfile, destfile);

        }
    }
}
