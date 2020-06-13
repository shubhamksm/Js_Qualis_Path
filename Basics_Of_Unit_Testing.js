// About Unit Testing
/*
  Before starting this course, let us quickly understand what is Unit testing.

  Unit Testing is the practice of testing individual units of a software, by mocking input data and checking if the output is as expected.

  While in object-oriented programming, method is considered as a unit, an individual unit may be a method, program or a function.
*/

// Unit Testing Practice
/*
  Unit Testing should cover all the small units of the application such as utils, helpers, and services.

  It should ensure these small units function as expected using assertion functions. We will learn about them a little later.

  Code coverage reporting tools can be used to check if all units of code are being tested.

  Unit testing is generally done by Developer and sometimes by the Software Testers as well.
*/

// Curtain Raiser
/*
  Now, time to formally welcome you to this course on Mocha, one of the popular JavaScript Testing frameworks. In this course you will learn:

    Mocha.js - The javascript unit testing framework that provides a test environment and test structure.

    Chai.js and Should.js - Assertion libraries that can be integrated with Mocha.

    Sinon.js - JavaScript library providing standalone testdoubles.

    Istanbul.js- JavaScript Code coverage reporting tool.

    ESLint - To report problematic code having syntax errors, deviations in coding style guide and problematic runtime errors.
*/

// Unit Testing Terminology

// 1. Test Environment
/*
  Test Environment is the environment where testing tools provide elements for the execution of tests with software, hardware and network configured. Test environment configuration imitates production environment so that it can unveil configuration and environment-related issues.

  Frameworks like Mocha, Jasmine, Jest, and Karma can be used to set up a test environment.
*/

// 2. Organizing Tests
/*
  While there is no specific rule on how to organise, there are two popular ways of organising tests:

  Writing all the test files into a well organized /test directory.
  Writing test file in the same folder as the target file being tested.
  Since unit tests are performed on specific lines of code or a part of the code, it is advised to follow the second approach.

  Example:

    |- /main
    |  |- index.js
    |  |- index.test.js

  These test files are generally named as *.test.js
*/

// 3. Test Interface
/*
  Mocha Interface system provides developers to choose their own style of Domain Specific Language (DSL). Mocha has BDD, TDD, Exports, QUnit and Require-style interfaces.

  BDD is the default style interface of Mocha.

  The BDD interface provides describe(), context(), it(), specify(), before(), after(), beforeEach(), and afterEach().

  This course all tests are written in BDD interface.
*/

// 4. Test Runner
/*
  Test Runner helps launch tests in real browsers like Chrome, Internet Explorer, and Headless Browsers.

  Headless Browsers can simulate browser environment by executing plain JavaScript.

    JSDOM, PhantomJS, Puppeteer, Headless Chrome, and Headless Firefox are examples of headless browsers.
    Headless browsers have their limitations since they cannot simulate every scenario as real browsers do.
*/

// 5. Assertion Function
/*
  Assertion functions are used to check if a function or a class produces expected output by mocking input.

  Examples of using assertions:

    expect(foo).to.be.a('string');
    expect(foo).to.equal('bar');

  Chai, Should, Jasmine, Jest and Unexpected are some of the commonly used assertion libraries.
*/

// 6. Mocks, Spices and Stubs
/*
  Mocks, Spies, and Stubs are Test doubles that are used to replace code that has external dependencies like Ajax or networking, timeouts, and database calls.

  A Test Double is a piece of code that replaces the code with external dependencies within the context of a test helping to make assertions. Test Doubles replaces real-world object when production code is executed with a unit test.
*/

// 7. Test Coverage Tools
/*
  Code coverage tools let the developers know how much of the application source code is utilised when corresponding test codes are run.

  Istanbul is a widely used code coverage tool that generates coverage reports on statements, lines, functions and decision branches in percentage values so that one can understand which sections of code are left to cover.
*/

// 8. Linting
/*
  Linting is the technique of running code that checks for errors and ensures code quality. tools that analyze code for errors are called Lint or Linters.

  ESLint is popular and powerful linter for javascript used to disclose the lines of source code that can be cleaned up, and warned against any incorrect coding practices.

  Linting checks the complete JavaScript source code for any mistakes even without running the code or opening the code in the browser.
*/

// 9. Testing Profiling
/*
  Test profiling is a type of dynamic program analysis measuring memory, time consumption, frequency and duration of function calls simultaneously as part of the unit testing process.

  Test profiling helps you understand the implications of design choices and also to spot potential performance problems.

  Profiling is done by monitoring either the source code or its binary executable form using tools called as profilers

  By including profiling as apart of unit testing you gain an insight into the performance of your application components because in unit testing each line and method is tested so time and resource consumption of each of it is known.

  Firebug and Microsoft Visual Studio AJAX Profiling Extensions are widely used for Javascript code.
*/
