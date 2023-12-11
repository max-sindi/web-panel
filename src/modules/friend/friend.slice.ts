import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"

export interface IFriend {
  id: number
  name: string
}

export type IFriendId = IFriend["id"]

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
