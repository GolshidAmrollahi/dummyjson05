import type { IResDto } from "../types/global.type";
import type { IPost } from "../types/post.type";
import { generateClient } from "./client"
import { urls } from "./urls";

interface IFetchPostsResDto extends IResDto{
  posts: IPost[];
}

type fetchPostsListType = () => Promise<IFetchPostsResDto>; 

export const fetchPostsList:fetchPostsListType = async () =>  {
  const client = generateClient();
  const response = await client.get<IFetchPostsResDto>(urls.posts.list);
  return response.data;
}