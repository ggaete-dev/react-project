import { ProductInterface } from "../interfaces";

/**
 * Calculate total price for a products list
 * @param {ProductInterface[]} products An array of products
 * @returns {Number} The total price of all products
 */
export function totalPrice(products: ProductInterface[]): number {
  return products.reduce((sum, product) => product.price + sum, 0)
}