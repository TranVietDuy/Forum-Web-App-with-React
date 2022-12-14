import TagList from "components/TagList"
import useFetch from "hooks/useFetch"
import { useEffect } from "react"
import { Link } from "react-router-dom"

const Article = (props) => {
	const slug = props.match.params.slug
	const apiUrl = `/articles/${slug}`
	const [{ response, error, isLoading }, doFetch] = useFetch(apiUrl)

	useEffect(() => {
		doFetch()
	}, [doFetch])
	return (
		<div className="article-page">
			<div className="banner">
				{!isLoading && response && (
					<div className="container">
						<h1>{response.article.title}</h1>
						<div className="article-meta">
							<Link
								to={`/profiles/${response.article.author.username}`}
							>
								<img
									src={response.article.author.image}
									alt=""
								/>
							</Link>
							<div className="info">
								<Link
									to={`/profiles/${response.article.author.username}`}
								>
									{response.article.author.username}
								</Link>
								<span className="date">
									{response.article.createdAt}
								</span>
							</div>
						</div>
					</div>
				)}
			</div>
			<div className="container page">
				{isLoading && <div>Loading article...</div>}
				{error && <div>Some error happened</div>}
				{!isLoading && response && (
					<div className="row article-content">
						<div>
							<p>{response.article.body}</p>
						</div>
                        <TagList tags={response.article.tagList} />

					</div>
				)}
                <hr />
			</div>
		</div>
	)
}

export default Article
