import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';

test.describe('Login — Negative Tests', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('TC-002 Login with empty username', async () => {
    await loginPage.login('', 'admin123');
    const error = await loginPage.getUsernameError();
    expect(error).toContain('Required');
  });

  test('TC-003 Login with empty password', async () => {
    await loginPage.login('Admin', '');
    const error = await loginPage.getPasswordError();
    expect(error).toContain('Required');
  });

  test('TC-004 Login with both fields empty', async () => {
    await loginPage.login('', '');
    const usernameError = await loginPage.getUsernameError();
    const passwordError = await loginPage.getPasswordError();
    expect(usernameError).toContain('Required');
    expect(passwordError).toContain('Required');
  });

  test('TC-005 Login with invalid credentials', async () => {
    await loginPage.login('invaliduser123', 'invalidpass123');
    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Invalid credentials');
  });

  test('TC-006 Login with valid username and wrong password', async () => {
    await loginPage.login('Admin', 'wrongpassword123');
    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Invalid credentials');
  });

});