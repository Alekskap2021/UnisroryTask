import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface userI {
  id: number;
  username: string;
  email: string;
  address: string;
}

interface metaI {
  currentPage: number;
  perPage: number;
  totalPages: number;
}

export interface tableApiResponseI {
  meta: metaI;
  items: userI[];
}

export const fetchUsersApi = createApi({
  reducerPath: "fetchUsersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://new-backend.unistory.app/api/",
  }),
  endpoints: (build) => ({
    getUsers: build.query<tableApiResponseI, number>({
      query: (page) => `data?page=${page}&perPage=20`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        currentCache.items.push(...newItems.items);
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),

    getUserDetails: build.query<userI, string>({
      query: (userId) => `data/id/${userId}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetUserDetailsQuery } = fetchUsersApi;
