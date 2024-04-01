import { useEffect } from "react";
import { Header, Products } from "../components/Index";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FetchProducts } from "../store/ProductsSlice";
const Home = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.ProductsSlice);
  const { categories } = useSelector((state) => state.CategoriesSlice);

  useEffect(() => {
    dispatch(FetchProducts());
  }, [dispatch]);

  const PhoneCategories = products?.products?.filter(
    (product) => product.category == categories[0]
  );
  const LaptopCategories = products?.products?.filter(
    (product) => product.category == categories[1]
  );
  const SkinCareCategories = products?.products?.filter(
    (product) => product.category == categories[3]
  );

  return (
    <>
      <Header Container={Container} />
      <Products
        Container={Container}
        items={products?.products}
        loading={isLoading}
        categories={categories}
        heading="see our products"
      />
      <Products
        Container={Container}
        items={PhoneCategories}
        loading={isLoading}
        heading={categories[0]}
      />
      <Products
        Container={Container}
        items={LaptopCategories}
        loading={isLoading}
        heading={categories[1]}
      />
      <Products
        Container={Container}
        items={SkinCareCategories}
        loading={isLoading}
        heading={categories[3]}
      />
    </>
  );
};

export default Home;
