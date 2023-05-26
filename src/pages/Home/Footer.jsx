import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="py-5 bg-dark text-light">
      <Container>
        <Row>
          <Col md={3}>
            <h2 className="mb-4">About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur elit sed nisi malesuada, eu aliquet odio mollis.
            </p>
          </Col>
          <Col md={3}>
            <h2 className="mb-4">Services</h2>
            <ul className="list-unstyled">
              <li>Web Design</li>
              <li>Graphic Design</li>
              <li>Digital Marketing</li>
            </ul>
          </Col>
          <Col md={3}>
            <h2 className="mb-4">Contact</h2>
            <p>Email: info@example.com</p>
            <p>Phone: +1 123 456 7890</p>
          </Col>
          <Col md={3}>
            <h2 className="mb-4">Follow Us</h2>
            <div className="d-flex">
              <a href="#" className="text-light me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>
        <hr className="my-4 bg-light" />
        <p className="text-center text-gray-400">© 2023 Your Company. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
