import { create } from "zustand";

export const usePostsStore = create((set) => ({
    posts: [
        {
            id: 1,
            title: 'Post 1',
            description: "Post 1 description"
        },
        {
            id: 2,
            title: 'Post 2',
            description: "Post 2 description"
        },
        {
            id: 3,
            title: 'Post 3',
            description: "Post 3 description"
        },
    ],
    addPost: (newPost) => {
        set((state) => {
            return { posts: [...state.posts, newPost] }
        })
    },
    editPost: (id, updatePost) => {
        set((state) => {
            const updatedPosts = state.posts.map((post) => {
                if(post.id === id) {
                    /**
                     * Nếu id khớp, trả về bài viết đã được cập nhật
                     * Tạo ra một đối tượng mới bằng cách kết hợp các thuộc tính của post với các thuộc tính từ updatePost.
                     * Toán tử spread (...) được sử dụng để sao chép các thuộc tính từ các đối tượng. 
                     * { ...post, ...updatePost } tạo ra một đối tượng mới có tất cả các thuộc tính của post, 
                     * và nếu có thuộc tính nào trùng lặp với updatePost, thuộc tính từ updatePost sẽ thay thế.
                     */
                    return { ...post, ...updatePost }
                }
                return post;
            })
            return { posts: updatedPosts }
        })
    },
    deletePost: (id) => {
        set((state) => {
            const updatePosts = state.posts.filter((post) => post.id !== id)
            return { posts: updatePosts }
        })
    }
}))