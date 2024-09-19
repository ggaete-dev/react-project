export interface ProductInterface {
  id: number,
  title: string,
  price: number,
  image: string,
  category: string,
  description: string,
}

export interface OrderInterface {
  id: number,
  products: ProductInterface[],
  date: string,
  totalProducts: number,
  totalPrice: number,
}
