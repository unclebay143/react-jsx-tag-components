import { Route, Routes } from "react-router-dom";
import { h1_details } from "./components/tags/h1/h1_details";
import { h2_details } from "./components/tags/h2/h2_details";
import { h3_details } from './components/tags/h3/h3_details';
import { Documenter } from "./pages/home/Documenter";

function App() {
  return (
		<Routes>
			<Route index element={<Documenter componentDetails={h1_details} />} />
			<Route
				path='/h1'
				element={<Documenter componentDetails={h1_details} />}
			/>

			<Route
				path='/h2'
				element={<Documenter componentDetails={h2_details} />}
			/>
			<Route
				path='/h3'
				element={<Documenter componentDetails={h3_details} />}
			/>
		</Routes>
	);
}

export default App;
