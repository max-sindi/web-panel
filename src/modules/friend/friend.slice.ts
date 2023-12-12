import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import {RootState} from "src/setup/store"

export interface IFriend {
  id: number
  name: string
}

export type TFriendId = IFriend["id"]

const friendAdapter = createEntityAdapter<IFriend>()

const friendSlice = createSlice({
  name: "friendSlice",
  initialState: friendAdapter.getInitialState(),
  reducers: {
    getAllFriendsSuccess: friendAdapter.setMany,
  },
})

export default friendSlice.reducer
export const friendsBasicActions = friendSlice.actions
export const friendsBasicSelectors = friendAdapter.getSelectors<RootState>(state => state.friendReducer)
