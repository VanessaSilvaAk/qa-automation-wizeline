import { CREDENTIALS } from '../data/Constants'
import ProductsPage from '../pages/ProductsPage'
import { Selector, t } from 'testcafe'

fixture('Sorting Product Low to High')
    .page `https://www.saucedemo.com/`

test('User can sort prices from lowest to highest price', async t => {
    await ProductsPage.sortProductsLowToHigh(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    
})