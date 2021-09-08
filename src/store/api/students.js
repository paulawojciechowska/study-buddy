import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const studentsApi = createApi({
  reducerPath: 'studentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  tagTypes: ['Students'],
  endpoints: (builder) => ({
    getStudentsByGroup: builder.query({
      query: (id) => `groups/${id}`,
      providesTags: ['students'],
    }),
    getStudentById: builder.query({
      query: (id) => `students/${id}`,
      providesTags: ['students'],
    }),
    // removeNote: builder.mutation({
    //   query: (body) => ({
    //     url: 'notes',
    //     method: 'DELETE',
    //     body,
    //   }),
    //   invalidatesTags: ['Notes'],
    // }),
  }),
});

export const { useGetStudentsByGroupQuery, useGetStudentByIdQuery } = studentsApi;
