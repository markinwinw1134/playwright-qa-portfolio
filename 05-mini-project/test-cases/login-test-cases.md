# Login Test Cases

## Feature: Login

## Objective

Verify that users can log in successfully with valid credentials and cannot log in with invalid, missing, or locked account credentials.

---

## Test Cases

| Test Case ID | Scenario | Preconditions | Test Steps | Test Data | Expected Result | Priority | Automation |
|---|---|---|---|---|---|---|---|
| TC-LOGIN-001 | Login success with valid username and password | User account is active | 1. Open login page<br>2. Enter valid username<br>3. Enter valid password<br>4. Click Login button | Username: valid_user<br>Password: valid_password | User should be logged in successfully and redirected to the dashboard/home page | High | Yes |
| TC-LOGIN-002 | Login failed with invalid password | User account is active | 1. Open login page<br>2. Enter valid username<br>3. Enter invalid password<br>4. Click Login button | Username: valid_user<br>Password: invalid_password | System should display an error message such as "Invalid username or password" | High | Yes |
| TC-LOGIN-003 | Login failed with invalid username | User account does not exist | 1. Open login page<br>2. Enter invalid username<br>3. Enter any password<br>4. Click Login button | Username: invalid_user<br>Password: any_password | System should display an error message such as "Invalid username or password" | High | Yes |
| TC-LOGIN-004 | Required validation when username is empty | User is on login page | 1. Open login page<br>2. Leave username empty<br>3. Enter password<br>4. Click Login button | Username: empty<br>Password: valid_password | System should display required validation message for username | High | Yes |
| TC-LOGIN-005 | Required validation when password is empty | User is on login page | 1. Open login page<br>2. Enter username<br>3. Leave password empty<br>4. Click Login button | Username: valid_user<br>Password: empty | System should display required validation message for password | High | Yes |
| TC-LOGIN-006 | Required validation when username and password are empty | User is on login page | 1. Open login page<br>2. Leave username empty<br>3. Leave password empty<br>4. Click Login button | Username: empty<br>Password: empty | System should display required validation messages for username and password | High | Yes |
| TC-LOGIN-007 | Login failed with locked account | User account is locked | 1. Open login page<br>2. Enter locked username<br>3. Enter password<br>4. Click Login button | Username: locked_user<br>Password: valid_password | System should display locked account message and user should not be able to log in | High | Yes |

---

## Automation Scope

The following login scenarios are suitable for automation:

- Login success
- Invalid username/password
- Required field validation
- Locked account validation

## Notes

Actual username, password, error messages, and redirected page may be adjusted based on the selected demo website or application under test.