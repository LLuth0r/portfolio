import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./screens/Home/Home";
import SpaceGame from "./screens/SpaceGame/SpaceGame";

function App() {
	return (
		<div className="app">
			{/* <Header /> */}
			<Routes>
				<Route path="/" 
							 element={ <Home /> }>
				</Route>
        <Route path="/spacegame" 
               element={ <SpaceGame /> }>
        </Route>
			</Routes>
		</div>
	);
}

export default App;
