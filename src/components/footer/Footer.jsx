import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Newsletter, MiddelFooter, Copyright } from "../";
import { MyFooter } from "../../style/MainStyle";
const Footer = () => {
  return (
    <MyFooter className="py-4">
      {/* Newsletter */}
      <Newsletter Form={Form} Button={Button} />
      <hr />
      {/* Middel Footer */}
      <MiddelFooter Container={Container} Row={Row} Col={Col} />
      <hr />
      {/* CopyRight */}
      <Copyright Container={Container} Row={Row} Col={Col} />
    </MyFooter>
  );
};

export default Footer;
