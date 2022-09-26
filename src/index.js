import Header from "components/Header"
import { CurrentUserProvider } from "contexts/currentUser"
import ReactDOM from "react-dom/client"
import { BrowserRouter  as Router} from "react-router-dom"
import App from "./App"
import "./index.css"
import CurrentUserChecker from "components/CurrentUserChecker"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	//   <React.StrictMode>
	<CurrentUserProvider>
		<CurrentUserChecker>
			<Router>
				<Header />
				<App />
			</Router>
		</CurrentUserChecker>
	</CurrentUserProvider>
	//   </React.StrictMode>
)
