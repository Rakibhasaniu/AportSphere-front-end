/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: '/user/login',
        method: 'POST',
        body: userInfo,
      }),
    }),
  }),
});

export const {useLoginMutation}:{useLoginMutation:any}=authApi;