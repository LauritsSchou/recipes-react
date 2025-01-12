import { Route, Routes } from "react-router-dom";
import { Categories } from "./recipes/Categories";
import Recipe from "./recipes/Recipe";
import RecipeForm from "./recipes/RecipeForm";
import RecipesLayout from "./recipes/RecipesLayout";
import LogIn from "./security/LogIn";
import LogOut from "./security/LogOut";
import Layout from "./Layout";
import Home from "./Home";
import "./App.css";
import RequireAuth from "./security/RequireAuth";
// import { useAuth } from "./security/AuthProvider";

export default function App() {
  // const auth = useAuth();
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/" element={<Categories />} />
        <Route path="/recipes" element={<RecipesLayout />}>
          <Route path=":id" element={<Recipe />} />
        </Route>
        <Route
          path="/add"
          element={
            <RequireAuth roles={["ADMIN"]}>
              <RecipeForm />
            </RequireAuth>
          }
        />

        <Route path="/login" element={<LogIn />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes>
    </Layout>
  );
}
