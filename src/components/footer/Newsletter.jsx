import NewsLetterImg from "../../assets/images/newsletter.png";

const Newsletter = ({ Form,Button }) => {
  return (
    <div className="newsletter d-flex align-items-center justify-content-around">
      {/* head */}
      <div className="head d-flex align-items-center gap-2">
        <img src={NewsLetterImg} alt="" />
        <h4 className="text-capitalize text-white mb-0">
          sign up for newsletter
        </h4>
      </div>
      {/* Form */}
      <Form>
        <Form.Group className="d-flex align-items-center bg-white rounded-2 form-group px-2" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Your Email..." className="border-0" />
          <Button className="text-uppercase text-white bg_petroleum border-0 btn-sm">subscribe</Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Newsletter;
