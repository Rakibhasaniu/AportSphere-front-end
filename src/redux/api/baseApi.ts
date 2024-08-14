import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery =  fetchBaseQuery({
    baseUrl:'http://localhost:5000/api/v1',
    credentials:'include'
})

export const baseApi = createApi({
    reducerPath:'baseApi',
    baseQuery:baseQuery,
    endpoints:() => ({
        // loginUser:builder.mutation({
        //     query:(userInfo)=> ({
        //         url:'/user/login',
        //         method:'POST',
        //         body:userInfo

        //     })
        // })
    })
})

// export const { useLoginMutation } = baseApi as {
//     useLoginMutation: () => [any, { error: FetchBaseQueryError, isLoading: boolean }];
// };