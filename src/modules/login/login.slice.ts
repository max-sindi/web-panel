import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ILoginSlice } from "src/modules/login/login.types"
import { IUser } from "src/modules/user/user.types"

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
