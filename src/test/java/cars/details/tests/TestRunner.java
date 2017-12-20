package cars.details.tests;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(format =
	{"pretty", "html:reports/",
		"json:target/cucumber.json"},tags={"@CarVerification"},
				features="src/test/java/resources/")
public class TestRunner extends AbstractTestNGCucumberTests {

}