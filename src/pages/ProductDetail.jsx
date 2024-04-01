import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FetchProduct, decreament, increament,addToCart } from "../store/ProductsSlice";
import { Spinner } from "../components/Index";
import { ShoppingCart, Plus, Minus } from "@phosphor-icons/react";
import { Row, Col, Container } from "react-bootstrap";
import { MyProduct } from "../style/MainStyle";
const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  let { productDetails, isLoading, count, msgError } = useSelector(
    (state) => state.ProductsSlice
  );

  // console.log({productDetails})

  const handleChange = (i) => {
    document
      .querySelector(".Product_details .images .main_img img")
      .setAttribute("src", i);
  };

  useEffect(() => {
    dispatch(FetchProduct(id));
  }, [dispatch]);
  return (
    <MyProduct className="Product_details py-5 position-relative">
      {isLoading ? (
        <Spinner />
      ) : (
        <Container>
          <div className="product_wrapper">
            <Row>
              {/* Images */}
              <Col>
                <div className="images">
                  <div className="main_img mb-3 d-flex align-items-center justify-content-center">
                    <img
                      src={productDetails.thumbnail}
                      alt={productDetails.title}
                    />
                  </div>
                  <div className="other_imgs d-flex align-items-start">
                    <ul className="list-unstyled d-flex align-items-start gap-3">
                      {productDetails?.images?.map((image, index) => {
                        return (
                          <li key={index}>
                            <img
                              src={image}
                              alt={productDetails.title}
                              loading="lazy"
                              onClick={() => handleChange(image)}
                            />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </Col>
              {/* product_content */}
              <Col>
                <div className="product_content">
                  <div className="product_name fw-bold dark_color">
                    {productDetails.title}
                  </div>
                  <div className="product_description text-muted">
                    {productDetails.description}
                  </div>
                  <ul className="list-unstyled d-flex align-items-start gap-3 my-2">
                    <li>
                      <span className="rating text-capitalize text-danger">
                        rating:
                      </span>
                      <span>{productDetails.rating}</span>
                    </li>
                    |
                    <li>
                      <span className="brand text-capitalize text-danger">
                        brand:
                      </span>
                      <span>{productDetails.brand}</span>
                    </li>
                    |
                    <li>
                      <span className="category text-capitalize text-danger">
                        category:
                      </span>
                      <span>{productDetails.category}</span>
                    </li>
                  </ul>
                  {/* price-wrapper */}
                  <div className="price_wrapper">
                    {/* old_price */}
                    <div className="old_price d-flex align-items-baseline gap-1">
                      <span className="text-muted text-decoration-line-through">
                        ${productDetails.price}
                      </span>
                      <span>(Inclusive of all taxes)</span>
                    </div>
                    {/* discount_price */}
                    <div className="discount_price d-flex align-items-baseline gap-1 my-2">
                      <span className="main_color fw-bold">
                        $
                        {productDetails?.price -
                          (
                            productDetails?.price *
                            (productDetails?.discountPercentage / 100)
                          )?.toFixed(0)}
                      </span>
                      <span className="discount_percentage bg_color text-white badge ">
                        {productDetails?.discountPercentage?.toFixed(0)}%
                        <strong>off</strong>
                      </span>
                    </div>
                  </div>
                  {/* purchase_product */}
                  <div className="purchase_product">
                    <div className="quantity d-flex align-items-center gap-2">
                      <span className="text-capitalize">quantity:</span>
                      {productDetails.stock === 0 ? (
                        <div className="alert alert-warning text-capitalize">
                          Sold out
                        </div>
                      ) : (
                        <div className="count d-flex align-items-center gap-2">
                          <button
                            className="btn btn-sm increament"
                            onClick={() => dispatch(increament())}
                          >
                            <Plus size={16} />
                          </button>
                          <span className="number">{count}</span>
                          <button
                            className="btn btn-sm decreament"
                            onClick={() => dispatch(decreament())}
                          >
                            <Minus size={16} />
                          </button>
                        </div>
                      )}
                    </div>
                    {msgError && (
                      <div className="alert alert-warning text-capitalize msgError">
                        You exceed the stock
                      </div>
                    )}
                    <div className="btns mt-4 d-flex align-items-start gap-3">
                      <button
                        className="btn cart_btn d-flex align-items-center gap-1"
                        onClick={() => dispatch(addToCart({productDetails,count}))}
                      >
                        <span>
                          <ShoppingCart size={20} />
                        </span>
                        <span className="text-capitalize">add to cart</span>
                      </button>
                      <button className="btn bg_color text-white buy_btn">
                        buy now
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      )}
    </MyProduct>
  );
};

export default ProductDetail;
