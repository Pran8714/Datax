import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//Create Action
export const createUser= createAsyncThunk(
    "createUser",
    async (data, { rejectWithValue})=>{
        const response= await fetch(
            "https://64e34487bac46e480e787ecb.mockapi.io/idea",
            {
                method: "POST",
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify(data),
            }
        );

        try {
            const result= await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error.response);
        }
    }
);

//Read Action
export const showUser= createAsyncThunk(
    "showUser",
    async (args, { rejectWithValue})=>{
        const response= await fetch(
            "https://64e34487bac46e480e787ecb.mockapi.io/idea"
            
        );

        try {
            const result= await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);


//Delete Action
export const deleteUser= createAsyncThunk(
    "deleteUser",
    async (id, { rejectWithValue})=>{
        const response= await fetch(
            `https://64e34487bac46e480e787ecb.mockapi.io/idea/${id}`,
            {method: "DELETE"}
            
        );

        try {
            const result= await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);


//Update Action
export const updateUser= createAsyncThunk(
    "updateUser",
    async (data, { rejectWithValue})=>{
        const response= await fetch(
            `https://64e34487bac46e480e787ecb.mockapi.io/idea/${data.id}`,
            {
                method: "PUT",
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify(data),
            }
        );

        try {
            const result= await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error.response);
        }
    }
);




export const userDetail = createSlice({
    name: 'userDetail',
    initialState: {
        users: [],
        loading: false,
        error: null,
        searchData: [],

    },

    reducers: { 
        searchUser: (state, action) => {
          console.log(action.payload);
          state.searchData = action.payload;
        }},

    extraReducers: {
        [createUser.pending]: (state) => {
          state.loading = true;
        },
        [createUser.fulfilled]: (state, action) => {
          state.loading = false;
          state.users.push(action.payload);
        },
        [createUser.rejected]: (state, action) => {
          state.loading = false;
          state.error = action.payload.message;
        },
        [showUser.pending]: (state) => {
            state.loading = true;
          },
          [showUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users=action.payload;
          },
          [showUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
          },
          [deleteUser.pending]: (state) => {
            state.loading = true;
          },
          [deleteUser.fulfilled]: (state, action) => {
            state.loading = false;
            const {id}=action.payload;
            if(id){
                state.users= state.users.filter((ele)=> ele.id!== id)//return those ids to state or store which does not match the id sent by users
            }
          },
          [deleteUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
          },
          [updateUser.pending]: (state) => {
            state.loading = true;
          },
          [updateUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = state.users.map((ele) =>
            ele.id === action.payload.id ? action.payload : ele
          );
          },
          [updateUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
          },
    }
   
  });
  

  export default userDetail.reducer;
  export const {searchUser}= userDetail.actions;