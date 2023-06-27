import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//views
import Login from "./views/Login";
import ToDo from "./views/ToDo";

function App() {
	return (
		<div className='font-main'>
			<Router>
				<Routes>
					<Route
						path='/'
						element={<Login />}
					/>
					<Route
						path='/todo'
						element={<ToDo />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
