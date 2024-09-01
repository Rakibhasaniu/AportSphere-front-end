/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "../../api/baseApi";

const salesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSales: builder.query({
      query: () => ({
        url: '/sales',
        method: 'GET',
      }),
      
    }),
  }),

});

export const {useGetSalesQuery}:{useGetSalesQuery:any}=salesApi;