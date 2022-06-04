import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62961892810c00c1cb6f111a.mockapi.io/contacts/',
  }),
  tagTypes: ['Key'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `contacts/`,
      providesTags: ['Key'],
    }),

    addContacts: builder.mutation({
      query: newContact => ({
        url: 'contacts/',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Key'],
    }),
    deleteContacts: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Key'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactsMutation,
  useDeleteContactsMutation,
} = contactsApi;

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuap.com/',
  }),
  tagTypes: ['Key'],
  endpoints: builder => ({
    getUser: builder.query({
      query: () => `contacts/`,
      providesTags: ['Key'],
    }),

    addUser: builder.mutation({
      query: newContact => ({
        url: 'contacts/',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Key'],
    }),
  }),
});

export const { useGetUserQuery, useAddUserMutation } = userApi;
