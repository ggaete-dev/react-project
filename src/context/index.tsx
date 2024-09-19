import { createContext, Dispatch, ReactElement, useState } from "react";
import { OrderInterface, ProductInterface } from "../interfaces";
import { totalPrice } from "../utils";

type Props = {
  children: ReactElement
};

type Context = {
  isProductDetailOpen: boolean,
  openProductDetail: () => void,
  closeProductDetail: () => void,
  currentProduct: ProductInterface,
  setCurrentProduct: Dispatch<ProductInterface>,
  cartProducts: ProductInterface[],
  addProductToCart: (product: ProductInterface) => void,
  isCheckoutSideMenuOpen: boolean,
  openCheckoutSideMenu: () => void,
  closeCheckoutSideMenu: () => void,
  deleteProductCart: (id: number) => void,
  createNewOrder: () => void,
  orders: OrderInterface[],
};

export const ShoopingCartContext = createContext<Context>({
  isProductDetailOpen: false,
  openProductDetail: () => {},
  closeProductDetail: () => {},
  currentProduct: {} as ProductInterface,
  setCurrentProduct: () => {},
  cartProducts: [],
  addProductToCart: () => {},
  isCheckoutSideMenuOpen: false,
  openCheckoutSideMenu: () => {},
  closeCheckoutSideMenu: () => {},
  deleteProductCart: () => {},
  createNewOrder: () => {},
  orders: [],
});

export const ShoopingCartProvider = ({ children }: Props) => {
  const [isProductDetailOpen, setIsProductDetailOpen] = useState<boolean>(false);
  const [currentProduct, setCurrentProduct] = useState<ProductInterface>({} as ProductInterface);
  const [cartProducts, setCartProducts] = useState<ProductInterface[]>([]);
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState<boolean>(false);

  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  const addProductToCart = (product: ProductInterface) => {
    setCartProducts([...cartProducts, product]);
  };

  const deleteProductCart = (id: string | number) => {
    const filteredProducts = cartProducts.filter((product) => product.id !== id);
    setCartProducts(filteredProducts);
  };

  const [orders, setOrders] = useState<OrderInterface[]>([])

  const createNewOrder = (): void => {
    if (cartProducts.length === 0) {
      return;
    }

    const newOrder: OrderInterface = {
      id: orders.length,
      products: cartProducts,
      totalPrice: totalPrice(cartProducts),
      date: new Date().toISOString(),
      totalProducts: cartProducts.length,
    };

    setOrders([newOrder, ...orders]);
    setCartProducts([]);
  }

  return(
    <ShoopingCartContext.Provider
      value={{
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        currentProduct,
        setCurrentProduct,
        cartProducts,
        addProductToCart,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        deleteProductCart,
        createNewOrder,
        orders,
      }}
    >
      {children}
    </ShoopingCartContext.Provider>
  );
}