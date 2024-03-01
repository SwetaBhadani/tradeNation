
# How to run:
1. From project directory, run the below command to run through headless mode:
  * **npx cypress run**
2. run the below command to run headed mode:
run the below command to run through headless mode:
  * **npx cypress open**
3. To run both test cases and generate report, run the below command
* **npm run html-report**

The project uses cypress-mochawesome-reporter plugin to generate the report.
The existing report can be found in **{project-folder-path}**/tradeNation/cypress/reports/html/index.html

Below is a sample screenshot: 
  ![Screenshot 2024-03-01 at 5 50 24 PM](https://github.com/SwetaBhadani/tradeNation/assets/68321175/728d7ea3-acfa-4da3-afed-4195dbf012c0)


# Test case explanation
## TradeNationHomePage.cy.js
* The test opens https://tradenation.com/en-gb/markets/#forex
* It clicks on the ‘Trade Nation’ logo
* and asserts (as well as **log/print** the title into the console) the title with expected value **'Trade Nation - a broker with a global reach'**

## GoogleInvalidLogin.cy.js 
* The test opens https://tradenation.com/login
* It finds and clicks on the ‘Log In’ button which takes us to the login page
* It then finds and clicks on "Login with Google" button
* And validates the page errors out as forbidden "403" (login with google tries to authenticate user using auth0 which is not supported by scripts and it forbids access)
![Screenshot 2024-03-01 at 6 10 28 PM](https://github.com/SwetaBhadani/tradeNation/assets/68321175/6870ff76-59e9-484c-9b58-23935744f993)


