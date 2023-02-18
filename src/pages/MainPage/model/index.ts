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

export const tableApi = createApi({
  reducerPath: "tableApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://new-backend.unistory.app/api/",
  }),
  endpoints: (build) => ({
    getUsers: build.query<tableApiResponseI, number>({
      query: (limit) => `data?page=1&perPage=${limit}`,
    }),
  }),
});

export const { useGetUsersQuery } = tableApi;
