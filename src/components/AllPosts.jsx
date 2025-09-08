import "./AllPosts.css"
import { getAllPosts } from "../services/AllPostsService";
import { useState, useEffect } from "react";
import { DropDown } from "./DropDown";
import { SearchBar } from "./SearchBar";
import { Link } from "react-router-dom";
import { Post } from "./Post";
import { CreatePost } from "./CreatePost";

export const AllPosts = ({ currentUser }) => {
    const [allPosts, setAllPosts] = useState([])
    // const [allTopics, setTopics] = useState([])
    const [getSelectedTopic, setSelectedTopic] = useState([])
    const [showFilteredPosts, setFilteredPosts] = useState([])
    const [getSearchInput, setSearchInput] = useState("")

    useEffect(() => {
        getAllPosts().then((postsArray) => {
            setAllPosts(postsArray)
            console.log("posts set")
        })
    }, [])

    useEffect(() => {
        if (Number.isInteger(parseInt(getSelectedTopic))) {
            const topicSelected = allPosts.filter((post) => post.topic.id === parseInt(getSelectedTopic))
            setFilteredPosts(topicSelected)
        } else if (getSearchInput.length > 0) {
            const foundPosts = allPosts.filter((post) => post.title.toLowerCase().includes(getSearchInput.toLowerCase()))
            setFilteredPosts(foundPosts)
        } else {
            setFilteredPosts(allPosts)
        }
    }, [allPosts, getSelectedTopic, getSearchInput])

    const getAndSetPosts = () => {
        getAllPosts().then((postsArray) => {
            setAllPosts(postsArray)
        })
    }
    
    return (
        <div>
            <SearchBar setSearchInput={setSearchInput} getSearchInput={getSearchInput} />
            <DropDown setShowFilteredTopic={setSelectedTopic} />
            <article className="allPosts">
            {showFilteredPosts.map((post) => {  
                return <Post key={post.id} post={post} currentUser={currentUser} getAndSetPosts={getAndSetPosts} setAllPosts={setAllPosts}/>
            })}
            </article>
            </div>
    )
}