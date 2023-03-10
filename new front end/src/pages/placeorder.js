import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
function PlaceOrder() {
  return (
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
                Rahul ,Welcome to Check Out Page
              </p>
            </div>
            <div className="col-md-8 col-sm-12">
              {/**Creating Address Card */}
              <Card className="shadow m-1 p-1" style={{ fontWeight: "500" }}>
                <h4 style={{ color: "purple", textAlign: "center" }}>
                  Delivery Address
                </h4>
                <hr></hr>
                <p style={{ fontWeight: "700", display: "inline" }}>
                  Rahul Kumar
                </p>
                Town : Dalhousie, District : Chamba,State : Himachal Pradesh{" "}
                <br></br>
                Pin-Code : 176303<br></br>
                Phone Number : 821***********<br></br>
                E- mail : rahul@gmail.com
                <br></br>
                <hr></hr>
                <Link to="/profilebuyer">
                  <button className="form-control btn btn-danger">
                    Change Address
                  </button>
                </Link>
              </Card>
            </div>
          </div>
        </Card>
        {/**Payment options */}
        <Card className="shadow m-2 p-2">
          <h4 style={{ color: "purple", textAlign: "center" }}>
            Payment Options
          </h4>
          <hr></hr>
          <select className="form-control bg-light">
            <option>Select Paymnet option</option>
            <option>Cash on Delivery</option>
            <option>Pay Online with Pay-Pal</option>
          </select>
        </Card>
      </div>
      <div className="col-md-4 col-sm-12">
        {/**Cost Details*/}
        <Card className="shadow m-2 p-2">
          <h6
            style={{ fontFamily: "georgia", color: "blue", display: "inline" }}
          >
            Price Details
          </h6>
          <hr></hr>
          <p style={{ fontWeight: "700" }}>
            Total Price :{" "}
            <p style={{ color: "green", display: "inline", float: "right" }}>
              $ 8,000
            </p>
          </p>
          <p style={{ fontWeight: "700", display: "inline" }}>
            Discount &nbsp;&nbsp;&nbsp;:{" "}
            <p style={{ color: "green", display: "inline", float: "right" }}>
              -$ 2,000
            </p>
            <br></br>
            <br></br>
            <p style={{ fontWeight: "700", display: "inline" }}>
              Deleviry Charges :{" "}
              <p style={{ color: "green", display: "inline", float: "right" }}>
                Free
              </p>
            </p>
          </p>
          <hr></hr>
          <p style={{ fontWeight: "700", display: "inline" }}>
            Total :{" "}
            <p style={{ color: "green", display: "inline", float: "right" }}>
              $ 6,000
            </p>
          </p>
          <hr></hr>
          <p style={{ fontSize: "small", textAlign: "center", color: "green" }}>
            You will save $ 2,000
          </p>
          <Link to="/placeorder">
            <button className="form-control btn btn-warning">
              Place Order
            </button>
          </Link>
        </Card>
      </div>
    </div>
  );
}
export default PlaceOrder;
