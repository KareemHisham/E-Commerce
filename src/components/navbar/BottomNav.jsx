import { NavLink, Link } from "react-router-dom";
import { CaretDown } from "@phosphor-icons/react";
// import { useSelector, useDispatch } from "react-redux";
// import { ShowDropMenu, closeDropMenu } from "../../store/GlobalSlice";
import { useEffect, useRef } from "react";

const BottomNav = ({ Row, Col, Container, Button }) => {
  const { isShow } = useSelector((state) => state.GlobalSlice);
  const dispatch = useDispatch();
  let menuRef = useRef()

  useEffect(() => {
    let handler = (e) => {
        if(!menuRef.current.contains(e.target)) {
            dispatch(closeDropMenu());
        }
    };
    document.addEventListener("mousedown", handler);

    return ()=>{
        document.removeEventListener("mousedown", handler)
    }
  }, [isShow]);
  return (
    <Container>
      <div className="bottom_nav mt-3 w-100">
        <Row className="align-items-center">
          {/* Drop menu */}
          <Col md={3}>
            <div className="drop_menu position-relative">
              <Button
                className="text-capitalize bg-transparent border-0 d-flex align-items-center gap-5 p-0"
                ref={menuRef}
                onClick={() => dispatch(ShowDropMenu())}
              >
                <span>shop categories</span>
                <span className="icon">
                  <CaretDown size={16} />
                </span>
              </Button>
              <ul
                className={`position-absolute rounded-2 p-3 ${
                  isShow && "show"
                }`}
              >
                <li>
                  <Link to="" className="text-capitalize">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-capitalize">
                    Products
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          {/* Bottom Links */}
          <Col md={6}>
            <ul className="main_links d-flex align-items-center gap-3">
              <NavLink to="/" className="text-capitalize text-white">
                home
              </NavLink>
              <NavLink to="/" className="text-capitalize text-white">
                our store
              </NavLink>
              <NavLink to="/" className="text-capitalize text-white">
                blogs
              </NavLink>
              <NavLink to="/" className="text-capitalize text-white">
                contact
              </NavLink>
            </ul>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default BottomNav;
