import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import {IUser} from "src/modules/user/user.slice"

interface ILoginSlice {
  user: IUser
}

const getInitialState = (): ILoginSlice => ({
  user: {} as IUser,
})

const loginSlice = createSlice({
  name: "authSlice",
  initialState: getInitialState(),
  reducers: {
    loginUser: (
      state,
      payload: PayloadAction<{ email: string; password: string }>,
    ) => {},
    loginUserSuccess: (
      state,
      { payload: { user } }: PayloadAction<ILoginSlice>,
    ) => {
      state.user = user
    },
    logoutUser: getInitialState,
  },
})

export default loginSlice.reducer
export const loginBasicActions = loginSlice.actions
