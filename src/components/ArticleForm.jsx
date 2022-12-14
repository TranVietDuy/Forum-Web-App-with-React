import BackendErrorMessages from "pages/authentication/components/BackendErrorMessages"
import { useState, useEffect} from "react"

const ArticleForm = ({ onSubmit, error, initialValues }) => {
	const [title, setTitle] = useState("")
	const [description, setDescription] = useState("")
	const [body, setBody] = useState("")
	const [tagList, setTagList] = useState("")

    useEffect(() => {
        setTitle(initialValues.title)
        setDescription(initialValues.description)
        setBody(initialValues.body)
        setTagList(initialValues.tagList)
       
    }, [initialValues])
    const handleSubmit = (e) => {
        e.preventDefault()
        const article = {
            title,
            description,
            body,
            tagList : tagList.split(" ")
        }
        onSubmit(article)
    }

	return (
		<div className="editor-page">
			<div className="container page">
				<div className="row">
					<div className="col-md-10 offset-md-1 col-xs-12">
						{error && (
							<BackendErrorMessages
								backendErrors={error}
							/>
						)}
						<form onSubmit={handleSubmit}>
							<fieldset>
								<fieldset className="form-group">
									<input
										type="text"
										className="form-control form-control-lg"
										placeholder="Article Title"
										value={title}
										onChange={(e) =>
											setTitle(e.target.value)
										}
									/>
								</fieldset>
								<fieldset className="form-group">
									<input
										type="text"
										className="form-control"
										placeholder="What's this article about?"
										value={description}
										onChange={(e) =>
											setDescription(e.target.value)
										}
									/>
								</fieldset>
								<fieldset className="form-group">
									<textarea
										className="form-control"
										rows="8"
										placeholder="Write your article (in markdown)"
										value={body}
										onChange={(e) =>
											setBody(e.target.value)
										}
									></textarea>
								</fieldset>
								<fieldset className="form-group">
									<input
										type="text"
										className="form-control"
										placeholder="Enter tags"
										value={tagList}
										onChange={(e) =>
											setTagList(e.target.value)
										}
									/>
									<div className="tag-list"></div>
								</fieldset>
								<button
									className="btn btn-lg pull-xs-right btn-primary"
									type="button"
									onClick={() =>
										onSubmit({
											title,
											description,
											body,
											tagList,
										})
									}
								>
									Publish Article
								</button>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ArticleForm
