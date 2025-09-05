import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPostById } from "../services/AllPostsService"

export const PostDetails = () => {
    const [ post, setPost ] = useState({})
    const { userId } = useParams()

    useEffect (() => {
        getPostById(userId).then((data) => {
            const postObj = data[0]
            setPost(postObj)
        })
    }, [userId])

    return (
        <section>
            <header>Title</header>
                <div>author</div>
                <div>topic</div>
                <div>date</div>
                <div>post body</div>
                <div></div>
            <footer>Likes</footer>
        </section>
    )
}