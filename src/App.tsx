import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Questions from "./pages/Questions";
import Book from "./pages/Book";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/404";


const App = () => {
  return (
    <Router basename='/serviceberry/'>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-100 bg-fixed">
        <div className="sticky top-0 z-50 bg-white">
          <Header />
        </div>
        
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/book" element={<Book />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
