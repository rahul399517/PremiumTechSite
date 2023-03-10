import Carousel from "react-bootstrap/Carousel";
import Mainslide1 from "../images/Mainslide1.png";
function AboutUs() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <div className="row" style={{ backgroundColor: "white" }}>
          <div className="col-md-4 col-sm-12">
            <img
              style={{ width: "100%", height: "auto" }}
              src={Mainslide1}
              alt=" not available"
            />
          </div>
          <div className="col-md-8 col-sm-12 p-3">
            <h1 style={{ color: "black" }}>About Us</h1>
            <p style={{ color: "black" }}>
              {" "}
              "기술"이라는 단어와 그 용도는 20세기, 그리고 시간이 지남에 따라
              계속해서 진화해 왔습니다. 부터. 우리는 기술이 주도하는 세상에 살고
              있습니다. 그만큼 기술의 발전이 중요한 역할을 했다. 문화의 변화와
              함께 인류 문명의 발전. 기술은 다양한 방법을 통해 작업을 수행하는
              혁신적인 방법을 제공합니다. 스마트하고 혁신적인 수단. "기술"이라는
              단어와 그 용도는 20세기, 그리고 시간이 지남에 따라 계속해서 진화해
              왔습니다. 부터. 우리는 기술이 주도하는 세상에 살고 있습니다.
              그만큼 기술의 발전이 중요한 역할을 했다. 문화의 변화와 함께 인류
              문명의 발전. 기술은 다양한 방법을 통해 작업을 수행하는 혁신적인
              방법을 제공합니다. 스마트하고 혁신적인 수단.<br></br>
              "기술"이라는 단어와 그 용도는 20세기, 그리고 시간이 지남에 따라
              계속해서 진화해 왔습니다. 부터. 우리는 기술이 주도하는 세상에 살고
              있습니다. 그만큼 기술의 발전이 중요한 역할을 했다. 문화의 변화와
              함께 인류 문명의 발전. 기술은 다양한 방법을 통해 작업을 수행하는
              혁신적인 방법을 제공합니다. 스마트하고 혁신적인 수단. "기술"이라는
              단어와 그 용도는 20세기, 그리고 시간이 지남에 따라 계속해서 진화해
              왔습니다. 부터. 우리는 기술이 주도하는 세상에 살고 있습니다.
              그만큼 기술의 발전이 중요한 역할을 했다. 문화의 변화와 함께 인류
              문명의 발전. 기술은 다양한 방법을 통해 작업을 수행하는 혁신적인
              방법을 제공합니다. 스마트하고 혁신적인 수단.
            </p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default AboutUs;
