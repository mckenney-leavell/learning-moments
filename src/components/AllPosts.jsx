import "./AllPosts.css"
import { getAllPosts } from "../services/AllPostsService";
import { useState, useEffect } from "react";
import { DropDown } from "./DropDown";


export const AllPosts = () => {
    const [allPosts, setAllPosts] = useState([])
    // const [allTopics, setTopics] = useState([])
    const [getSelectedTopic, setSelectedTopic] = useState([])
    const [showFilteredPosts, setFilteredPosts] = useState([])

    useEffect(() => {
        getAllPosts().then((postsArray) => {
            setAllPosts(postsArray)
            console.log("posts set")
        })
    }, [])

    useEffect(() => {
        if (getSelectedTopic.length > 0) {
            const topicSelected = allPosts.filter((topicOption) => topicOption.topic.id === getSelectedTopic)
            setFilteredPosts(topicSelected)
        } else {
            setFilteredPosts(allPosts)
        }
    }, [showFilteredPosts, allPosts, getSelectedTopic])
    
    return (
        <div >
            <DropDown setShowFilteredTopic={setSelectedTopic}/>
            <div className="allPosts">
            {allPosts.map((post) =>         
                <div key={post.id} className="card">
                    <h2>{post.title}</h2>
                    <h3>{post.topic.name}</h3>
                    <p>{post.likeCount} likes</p>
                </div>
            )}
            </div>
            </div>
    )
}