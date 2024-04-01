import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { MyNavbar } from "../../style/MainStyle.js";
import { UpperNav, MiddleNav } from "../Index.js";
const Navbar = () => {
  return (
    <MyNavbar className="nav_bar py-3 grad_color">
      {/* Upper Navbar */}
      <UpperNav Row={Row} Col={Col} Container={Container} />
      <hr />
      {/* Middle Navbar */}
      <MiddleNav
        Row={Row}
        Col={Col}
        Form={Form}
        Button={Button}
        Container={Container}
      />
      {/* Bottom Navbar */}
      {/* <BottomNav Row={Row} Col={Col} Container={Container} Button={Button} /> */}
    </MyNavbar>
  );
};

export default Navbar;
