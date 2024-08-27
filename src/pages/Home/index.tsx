import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Layout from "../../components/Layout";

type Item = {
  id: number,
  title: string,
  category: {
    name: string
  },
  price: number,
  images: string[],
};

function Home() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const cleanUrl = (url: string) => url.replace('["', '').replace('"]', '');

  return(
    <Layout>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card
            key={item.id}
            name={item.title}
            category={item.category.name}
            price={item.price}
            image={cleanUrl(item.images[0])}
          />
        ))}
      </div>
    </Layout>
  );
}

export default Home;
