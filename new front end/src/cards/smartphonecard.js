import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { useSelector } from "react-redux";
import { API_BASE_URL } from "../config";
import axios from "axios";
import { useEffect } from "react";

function SmartPhoneCard(props) {
  //creating review section
  const [allreview, setAllreview] = useState(false);
  const [reviewBox, setReviewBox] = useState(false);
  const [review, setReview] = useState("");
  const submitreview = async (productId) => {
    setReviewBox(false);
    const request = { productId: productId, reviewText: review };
    const response = await axios.put(
      `${API_BASE_URL}/review`,
      request,
      CONFIG_OBJ
    );
    if (response.status === 200) {
      props.GetAllSmartPhones();
    }
  };
  //creating config_obj to configure the authorized user
  const CONFIG_OBJ = {
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  //useselector // react hook used to select the data
  const user = useSelector((state) => state.user);
  //vertical centerd modal  for product detail
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //vertical centerd modal for placeorder
  const [BuyNowshow, setBuyNowShow] = useState(false);

  const handleBuyNowClose = () => setBuyNowShow(false);
  const handleBuyNowShow = () => setBuyNowShow(true);
  //likes
  const likeDislikeproduct = async (productId, type) => {
    const request = { productId: productId };
    const response = await axios.put(
      `${API_BASE_URL}/${type}`,
      request,
      CONFIG_OBJ
    );
    if (response.status === 200) {
      props.GetAllSmartPhones();
      console.log(props.productData.author.profileImg);
    }
  };
  //console.log(user._id);
  //console.log(props.postData.author);
  useEffect(() => {}, []);
  return (
    <div>
      <Card onClick={handleShow} style={{ height: "300px" }}>
        {/**here setmodalshow will show modal on click */}
        <p style={{ textAlign: "center" }}>
          <h6>
            Exclusive on PremiumTech<Badge bg="danger">New</Badge>
          </h6>
        </p>
        <Card.Img
          variant="top"
          src={props.productData.Image}
          style={{ marginTop: "-15px", width: "100%", height: "200px" }}
        />

        <Card.Title>
          <p style={{ textAlign: "center", fontWeight: "400" }}>
            {props.productData.ProductName}
          </p>
          <p
            className="small "
            style={{
              fontSize: "small",
              textAlign: "left",
              fontWeight: "400",
              display: "inline",
              paddingLeft: "0px",
            }}
          >
            <i className="fa-solid fa-star" style={{ color: "yellow" }}></i> (
            {props.productData.likes.length}
            ratings)
          </p>
          <p
            style={{
              fontSize: "medium",
              fontWeight: "400",
              float: "right",
              marginRight: "10px",
              display: "inline",
            }}
          >
            $ {props.productData.Cost}
          </p>
        </Card.Title>
      </Card>

      {/**Modal for Product  detail */}
      <Modal
        fullscreen="xxl-down"
        show={show}
        onHide={handleClose}
        keyboard={false}
      >
        <Modal.Body>
          {/**product detail model */}
          <div className="row">
            <div className="col-md-5 col-sm-12">
              <img
                style={{ width: "100%", height: "auto" }}
                src={props.productData.Image}
                alt="Not available"
              />
            </div>
            <div className="col-md-4 col-sm-12">
              <Card className="shadow mt-3 m-1">
                <p style={{ color: "blue", marginLeft: "10px" }}>
                  Seller : {props.productData.author.FullName}
                </p>
                <h5 style={{ textAlign: "center" }}>
                  {props.productData.ProductName}
                </h5>
                <p
                  className="small "
                  style={{
                    fontSize: "large",
                    textAlign: "left",
                    fontWeight: "400",
                    display: "inline",
                    paddingLeft: "10px",
                  }}
                >
                  Love our Products,Click on star ,
                  <i
                    onClick={() =>
                      likeDislikeproduct(props.productData._id, "like")
                    }
                    className="fa-solid fa-star shadow"
                    style={{ color: "yellow", cursor: "pointer" }}
                  ></i>{" "}
                  ({props.productData.likes.length} ratings){" "}
                </p>
                <h5>
                  <Badge style={{ marginLeft: "10px" }} bg="info">
                    #1 Best Seller
                  </Badge>
                </h5>
                <hr></hr>
                <p
                  style={{
                    fontSize: "Medium",
                    textAlign: "left",
                    fontWeight: "bold",
                    display: "inline",
                    paddingLeft: "10px",

                    marginLeft: "10px",
                  }}
                >
                  {" "}
                  Price{" "}
                  <p
                    style={{
                      display: "inline",
                      fontSize: "large",
                      color: "red",
                    }}
                  >
                    ${props.productData.Cost}
                  </p>
                </p>
                {/* <select
                  className="form-control shadow"
                  style={{
                    width: "50%",
                    border: "1px solid gray",
                    marginLeft: "10px",
                  }}
                  placeholder="Select Size"
                >
                  <option>Select Size</option>
                  <option>small </option>
                  <option>Medium </option>
                  <option>Large </option>
                  <option>XL </option>
                  <option>XXL </option>
                </select>*/}
                <hr></hr>
                <h4>
                  <Badge style={{ marginLeft: "10px" }} bg="warning">
                    Brand
                  </Badge>
                  &nbsp;&nbsp;&nbsp;{props.productData.Brand}
                </h4>
                <ul>
                  <li>
                    <i
                      style={{ color: "green" }}
                      className="fa-solid fa-circle-check"
                    ></i>
                    &nbsp;&nbsp; 88% positive ratings from 100K+ customers
                  </li>
                  <li>
                    <i
                      style={{ color: "green" }}
                      className="fa-solid fa-circle-check"
                    ></i>
                    &nbsp;&nbsp; 100K+ recent orders from this brand
                  </li>
                  <li>
                    <i
                      style={{ color: "green" }}
                      className="fa-solid fa-circle-check"
                    ></i>
                    &nbsp;&nbsp; 8+ years on Premium tech
                  </li>
                  <li>
                    <i
                      style={{ color: "green" }}
                      className="fa-solid fa-circle-check"
                    ></i>
                    &nbsp;&nbsp; Verified Seller
                  </li>
                  <li>
                    <i
                      style={{ color: "green" }}
                      className="fa-solid fa-circle-check"
                    ></i>
                    &nbsp;&nbsp; @ Quality Products
                  </li>
                </ul>
              </Card>
            </div>
            <div className="col-md-3 col-sm-12">
              <Card className="shadow mt-3 p-2">
                <p
                  style={{
                    fontSize: "Medium",
                    textAlign: "left",
                    fontWeight: "bold",
                    display: "inline",
                    paddingLeft: "10px",

                    marginLeft: "10px",
                  }}
                >
                  {" "}
                  Price{" "}
                  <p
                    style={{
                      display: "inline",
                      fontSize: "large",
                      color: "red",
                    }}
                  >
                    ${props.productData.Cost}
                  </p>
                </p>
                <p style={{ color: "green", fontSize: "small" }}>
                  FREE delivery Sunday, 26 February. Order within 12 hrs 17
                  mins. Details
                </p>
                <p
                  style={{
                    color: "blue",
                    fontSize: "large",
                    textAlign: "center",
                  }}
                >
                  In Stock
                </p>
                <p
                  style={{
                    color: "black",
                    fontSize: "small",
                    textAlign: "center",
                    marginTop: "-20px",
                  }}
                >
                  Sold by {props.productData.Brand} and Fulfilled by{" "}
                  {props.productData.author.FullName}.
                </p>
                <button className="form-control btn btn-warning">
                  Add To Cart
                </button>
                <br></br>

                <button
                  onClick={handleBuyNowShow}
                  className="form-control btn btn-danger"
                >
                  Buy Now
                </button>

                <p
                  style={{
                    color: "purple",
                    fontSize: "small",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  <i className="fa-solid fa-lock"></i>&nbsp;Secure transaction
                </p>
              </Card>
              <Card className="shadow mt-3 p-2">
                {/**First slide advertisment */}
                <Carousel style={{ width: "100%", display: "inlineBlock" }}>
                  <Carousel.Item interval={1000}>
                    <img
                      style={{ width: "450px", height: "210px", float: "left" }}
                      src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/86117e9d-4079-4231-9854-21bbc04852d0._CR0,0,1200,628_SX460_QL70_.png"
                      alt="Advertisement here"
                    ></img>
                  </Carousel.Item>
                  <Carousel.Item interval={500}>
                    <img
                      style={{ width: "450px", height: "210px", float: "left" }}
                      src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/1d3109c1-b616-4519-813d-5ab3907c9fef._CR0,0,1200,628_SX460_QL70_.jpg"
                      alt="Advertisement here"
                    ></img>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{ width: "450px", height: "210px", float: "left" }}
                      src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/c4b70438-7f2b-4e61-a5bd-f9d34145e3f6._CR0,0,1200,628_SX460_QL70_.jpg"
                      alt="Advertisement here"
                    ></img>
                  </Carousel.Item>
                </Carousel>
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <Card>
                <Card.Title>Product Details </Card.Title>
                <Card.Text style={{ color: "blue" }}>
                  {props.productData.Description}
                </Card.Text>
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Card className="shadow mt-3 p-2">
                <p
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "royalblue",
                    display: "inline-block",
                  }}
                >
                  Reviews
                </p>

                <hr></hr>

                <button
                  onClick={() => setReviewBox(true)}
                  className="form-control btn btn-danger"
                  id="lovecommentsharebutton"
                >
                  Add Review <i className="fa-regular fa-comment"></i>
                </button>
                {/**comment box text area*/}
                <br></br>
                {reviewBox ? (
                  <div className="row">
                    <div className="col-10">
                      <div className="form-floating mb-3">
                        <input
                          onChange={(e) => setReview(e.target.value)}
                          type="text"
                          className="form-control"
                          id="floatingInput"
                          style={{
                            height: "25px",
                            marginLeft: "5px",
                            border: "1px solid orange",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-2 ">
                      <button
                        onClick={() => {
                          submitreview(props.productData._id);
                          setAllreview(true);
                        }}
                        className="form-control btn btn-warning"
                        id="lovecommentsharebutton"
                        style={{ marginLeft: "-20px" }}
                      >
                        <i className="fa-solid fa-location-arrow"></i>
                      </button>
                    </div>
                    <p
                      style={{
                        fontSize: "small",
                        marginLeft: "15px",
                        cursor: "pointer",
                      }}
                      className="small mx-1"
                      onClick={() => setReviewBox(false)}
                    >
                      Close Reviews Box
                    </p>
                  </div>
                ) : (
                  ""
                )}
                {/*View all review */}
                <div className="row">
                  <div className="col-sm-12">
                    <button
                      onClick={() => setAllreview(true)}
                      className="formo-control"
                      style={{
                        border: "none",
                        backgroundColor: "white",
                        marginTop: "-20px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "small",
                          marginLeft: "15px",
                          fontWeight: "600",
                        }}
                      >
                        view all review
                      </p>
                    </button>
                  </div>
                </div>
                {/*all comment devision*/}
                {allreview ? (
                  <>
                    {props.productData.review
                      .map((review) => {
                        return (
                          <div className="row" key={review._id}>
                            <div className="col-12">
                              <p style={{ fontWeight: "500" }}>
                                {review._id} says -:
                                {review.reviewText}
                              </p>
                            </div>
                          </div>
                        );
                      })
                      .reverse()}
                    <p
                      style={{
                        fontSize: "small",
                        marginLeft: "15px",
                        cursor: "pointer",
                      }}
                      className="small mx-1"
                      onClick={() => setAllreview(false)}
                    >
                      Close review
                    </p>
                  </>
                ) : (
                  ""
                )}
              </Card>
            </div>
          </div>
          <div style={{ marginTop: "10px" }}>
            <div className="row">
              <div className="col-md-4">
                {/**First slide advertisment */}
                <Carousel style={{ width: "100%", display: "inlineBlock" }}>
                  <Carousel.Item interval={1000}>
                    <img
                      style={{ width: "450px", height: "210px", float: "left" }}
                      src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/86117e9d-4079-4231-9854-21bbc04852d0._CR0,0,1200,628_SX460_QL70_.png"
                      alt="Advertisement here"
                    ></img>
                  </Carousel.Item>
                  <Carousel.Item interval={500}>
                    <img
                      style={{ width: "450px", height: "210px", float: "left" }}
                      src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/1d3109c1-b616-4519-813d-5ab3907c9fef._CR0,0,1200,628_SX460_QL70_.jpg"
                      alt="Advertisement here"
                    ></img>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{ width: "450px", height: "210px", float: "left" }}
                      src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/c4b70438-7f2b-4e61-a5bd-f9d34145e3f6._CR0,0,1200,628_SX460_QL70_.jpg"
                      alt="Advertisement here"
                    ></img>
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="col-md-4">
                {" "}
                {/**Second slide advertisment */}
                <Carousel style={{ width: "100%", display: "inline" }}>
                  <Carousel.Item interval={1000}>
                    <img
                      style={{ width: "450px", height: "210px", float: "left" }}
                      src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/9070ca9c-6960-4439-8eb3-19fc633768b4._CR0,0,1200,628_SX460_QL70_.jpg"
                      alt="Advertisement here"
                    ></img>
                  </Carousel.Item>
                  <Carousel.Item interval={500}>
                    <img
                      style={{ width: "450px", height: "210px", float: "left" }}
                      src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/59004c6f-f6b5-4430-aad6-9758e605badd._CR0,0,1200,628_SX460_QL70_.jpg"
                      alt="Advertisement here"
                    ></img>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{ width: "450px", height: "210px", float: "left" }}
                      src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/2d4b586a-1b8f-4412-99e7-db7251f92c46._CR0,0,1200,628_SX460_QL70_.jpg"
                      alt="Advertisement here"
                    ></img>
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="col-md-4">
                {/**Third slide advertisment */}
                <Carousel style={{ width: "100%", display: "inline" }}>
                  <Carousel.Item interval={1000}>
                    <img
                      style={{ width: "450px", height: "210px", float: "left" }}
                      src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/c1ba77e8-cbf4-4282-82b9-73b8304b5895._CR0,0,1200,628_SX460_QL70_.png"
                      alt="Advertisement here"
                    ></img>
                  </Carousel.Item>
                  <Carousel.Item interval={500}>
                    <img
                      style={{ width: "450px", height: "210px", float: "left" }}
                      src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/8d68a437-f175-4a22-b15a-d80ed47b7a32._CR0,0,1200,628_SX460_QL70_.jpg"
                      alt="Advertisement here"
                    ></img>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{ width: "450px", height: "210px", float: "left" }}
                      src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/393ac3c3-ccb3-46e5-946a-b38f0482034e._CR0,0,1200,628_SX460_QL70_.jpg"
                      alt="Advertisement here"
                    ></img>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/**modal for place order */}
      <Modal fullscreen="xxl-down" show={BuyNowshow} onHide={handleBuyNowClose}>
        <Modal.Body>
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <Card className="shadow m-3 p-2">
                <div className="row">
                  <div className="col-md-4 col-sm-12">
                    {/*Profile pic  division */}
                    <img
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "30px",
                        marginLeft: "20px",

                        float: "right",
                      }}
                      src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                      alt="Profile pic not available"
                    />
                    <p
                      style={{
                        color: "black",
                        display: "inline",
                        fontWeight: "400",
                        fontFamily: "geogria",
                      }}
                    >
                      {" "}
                      Hello!
                    </p>
                    <p
                      style={{
                        color: "black",

                        fontWeight: "400",
                        display: "inline",
                        fontFamily: "geogria",
                      }}
                    >
                      {" "}
                      {props.productData.FullName} ,Welcome to Check Out Page
                    </p>
                    <Card.Img
                      style={{ width: "150px", height: "200px" }}
                      Src={props.productData.Image}
                    ></Card.Img>
                  </div>
                  <div className="col-md-8 col-sm-12">
                    {/**Creating Address Card */}
                    <Card
                      className="shadow m-1 p-1"
                      style={{ fontWeight: "500" }}
                    >
                      <Card.Body>
                        <p style={{ textAlign: "center" }}>
                          <h6>
                            Exclusive on PremiumTech
                            <Badge bg="danger">New</Badge>
                          </h6>{" "}
                        </p>
                        <p>Product Name : {props.productData.ProductName}</p>
                        <p>Cost : $ {props.productData.Cost}</p>
                        <p>Brand: {props.productData.Brand}</p>
                        <p>Seller Name : {props.productData.author.FullName}</p>
                        <p>Category : {props.productData.Category}</p>
                        <h5>
                          <Badge style={{ marginLeft: "10px" }} bg="info">
                            #1 Best Seller
                          </Badge>{" "}
                          &nbsp;&nbsp;&nbsp;
                          <i
                            style={{ cursor: "pointer", color: "red" }}
                            className="fa-solid fa-trash"
                          ></i>
                        </h5>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </Card>
              {/**Payment options */}
              <Card className="shadow m-2 p-2">
                <div className="row">
                  <div className="col-md-8">
                    {/**Creating Address Card */}
                    <Card
                      className="shadow m-1 p-1"
                      style={{ fontWeight: "500" }}
                    >
                      <h4 style={{ color: "purple", textAlign: "center" }}>
                        Delivery Address
                      </h4>
                      <hr></hr>
                      <p style={{ fontWeight: "700", display: "inline" }}>
                        {user.FullName}
                      </p>
                      Town : {user.City},State : {user.State}
                      <br></br>
                      Pin-Code : {user.Pin}
                      <br></br>
                      Phone Number : 821***********<br></br>
                      E- mail : {user.Email}
                      <br></br>
                      <hr></hr>
                      <Link to="/profilebuyer">
                        <button className="form-control btn btn-danger">
                          Change Address
                        </button>
                      </Link>
                    </Card>
                  </div>
                  <div className="col-md-4">
                    <Card>
                      <Card.Body>
                        <h4 style={{ color: "purple", textAlign: "center" }}>
                          Payment Options
                        </h4>
                        <hr></hr>
                        <select className="form-control bg-light">
                          <option>Select Paymnet option</option>
                          <option>Cash on Delivery</option>
                          <option>Pay Online with Pay-Pal</option>
                        </select>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </Card>
            </div>
            <div className="col-md-4 col-sm-12">
              {/**Cost Details*/}
              <Card className="shadow m-2 p-2">
                <h6
                  style={{
                    fontFamily: "georgia",
                    color: "blue",
                    display: "inline",
                  }}
                >
                  Price Details
                </h6>
                <hr></hr>
                <p style={{ fontWeight: "700" }}>
                  Total Price :{" "}
                  <p
                    style={{
                      color: "green",
                      display: "inline",
                      float: "right",
                    }}
                  >
                    $ {props.productData.Cost}
                  </p>
                </p>
                <p style={{ fontWeight: "700", display: "inline" }}>
                  <p style={{ fontWeight: "700", display: "inline" }}>
                    Deleviry Charges :{" "}
                    <p
                      style={{
                        color: "green",
                        display: "inline",
                        float: "right",
                      }}
                    >
                      Free
                    </p>
                  </p>
                </p>
                <hr></hr>
                <p style={{ fontWeight: "700", display: "inline" }}>
                  Total :{" "}
                  <p
                    style={{
                      color: "green",
                      display: "inline",
                      float: "right",
                    }}
                  >
                    $ {props.productData.Cost}
                  </p>
                </p>
                <hr></hr>
                <p
                  style={{
                    fontSize: "small",
                    textAlign: "center",
                    color: "green",
                  }}
                >
                  You will save $ 2,000
                </p>

                <button className="form-control btn btn-warning">
                  Place Order
                </button>
              </Card>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleBuyNowClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default SmartPhoneCard;
