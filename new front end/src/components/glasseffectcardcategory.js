import "./glasseffectcardcategory.css";

import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
function GlassEffectCard() {
  return (
    <div className="container containerbox">
      <div className="row" id="formlarge">
        <div className="col-md-3">
          <a href="/laptop">
            <Card id="CardGlass">
              <Card.Text style={{ color: "black" }}>
                Flat 50% Off..
                <Badge bg="danger">New</Badge>
              </Card.Text>
              <Card.Img
                style={{
                  height: "100px",
                  width: "100px",
                  marginLeft: "10px",
                  borderRadius: "90px",
                }}
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ErYKAcjzX20g3rmteDIJ2X3HlKJQmHuYXA&usqp=CAU"
              />
              <Card.Body>
                <Card.Text style={{ color: "black" }}>
                  <Badge bg="light" style={{ color: "black" }}>
                    Latest Laptops
                  </Badge>
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
        <div className="col-md-3">
          <a href="/watches">
            <Card id="CardGlass">
              <Card.Text style={{ color: "black" }}>
                Flat 15% Off..
                <Badge bg="danger">New</Badge>
              </Card.Text>
              <Card.Img
                style={{
                  height: "100px",
                  width: "100px",
                  marginLeft: "10px",
                  borderRadius: "90px",
                }}
                variant="top"
                src="https://m.media-amazon.com/images/I/61wJNP17lEL._SY450_.jpg"
              />
              <Card.Body>
                <Card.Text style={{ color: "black" }}>
                  <Badge bg="light" style={{ color: "black" }}>
                    Latest Watches
                  </Badge>
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
        <div className="col-md-3">
          <a href="/tablets">
            <Card id="CardGlass">
              <Card.Text style={{ color: "black" }}>
                Flat 60% Off..
                <Badge bg="danger">New</Badge>
              </Card.Text>
              <Card.Img
                style={{
                  height: "100px",
                  width: "100px",
                  marginLeft: "10px",
                  borderRadius: "90px",
                }}
                variant="top"
                src="https://m.media-amazon.com/images/I/81Vs371KLML._SX450_.jpg"
              />
              <Card.Body>
                <Card.Text style={{ color: "black" }}>
                  <Badge bg="light" style={{ color: "black" }}>
                    Latest Tablets
                  </Badge>
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
        <div className="col-md-3">
          <a href="/smartphones">
            <Card id="CardGlass">
              <Card.Text style={{ color: "black" }}>
                Flat 10% Off..
                <Badge bg="danger">New</Badge>
              </Card.Text>
              <Card.Img
                style={{
                  height: "100px",
                  width: "100px",
                  marginLeft: "10px",
                  borderRadius: "90px",
                }}
                variant="top"
                src="https://m.media-amazon.com/images/I/71F7IMSDGWL._SY450_.jpg"
              />
              <Card.Body>
                <Card.Text style={{ color: "white" }}>
                  <Badge bg="light" style={{ color: "black" }}>
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
export default GlassEffectCard;
