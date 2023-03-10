import "../components/footer.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Nav from "react-bootstrap/Nav";
function Footer() {
  return (
    <div id="footer">
      <div className="backtotop">
        <div
          className="col-sm-12"
          style={{
            backgroundColor: "black",
            color: "black",
            textAlign: "center",
          }}
        >
          <a style={{ color: "white", fontStyle: "none" }} href="#">
            Go Back To Top
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-3">
          <ul>
            <h6 style={{ fontFamily: "gerogia", textAllign: "centre" }}>
              <u>Category</u>
            </h6>
            <li>
              <p
                style={{
                  fontFamily: "gerogia",
                  textAllign: "centre",
                  textDecoration: "none",
                  listStyleType: "none",
                }}
              >
                <a style={{ color: "white" }} href="/laptop">
                  Laptop
                </a>
              </p>
            </li>
            <li>
              <p
                style={{
                  fontFamily: "gerogia",
                  textAllign: "centre",
                  textDecoration: "none",
                }}
              >
                <a style={{ color: "white" }} href="/tablets">
                  Tablets
                </a>
              </p>
            </li>
            <li>
              <p
                style={{
                  fontFamily: "gerogia",
                  textAllign: "centre",
                  textDecoration: "none",
                }}
              >
                <a style={{ color: "white" }} href="/watches">
                  watches
                </a>
              </p>
            </li>
            <li>
              <p
                style={{
                  fontFamily: "gerogia",
                  textAllign: "centre",
                  textDecoration: "none",
                }}
              >
                <a style={{ color: "white" }} href="/smartphones">
                  Smart Phones
                </a>
              </p>
            </li>
            <li>
              <p
                style={{
                  fontFamily: "gerogia",
                  textAllign: "centre",
                  textDecoration: "none",
                }}
              >
                <a style={{ color: "white" }} href="/electronics">
                  Electronic
                </a>
              </p>
            </li>
          </ul>
        </div>

        <div className="col-sm-3">
          <ul>
            <h6 style={{ fontFamily: "gerogia", textAllign: "centre" }}>
              <u>Reach us at : </u>
            </h6>
            <li>
              <p
                style={{
                  fontFamily: "gerogia",
                  textAllign: "centre",
                  textDecoration: "none",
                }}
              >
                <i
                  style={{ color: "white" }}
                  className="fa-brands fa-instagram"
                ></i>
              </p>
            </li>
            <li>
              <p
                style={{
                  fontFamily: "gerogia",
                  textAllign: "centre",
                  textDecoration: "none",
                }}
              >
                <i
                  style={{ color: "white" }}
                  className="fa-brands fa-facebook"
                ></i>
              </p>
            </li>
            <li>
              <p
                style={{
                  fontFamily: "gerogia",
                  textAllign: "centre",
                  textDecoration: "none",
                }}
              >
                <i
                  style={{ color: "white" }}
                  className="fa-brands fa-twitter"
                ></i>
              </p>
            </li>
            <li>
              <p
                style={{
                  fontFamily: "gerogia",
                  textAllign: "centre",
                  textDecoration: "none",
                }}
              >
                <i
                  style={{ color: "white" }}
                  className="fa-brands fa-tumblr"
                ></i>
              </p>
            </li>
          </ul>
        </div>

        <div className="col-sm-6">
          <ul>
            <h6 style={{ fontFamily: "gerogia", textAllign: "centre" }}>
              <u>
                {" "}
                <br></br>
                <InputGroup className="mb-3" style={{ width: "80%" }}>
                  <Form.Control
                    placeholder="search"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Text
                    id="basic-addon2"
                    className="btn btn-primary"
                  >
                    Search
                  </InputGroup.Text>
                </InputGroup>
              </u>
            </h6>
            <li>
              <p
                style={{
                  fontFamily: "gerogia",
                  textAllign: "centre",
                  textDecoration: "none",
                }}
              >
                Careers
              </p>
            </li>
            <li>
              <p
                style={{
                  fontFamily: "gerogia",
                  textAllign: "centre",
                  textDecoration: "none",
                }}
              >
                Affilate program
              </p>
            </li>
            <li>
              <p
                style={{
                  fontFamily: "gerogia",
                  textAllign: "centre",
                  textDecoration: "none",
                }}
              >
                Vouchers
              </p>
            </li>
            <li>
              <p
                style={{
                  fontFamily: "gerogia",
                  textAllign: "centre",
                  textDecoration: "none",
                }}
              >
                People
              </p>
            </li>
          </ul>
        </div>

        <div className="row">
          <div className="col-sm-12">
            &copy;copyright E-commerce @Premium tech 2023-24
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
