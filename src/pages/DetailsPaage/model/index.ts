import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface userI {
  id: number;
  username: string;
  email: string;
  address: string;
}

export const userApi = createApi({
  reducerPath: "userDetailsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://new-backend.unistory.app/api/",
  }),
  endpoints: (build) => ({
    getUserDetails: build.query<userI, string>({
      query: (userId) => `data/id/${userId}`,
    }),
  }),
});

export const { useGetUserDetailsQuery } = userApi;
