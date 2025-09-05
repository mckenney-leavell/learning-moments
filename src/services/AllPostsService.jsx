export const getAllPosts = () => {
    return fetch('http://localhost:8088/posts?_expand=topic').then((res) => res.json())
}

export const getPostById = ( postId ) => {
    return fetch(`http://localhost:8088/posts?id=${postId}&_expand=topic&_expand=user`).then((res) => res.json())
}