import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
function ProductPage() {
  return (
    <div className="row">
      <div className="col-md-5 col-sm-12">
        <img
          style={{ width: "100%" }}
          src="https://m.media-amazon.com/images/I/81KWlS9gfHL._SX450_.jpg"
          alt="Not available"
        />
        <img
          style={{ width: "100%" }}
          src="https://m.media-amazon.com/images/I/91bMDtxybOL._SL1500_.jpg"
          alt="Not available"
        />
      </div>
      <div className="col-md-4 col-sm-12">
        <Card className="shadow mt-3 m-1">
          <p style={{ color: "blue", marginLeft: "10px" }}>
            Visit the seller : Van Heusen Store
          </p>
          <h5 style={{ textAlign: "center" }}>
            Samsung Galaxy Tab S8 Ultra 37.08 cm (14.6 inch) sAMOLED Display,
            RAM 12 GB, ROM 256 GB Expandable, S Pen in-Box, Wi-Fi Tablet,
            Graphite
          </h5>
          <p
            className="small "
            style={{
              fontSize: "small",
              textAlign: "left",
              fontWeight: "400",
              display: "inline",
              paddingLeft: "10px",
            }}
          >
            4.5 <i className="fa-solid fa-star" style={{ color: "yellow" }}></i>{" "}
            (4,500 ratings)
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
            <p style={{ display: "inline", fontSize: "large", color: "red" }}>
              $1,000
            </p>
          </p>
          <select
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
          </select>
          <hr></hr>
          <h4>
            <Badge style={{ marginLeft: "10px" }} bg="warning">
              Brand
            </Badge>
            &nbsp;&nbsp;&nbsp;Samsung Galaxy Tab S8 Ultra
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
              &nbsp;&nbsp; 8+ years on Debacle
            </li>
          </ul>
          <h6 style={{ marginLeft: "10px" }}>
            <b>Product Details</b>
          </h6>
          <ul>
            <li>
              <i
                style={{ color: "green" }}
                className="fa-solid fa-circle-check"
              ></i>
              &nbsp;&nbsp; Product Dimensions: 27 x 22 x 0.5 cm; 250 Grams
            </li>
            <li>
              <i
                style={{ color: "green" }}
                className="fa-solid fa-circle-check"
              ></i>
              &nbsp;&nbsp; Date First Available : 11 October 2017
            </li>
            <li>
              <i
                style={{ color: "green" }}
                className="fa-solid fa-circle-check"
              ></i>
              &nbsp;&nbsp; Manufacturer : ABFRL
            </li>
            <li>
              <i
                style={{ color: "green" }}
                className="fa-solid fa-circle-check"
              ></i>
              &nbsp;&nbsp; Item model number : VSKP517S011408
            </li>
            <li>
              <i
                style={{ color: "green" }}
                className="fa-solid fa-circle-check"
              ></i>
              &nbsp;&nbsp; Department : Men
            </li>
            <li>
              <i
                style={{ color: "green" }}
                className="fa-solid fa-circle-check"
              ></i>
              &nbsp;&nbsp; Packer : ABFRL, Building No.288/2
            </li>
            <li>
              <i
                style={{ color: "green" }}
                className="fa-solid fa-circle-check"
              ></i>
              &nbsp;&nbsp; Item Weight : 250 g
            </li>
            <li>
              <i
                style={{ color: "green" }}
                className="fa-solid fa-circle-check"
              ></i>
              &nbsp;&nbsp;Item Dimensions LxWxH : 27 x 22 x 0.5 Centimeters
            </li>
            <li>
              <i
                style={{ color: "green" }}
                className="fa-solid fa-circle-check"
              ></i>
              &nbsp;&nbsp;Generic Name : T-Shirt
            </li>
            <li>
              <i
                style={{ color: "green" }}
                className="fa-solid fa-circle-check"
              ></i>
              &nbsp;&nbsp;Best Sellers Rank: #1 in Clothing & Accessories (See
              Top 100 in Clothing & Accessories)
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
            <p style={{ display: "inline", fontSize: "large", color: "red" }}>
              $1,000
            </p>
          </p>
          <p style={{ color: "green", fontSize: "small" }}>
            FREE delivery Sunday, 26 February. Order within 12 hrs 17 mins.
            Details
          </p>
          <p style={{ color: "blue", fontSize: "large", textAlign: "center" }}>
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
            Sold by Cocoblu Retail and Fulfilled by Debacle.
          </p>
          <button className="form-control btn btn-warning">Add To Cart</button>
          <br></br>
          <Link to="/placeorder">
            <button className="form-control btn btn-danger">Buy Now</button>
          </Link>
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
          <p style={{ fontWeight: "bold" }}>Reviews</p>
          <hr></hr>
          <p>
            <i className="fa-solid fa-user"></i> &nbsp;user Name : Review
          </p>
        </Card>
      </div>
    </div>
  );
}
export default ProductPage;
