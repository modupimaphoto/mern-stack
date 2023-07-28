import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Login from "./components/login";
import Signup from "./components/signup";

function App() {

	return(
    <>
		<Router>
			<Routes>
				
				<Route path="/login" element={ <Login /> } />
				<Route path="/signup" element={ <Signup /> } />
			</Routes>
		</Router>
	</>
  );
}

export default App;