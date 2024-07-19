import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => {
        return {
          url: "/posts",
          method: "GET",
        };
      },
    }),
    getPostById: builder.query({
      query: (id) => {
        console.log("id here ", id);
        return {
          url: `/posts/${id}`,
          method: "GET",
        };
      },
    }),
    getLimintData: builder.query({
      query: (num) => {
        console.log("num here ", num);
        return {
          url: `/posts?_limit=${num}`,
          method: "GET",
        };
      },
    }),
    deletePost: builder.mutation({
      query: (id) => {
        console.log("delete post here ", id);
        return {
          url: `/posts/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetLimintDataQuery,
  useDeletePostMutation,
} = postApi;
