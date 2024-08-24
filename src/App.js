import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/page";
import MoviePage from "./pages/MoviePage/page";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <Header />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:id" element={<MoviePage />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
