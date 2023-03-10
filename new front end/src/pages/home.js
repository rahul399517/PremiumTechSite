import AboutUs from "../components/aboutus";
import CategoryCardMobile from "../components/categorycardsmobile";
import CategoryIntro from "../components/categoryintro";
import FeaturedProduct from "../components/featuredslide";
import GlassEffectCard from "../components/glasseffectcardcategory";
import MainSlider from "../components/mainslider";
import Carousel from "react-bootstrap/Carousel";
import "./home.css";
import AddSlide1 from "../components/addslide1";

function Home() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <MainSlider />
      <div id="topproductadvertisment">
        <div className="row">
          <div className="col-md-4">
            {/**First slide advertisment */}
            <Carousel style={{ width: "100%", display: "inlineBlock" }}>
              <Carousel.Item interval={500}>
                <img
                  style={{ width: "450px", height: "130px", float: "left" }}
                  src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/b79700d1-95fa-431b-9399-5ab5f765afbb._CR0,0,1200,628_SX460_QL70_.jpg"
                  alt="Advertisement here"
                ></img>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  style={{ width: "450px", height: "130px", float: "left" }}
                  src="https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/e/AmazonStores/A21TJRUUN4KGV/c79807575196f738f45baa10ed371ac1.w3000.h600._CR0%2C0%2C3000%2C600_SX1500_.png"
                  alt="Advertisement here"
                ></img>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ width: "450px", height: "130px", float: "left" }}
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/November/BAURevamp/D61984344__IN_WLA_BAU_Category_page_re-vamp_premium-sccessories_1242x844.jpg"
                  alt="Advertisement here"
                ></img>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-4">
            {/**Second slide advertisment */}
            <Carousel style={{ width: "100%", display: "inlineBlock" }}>
              <Carousel.Item interval={500}>
                <img
                  style={{ width: "450px", height: "130px", float: "left" }}
                  src="https://m.media-amazon.com/images/G/31/img21/Wireless/vinambia/neo7feb28/D70214422_WLD_iQOO-Neo-7_1400x800._CB613387314_.jpg"
                  alt="Advertisement here"
                ></img>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  style={{ width: "450px", height: "130px", float: "left" }}
                  src="https://m.media-amazon.com/images/G/31/img21/Wireless/ssserene/OP11/GW/7thMar/D66357764_WLD_OnePlus_Salami_NewLaunch_1400x800._CB595054837_.jpg"
                  alt="Advertisement here"
                ></img>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ width: "450px", height: "130px", float: "left" }}
                  src="https://m.media-amazon.com/images/G/31/img22/WLA/Launches23/OnePlusBuds2R/Prebook/Live/D74264935_IN_WLA_OnePLusBudsPro2R_launch_1400x800._CB594842930_.jpg"
                  alt="Advertisement here"
                ></img>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-4">
            {/**Third slide advertisment*/}
            <Carousel style={{ width: "100%", display: "inlineBlock" }}>
              <Carousel.Item interval={500}>
                <img
                  style={{ width: "450px", height: "130px", float: "left" }}
                  src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/86117e9d-4079-4231-9854-21bbc04852d0._CR0,0,1200,628_SX460_QL70_.png"
                  alt="Advertisement here"
                ></img>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  style={{ width: "450px", height: "130px", float: "left" }}
                  src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/1d3109c1-b616-4519-813d-5ab3907c9fef._CR0,0,1200,628_SX460_QL70_.jpg"
                  alt="Advertisement here"
                ></img>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ width: "450px", height: "130px", float: "left" }}
                  src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/c4b70438-7f2b-4e61-a5bd-f9d34145e3f6._CR0,0,1200,628_SX460_QL70_.jpg"
                  alt="Advertisement here"
                ></img>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      <div id="glasseffect">
        <GlassEffectCard />
      </div>

      <CategoryCardMobile />
      <CategoryIntro />
      <FeaturedProduct />
      <AddSlide1 />
      <AboutUs />
    </div>
  );
}
export default Home;
