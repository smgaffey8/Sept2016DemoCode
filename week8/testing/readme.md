# Testing!

> All about investigating your code

## Why?

- Make sure it works
- Because bugs
- Testing is one of the most important things you can do to make applications stable over a long period of time
- Builds confidence in your code
- Many employers will NOT hire you if you know jack-shit about testing

## Environments
> In Node, there's a paradigm for describing the _environment_ you are in.  `NODE_ENV` (`process.env.NODE_ENV`) is typically used to describe the environment the code is in.

`NODE_ENV` tends to be one of three values : 

- `development` : your local machine
- `staging` : a place to test code _before_ releasing it to the public
- `production` : this is where your code lives so that other people can use your application
    - release to the public

> Some 3rd party node modules (like new-relic) can use these environment variables

## Types of Testing

3 Main types of testing

- Unit Testing
- Integration Testing
- Functional/Feature Testing (end-to-end)

Other kinds of testing

- Penetration Testing
- Stress Testing
- UI/UX Testing

### Unit Testing
> Software dev practice in which the smallest testable parts of an application (`units`) are individually and independently tested

- Often automated, but can definitely be done manually
- usually centered around testing the input/output of a single function
- often the _first_ kind of testing a software team will do
- Some popular frameworks/libraries
    - `jasmine` (front/back end assertion library)
    - `mocha` (testing framework) - make sure you are using `express`
    - `chai` (front/back end assertion library)
    - `protractor` (testing framework and task-runner) - make sure you are using `angular`

#### Steps

1. Define your expected (or unexpected) values
    - `optimistic` values are values that say the function is working properly
    - `pessimistic` values are values that say 'dat function don work' aka `dumb-shit`

    - fuction that adds 2 + 3
        - optimistic  : 5, typeof ? === 'number'
        - pessimistic : NaN

2. Create assertions (expectations of results) for our test cases - write the unit test

3. Execute the tests! (hopefully automated)

4. Verify assertions satisfy your expectations

### Integration

> Testing the connection between 2 or more components

- Usually the next phase after unit testing
- Usually a `clear-box` test, means the person can see the source code
- Testing `processes` within an app - typically not an _entire_ feature

Steps can vary from team to team, but there are 4 big approaches : 

1. Big Bang

    - All or most of the unit tests are combined in one big go

2. Top Down (biggest industry standard)

    - Testing top level units first, then lower units step by step

3. Bottom Up

    - Testing bottom level units first, then upper level step by step

4. Sandwich

    - Hybrid T/D : B/U approach

### Functional/Feature Testing

> Testing the application as a whole, from the user's perspective

- Verfies that the application is doing what we expect
- Mainly involves a `black-box` approach - person writing the tests generally doesn't see the source code
- Each and every feature is once again tested with both `optimistic` and `pessimistic` outcomes / expectations
- Involves testing UI, APIs, Databases, security, and client/server communication
- typically automated, but can be done manually
- `Selenium` is a popular webdriver framework that can be used to mock a user actually using your website


### How many tests should you write?

> Writing tests is expensive, 100% coverage should almost never be your goal.

- tests can have bugs
- don't write tests to test your tests
- each test you write has the possibility of giving you a false positive
- Over time, it's possible that your tests become `legacy` tests.  Test bloat leads to lazy tests that aren't used and lie around like lazy bums


### Test Driven Development (TDD)

> Writing tests __before__ you ever start writing code for your application.  After the test is written, you write the code to make the test pass


### Jasmine

Globally - gives us access to the CLI
```bash
sudo npm install -g jasmine
```

Locally -  so that we can `require` jasmine into our files
```bash
npm install jasmine --save-dev
```

`npm install --production` - installs ONLY `dependencies`, leaves `devDependencies` out of it

### Protractor
> Need to install Java on your computer

Globally - Gives us a CLI / webdriver

```bash
sudo npm install -g protractor
```

```bash
webdriver-manager update
webdriver-manager start
```
