import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const ProductCard = ({item, ribbonText}) => {
  return (
    <Col xs={12} md={3}>
      <Link
        to={`/product/${item.id}`}
        className="product_card position-relative rounded-1 bg-white"
      >
        {ribbonText && (
          <div className="category position-absolute text-white">
            {item.category}
          </div>
        )}

        <img src={item.thumbnail} alt={item.title} />
        <ul className="product_info list-unstyled d-flex align-items-center justify-content-center flex-column">
          <li className="brand">
            <span className="title">Brand: </span>
            <span className="fs-bold dark_color">{item.brand}</span>
          </li>
          <li className="name dark_color text-center">{item.title}</li>
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
                (item.price * (item.discountPercentage / 100)).toFixed(0)}
            </span>
            <span className="discount_percentage text-danger">
              ({item.discountPercentage}% off)
            </span>
          </li>
        </ul>
      </Link>
    </Col>
  );
};

export default ProductCard;
