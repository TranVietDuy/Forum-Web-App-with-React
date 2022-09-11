import Article from "pages/article/Article"
import Authentication from "pages/authentication/Authentication"
import GlobalFeed from "pages/globalFeed/GlobalFeed"
import { Route, Switch } from "react-router-dom"

function App() {
	return (
		<Switch>
			<Route path="/" component={GlobalFeed} exact />
			<Route path="/articles/:slug" component={Article} />
            <Route path="/login" component={Authentication} />
		</Switch>
	)
}

export default App
