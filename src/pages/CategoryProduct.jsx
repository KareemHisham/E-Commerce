import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Row, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FetchProductCategory } from "../store/CategoriesSlice";
import { ProductCard, Spinner } from "../components/Index.js";

const CategoryProduct = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const { productCategories, isLoading } = useSelector(
    (state) => state.CategoriesSlice
  );

  useEffect(() => {
    dispatch(FetchProductCategory(category));
  }, [dispatch, category]);

  return (
    <section className="category_product py-4">
      <Container>
        <h4 className="bg-white p-2 text-capitalize head mb-4">
          see our {category}
        </h4>
        <Row>
          {!isLoading ? (
            productCategories?.products?.map((product) => {
              return <ProductCard item={product} key={product.id} />;
            })
          ) : (
            <Spinner />
          )}
        </Row>
      </Container>
    </section>
  );
};

export default CategoryProduct;
