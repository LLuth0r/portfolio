import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./screens/Home/Home";

function App() {
	return (
		<div className="app">
			<Header />
			<Route exact path="/">
				<Home />
			</Route>
		</div>
	);
}

export default App;
