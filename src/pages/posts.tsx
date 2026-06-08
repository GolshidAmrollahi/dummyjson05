import { useQuery } from "@tanstack/react-query";
import { fetchPostsList } from "../api/posts.api";
import React from "react";

export const PostsPage: React.FC = () => {
  const posts = useQuery({
    queryKey: ["fetching-posts"],
    queryFn: fetchPostsList,
    retry: 0,
  });

  React.useEffect(() => {
    console.log(posts.data);
  }, [posts]);

  React.useEffect(() => {
    if (!posts.error || !posts.isError) return;
    throw new Error("AAA");
  }, [posts.error, posts.isError]);
  return <div className="bg-slate-200 ">Posts Page</div>;
};
