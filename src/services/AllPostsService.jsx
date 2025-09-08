export const getAllPosts = () => {
    return fetch('http://localhost:8088/posts?_expand=topic').then((res) => res.json())
}

export const getPostById = ( postId ) => {
    return fetch(`http://localhost:8088/posts?id=${postId}&_expand=topic&_expand=user`).then((res) => res.json())
}

export const updateLikeCount = ( post ) => {
    return fetch(`http://localhost:8088/posts/${post.id}?_expand=user&_expand=topic`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(post)
    })
}

export const saveNewPost = (post) => {
    return fetch(`http://localhost:8088/posts/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(post)
    })
}