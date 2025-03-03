import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./routes/main/main";
import About from "./routes/about/about";
import News from "./routes/news/news";
import Products from "./routes/products/products";
import Residents from "./routes/residents/residents";
import Contacts from "./routes/contacts/contacts";
import Header from "./elements/Header/Header"
import Footer from "./elements/Footer/Footer"



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/residents" element={<Residents />} />
        <Route path="/products" element={<Products />} />
        <Route path="/news" element={<News />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
