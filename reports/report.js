$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CarsVerifications.feature");
formatter.feature({
  "line": 1,
  "name": "Compare cars details from files against website",
  "description": "",
  "id": "compare-cars-details-from-files-against-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2032721166,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Read cars details from excell files and assert with website",
  "description": "",
  "id": "compare-cars-details-from-files-against-website;read-cars-details-from-excell-files-and-assert-with-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@CarVerification"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I read all files from path \"src/main/resources/carsDataFiles\" with \"xlsx\" extension",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I compare on DVLA website by registration number",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "The details should match",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "src/main/resources/carsDataFiles",
      "offset": 28
    },
    {
      "val": "xlsx",
      "offset": 68
    }
  ],
  "location": "CarsTestsImplementation.readAllFilesFromPath(String,String)"
});
formatter.result({
  "duration": 1741778484,
  "status": "passed"
});
formatter.match({
  "location": "CarsTestsImplementation.compareDVLAWebsiteByRegistrationNumber()"
});
formatter.write("Verify car with registration number: LR09 UOA");
formatter.embedding("image/png", "embedded0.png");
formatter.write("Verify car with registration number: WM54 FDN");
formatter.embedding("image/png", "embedded1.png");
formatter.write("Verify car with registration number: LR09 UOA");
formatter.write("Make Number does not match, file value: Lastun and DVLA: VAUXHALL");
formatter.embedding("image/png", "embedded2.png");
formatter.write("Verify car with registration number: WM54 FDN");
formatter.write("Make Number does not match, file value: Trabi and DVLA: PORSCHE");
formatter.embedding("image/png", "embedded3.png");
formatter.write("Verify car with registration number: LR09 UOA");
formatter.write("Make Number does not match, file value: ARO and DVLA: VAUXHALL");
formatter.embedding("image/png", "embedded4.png");
formatter.write("Verify car with registration number: WM54 FDN");
formatter.write("Make Number does not match, file value: DACIA and DVLA: PORSCHE");
formatter.embedding("image/png", "embedded5.png");
formatter.result({
  "duration": 7957732130,
  "status": "passed"
});
formatter.match({
  "location": "CarsTestsImplementation.verifyDetailsMatch()"
});
formatter.result({
  "duration": 936958,
  "error_message": "java.lang.AssertionError: Unmatched data found, verify the generated report! expected [true] but found [false]\n\tat org.testng.Assert.fail(Assert.java:96)\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\n\tat org.testng.Assert.assertTrue(Assert.java:44)\n\tat cars.details.tests.CarsTestsImplementation.verifyDetailsMatch(CarsTestsImplementation.java:92)\n\tat ✽.Then The details should match(CarsVerifications.feature:7)\n",
  "status": "failed"
});
formatter.write("LR09 UOA: Make Number does not match, file value: Lastun and DVLA: VAUXHALL");
formatter.write("WM54 FDN: Make Number does not match, file value: Trabi and DVLA: PORSCHE");
formatter.write("LR09 UOA: Make Number does not match, file value: ARO and DVLA: VAUXHALL");
formatter.write("WM54 FDN: Make Number does not match, file value: DACIA and DVLA: PORSCHE");
formatter.after({
  "duration": 1304121,
  "status": "passed"
});
});