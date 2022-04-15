package stepDeps;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

	@RunWith(Cucumber.class)
	@CucumberOptions(
			plugin = {"pretty","html:target/test-report","json:target/cucumber-reports.json"},
			features = "src/test/java/FEATURE",
			glue = {"stepDeps"},
			monochrome = true
			)
	public class TESTRUNNER {

	}
