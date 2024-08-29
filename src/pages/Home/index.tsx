import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import ProductDetail from "../../components/ProductDetail";
import { ProductInterface } from "../../interfaces";

function Home() {
  const [products, setItems] = useState<ProductInterface[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return(
    <Layout>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
        <ProductDetail />
      </div>
    </Layout>
  );
}

export default Home;
