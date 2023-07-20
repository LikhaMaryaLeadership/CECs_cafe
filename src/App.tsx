import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import GroupComponent from "./pages/GroupComponent";
import GroupComponent1 from "./pages/GroupComponent1";
import IPhone14FirstPage from "./pages/IPhone14FirstPage";
import GroupComponent2 from "./pages/GroupComponent2";
import IPhone14FrontEnd from "./pages/IPhone14FrontEnd";
import IPhone14LoginPage from "./pages/IPhone14LoginPage";
import IPhone14SignUpPage from "./pages/IPhone14SignUpPage";
import IPhone14OrderPage from "./pages/IPhone14OrderPage";
import IPhone14ProfilePage from "./pages/IPhone14ProfilePage";
import IPhone14CurrentOrdersPag from "./pages/IPhone14CurrentOrdersPag";
import IPhone14MenuPage from "./pages/IPhone14MenuPage";
import IPhone14CartPage from "./pages/IPhone14CartPage";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/group-11":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-first-page":
        title = "";
        metaDescription = "";
        break;
      case "/group-10":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-front-end":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-login-page":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-sign-up-page":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-order-page":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-profile-page":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-current-orders-page":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-menu-page":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-cart-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<GroupComponent />} />
      <Route path="/group-11" element={<GroupComponent1 />} />
      <Route path="/iphone-14-first-page" element={<IPhone14FirstPage />} />
      <Route path="/group-10" element={<GroupComponent2 />} />
      <Route path="/iphone-14-front-end" element={<IPhone14FrontEnd />} />
      <Route path="/iphone-14-login-page" element={<IPhone14LoginPage />} />
      <Route path="/iphone-14-sign-up-page" element={<IPhone14SignUpPage />} />
      <Route path="/iphone-14-order-page" element={<IPhone14OrderPage />} />
      <Route path="/iphone-14-profile-page" element={<IPhone14ProfilePage />} />
      <Route
        path="/iphone-14-current-orders-page"
        element={<IPhone14CurrentOrdersPag />}
      />
      <Route path="/iphone-14-menu-page" element={<IPhone14MenuPage />} />
      <Route path="/iphone-14-cart-page" element={<IPhone14CartPage />} />
    </Routes>
  );
}
export default App;
