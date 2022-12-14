import Article from "pages/article/Article"
import Authentication from "pages/authentication"
import CreateArticle from "pages/createArticle"
import GlobalFeed from "pages/globalFeed"
import TagFeed from "pages/tagFeed"
import YourFeed from "pages/yourFeed"

import { Route, Switch } from "react-router-dom"

function App() {
	return (
		<Switch>
			<Route path="/" component={GlobalFeed} exact />
			<Route path="/articles/new" component={CreateArticle} exact />
			<Route path="/feed" component={YourFeed} exact />
			<Route path="/tags/:slug" component={TagFeed} />
			<Route path="/articles/:slug" component={Article} />
			<Route path="/login" component={Authentication} />
			<Route path="/register" component={Authentication} />
		</Switch>
	)
}

export default App
