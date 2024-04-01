import React from "react";
import { ProductSec } from "../../style/MainStyle";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Spinner } from "../Index";
const Products = ({ Container, items, loading, heading }) => {
  const tempProducts = [];
  // Randomizing the Product
  for (let index = 0; index < items?.length; index++) {
    let randomProducts = Math.floor(Math.random() * items?.length);
    if (tempProducts.includes(items[randomProducts])) {
      randomProducts = Math.floor(Math.random() * items?.length);
    }
    tempProducts[index] = items[randomProducts];
  }
  return (
    <ProductSec className="products py-4">
      <Container>
        <h4 className="bg-white p-2 text-capitalize head mb-4">{heading}</h4>
        {loading ? (
          <Spinner />
        ) : (
          <div className="products_wrapper">
            <Row>
              {tempProducts?.map((item) => {
                return (
                  <Col xs={12} md={3} key={item.id}>
                    <Link
                      to={`product/${item.id}`}
                      className="product_card position-relative rounded-1 bg-white"
                    >
                      <div className="category position-absolute text-white">
                        {item.category}
                      </div>
                      <img src={item.thumbnail} alt={item.title} />
                      <ul className="product_info list-unstyled d-flex align-items-center justify-content-center flex-column">
                        <li className="brand">
                          <span className="title">Brand: </span>
                          <span className="fs-bold dark_color">
                            {item.brand}
                          </span>
                        </li>
                        <li className="name dark_color text-center">
                          {item.title}
                        </li>
                        <li className="stock ">
                          <span className="title">Stock: </span>
                          <span className="dark_color">
                            {item.stock === 0 ? "Sold out" : item.stock}
                          </span>
                        </li>
                        <li className="cost d-flex align-items-start gap-2">
                          <span className="price text-decoration-line-through">
                            ${item.price}
                          </span>
                          <span className="discount">
                            $
                            {item.price -
                              (item.price *
                                (item.discountPercentage / 100)).toFixed(0)}
                          </span>
                          <span className="discount_percentage text-danger">
                            ({item.discountPercentage}% off)
                          </span>
                        </li>
                      </ul>
                    </Link>
                  </Col>
                );
              })}
            </Row>
          </div>
        )}
      </Container>
    </ProductSec>
  );
};

export default Products;
