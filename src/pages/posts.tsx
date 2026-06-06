import { useQuery} from "@tanstack/react-query"
import { fetchPostsList } from "../api/posts.api"
import React from "react"

export const PostsPage:React.FC = () => {
  

   const posts = useQuery({ 
    queryKey: ['fetching-posts'],
     queryFn: fetchPostsList, 
    })

    React.useEffect(() => {
      console.log(posts.data);
    },[posts])
  return (
    <div className="bg-slate-200 ">Posts Page</div>
  )
}