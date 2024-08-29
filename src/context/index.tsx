import { createContext, Dispatch, ReactElement, useState } from "react";
import { ProductInterface } from "../interfaces";

type Props = {
  children: ReactElement
};

type Context = {
  count: number,
  setCount: Dispatch<number>,
  isProductDetailOpen: boolean,
  openProductDetail: () => void,
  closeProductDetail: () => void,
  currentProduct: ProductInterface,
  setCurrentProduct: Dispatch<ProductInterface>,
};

export const ShoopingCartContext = createContext<Context>({
  count: 0,
  setCount: () => {},
  isProductDetailOpen: false,
  openProductDetail: () => {},
  closeProductDetail: () => {},
  currentProduct: {} as ProductInterface,
  setCurrentProduct: () => {},
  
});

export const ShoopingCartProvider = ({ children }: Props) => {
  const [count, setCount] = useState<number>(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState<boolean>(false);
  const [currentProduct, setCurrentProduct] = useState<ProductInterface>({} as ProductInterface);

  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  return(
    <ShoopingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        currentProduct,
        setCurrentProduct,
      }}
    >
      {children}
    </ShoopingCartContext.Provider>
  );
}