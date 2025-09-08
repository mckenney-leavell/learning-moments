import { Routes, Route, Outlet } from "react-router-dom"
import { AllPosts } from "../components/AllPosts"
import { NavBar } from "../components/nav/NavBar"
import { useEffect, useState } from "react"
import { PostDetails } from "../components/PostDetails"
import { CreatePost } from "../components/CreatePost"

export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
    const localLearningUser = localStorage.getItem("learning_user")
    const learningUserObject = JSON.parse(localLearningUser)
    setCurrentUser(learningUserObject)
    }, [])

    return (
        <Routes>
            <Route path="/" element={
                <>
                    <NavBar />
                    <Outlet />
                </>
            }>
                <Route index element={<AllPosts />}/>
                <Route path="posts">
                    <Route index element={<AllPosts currentUser={currentUser}/>}/>
                    <Route path=":postId" element={<PostDetails currentUser={currentUser}/>} />
                </Route>
                <Route path="create-post" element={<CreatePost currentUser={currentUser}/>}/>
            </Route>
        </Routes>
    )
}