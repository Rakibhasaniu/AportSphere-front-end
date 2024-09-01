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
            method:'GET',
            params:{searchTerm:'hdd'}
        })
    }),
    deleteProduct:builder.mutation({
      query:(id:string)=>({
        url:`/product/${id}`,
        method:'DELETE',
        // body:id
      }),
      // invalidatesTags: [product],
    })
    
  }),
});

export const { useGetAllProductQuery,useCreateProductMutation, useDeleteProductMutation }:{useCreateProductMutation:any,useGetAllProductQuery:any,useDeleteProductMutation:any}=productApi;