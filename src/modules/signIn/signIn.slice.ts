import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ISignInSlice } from "src/modules/signIn/signIn.types"
import { IUser } from "src/modules/user/user.types"

const getInitialState = (): ISignInSlice => ({
  user: {} as IUser,
  verifyLoading: "idle",
  signInLoading: "idle",
})

const signInSlice = createSlice({
  name: "signInSlice",
  initialState: getInitialState(),
  reducers: {
    verifyUser: (state) => {
      state.verifyLoading = "pending"
    },
    verifyFulfill: (state) => {
      state.verifyLoading = "idle"
    },
    signInUser: (
      state,
      payload: PayloadAction<{ email: string; password: string }>,
    ) => {
      state.signInLoading = "pending"
    },
    signInUserSuccess: (
      state,
      { payload: { user } }: PayloadAction<{ user: IUser }>,
    ) => {
      state.user = user
    },
    logoutUser: getInitialState,
  },
})

export default signInSlice.reducer
export const signInBasicActions = signInSlice.actions
