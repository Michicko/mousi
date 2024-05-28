import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./components/Layouts/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Studio from "./pages/Studio";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;