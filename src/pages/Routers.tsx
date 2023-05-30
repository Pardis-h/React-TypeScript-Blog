import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Blogs from "./Blogs";
import Admin from "./Admin";
import About from "./About";
import PostBlog from "./PostBlog";

function Pages() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/blogs" element={<Blogs/>} />
            <Route path="/dashboard" element={<Admin/>} />
            <Route path="/about-us" element={<About/>} />
            <Route path="/post-blog" element={<PostBlog/>} />
        </Routes>
    );
}

export default Pages;