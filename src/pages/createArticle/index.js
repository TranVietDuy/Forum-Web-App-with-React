import ArticleForm from "components/ArticleForm"

const CreateArticle = () => {
    const onSubmit = (data) => {
        console.log("data", data)
    }
    const initialValues = {
        title: "test",
        description: "test",
        body: "test",
        tagList: "test",
    }
    const error = {
        title: ["test"],
        description: ["test"],
        body: ["test"],
        tagList: ["test"],
    }


  return (
		<div>
			<ArticleForm onSubmit={onSubmit} initialValues={initialValues} />
		</div>
  )
}

export default CreateArticle