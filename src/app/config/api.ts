import { environment } from "src/environments/environment";


export const baseUrl = environment.production ? '' : 'http://localhost:5000'
export const productUrl = baseUrl+'/products'
export const categoryUrl = baseUrl+'/category'
export const productUrlWithId = productUrl+'/'
export const cartUrl = baseUrl+'/cart'
export const wishListUrl = baseUrl+'/wishlist'

// export const baseUrl = environment.production ? '' : 'https://bharanidharan2k.github.io/shopping-cart-json-api'
// export const productUrl = 'https://bharanidharan2k.github.io/shopping-cart-json-api/products.json'
// export const cartUrl = 'https://bharanidharan2k.github.io/shopping-cart-json-api/cart.json'