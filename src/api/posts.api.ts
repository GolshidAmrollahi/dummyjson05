import type { IResDto } from "../types/global.type";
import type { IPost } from "../types/post.type";
import { listsLimit, type IPagination } from "../utils/config";
import { generateClient } from "./client"
import { urls } from "./urls";

interface IFetchPostsResDto extends IResDto{
  posts: IPost[];
}


type fetchPostsListType = (_:IPagination) => Promise<IFetchPostsResDto>; 

export const fetchPostsList:fetchPostsListType = async (params) =>  {
  const client = generateClient();
  const response = await client.get<IFetchPostsResDto>(urls.posts.list, 
    {params:{limit: params?.limit || listsLimit, skip:params?.skip || "0"}});
  return response.data;
}

type fetchPostByIdType = (_:number) => Promise<IPost>;

export const fetchPostById: fetchPostByIdType = async (id:number) => {
  const client = generateClient();
  const response = await client.get<IPost>(urls.posts.byId(id));
  return response.data;
}