// src/routes/index.tsx
import { createBrowserRouter } from "react-router";

import { PostsPage } from "../pages/posts";

import { MainLayout } from "../layouts/main.layout";
import { fetchPostByIdLoader, PostById } from "../pages/post-by-id";
import { NotFound } from "../components/not-found";
import { ErrorBoundary } from "../components/errorBoundary";

// import Home from "../pages/Home";
// import About from "../pages/About";
// import UserProfile from "../pages/UserProfile";
// import NotFound from "../pages/NotFound";

// Define type for route params
export type UserParams = {
  userId: string;
};

// Create router with proper typing
const router = createBrowserRouter([
  {
    path: "/",
    element: (
       <h1 className="text-3xl font-bold underline">Landing Page</h1>
    ),
    errorElement: <ErrorBoundary />,
    
  
  },
{
  element:<MainLayout />,
  hydrateFallbackElement: <div>Loading...</div>, // Add this
  children: [
    {
        path: "posts",
        element: <PostsPage />,
        errorElement: <ErrorBoundary />,
      }, 
         {
        path: "post-info/:id",
        element: <PostById />,
        errorElement: <ErrorBoundary />,
        loader: fetchPostByIdLoader,
      },
    
      {
        path: "users",
        element: <div>Users</div>,
        // loader: fetchPostByIdLoader,  
      },
{
  path: "/404",
  element: <NotFound />,
},
  ]
},

// {
//   path:"*",
//   element: (
//     <NotFound />
//   )
// }

      
   
    
  
]);

// const router2 = createBrowserRouter(
  
//     createbrowser
  
// );

export default router;