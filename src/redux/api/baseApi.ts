import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery =  fetchBaseQuery({
    baseUrl:'http://localhost:5000/api/v1',
    credentials:'include',
    prepareHeaders:(headers,{getState})=> {
        const token = (getState() as RootState).auth.token;
        if(token){
            headers.set('Authorization',`${token}`)
        }
        return headers;
    }
})


const baseQueryWithRefreshToken = async(args, api, extraOptions) => {
    const result = await baseQuery(args,api,extraOptions)
}

export const baseApi = createApi({
    reducerPath:'baseApi',
    baseQuery:baseQueryWithRefreshToken,
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