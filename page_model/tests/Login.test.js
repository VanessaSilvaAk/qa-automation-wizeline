import { CREDENTIALS } from '../data/Constants'
import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'

fixture('Login feature testing')
  .page `https://www.saucedemo.com`

test('Users can login using valid credentials', async t => {
  await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)

    await t.expect(ProductsPage.pageTittle.exists).ok()
})

test('Users can\'t login using invalid credentials', async t => {
  await LoginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)

    await t.expect(LoginPage.errorMessage.exists).ok()
    await t.expect(LoginPage.errorMessage.innerText).eql('Epic sadface: Username and password do not match any user in this service')
})

test('Users can logout from product\'s page', async t => {
  await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
  await ProductsPage.logout()

    await t.expect(LoginPage.loginButton.exists).ok()
    await t. expect(LoginPage.loginButton.value).eql('Login')
})