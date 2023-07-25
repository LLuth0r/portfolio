import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./screens/Home/Home";

function App() {
	return (
		<div className="app">
			<Header />
			<Routes>
				<Route path="/" 
							 element={ <Home /> }>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
