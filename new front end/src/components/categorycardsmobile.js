import "./categorycardsmobile.css";

import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
function CategoryCardMobile() {
  return (
    <div>
      <div className="row" id="formobile">
        <div className="col-sm-6">
          <a href="/laptop">
            <Card id="CardGlass">
              <Card.Text style={{ color: "black" }}>
                Flat 50% Off..
                <Badge bg="danger">New</Badge>
              </Card.Text>
              <Card.Img
                style={{ height: "100px" }}
                variant="top"
                src="https://m.media-amazon.com/images/I/61ZQEkRzQaL._SY450_.jpg"
              />
              <Card.Body>
                <Card.Text style={{ color: "white" }}>
                  <Badge bg="dark" style={{ color: "white" }}>
                    Latest Laptops
                  </Badge>
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
        <div className="col-sm-6">
          <a href="/watches">
            <Card id="CardGlass1">
              <Card.Text style={{ color: "black" }}>
                Flat 15% Off..
                <Badge bg="danger">New</Badge>
              </Card.Text>
              <Card.Img
                style={{ height: "100px" }}
                variant="top"
                src="https://m.media-amazon.com/images/I/61h+le2DUxL._AC_UY218_.jpg"
              />
              <Card.Body>
                <Card.Text style={{ color: "white" }}>
                  <Badge bg="dark" style={{ color: "white" }}>
                    Latest Watches
                  </Badge>
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
      </div>
      {/**second row */}
      <div className="row" id="formobile">
        <div className="col-sm-6">
          <a href="/tablets">
            <Card id="CardGlass">
              <Card.Text style={{ color: "black" }}>
                Flat 50% Off..
                <Badge bg="danger">New</Badge>
              </Card.Text>
              <Card.Img
                style={{ height: "100px" }}
                variant="top"
                src="https://m.media-amazon.com/images/I/41wQsA6y7OL._AC_UY218_.jpg"
              />
              <Card.Body>
                <Card.Text style={{ color: "white" }}>
                  <Badge bg="dark" style={{ color: "white" }}>
                    Latest Tablets
                  </Badge>
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
        <div className="col-sm-6">
          <a href="/smartphones">
            <Card id="CardGlass1">
              <Card.Text style={{ color: "black" }}>
                50% Off..
                <Badge bg="danger">New</Badge>
              </Card.Text>
              <Card.Img
                style={{ height: "100px" }}
                variant="top"
                src="https://m.media-amazon.com/images/I/71F7IMSDGWL._AC_UY218_.jpg"
              />
              <Card.Body>
                <Card.Text style={{ color: "white" }}>
                  <Badge bg="dark" style={{ color: "white" }}>
                    Latest Phones
                  </Badge>
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
      </div>
    </div>
  );
}
export default CategoryCardMobile;
