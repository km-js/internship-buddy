import { Button, Col, Container, Row } from "react-bootstrap";
import "./Header.css";
import head_rightImg from "../../assets/hero.jpg";
import HeaderFoot from "../HeaderFoot/HeaderFoot";

const Header = () => {
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <div className="head_left">
              <span className="h_subTitle">
                Navigating Your Path to Success
              </span>
              <div className="w-75 mt-2 h_title">
                <h1 style={{ color: "#FB9431" }}>Assured Interviews</h1>
              </div>
              <p className="text-secondary">
                Your go-to platform for unlocking internship opportunities,
                mentorship connections, and career growth.
              </p>
              <div className="d-flex justify-content-between align-items-start w-50 mt-4">
                <Button className="bg_login fw-bold border-0">Start Now</Button>
                <Button className="contact_btn">contact us</Button>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="head_right">
              <div className="imageContainer d-flex justify-content-end align-items-center shadow-sm rounded">
                <img
                  src={head_rightImg}
                  alt="headerr-image"
                  className="head_rightImg"
                />
              </div>
            </div>
          </Col>
        </Row>

        <div className="headerFoot my-4">
          <HeaderFoot />
        </div>
      </Container>
    </div>
  );
};

export default Header;
