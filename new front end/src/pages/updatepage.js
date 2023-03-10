import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useState } from "react";
function UpdateAddressPage() {
  //setting up use state
  const [FullName, SetFullName] = useState("");
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  //const [ProfileImg, SetProfileImg] = useState("");
  const [City, SetCity] = useState("");
  const [HomeAddress, SetHomeAddress] = useState("");
  const [State, SetState] = useState("");
  const [Country, SetCountry] = useState("");
  const [Pin, SetPin] = useState("");
  const [Loading, SetLoading] = useState(false);
  //Update API call
  const updatedata = async () => {
    console.warn(
      FullName,
      Email,
      Password,
      City,
      State,
      HomeAddress,
      Country,
      Pin
    );
  };
  return (
    <div
      className="Container shadow-lg"
      //style={{ marginLeft: "100px", marginRight: "100px", marginTop: "10px" }}
    >
      <Card>
        <Card.Header>
          <b>Update Details</b>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={(e) => updatedata(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                //value={FullName}
                //onChange={(ev) => SetFullName(ev.target.value)}
                type="text"
                placeholder="Enter New FullName"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                //value={Email}
                //onChange={(ev) => SetEmail(ev.target.value)}
                type="email"
                placeholder="New E mail"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                // value={Password}
                //onChange={(ev) => SetPassword(ev.target.value)}
                type="password"
                placeholder=" New Password"
              />
            </Form.Group>

            <p
              style={{
                textAlign: "center",
                fontWeight: "500",
                fontFamily: "georgia",
              }}
            >
              Address
            </p>
            <p
              style={{
                textAlign: "center",
                fontWeight: "500",
                fontFamily: "georgia",
                color: "blue",
                fontSize: "small",
                marginTop: "-20px",
              }}
            >
              Relax you can update Address later
            </p>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>City/Town/village</Form.Label>
              <Form.Control
                // value={City}
                //onChange={(ev) => SetCity(ev.target.value)}
                type="text"
                placeholder=" Change City/Town/village"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Appartment/Suite//Home Address</Form.Label>
              <Form.Control
                // value={HomeAddress}
                //onChange={(ev) => SetHomeAddress(ev.target.value)}
                type="text"
                placeholder="Change Appartment/Suite//Home Address"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>State/Province</Form.Label>
              <Form.Control
                // value={State}
                // onChange={(ev) => SetState(ev.target.value)}
                type="text"
                placeholder="Change State/Province"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Country</Form.Label>
              <Form.Control
                // value={Country}
                // onChange={(ev) => SetCountry(ev.target.value)}
                type="text"
                placeholder=" Change Country"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Pin/Zip/Postal code</Form.Label>
              <Form.Control
                // value={Pin}
                // onChange={(ev) => SetPin(ev.target.value)}
                type="text"
                placeholder="Change Pin/Zip/Postal code"
              />
            </Form.Group>
            <Button
              className="form-control btn btn-primary"
              variant="primary"
              type="submit"
            >
              Update Details
            </Button>
            {/**SPINNER start -- taken from bootstrap*/}
            <br></br>
            {/** {Loading ? (
                <div className="row">
                  <div className="col-sm-12 m-2">
                    <>
                      <Button variant="black" disabled>
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Loading...</span>
                      </Button>{" "}
                      <Button variant="black" disabled>
                        <img
                          style={{ width: "100px", height: "30px" }}
                          src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif"
                        ></img>
                      </Button>
                    </>
                  </div>
                </div>
              ) : (
                ""
              )} */}
            {/**Spinner End */}
          </Form>
          <hr></hr>
          <p style={{ textAlign: "center", fontweight: "400" }}>Or</p>
          <hr></hr>
          <span className="text-muted fs-6">Go Back to </span>
          <Link to="/profilebuyer" className="ms-1 text-info fw-bold">
            Profile page
          </Link>
          <br></br>
          <span className="text-muted fs-6">Want to sell ?</span>
          <Link to="/loginseller" className="ms-1 text-danger fw-bold ">
            Go To Seller profile page
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
export default UpdateAddressPage;
