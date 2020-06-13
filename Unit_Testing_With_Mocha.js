// Introduction to Mocha.js
/*
Mocha.js is an opensource JavaScript framework used for testing Node.js and JavaScript applications running on the browser.

Mocha features browser support, asynchronous testing, test coverage reports and uses assertion libraries making it widely used test framework.

Jasmine, AVA, Tape, QUnit, and Jest are other similar javascript testing frameworks.
*/

// Why Mocha.js
/*
  Mocha is rich in multiple features needed for JavaScript unit testing. Some of them are:

    Allows usage of assertion libraries like should and expect.
    Easy to test both synchronous and asynchronous code.
    Supports BDD, TDD, Exports, Quint, and Require interfaces.
    Supports multiple test reporters like Spec, json, and doc allowing different reporting styles.
    Can run in a browser.
*/

// Basic Function in Mocha
/*
  Before writing your tests, You need to know the basic and important functions used in unit testing, They are :

  describe() : 
    This function is used to group our tests in mocha and also tests can be nested deep.It takes two arguments as input one being the name of the test group and second is a callback function

  it() : 
    This is used to write individual test cases it() takes two arguments one is the string which defines what test to do and second is a callback function.
*/

// Trying Basic Mocha describe() and it() functionality
// Test file is './test/testSpec.js'
module.exports = {
  add: function (val1, val2) {
    checkArguments(val1, val2);
    return val1 + val2;
  },

  subtract: function (val1, val2) {
    checkArguments(val1, val2);
    return val1 - val2;
  },

  multiply: function (val1, val2) {
    checkArguments(val1, val2);
    return val1 * val2;
  },

  divide: function (val1, val2) {
    checkArguments(val1, val2);
    return val1 / val2;
  },
};

function checkArguments(val1, val2) {
  if (isNaN(val1)) {
    return new Error("Arg1 Invalid");
  }

  if (isNaN(val2)) {
    return new Error("Arg2 Invalid");
  }
}

// Hooks
/*
  Hooks are used to set conditions that need to run before/after tests.

  Mocha provides four hooks: before(), beforeEach(), after() and afterEach(). They run in the order as defined in the testSuite.

    beforeEach(): runs before each test in a describe() block.

    before(): runs before executing any tests in a describe() block and even before the first beforeEach() hook.

    afterEach(): runs after each test in a describe() block.

    after(): runs after executing all tests in a describe() block. It runs after running the last afterEach() hook.
*/

// Trying Hooks -
describe("test the order of Mocha hooks", function () {
  before(function () {
    console.log("before");
  });
  after(function () {
    console.log("after");
  });
  beforeEach(function () {
    console.log("beforeEach");
  });
  afterEach(function () {
    console.log("afterEach");
  });
  it("test 1", function () {
    console.log("1");
  });
  it("test 2", function () {
    console.log("2");
  });
});

//  Reporting Test Result
/*
  Mocha outputs test results in different styles using different reporters.

  Some of them are:

    i. Spec: Outputs test result in a hierarchical view of test cases.

    ii. DotMatrix: The output is represented using a series of characters - Red Exclamation (!) for test failures, Blue comma (,) for pending tests and yellow dot(.) for slow tests.

    iii. Nyan: Nyan reporter presents test result with the total number of tests run, total passed and skipped tests.

    iv. Json: Json builds a single large json object on test completion.

    v. Doc: The output will be a hierarchical HTML representation of the test wrapped with a header and footer.
*/

// Third Party Reporters
/*
  Mocha allows you to define custom reporters within your test suit and publish to npm from there you can add it to your dev-dependencies, Some of the most popular reporters are Mocha-Junit-reporter,Mochawesome ,TeamCity reporter

  Mocha-Junit-reporter:

    This reporter produces JUnit style XML test results

    To install this a dev-dependency use the command:
      $npm install mocha-junit-reporter --save-dev

    or as a global module:
      $ npm install -g mocha-junit-reporter

    To run Mocha with this reporter run the command :
      $ mocha test --reporter mocha-junit-reporter

    This will output a results file at ./test-results.xml which can be changed to your preferred location by setting the environment variable MOCHA_FILE or specifying mochaFile in reporterOptions.
*/

// Mocha JUnit Reporter
/*
  <?xml version=“1.0” encoding=“UTF-8”?>
  <testsuite name=“nosetests”tests=“1”errors=“1”failures=“0”skip=“0”>
      <testcase classname=“path_to_test_suite.TestSomething”
                name=“test_it”time=“0”>
          <error type=“exceptions.TypeError”message=“oops, wrong type”>
          Traceback (most recent call last):
            …
            TypeError:oops,wrong type
            </error>
        </testcase>
  </testsuite>

  Above is an example JUnit reporter result.

  Appending Properties to Test suite:

    Properties can be appended to the report under testsuite, This is useful When you want to add extra build properties for analytics purpose

    This can be done via the Environment variable PROPERTIES=BUILD_ID or specifying properties in reporter options

      PROPERTIES=BUILD_ID:4291 mocha test --reporter mocha-junit-reporter

  or

      var mocha = new Mocha({
          reporter: 'mocha-junit-reporter',
          reporterOptions: {
              properties: {
                  BUILD_ID: 4291
              }
          }
      })
*/

// Mochawesome
/*
  Mochawesome is a custom reporter generating standalone HTML/CSS reports to help visualize test reports.

  This is the most popular test reporter used for the following reasons:

    It is simple, clean and modern in design.
    It is responsive and mobile friendly.
    Ability to add context to each test.
    It is responsive and mobile friendly
    It has filters to display only tests you want.
    It supports offline viewing and many more.
    
    To install Mochawesome to your dev-dependencies run the command in terminal :
      npm install --save-dev mochawesome.
  
    To tell mocha to use this reporter run the following command:
      mocha testfile.js --reporter mochawesome
  
    You can also add by specifying reporter name programmatically as:
      var mocha = new Mocha({
        reporter: 'mochawesome'
      });

  Output:
    Mochawesome produces two types of output files:

    mochawesome.html=This is the rendered report file which is beautiful, clean and clear.

    mochawesome.json=This is the raw JSON file used to render the report The reporter options can be passed as done in Mocha-JUnit-reporter.

  Adding context:
    This can be done in two ways:

    Context as a String: 
      Simple strings will be displayed as is. If you pass a URL, the reporter will attempt to turn it into a link. If the URL links to an image, it will be shown inline.

    Context as an Object:
      {
      title: 'some title' // must be a string
      value: {} // can be anything
      }
*/
