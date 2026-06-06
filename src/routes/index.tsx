// src/routes/index.tsx
import { createBrowserRouter } from "react-router";

import { PostsPage } from "../pages/posts";
import { PostById } from "../pages/post-info";
import { MainLayout } from "../layouts/main.layout";
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
  
  },
{
  element:<MainLayout />,
  children: [
    {
        path: "posts",
        element: <PostsPage />,
        // errorElement: <ErrorBoundary />,
      },
    
      {
        path: "users",
        element: <div>Users</div>,
        // loader: fetchPostByIdLoader,  
      },
  ]
}

      
   
    
  
]);

// const router2 = createBrowserRouter(
  
//     createbrowser
  
// );

export default router;