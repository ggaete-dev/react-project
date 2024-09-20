import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import ProductDetail from "../../components/ProductDetail";
import { ProductInterface } from "../../interfaces";
import { useParams } from "react-router-dom";

function Home() {
  const { category } = useParams();

  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [categoryProducts, setCategoryProducts] = useState<ProductInterface[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductInterface[]>([]);
  const [search, setSearch] = useState<string>('');

  const filterProductsBySearch = (search: string, products: ProductInterface[]) => {
    if (!search) {
      return products;
    }

    const searchedProducts = products.filter((product) => product.title.toLowerCase().includes(search));
    return searchedProducts;
  }

  const filterProductsByCategory = (products: ProductInterface[], category: string) => {
    if(!category) {
      return products;
    }

    const parseToUrlString = (string: string) => {
      return string.replace("'", '').replace(' ', '-');
    }

    const categoryProducts = products.filter(
      (product) => parseToUrlString(product.category) === category
    );
    return categoryProducts;
  }

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  useEffect(() => {
    const cleanCategory = category ?? '';
    const categoryProducts = filterProductsByCategory(products, cleanCategory);
    setCategoryProducts(categoryProducts);
  }, [category, products]);

  useEffect(() => {
    const searchedProducts = filterProductsBySearch(search, categoryProducts)
    setFilteredProducts(searchedProducts);
  }, [search, categoryProducts]);

  return(
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input
        className="rounded-lg border border-black w-80 py-1 px-2 mb-6 focus:outline-none"
        type="text"
        placeholder="Search a product"
        onChange={(event) => setSearch(event.target.value.toLowerCase())}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {filteredProducts?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
        <ProductDetail />
      </div>
    </Layout>
  );
}

export default Home;
