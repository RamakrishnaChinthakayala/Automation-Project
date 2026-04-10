class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async enterEmail(email) {
    await this.page.getByRole('textbox', { name: 'Email' }).fill(email);
  }

  async enterPassword(password) {
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
  }

  async clickLoginButton() {
    await this.page.getByText('Login').click();
  }
}

module.exports = LoginPage;