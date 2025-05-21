import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseUrl from "../../../Utility/baseURL";

const ordersAPI = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/orders`,
    credentials: 'include'
  }),
  tagTypes: ['Orders'],
  endpoints: (builder) => ({
    createOrder : (builder.mutation)({
      query: (newOrder) =>({
        url: "/",
        method: "POST",
        body: newOrder,
        credentials: 'include'
      }),
    }),
    getOrdersByEmail: (builder.query)({
      query: (email) => ({
        url: `/email/${email}`
      }),
      providesTags: ['order']
    })
  })
})

export const {useCreateOrderMutation, useGetOrdersByEmailQuery} = ordersAPI

export default ordersAPI;
