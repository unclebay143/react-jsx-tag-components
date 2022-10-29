import { Route, Routes } from 'react-router-dom';
import { a_details } from './components/tags/a/a_details';
import { h1_details } from './components/tags/h1/h1_details';
import { h2_details } from './components/tags/h2/h2_details';
import { img_details } from './components/tags/img/img_details';
import { p_details } from './components/tags/p/p_details';
import { dialog_details } from './components/tags/dialog/dialog_details';
import { Documenter } from './pages/home/Documenter';
import { h3_details } from './components/tags/h3/h3_details';
import { details_details } from './components/tags/details/details_details';
import { h4_details } from './components/tags/h4/h4_details';
import { h5_details } from './components/tags/h5/h5_details';
import { button_details } from './components/tags/button/button_details';
import { small_details } from './components/tags/small/small_details';
import { form_details } from './components/tags/form/form_details';

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

			<Route path='/a' element={<Documenter componentDetails={a_details} />} />

			<Route
				path='/img'
				element={<Documenter componentDetails={img_details} />}
			/>
			<Route path='/p' element={<Documenter componentDetails={p_details} />} />

			<Route
				path='/dialog'
				element={<Documenter componentDetails={dialog_details} />}
			/>

			<Route
				path='/h3'
				element={<Documenter componentDetails={h3_details} />}
			/>

			<Route
				path='/h4'
				element={<Documenter componentDetails={h4_details} />}
			/>
			<Route
				path='/h5'
				element={<Documenter componentDetails={h5_details} />}
			/>

			<Route
				path='/details'
				element={<Documenter componentDetails={details_details} />}
			/>
			<Route
				path='/button'
				element={<Documenter componentDetails={button_details} />}
			/>
			<Route
				path='/small'
				element={<Documenter componentDetails={small_details} />}
			/>
			<Route
				path='/form'
				element={<Documenter componentDetails={form_details} />}
			/>
		</Routes>
	);
}

export default App;
