import {
  MagnifyingGlass,
  Handbag,
  List,
  ShoppingCart,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ShowSlider } from "../../store/GlobalSlice.js";
const BottomNav = ({ Row, Col, Form, Button, Container }) => {
  const dispatch = useDispatch();
  const {categories} = useSelector(state => state.CategoriesSlice);
  return (
    <Container>
      <div className="middle_nav mt-3 w-100">
        <Row className="align-items-center">
          {/* Title */}
          <Col md={2}>
            <div className="logo d-flex align-items-center gap-2">
              <button
                className="icon text-white border-0 bg-transparent"
                onClick={() => dispatch(ShowSlider())}
              >
                <List size={20} />
              </button>
              <Link
                to="/"
                className="title text-capitalize text-white d-flex align-items-center gap-1"
              >
                <span className="bag_icon">
                  <Handbag size={20} />
                </span>
                <span>SnapUp</span>
              </Link>
            </div>
          </Col>
          {/* Search Bar */}
          <Col md={10}>
            <div className="wrapper">
              <div className="form d-flex align-items-center gap-4">
                <Form>
                  <Form.Group className="d-flex align-items-center bg-white">
                    <Form.Control
                      type="text"
                      placeholder="Search Product Here... "
                      className="border-0"
                    />
                    <Button className="search_icon bg_color border-0 rounded-0">
                      <MagnifyingGlass color="#fff" size={16} />
                    </Button>
                  </Form.Group>
                </Form>
                <Link to="/cart" className="cart position-relative">
                  <span className="cart_icon">
                    <ShoppingCart size={20} color="#fff" />
                  </span>
                  <span className="count bg-white main_color position-absolute rounded-circle p-1">
                    0
                  </span>
                </Link>
              </div>
              <div className="links mt-3">
                <ul className="d-flex align-items-center gap-3 p-0">
                  {categories?.slice(0,9)?.map((link, i) => {
                    return (
                      <li key={i}>
                        <Link
                          to={`category/${link}`}
                          className="text-capitalize text-white"
                        >
                          {link}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default BottomNav;
