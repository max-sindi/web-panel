import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { IFriend, TFriendId } from "src/modules/friend/friend.slice"
import { Modify } from "src/tools/types"
import { RootState } from "src/setup/store"

export interface IUser {
  id: number
  role: "admin" | "super_user" | "user"
  first_name: string
  last_name: string
  email: string
  gender: string
  ip_address: string
  friends: Array<TFriendId>
}

export interface IApiUser extends Modify<IUser, { friends: Array<IFriend> }> {}

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
