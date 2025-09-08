import { useEffect, useState } from "react"
import { getAllTopics } from "../services/TopicsService"
import { DropDown } from "./DropDown"
import { saveNewPost } from "../services/AllPostsService"

export const CreatePost = ( { currentUser } ) => {
    const [allTopics, setAllTopics] = useState([])
    const [post, setPost] = useState({
            title: "",
            body: "",
            topicId: 0
    })

    useEffect(() => {
        const allTopicsService = getAllTopics()
        allTopicsService.then((topicsArr) => {
            setAllTopics(topicsArr)
        })
    }, [])

    const handleSave = (event) => {
        event.preventDefault()
        if (post.body && post.title && post.topicId != 0) {
            const newPost = {
                title: post.title,
                body: post.body,
                postDate: new Date,
                userId: currentUser.id,
                likeCount: 0,
                topicId: post.topicId
            }

            saveNewPost(newPost).then(
                console.log("New post:", newPost)
            )
        } else {
            window.alert("Please fill out all required fields")
        }
    }

    return (
        <form>
            <h2>Create Post</h2>
            <fieldset>
                <label>Title: </label>
                    <input 
                        type="text"
                        placeholder="Set title"
                        onChange={(event) => {
                            const postCopy = {...post}
                            postCopy.title = event.target.value
                            setPost(postCopy)
                        }}
                        required
                        // set window alert if title is empty
                    />
            </fieldset>
            <fieldset>
                <label>Topic: </label>
                    <select onChange={(event) => {
                        const postCopy = {...post}
                        postCopy.topicId = parseInt(event.target.value)
                        setPost(postCopy)
                    }}>
                        <option className="topic-option">Select topic</option>
                        {allTopics.map((topic) => 
                            <option value={topic.id} key={topic.id} className="topic-option">{topic.name}</option>
                        )}
                    </select>
            </fieldset>
            <fieldset>
                <label>Post Description: </label>
                        <input 
                            type="text"
                            placeholder="Write your post here"
                            onChange={(event) => {
                            const postCopy = {...post}
                            postCopy.body = event.target.value
                            setPost(postCopy)
                        }}
                            required
                            // set window alert if post body is empty
                        />
            </fieldset>
            <fieldset>
                <button onClick={handleSave}>Save Post</button>
            </fieldset>
        </form>
    )
}