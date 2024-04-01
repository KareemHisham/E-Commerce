import { Container, Table, Button } from "react-bootstrap";
import { Plus, Minus, Trash } from "@phosphor-icons/react";
const Cart = () => {
  return (
    <section className="cart py-4">
      <Container>
        <div className="cart_wrapper">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th className="text-capitlize">product</th>
                <th className="text-capitalize">unit price</th>
                <th className="text-capitalize">quantity</th>
                <th className="text-capitalize">total price</th>
                <th className="text-capitalize">actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>name</td>
                <td>$200</td>
                <td>
                  <div className="qty_wrapper d-flex align-items-center gap-2">
                    <button
                      className="btn btn-sm increament border-0"
                    >
                      <Plus size={16} />
                    </button>
                    <span className="number">1</span>
                    <button className="btn btn-sm decreament border-0">
                      <Minus size={16} />
                    </button>
                  </div>
                </td>
                <td>$200</td>
                <td>
                  <Button
                    variant="outline-danger"
                    className="btn-sm text-capitalize"
                  >
                    delete
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>

          <div className="cart_footer bg-white d-flex align-items-start justify-content-between p-3">
            <Button variant="outline-danger text-capitalize btn-sm">
              <span>
                <Trash size={16} />
              </span>
              <span> clear cart</span>
            </Button>
            <div className="checkout_wrapper">
              <div className="total_price mb-2">
                Total (1 Items):
                <span className="text-danger fw-bold">$200</span>
              </div>
              <button className="btn btn-sm btn-danger text-capitalize w-100">
                checkout
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cart;
