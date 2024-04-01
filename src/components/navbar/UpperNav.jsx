import { Link } from "react-router-dom";
import { InstagramLogo, FacebookLogo, Question } from "@phosphor-icons/react";
const UpperNav = ({ Col, Row, Container }) => {
  return (
    <Container>
      <div className="upper_nav w-100 text-white">
        <Row>
          {/* Free Shipping */}
          <Col xs={12} md={6}>
            <ul className="list-unstyled d-flex align-items-baseline gap-2">
              <li>
                <Link to="" className="text-capitalize text-white">
                  seller center |
                </Link>
              </li>
              <li>
                <Link to="" className="text-capitalize text-white">
                  download |
                </Link>
              </li>
              <li>
                <div className="text-white d-flex align-items-center gap-2">
                  <span>Follow us on</span>
                  <div className="social_links d-flex align-items-center gap-2">
                    <a href="" className="text-white">
                      <FacebookLogo size={20} />
                    </a>
                    <a href="" className="text-white">
                      <InstagramLogo size={20} />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </Col>
          {/* address */}
          <Col xs={12} md={6}>
            <ul className="list-unstyled d-flex align-items-center justify-content-end gap-2">
              <li>
                <Link
                  to=""
                  className="text-white d-flex align-items-center gap-1"
                >
                  <span className="icon">
                    <Question size={16} />
                  </span>
                  <span className="text-capitalize">support |</span>
                </Link>
              </li>
              <li>
                <Link to="" className="text-capitalize text-white">
                  register |
                </Link>
              </li>
              <li>
                <Link to="" className="text-capitalize text-white">
                  login
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default UpperNav;
