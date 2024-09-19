import { useContext } from "react";
import { ShoopingCartContext } from "../../context";
import { XMarkIcon } from "@heroicons/react/24/outline";

import './styles.css';
import OrderCard from "../OrderCard";
import { totalPrice } from "../../utils";
import { Link } from "react-router-dom";

const CheckoutSideMenu = () => {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts, createNewOrder } = useContext(ShoopingCartContext);

  return(
    <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed bg-white right-0 border border-black rounded-lg`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <XMarkIcon
          className="h-6 w-6 text-black cursor-pointer"
          onClick={closeCheckoutSideMenu}
        />
      </div>
      <div className="px-6 overflow-y-auto flex-1">
        {cartProducts.map((product) => <OrderCard key={product.id} product={product} inCart={true}/>)}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">${totalPrice(cartProducts)}</span>
        </p>
        <Link to="/my-order">
          <button
            className="bg-black py-3 text-white w-full rounded-lg"
            onClick={createNewOrder}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
}

export default CheckoutSideMenu;
