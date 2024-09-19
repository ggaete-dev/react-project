import { ReactNode, useContext } from "react";
import { CheckIcon, PlusIcon } from "@heroicons/react/24/outline";
import { ShoopingCartContext } from "../../context"
import { ProductInterface } from "../../interfaces";

type Props = {
  product: ProductInterface
};

function Card({ product }: Props) {
  const {
    openProductDetail,
    setCurrentProduct,
    addProductToCart,
    openCheckoutSideMenu,
    closeProductDetail,
    closeCheckoutSideMenu,
    cartProducts,
  } = useContext(ShoopingCartContext);

  const { title, price, category, image} = product;

  const addToCart = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    addProductToCart(product);
    openCheckoutSideMenu();
    closeProductDetail();
  }

  const selectProduct = (): void => {
    setCurrentProduct(product);
    openProductDetail();
    closeCheckoutSideMenu();
  };

  const renderIcon = (): ReactNode => {
    const isInCart = cartProducts.some((cartProduct) => product.id === cartProduct.id);
    if (isInCart) {
      return (
        <div
        className="absolute top-0 right-0 flex justify-center items-center bg-black rounded-full w-6 h-6 m-2 border border-black"
      >
        <CheckIcon className="h-5 w-5 text-white" />
      </div>
      );
    }

    return (
      <div
        className="absolute top-0 right-0 flex justify-center items-center bg-white rounded-full w-6 h-6 m-2 border border-black"
        onClick={addToCart}
      >
        <PlusIcon className="h-5 w-5 text-black" />
      </div>
    );
  }

  return (
    <div
      className="bg-white cursor-pointer w-60 h-60 rounded-lg shadow-md hover:opacity-95 mb-4"
      onClick={selectProduct}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 p-1">
          {category}
        </span>
        <img className="w-full h-full object-cover object-top rounded-t-lg" src={image} alt={title} />
        {renderIcon()}
      </figure>
      <p className="flex justify-between items-center px-1">
        <span className="text-sm font-light truncate" title={title}>{title}</span>
        <span className="text-lg font-medium">${price}</span>
      </p>
    </div>
  );
}

export default Card;
