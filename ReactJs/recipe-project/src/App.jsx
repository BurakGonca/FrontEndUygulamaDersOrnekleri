import Header from "./components/Header";
import Main from "./components/Main";
import RecipeList from "./components/RecipeList";
import Forms from "./components/Forms";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import RecipeDetail from "./components/RecipeDetail";
import About from "./components/About";
import Contact from "./components/Contact";


function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/*" element={<Loading />} />
          <Route path="recipe-platform" element={<Header />}>

            <Route path="main" element={<Main/>} />
            <Route path="forms" element={<Forms/>} />
            <Route path="recipelist" element={<RecipeList/>} />
            <Route path="recipelist/:recipeId" element={<RecipeDetail/>} />
            <Route path="about" element={<About/>} />
            <Route path="contact" element={<Contact/>} />

          </Route>
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
