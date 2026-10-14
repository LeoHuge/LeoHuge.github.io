import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Research from "./pages/Research.jsx";
import Tools from "./pages/Tools.jsx";
import Teaching from "./pages/Teaching.jsx";
import Blog from "./pages/Blog.jsx";
import Post from "./pages/Post.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="research" element={<Research />} />
        <Route path="tools" element={<Tools />} />
        <Route path="teaching" element={<Teaching />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
