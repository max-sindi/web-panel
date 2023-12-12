import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IUser } from "src/modules/user/user.slice"
import { TLoadingState } from "src/tools/types"

interface ILoginSlice {
  user: IUser
  verifyLoading: TLoadingState
  loginLoading: TLoadingState
}

const getInitialState = (): ILoginSlice => ({
  user: {} as IUser,
  verifyLoading: "idle",
  loginLoading: "idle",
})

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: getInitialState(),
  reducers: {
    verifyUser: (state) => {
      state.verifyLoading = "pending"
    },
    verifyFulfill: (state) => {
      state.verifyLoading = "idle"
    },
    loginUser: (
      state,
      payload: PayloadAction<{ email: string; password: string }>,
    ) => {
      state.loginLoading = "pending"
    },
    loginUserSuccess: (
      state,
      { payload: { user } }: PayloadAction<{ user: IUser }>,
    ) => {
      state.user = user
    },
    logoutUser: getInitialState,
  },
})

export default loginSlice.reducer
export const loginBasicActions = loginSlice.actions
