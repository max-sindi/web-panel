import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import {IFriend, IFriendId} from "src/modules/friend/friend.slice"
import {Modify} from "src/tools/types"

export interface IUser {
  id: number
  first_name: string
  last_name: string
  email: string
  gender: string
  ip_address: string
  friends: Array<IFriendId>
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
