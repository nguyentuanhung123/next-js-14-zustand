"use client"
import { usePostsStore } from "@/store/Posts";

const PostsCount = () => {
 
    const { posts } = usePostsStore();

    return (
        <div>{posts.length}</div>
    )
}

export default PostsCount