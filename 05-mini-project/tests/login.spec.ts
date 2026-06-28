import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Feature', () => {
  test('TC-LOGIN-001: Login success with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await loginPage.expectLoginSuccess();
  });

  test('TC-LOGIN-002: Login failed with invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'wrong_password');

    await loginPage.expectErrorMessage('Username and password do not match');
  });

  test('TC-LOGIN-003: Login failed with locked account', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');

    await loginPage.expectErrorMessage('Sorry, this user has been locked out');
  });

  test('TC-LOGIN-004: Login failed when username is required', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.fillPassword('secret_sauce');
    await loginPage.clickLogin();

    await loginPage.expectErrorMessage('Username is required');
  });

  test('TC-LOGIN-005: Login failed when password is required', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.fillUsername('standard_user');
    await loginPage.clickLogin();

    await loginPage.expectErrorMessage('Password is required');
  });
});