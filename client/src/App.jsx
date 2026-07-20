import "remixicon/fonts/remixicon.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import Nav from "./components/Nav";
import Error from "./components/Error";
import Inbox from "./components/Inbox";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="inbox" element={<Inbox />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
