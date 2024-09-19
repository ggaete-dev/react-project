import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { OrderInterface } from "../../interfaces";

type Props = {
    order: OrderInterface
};

const OrdersCard = ({ order }: Props) => {
  return(
    <div className="flex justify-between items-center mb-3 border border-black rounded-lg p-4 w-80">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light">{order.date.slice(0,10)}</span>
          <span className="font-light">{order.totalProducts} articles</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-medium text-2xl">
            ${order.totalPrice}
          </span>
          <ChevronRightIcon className="text-black h-6 w-6 cursor-pointer" />
        </p>
      </div>
    </div>
  );
}

export default OrdersCard;
