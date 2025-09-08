// import { useEffect, useState } from "react"
// import { getAllPosts } from "../services/AllPostsService"

import { Link } from "react-router-dom";

export const Post = ({ post }) => {

    // const getAndSetPosts = () => {
    //     getAllPosts().then((postsArray) => {
    //     setAllPosts(postsArray);
    //     });
    // };

    // const handleLike = () => {
    //     const likedPost = {
    //         id: post.id,
    //         title: post.title,
    //         body: post.body,
    //         postDate: post.postDate,
    //         userId: post.userId,
    //         likeCount: post.likeCount + 1,
    //         topicId: post.topicId,
    //     }

    //     updateLikeCount(likedPost).then(() => {
    //         console.log("liked post:", likedPost)
    //         getAndSetPosts()
    //     })
        
    // }

  return (
    <div className="card">
      <Link to={`/posts/${post.id}`} key={post.id}>
        <h2 key={post.id}>{post.title}</h2>
      </Link>
      <h3>{post.topic.name}</h3>
      <p>{post.likeCount} likes</p>
      {/* <div className="btn-container">
        {currentUser?.id != post.userId ? (
          <button onClick={handleLike}>Like</button>
        ) : (
          ""
        )}
      </div> */}
    </div>
  );
};
