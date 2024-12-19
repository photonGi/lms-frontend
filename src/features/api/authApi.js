import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedIn, userLoggedOut } from "../authSlice";

const USER_API = "http://localhost:4000/api/v1/user";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: USER_API, credentials: "include" }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/register",
        method: "POST",
        body: userData,
      }),
    }),

    loginUser: builder.mutation({
      query: (userData) => ({
        url: "/login",
        method: "POST",
        body: userData,
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(userLoggedIn({ user: data.user }));
        } catch (error) {
          console.log(error);
        }
      },
    }),

    logoutUser: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "GET",
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          dispatch(userLoggedOut());
        } catch (error) {
          console.log(error);
        }
      },
    }),

    getProfile: builder.query({
      query: () => ({
        url: "/profile",
        method: "GET",
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(userLoggedIn({ user: data.user }));
        } catch (error) {
          console.log(error);
        }
      },
    }),

    updateProfile: builder.mutation({
      query: (formData) => ({
        url: "/profile/update",
        method: "PUT",
        body: formData,
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
} = authApi;
