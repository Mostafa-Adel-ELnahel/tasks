import { BrowserRouter,Outlet,Route,Routes } from "react-router-dom";
import HomePage from "./componet/Home";
import ShopPage from "./componet/ShopPage/index";
import PortfolioPage from "./componet/PortfolioPage/index";
import PagesPage from "./componet/PagesPage/index";
import Page404 from "./componet/Page404/index";
import Header from "./componet/Header/index";
import Footer from "./componet/Footer/index";

export default function App (){
return(
  <div className="App" id="The App">
    <BrowserRouter>
    <Header/>
    <Routes>

      <Route path="/">
        <Route index element={<HomePage />}/>
        <Route path="/portfolio" element={<PortfolioPage />}/>
        <Route path="/shop" element={<ShopPage />}/>
        <Route path="/Pages" element={<PagesPage />}/>
        <Route path="*" element={<Page404 />}/>
      </Route>
    </Routes>
    <Outlet/>
    <Footer/>
    </BrowserRouter>
  </div>
)
}
