import { useQuery } from "@tanstack/react-query";
import { Navigate, useLoaderData, useParams, type LoaderFunctionArgs } from "react-router-dom"
import { fetchPostById } from "../api/posts.api";
import type { AxiosError } from "axios";
import type { IPost } from "../types/post.type";


export const PostById:React.FC = () => {

  const {id} = useParams();
  const loaderData = useLoaderData();
  const isValid = !isNaN(Number(id));

  console.log(loaderData);

  const post = useQuery({
    queryKey: ["fetch-post", id],
    queryFn: () => fetchPostById(Number(id)),
    enabled: isValid
  }  );

  if (!isValid || (post.error as AxiosError)?.status === 404){
    return  <Navigate to={"/404"} />;
    
  }

 return <p>post id: {loaderData.post.id}</p>

}
export const fetchPostByIdLoader =  async (data: LoaderFunctionArgs) => {
  let post : IPost | undefined = undefined;
  try {
    post = await fetchPostById(Number(data.params.id));
  } catch (error) {
    console.log("error", error)
  }
  return { post };
};