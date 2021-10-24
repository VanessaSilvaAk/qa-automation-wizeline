import { CREDENTIALS } from '../data/Constants'
import { Selector, t } from 'testcafe'
import LoginPage from '../pages/LoginPage'

class ProductsPage {

  constructor() {
    this.pageTittle = Selector('.header_secondary_container span')
    this.hamburguerMenuButton = Selector('#react-burger-menu-btn')
    this.logoutLink = Selector('#logout_sidebar_link')
    this.sortSelect = Selector('.product_sort_container');
    this.sortOption = this.sortSelect.find('option')
    this.itemPrice = Selector('.inventory_item_price')
  }

  async logout() {
    await t
      .click(this.hamburguerMenuButton)
      .click(this.logoutLink)
  }

  async sortProductsLowToHigh(){
    await t
      .typeText(LoginPage.usernameField, CREDENTIALS.VALID_USER.USERNAME)
      .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)
      .click(LoginPage.loginButton)
      .click(this.sortSelect)
      .click(this.sortOption.withText('Price (high to low)'))
  }

}

export default new ProductsPage()