export const urls = {
  posts: {
    list: "/posts",
    byId: (id:number) => `/posts/${id}`,
  },
  users: {
    byId: (id:number) => `/users/${id}`,
  },
};