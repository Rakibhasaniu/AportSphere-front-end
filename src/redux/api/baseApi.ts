import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const baseApi = createApi({
    reducerPath:'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:5000/api/v1',
        credentials:'include'
    }),
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