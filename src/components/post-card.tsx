import { GrView } from "react-icons/gr";
import type { IPost } from "../types/post.type";
import type { IUser } from "../types/user.type";
import { BiDislike, BiLike, } from "react-icons/bi";



interface IPostCardProps {
   post: IPost;
  user: IUser;
}
export const PostCard: React.FC<IPostCardProps>= ({
  post,
  user
}) => {
  return (
    <div className="shadow-md bg-white rounded-sm w-full px-3 pt-4 pb-3  my-2  border-amber-300 border text-justify text-slate-700 text-sm font-semibold">
      <div className="flex px-2" >
        <img src={user.image} alt={user.username} className="w-12"/>
        <div className="px-2 overflow-hidden space-y-1 ">
          <p className=" font-bold text-slate-800 capitalize truncate">{user.username}</p>
          <p className="indent-2 font-semibold text-slate-500 text-sm italic  truncate  ">{user.email}</p>
        </div>
      </div>
      <div className="py-2 text-lg  px-2">
        <p className="capitalize text-gray-500  ">{post.title }</p>
        <p className="text-sm leading-4 text-gray-700">{post.body}</p>
      </div>
      {/* <div className="flex justify-items-start space-x-3 py-1 pl-2   ">
        {post.tags.map((tag, index) => <span key={index}   style={{backgroundColor:stringToColor(tag).backgroundColor , color:stringToColor(tag).textColor}} className="px-1 rounded-lg text-sm " >{tag}</span>)}
       
      </div> */}
       <div className="flex justify-items-start space-x-3 py-1 px-1 justify-between flex-wrap ">
        <div className="flex  space-x-3">
          {post.tags.map((tag, index) => <span key={index}    className="px-1.5 rounded-lg text-md bg-gray-400 text-gray-700" >{tag}</span>)}
          
        </div>
         <div className="flex  space-x-3 pt-1 pl-2 text-gray-500 font-bold">
         <span className="flex ">
          <GrView  className="size-5 "/>
          <span className="pl-1">{post.views}</span>
        </span>
        <span className="flex">
          <BiLike className="size-5 "/>
          <span className="pl-1">{post.reactions.likes}</span>
        </span>
        <span className="flex">
          <BiDislike  className="size-5 "/>
          <span className="pl-1">{post.reactions.dislikes}</span>
        </span>
       
      </div>
       
      </div>
     
    </div>
  ); 
};

export const PostCardSkeleton: React.FC= () => {
  return (
  <div className="shadow-md bg-white rounded-sm w-full px-3 pt-4 pb-3  my-2 animate-pulse">
      <div className="flex px-2   " >
        <div className="w-10 h-10 bg-slate-300 rounded-sm"></div>
        <div className="px-2 space-y-2 ">
          <div className=" w-50 h-5 bg-slate-300 rounded-sm"></div>
          <div className=" h-4 w-30 bg-slate-300 rounded-sm" ></div>
        </div>
      </div>
      
        <div className="w-70 h-5  bg-slate-300  rounded-sm  mt-3 "></div>
         <div className="my-2 space-y-1">
         <div className="w-120 h-4 bg-slate-300 rounded-sm"></div>
        <div className="w-120 h-4 bg-slate-300 rounded-sm"></div>
        <div className="w-40 h-4 bg-slate-300 rounded-sm"></div>
      </div>
       
    
     
     
       <div className="flex justify-items-start space-x-3 py-1 px-1 justify-between flex-wrap ">
        <div className="flex  space-x-3">
          {[111111,222].map(( index) => <span key={index}    className="px-2  rounded-lg  bg-slate-300 text-slate-300" >{index}</span>)}
          
        </div>
         <div className="flex  space-x-3 pt-1 pl-2 text-gray-500 font-bold">
         {[111,222,333].map(( index) => <span key={index}    className="px-2  rounded-lg  bg-slate-300 text-slate-300" >{index}</span>)}
       
      </div>
       
      </div>
     
    </div>
  ); 
};
