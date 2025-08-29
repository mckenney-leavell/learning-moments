import { useState, useEffect } from "react"
// import bootstrap from 'bootstrap'
// import { getAllPosts } from "../services/AllPostsService"

export const DropDown = ( { setShowFilteredTopic } ) => {
    const [allTopics, setTopics] = useState([])
    // const [showSelectedTopicOnly, setSelectedTopic] = useState([])

    useEffect(() => {
        fetch("http://localhost:8088/topics").then((res) => res.json()).then((topicsArr) => {
            setTopics(topicsArr)
        })
    }, [])

    // useEffect(() => {
    //     if (showSelectedTopicOnly.length > 0) {
    //         const topicSelected = allPosts.filter((topicOption) => topicOption.id === showSelectedTopicOnly)
    //         setSelectedTopic(topicSelected)
    //     } else {
    //         setSelectedTopic(allTopics)
    //     }

    // }, [showSelectedTopicOnly, allTopics])

    return (
        <div className="dropdown">
        <select id="topics-dropdown" className="dropdown-content" onChange={(event) => {setShowFilteredTopic(event.target.value)}}> 
            <option className="topic-option">Filter by topic</option>
            {allTopics.map((topic) => 
                <option value={topic.id} key={topic.id} className="topic-option">{topic.name}</option>
            )}
        </select>
        </div>

    )
}