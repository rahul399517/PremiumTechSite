import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./navbar.css";

import { useSelector } from "react-redux";

import CartCard from "../cards/cartcard";
function TopHeader() {
  // modal for cart
  const [cartshow, setcartShow] = useState(false);

  const handlecartClose = () => setcartShow(false);
  const handlecartShow = () => setcartShow(true);

  //useselector // react hook used to select the data
  const user = useSelector((state) => state.user);
  //dispatcher
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //Logout fuctionality
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch({
      type: "LOGOUT",
    });
    navigate("/login");
  };
  // Modal for prfile pic button
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //profilepage
  const Profilepage = () => {
    navigate("/profilebuyer");
  };
  return (
    <div>
      {/**top nav bar  */}

      {/**bottom nav bar */}
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="black"
        variant="dark"
        style={{ height: "70px", zIndex: "10", backgroundColor: "black" }}
      >
        <Container>
          <Navbar.Brand href="#home">Premium Tech </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            style={{ backgroundColor: "black", width: "100%" }}
          >
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/allproduct">All Product</Nav.Link>
              <NavDropdown title="Categories" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/laptop">
                  Latest Laptops
                </NavDropdown.Item>
                <NavDropdown.Item href="/watches">
                  Latest Watches
                </NavDropdown.Item>
                <NavDropdown.Item href="/tablets">
                  Latest Tablets
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="smartphones">
                  Latest Smart Phones
                </NavDropdown.Item>
                <NavDropdown.Item href="/electronics">
                  Latest Electronics
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav.Item>
              <div className="input-group" style={{ marginTop: "5px" }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-dark"
                  type="button"
                  id="button-addon2"
                >
                  Search
                </button>
              </div>
            </Nav.Item>

            {localStorage.getItem("token") ? (
              <Nav>
                <Nav.Link eventKey={2} href="#memes">
                  <i
                    style={{ marginTop: "20px", color: "yellow" }}
                    className="fa-solid fa-location-dot"
                  >
                    {user.Country}
                  </i>
                </Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  {/*Order division */}

                  <i
                    style={{
                      color: "white",
                      margin: "10px",
                      padding: "10px",
                      cursor: "pointer",
                    }}
                    className="fa-solid fa-truck"
                  ></i>
                </Nav.Link>
                <Nav.Link onClick={handlecartShow}>
                  {" "}
                  {/*Shopping cart division */}
                  <i
                    style={{
                      color: "white",
                      margin: "10px",
                      cursor: "pointer",
                      padding: "10px",
                    }}
                    className="fa-solid fa-cart-shopping "
                  ></i>
                  <Badge bg="danger">9</Badge>
                </Nav.Link>

                <Nav.Link eventKey={2} onClick={handleShow}>
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "30px",
                      marginLeft: "20px",
                      marginTop: "10px",
                    }}
                    src={user.ProfileImg}
                    alt="Profile pic not available"
                  />
                  <p
                    style={{
                      color: "white",
                      display: "inline",
                      fontWeight: "400",
                      fontFamily: "geogria",
                      marginTop: "14px",
                    }}
                  >
                    {" "}
                    {user.FullName}
                  </p>
                </Nav.Link>
              </Nav>
            ) : (
              <Nav.Link eventKey={2} href="/login">
                <p
                  style={{
                    marginLeft: "10px",
                    padding: "10px",
                    height: "30px",
                    color: "white",
                  }}
                >
                  Log In&nbsp;
                  <i
                    style={{ color: "yellow" }}
                    className="fa-solid fa-square-nfi"
                  ></i>
                </p>
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/**Modal for profile pic button */}
      <Modal id="modalglass" show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <button
            onClick={() => Profilepage()}
            className="form-control"
            style={{ border: "none" }}
          >
            <img
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "30px",
              }}
              src={user.ProfileImg}
              alt="Profile pic not available"
            />
            <p style={{ color: "Black", display: "inline", fontstyle: "none" }}>
              {" "}
              {user.FullName}
            </p>
          </button>

          <button
            onClick={() => logout()}
            className="form-control"
            style={{ border: "none" }}
          >
            Log Out
          </button>
        </Modal.Body>
      </Modal>
      {/**cart modal */}
      <Modal fullscreen="xxl-down" show={cartshow} onHide={handlecartClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ textAlign: "center" }}>
            {" "}
            Cart
            {/*Shopping cart division */}
            <i
              style={{
                color: "black",
                margin: "10px",
                cursor: "pointer",
                padding: "10px",
              }}
              className="fa-solid fa-cart-shopping "
            ></i>
            (You have&nbsp;
            <Badge bg="danger">9</Badge> Items in Cart)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CartCard></CartCard>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}

export default TopHeader;
