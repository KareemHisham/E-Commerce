import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
const MiddelFooter = ({ Container, Row, Col }) => {
  return (
    <div className="middle_footer">
      <Container>
        <Row>
          {/* contcat_us */}
          <Col xs={12} sm={6} md={3}>
            <div className="contcat_us">
              <h4 className="title text-capitalize text-white">contact us</h4>
              <ul className="text-white p-0 contact_info">
                <li className="text-capitalize">demo store</li>
                <li>No.1259 freedom, New York</li>
                <li>
                  <a href="tel:+91-232233456" className="text-white">
                    +91-232233456
                  </a>
                </li>
                <li>
                  <a href="mailto:demo@store.com" className="text-white">
                    demo@store.com
                  </a>
                </li>
              </ul>
              {/* social_media */}
              <ul className="social_media d-flex align-items-center justify-content-start gap-3 p-0 mt-3">
                <li>
                  <a href="" className="text-white">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a href="" className="text-white">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="" className="text-white">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="" className="text-white">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
                <li>
                  <a href="" className="text-white">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          {/* Information */}
          <Col xs={12} sm={6} md={3}>
            <div className="information">
              <h4 className="title text-capitalize text-white">information</h4>
              <ul className="p-0">
                <li>
                  <Link to="" className="text-capitalize text-white">
                    privacy policy
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-capitalize text-white">
                    refund policy
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-capitalize text-white">
                    shipping policy
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-capitalize text-white">
                    terms of services
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-capitalize text-white">
                    blogs
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          {/* Quick Links */}
          <Col xs={12} sm={6} md={3}>
            <div className="quick_links">
              <h4 className="title text-capitalize text-white">quick links</h4>
              <ul className="p-0">
                <li>
                  <Link to="" className="text-capitalize text-white">
                    accessories
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-capitalize text-white">
                    laptops
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-capitalize text-white">
                    headphones
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-capitalize text-white">
                    smart watches
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-capitalize text-white">
                    tablets
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          {/* Account */}
          <Col xs={12} sm={6} md={3}>
            <div className="account">
              <h4 className="title text-capitalize text-white">account</h4>
              <ul className="p-0">
                <li>
                  <Link to="" className="text-capitalize text-white">
                    search
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-capitalize text-white">
                    about us
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-capitalize text-white">
                    faq
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-capitalize text-white">
                    contact
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-capitalize text-white">
                    support
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MiddelFooter;
