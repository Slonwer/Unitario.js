# Unitario.js

` JSON
"scripts": {
    "test": "mocha"
}
`
Make sure you have Node.js installed on your system. If you don't have Node.js installed, download and install the appropriate version for your system from the official website: https://nodejs.org/

Once you have Node.js installed, open the terminal (or command prompt) in the root directory of your project, where your code files and test files are located.

Ensure that you have installed the necessary dependencies, including Mocha and Chai, by running the following command in the terminal:

bash
Copy code
`npm install mocha chai --save-dev
This will install the testing libraries in your project.`

Next, create your test files in JavaScript, typically with the .test.js extension, and place them in a directory named "test" at the root of your project.

Now, you are ready to run your tests. Use the following command in the terminal:

bash
Copy code
npm test
This will instruct Mocha to find and run all the test files in the "test" directory. Mocha will display the test results in the terminal, indicating which tests passed and which ones failed.

![Image Description](https://browserstack.wpenginepowered.com/wp-content/uploads/2022/05/Passed-Test-Result-for-Unit-Test-in-Jest.png)
