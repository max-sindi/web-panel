import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { RootState } from "src/setup/store"
import { IUser } from "src/modules/user/user.types"

export const usersAdapter = createEntityAdapter<IUser>()

const userSlice = createSlice({
  name: "usersSlice",
  initialState: usersAdapter.getInitialState(),
  reducers: {
    getAllUsers: () => {},
    getAllUsersSuccess: usersAdapter.setMany,
  },
})

export default userSlice.reducer
export const usersBasicActions = userSlice.actions
export const usersBasicSelectors = usersAdapter.getSelectors<RootState>(
  (state) => state.userReducer,
)
