import { XMarkIcon } from "@heroicons/react/24/outline";
import { ProductInterface } from "../../interfaces";
import { useContext } from "react";
import { ShoopingCartContext } from "../../context";

type Props = {
  product: ProductInterface,
  inCart?: boolean,
};

const OrderCard = ({ product, inCart = false }: Props) => {
  const { deleteProductCart } = useContext(ShoopingCartContext);

  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="h-20 w-20">
          <img className="w-full h-full rounded-lg object-contain" src={product.image} alt={product.title} />
        </figure>
        <p className="text-sm font-light">{product.title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${product.price}</p>
        {
          inCart && (<XMarkIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => deleteProductCart(product.id)}
          />)
        }
      </div>
    </div>
  );
}

export default OrderCard;
