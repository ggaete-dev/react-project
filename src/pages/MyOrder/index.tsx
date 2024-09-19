import { useContext } from "react";
import Layout from "../../components/Layout";
import { ShoopingCartContext } from "../../context";
import OrderCard from "../../components/OrderCard";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Link, useParams } from "react-router-dom";

function MyOrder() {
  const { orders } = useContext(ShoopingCartContext);
  const { id } = useParams();
  const orderId = Number(id); 
  const order = !isNaN(orderId) ? orders.find((order) => order.id === orderId) : orders[0];

  return(
    <Layout>
      <div className="flex w-80 items-center relative justify-center mb-6">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer"/>
        </Link>
        <h1>
          My Order
        </h1>
      </div>
      <div className="flex flex-col w-80">
        {order?.products.map((product) => <OrderCard key={product.id} product={product}/>)}
      </div>
    </Layout>
  );
}

export default MyOrder;