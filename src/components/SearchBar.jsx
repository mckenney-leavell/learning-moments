// import { useEffect } from "react"

export const SearchBar = ( {setSearchInput, getSearchInput} ) => {
    // if input is updated (text is added)
        // update state
    // when button is clicked
        // show posts that contain state value
    
    return (
        <div className="search-bar">
        <input 
        className="post-search"
        type="text"
        placeholder="Search posts"
        value= {getSearchInput}
        onChange={(event) => {
            setSearchInput(event.target.value)
        }}
        />
        </div>
    )
}