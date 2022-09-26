import useFetch from "hooks/useFetch"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import ErrorMessage from "./ErrorMessage"
import Loading from "./Loading"

const PopularTags = () => {
	const [{ response, isLoading, error }, doFetch] = useFetch("/tags")

    useEffect(() => {
        doFetch()
    }, [doFetch])

    if (isLoading || !response) {
        return <Loading />
    }
    if (error) {
        return <ErrorMessage />
    }
	return (
    <div className="sidebar">
        <p>Popular Tags</p>
        <div className="tag-list">
            {response.tags.map(tag => (
                <Link to={`/tags/${tag}`} className="tag-default tag-pill" key={tag}>
                    {tag}
                </Link>
            ))}
        </div>
    </div>
    )
}

export default PopularTags
