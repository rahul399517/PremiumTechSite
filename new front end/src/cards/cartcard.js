import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
function CartCard() {
  return (
    <div>
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <Card className="shadow m-2 p-2">
            {/*Horizontal card*/}
            <div className="card mb-3" style={{ maxWidth: "100%" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    style={{ width: "250px", height: "200px" }}
                    src="https://m.media-amazon.com/images/I/91bMDtxybOL._SX450_.jpg"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      Samsung Galaxy Tab S8 Ultra 37.08 cm (14.6 inch) sAMOLED
                      Display, RAM 12 GB, ROM 256 GB Expandable, S Pen in-Box,
                      Wi-Fi Tablet, Graphite
                    </h5>
                    <p className="card-text">
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
                          $1,000,
                        </p>
                      </p>
                    </p>
                    <button className="form-control btn btn-warning">
                      Delete
                    </button>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="col-md-4 col-sm-12">
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
                $ 8,000
              </p>
            </p>
            <p style={{ fontWeight: "700", display: "inline" }}>
              Discount &nbsp;&nbsp;&nbsp;:{" "}
              <p
                style={{
                  color: "green",
                  display: "inline",
                  float: "right",
                }}
              >
                -$ 2,000
              </p>
              <br></br>
              <br></br>
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
                $ 6,000
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
            <Link to="/placeorder">
              <button className="form-control btn btn-warning">
                Place Order
              </button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default CartCard;
