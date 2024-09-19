import { useContext } from "react";
import Layout from "../../components/Layout";
import { ShoopingCartContext } from "../../context";
import OrdersCard from "../../components/OrdersCard";
import { Link } from "react-router-dom";

function MyOrders() {
  const { orders } = useContext(ShoopingCartContext);

  return(
    <Layout>
      <div className="flex w-80 items-center relative justify-center mb-6">
        <h1 className="font-medium text-xl">
          My Orders
        </h1>
      </div>
      <div>
        {orders.map((order) => (
          <Link key={order.id} to={`/my-order/${order.id}`}>
            <OrdersCard key={order.id} order={order} />
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export default MyOrders;