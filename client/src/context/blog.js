import { createContext, useContext, useState } from "react";


export const BlogContext = createContext()

export const BlogContextProvider = ({ children }) => {

    const [blog, setBlog] = useState(null)
    return (
        <BlogContext.Provider value={{ blog, setBlog }}>
            {children}
        </BlogContext.Provider>
    )

}

export default function useBlog() {
    return useContext(BlogContext)
}