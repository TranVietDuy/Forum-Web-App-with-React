import ErrorMessage from "components/ErrorMessage"
import Feed from "components/Feed"

import FeedToggler from "components/FeedToggler"
import Loading from "components/Loading"
import Pagination from "components/Pagination"
import PopularTags from "components/PopularTags"
import useFetch from "hooks/useFetch"
import { getPaginator, limit } from "pages/utils"
import { stringify } from "query-string"
import { Fragment, useEffect } from "react"
import Banner from "components/Banner"

const YourFeed = ({ location, match }) => {
	const { offset, currentPage } = getPaginator(location.search)
	const stringifiedParams = stringify({
		limit,
		offset,
	})
	const apiUrl = `/articles/feed?${stringifiedParams}`
	const currentUrl = match.url
	const [{ response, error, isLoading }, doFetch] = useFetch(apiUrl)

	useEffect(() => {
		doFetch()
	}, [currentPage, doFetch])

	return (
		<div className="home-page">
			<Banner />
			<div className="container page">
				<div className="row">
					<div className="col-md-9">
						<FeedToggler />
						{isLoading && <Loading />}
						{error && <ErrorMessage />}
						{!isLoading && response && (
							<Fragment>
								<Feed articles={response.articles} />
								<Pagination
									total={response.articlesCount}
									limit={limit}
									url={currentUrl}
									currentPage={currentPage}
								/>
							</Fragment>
						)}
					</div>
					<div className="col-md-3">
						<PopularTags />
					</div>
				</div>
			</div>
		</div>
	)
}

export default YourFeed
