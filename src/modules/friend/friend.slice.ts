import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { RootState } from "src/setup/store"
import { IFriend } from "src/modules/friend/friend.types"

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
export const friendsBasicSelectors = friendAdapter.getSelectors<RootState>(
  (state) => state.friendReducer,
)
