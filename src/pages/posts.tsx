import { useQuery } from "@tanstack/react-query";
import { fetchPostsList } from "../api/posts.api";
import React from "react";
import { PostCard, PostCardSkeleton } from "../components/post-card";
import { fetchUsersListByIds } from "../api/users.api";

export const PostsPage: React.FC = () => {
  const posts = useQuery({
    queryKey: ["fetching-posts"],
    queryFn: () => fetchPostsList({skip: 0}),
    retry: 0,
  });

  const users = useQuery({
    queryKey: ["fetching-users-by-ids"],
    queryFn: () => fetchUsersListByIds((posts.data?.posts || []).map((el) => Number(el.userId))),
    enabled: posts.isSuccess,
  })



  React.useEffect(() => {
    if (!posts.isSuccess || !posts.data) return;
    console.log(posts.data);
  }, [posts.isSuccess, posts.data]);

  React.useEffect(() => { 
    if (!posts.error || !posts.isError) return;
    throw new Error("something went wrong");
    //passing error message to error boundary
  }, [posts.error, posts.isError]);
  return (
    <main className="min-h-[calc(100vh-60px)] bg-slate-300 w-full mpx-2">
      <section className="mx-auto max-w-130 pt-4">
        {(!posts.data || !users.data) && [1,2,3].map((index) => <PostCardSkeleton key={index} />) }
        {(!!users.data &&  !!posts.data) && posts.data.posts.map((post, index) => 
<PostCard key={index} post={post} user={users.data.filter((user) => user.id === post.userId)[0]} /> )}
        
      </section>
      
    </main>
  );
};

  
 