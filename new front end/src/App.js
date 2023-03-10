import "./App.css";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopHeader from "./components/navbar";
import Footer from "./components/footer";
import Login from "./pages/login";
import SignUpasbuyer from "./pages/signupasbuyer";
import SignUpasSeller from "./pages/signupasseller";
import LogInAsSeller from "./pages/loginasseller";
import BuyerProfilePage from "./pages/profilebuyer";
import SellerProfilePage from "./pages/profileseller";
import PlaceOrder from "./pages/placeorder";
import UpdateAddressPage from "./pages/updatepage";
import ProductPage from "./pages/productpage";
import AllProduct from "./pages/allproduct";
import Laptops from "./pages/laptop";
import Tablets from "./pages/tablets";
import Watches from "./pages/watches";
import SmartPhones from "./pages/smartphones";
import Electronic from "./pages/electronic";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
function App() {
  //Below DynamicRouting() component is created ,so that when we refresh the page ,the user data do not get lost .......
  //Also we used  DynamicRouting() component ,since App.js is first executed ,so we created a dynamic component to use 'useNavigate' function(as use Navigate function cannot be used in App.js ),
  function DynamicRouting() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
      const userData = JSON.parse(localStorage.getItem("user"));
      if (userData) {
        dispatch({ type: "LOGIN_SUCCESS", payload: userData });
        // navigate("/allproduct");
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        dispatch({ type: "LOGOUT" });
        dispatch({ type: "LOGIN_ERROR" });
        navigate("/login");
      }
    }, []);
    return (
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/signupasbuyer" element={<SignUpasbuyer />}></Route>
        <Route
          exact
          path="/signupasseller"
          element={<SignUpasSeller />}
        ></Route>
        <Route exact path="/loginasseller" element={<LogInAsSeller />}></Route>
        <Route
          exact
          path="/profilebuyer"
          element={<BuyerProfilePage />}
        ></Route>
        <Route
          exact
          path="/profileseller"
          element={<SellerProfilePage />}
        ></Route>

        <Route exact path="/placeorder" element={<PlaceOrder />}></Route>
        <Route exact path="/productpage" element={<ProductPage />}></Route>
        <Route exact path="/allproduct" element={<AllProduct />}></Route>
        <Route exact path="/laptop" element={<Laptops />}></Route>
        <Route exact path="/tablets" element={<Tablets />}></Route>
        <Route exact path="/watches" element={<Watches />}></Route>
        <Route exact path="/electronics" element={<Electronic />}></Route>
        <Route exact path="/smartphones" element={<SmartPhones />}></Route>
        <Route exact path="/smartphones" element={<SmartPhones />}></Route>
        <Route exact path="/update/:id" element={<UpdateAddressPage />}></Route>
      </Routes>
    );
  }
  return (
    <div className="App">
      <Router>
        <TopHeader />
        <DynamicRouting />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
