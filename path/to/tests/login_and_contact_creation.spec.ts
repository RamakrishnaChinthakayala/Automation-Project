import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { ContactPage } from '../pages/contact.page';

test('Login and create a new contact', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const contactPage = new ContactPage(page);

  // Step 1: Input email into the email field
  await loginPage.enterEmail('validemail@example.com');

  // Step 2: Input password into the password field
  await loginPage.enterPassword('validPassword');

  // Step 3: Click the login button
  await loginPage.clickLoginButton();

  // Step 4: Navigate to Contacts page
  await contactPage.navigateToContacts();

  // Step 5: Click the create contact link
  await contactPage.clickCreateContact();

  // Step 6: Input first name into the first name field
  await contactPage.enterFirstName('John');

  // Step 7: Input last name into the last name field
  await contactPage.enterLastName('Doe');

  // Step 8: Input phone number into the phone number field
  await contactPage.enterPhoneNumber('1234567890');

  // Step 9: Select company from the combobox
  await contactPage.selectCompany('Example Company');

  // Step 10: Input email address into the email address field
  await contactPage.enterEmailAddress('john.doe@example.com');

  // Step 11: Click the save button
  await contactPage.clickSaveButton();

  // Verify contact creation
  // Add verification logic here if needed
});
