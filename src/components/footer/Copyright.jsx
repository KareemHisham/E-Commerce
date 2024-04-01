import Apply_Pay from "../../assets/images/visa_card/apple-pay.png";
import MasterCard from "../../assets/images/visa_card/Icon.png";
import Visa from "../../assets/images/visa_card/visa.png";

const Copyright = ({ Container, Row, Col }) => {
  return (
    <div className="copyright_section">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <div className="copyRights_div text-white">
              &copy; <span id="year">2022</span>, E-commerce Powered by Shopify.
            </div>
          </Col>
          {/* Images */}
          <Col xs={12} md={6}>
            <div className="images d-flex align-items-center justify-content-end gap-2">
              <img src={Apply_Pay} alt="" />
              <img src={MasterCard} alt="" />
              <img src={Visa} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Copyright;
