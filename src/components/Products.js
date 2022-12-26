import { useEffect, useState } from "react";

import Card from "./UI/Card";

import classes from "./Products.module.css";

function Products() {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div className={classes.products}>
      <h2>Products</h2>
      <div className={classes.container}>
        {!products && <h3>Loading</h3>}
        {products &&
          products.map((data) => (
            <Card
              key={data.id}
              id={data.id}
              title={data.title}
              price={data.price}
              description={data.description}
              image={data.image}
              category={data.category}
              rating={data.rating.rate}
            />
          ))}
      </div>
    </div>
  );
}

export default Products;
