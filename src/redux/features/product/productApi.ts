/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (payload) => ({
        url: '/product',
        method: 'POST',
        body:payload
      }),
    }),
    getAllProduct: builder.query({
        query:() => ({
            url:'/product',
            method:'GET'
        })
    })
    
  }),
});

export const { useGetAllProductQuery,useCreateProductMutation }:{useCreateProductMutation:any,useGetAllProductQuery:any}=productApi;