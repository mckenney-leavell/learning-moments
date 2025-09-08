import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPostById } from "../services/AllPostsService"
import { updateLikeCount } from "../services/AllPostsService"

export const PostDetails = ({ currentUser }) => {
    const [ post, setPost ] = useState({})
    const { postId } = useParams()

    useEffect (() => {
        getPostById(postId).then((data) => {
            console.log("API response:", data) // See what you're getting back
        const postObj = data[0]
        console.log("postObj:", postObj)
            setPost(postObj)
        })
    }, [postId])

    const handleLike = () => {
        const likedPost = {
            id: post.id,
            title: post.title,
            body: post.body,
            postDate: post.postDate,
            userId: post.userId,
            likeCount: post.likeCount + 1,
            topicId: post.topicId,
            user: {
                id: post.user.id,
                name: post.user.name,
                email: post.user.email,
                cohort: post.user.cohort
            },
            topic: {
                id: post.topic.id,
                name: post.topic.name
            }
        }

        updateLikeCount(likedPost).then(() => {
            console.log("liked post:", likedPost)
            setPost(likedPost)
        })
        
    }

    return (
        <section>
            <header>{post.title}</header>
                <div>{post.user?.name}</div>
                <div>{post.topic?.name}</div>
                <div>{post.postDate}</div>
                <div>{post.body}</div>
                <div className="btn-container">
                    {currentUser.id != post.user?.id ? <button onClick={handleLike}>Like</button> : <button>Edit</button>}
                </div>
            <footer>Likes: {post.likeCount}</footer>
        </section>
    )
}