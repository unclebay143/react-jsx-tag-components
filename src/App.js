import { Route, Routes } from "react-router-dom";
import { h1_details } from "./components/tags/h1/h1_details";
import { h2_details } from "./components/tags/h2/h2_details";
import { Documenter } from "./pages/home/Documenter";

function App() {
  return (
    <Routes>
      <Route
        index
        element={
          <Documenter
            title={h1_details.title}
            codeSnippet={h1_details.codeSnippet}
          />
        }
      />
      <Route
        path='/h1'
        element={
          <Documenter
            title={h1_details.title}
            codeSnippet={h1_details.codeSnippet}
          />
        }
      />

      <Route
        path='/h2'
        element={
          <Documenter
            title={h2_details.title}
            codeSnippet={h2_details.codeSnippet}
          />
        }
      />
    </Routes>
  );
}

export default App;
