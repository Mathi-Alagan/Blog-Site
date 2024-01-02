import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Form from "./components/Pages/Form";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/Pages/About";
import Blog from "./components/Pages/Blog";
import Error from "./components/Pages/Error";
import { BlogContextProvider } from "./context/blog";
function App() {


  const Routing = () => {

    return (
      <Routes>
        <Route path="/" element={<Navigate to="/blogs" />} />
        <Route path="/about" element={<About />} />

        <Route path="/blogs">
          <Route index element={<Home />} />
          <Route path="/blogs/create" element={<Form />} />
          <Route path="/blogs/edit" element={<Form />} />
          <Route path="/blogs/:id" element={<Blog />} />
        </Route>

        <Route path="/*" element={<Error />} />
      </Routes>
    )
  }
  return (
    <BlogContextProvider>
      <Navbar />
      <Routing />
      <Footer />
    </BlogContextProvider>
  );
}

export default App;
